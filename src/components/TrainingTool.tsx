import * as React from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { curriculum, Subject } from "@/src/data/curriculum";
import { Sparkles, Loader2, BrainCircuit, CheckCircle2, XCircle, Trophy, Target, HelpCircle } from "lucide-react";
import { GoogleGenAI } from "@google/genai";
import { motion, AnimatePresence } from "motion/react";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || "" });

interface QuizQuestion {
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export const TrainingTool: React.FC = () => {
  const [selectedSubject, setSelectedSubject] = React.useState<Subject | null>(null);
  const [quiz, setQuiz] = React.useState<QuizQuestion[] | null>(null);
  const [loading, setLoading] = React.useState(false);
  const [userAnswers, setUserAnswers] = React.useState<Record<number, number>>({});
  const [showResults, setShowResults] = React.useState(false);

  const generateQuiz = async () => {
    if (!selectedSubject) return;
    setLoading(true);
    setQuiz(null);
    setUserAnswers({});
    setShowResults(false);

    try {
      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: `Crie um quiz de 5 perguntas de múltipla escolha sobre a unidade curricular: "${selectedSubject.title}". 
        Retorne APENAS um JSON válido seguindo este formato:
        [
          {
            "question": "texto da pergunta",
            "options": ["opção 0", "opção 1", "opção 2", "opção 3"],
            "correctAnswer": 0,
            "explanation": "explicação breve"
          }
        ]`,
        config: {
          responseMimeType: "application/json",
        }
      });

      const data = JSON.parse(response.text || "[]");
      setQuiz(data);
    } catch (error) {
      console.error("Error generating quiz:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleAnswer = (questionIndex: number, optionIndex: number) => {
    if (showResults) return;
    setUserAnswers(prev => ({ ...prev, [questionIndex]: optionIndex }));
  };

  const calculateScore = () => {
    if (!quiz) return 0;
    return quiz.reduce((acc, q, idx) => acc + (userAnswers[idx] === q.correctAnswer ? 1 : 0), 0);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 h-full">
      <div className="lg:col-span-1 space-y-6">
        <div className="space-y-2">
          <h3 className="text-xl font-bold flex items-center gap-2">
            <Target className="w-5 h-5 text-primary" />
            Configurar Treino
          </h3>
          <p className="text-muted-foreground text-xs">Escolha um módulo para testar seus conhecimentos.</p>
        </div>
        
        <ScrollArea className="h-[450px] pr-4 border border-white/5 rounded-2xl bg-white/[0.02] p-2">
          <div className="space-y-1">
            {curriculum.map((subject) => (
              <button
                key={subject.id}
                onClick={() => setSelectedSubject(subject)}
                className={`w-full flex items-center justify-between px-4 py-3 rounded-xl transition-all text-left text-sm ${
                  selectedSubject?.id === subject.id 
                    ? "bg-primary text-primary-foreground font-bold shadow-lg shadow-primary/20" 
                    : "text-muted-foreground hover:bg-white/5 hover:text-foreground"
                }`}
              >
                <span className="truncate">{subject.title}</span>
                {selectedSubject?.id === subject.id && <CheckCircle2 className="w-4 h-4 shrink-0" />}
              </button>
            ))}
          </div>
        </ScrollArea>
        
        <Button 
          className="w-full h-14 rounded-2xl gap-2 shadow-lg shadow-primary/20 text-lg font-bold" 
          disabled={!selectedSubject || loading}
          onClick={generateQuiz}
        >
          {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : <Sparkles className="w-5 h-5" />}
          Gerar Simulado IA
        </Button>
      </div>

      <div className="lg:col-span-2">
        <Card className="h-full flex flex-col border-white/5 bg-[#0f0f0f] relative overflow-hidden">
          {!quiz && !loading && (
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8 opacity-20 pointer-events-none">
              <BrainCircuit size={120} className="mb-6" />
              <h3 className="text-2xl font-bold">Pronto para o desafio?</h3>
              <p className="max-w-xs">Selecione uma matéria e clique em gerar para começar o seu simulado personalizado.</p>
            </div>
          )}

          <CardHeader className="border-b border-white/5 bg-white/[0.02]">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <CardTitle className="text-xl font-bold">Simulado Interativo</CardTitle>
                <CardDescription className="text-xs">
                  {selectedSubject ? `Módulo: ${selectedSubject.title}` : "Aguardando seleção..."}
                </CardDescription>
              </div>
              {quiz && (
                <div className="px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-[10px] font-bold text-primary uppercase tracking-widest">
                  {Object.keys(userAnswers).length} / {quiz.length} Respondidas
                </div>
              )}
            </div>
          </CardHeader>

          <CardContent className="flex-grow overflow-hidden p-0">
            <ScrollArea className="h-full">
              <div className="p-8">
                <AnimatePresence mode="wait">
                  {loading ? (
                    <motion.div 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="h-[400px] flex flex-col items-center justify-center text-center space-y-4"
                    >
                      <Loader2 className="w-12 h-12 text-primary animate-spin" />
                      <div className="space-y-1">
                        <p className="font-bold">IA Gerando Perguntas...</p>
                        <p className="text-xs text-muted-foreground">Isso pode levar alguns segundos.</p>
                      </div>
                    </motion.div>
                  ) : quiz ? (
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="space-y-10 pb-10"
                    >
                      {quiz.map((q, qIdx) => (
                        <div key={qIdx} className="space-y-6">
                          <div className="flex gap-4">
                            <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center shrink-0 font-bold text-sm">
                              {qIdx + 1}
                            </div>
                            <h4 className="font-bold text-lg leading-tight">{q.question}</h4>
                          </div>
                          <div className="grid grid-cols-1 gap-3 pl-12">
                            {q.options.map((opt, oIdx) => {
                              const isSelected = userAnswers[qIdx] === oIdx;
                              const isCorrect = q.correctAnswer === oIdx;
                              
                              let btnClass = "border-white/5 bg-white/[0.02] hover:bg-white/5 text-muted-foreground";
                              
                              if (showResults) {
                                if (isCorrect) btnClass = "bg-green-500/20 border-green-500/40 text-green-500 font-bold";
                                else if (isSelected) btnClass = "bg-red-500/20 border-red-500/40 text-red-500 font-bold";
                              } else if (isSelected) {
                                btnClass = "bg-primary/20 border-primary/40 text-primary font-bold";
                              }

                              return (
                                <button
                                  key={oIdx}
                                  disabled={showResults}
                                  onClick={() => handleAnswer(qIdx, oIdx)}
                                  className={`w-full flex items-center gap-4 px-6 py-4 rounded-2xl border transition-all text-left text-sm group ${btnClass}`}
                                >
                                  <div className={`w-6 h-6 rounded-full border flex items-center justify-center shrink-0 text-[10px] font-bold transition-colors ${
                                    isSelected ? "bg-current text-background border-transparent" : "border-current/20 group-hover:border-current/40"
                                  }`}>
                                    {String.fromCharCode(65 + oIdx)}
                                  </div>
                                  <span className="flex-grow">{opt}</span>
                                  {showResults && isCorrect && <CheckCircle2 className="w-4 h-4 shrink-0" />}
                                  {showResults && isSelected && !isCorrect && <XCircle className="w-4 h-4 shrink-0" />}
                                </button>
                              );
                            })}
                          </div>
                          {showResults && (
                            <motion.div 
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              className={`ml-12 p-5 rounded-2xl border ${
                                userAnswers[qIdx] === q.correctAnswer 
                                  ? "bg-green-500/5 border-green-500/10 text-green-500/80" 
                                  : "bg-red-500/5 border-red-500/10 text-red-500/80"
                              }`}
                            >
                              <div className="flex items-center gap-2 font-bold text-xs uppercase tracking-widest mb-2">
                                <HelpCircle className="w-4 h-4" />
                                Explicação
                              </div>
                              <p className="text-sm leading-relaxed">{q.explanation}</p>
                            </motion.div>
                          )}
                        </div>
                      ))}
                      
                      {!showResults ? (
                        <div className="pl-12">
                          <Button 
                            className="w-full h-14 rounded-2xl text-lg font-bold shadow-xl shadow-primary/20" 
                            onClick={() => setShowResults(true)}
                            disabled={Object.keys(userAnswers).length < quiz.length}
                          >
                            Finalizar Simulado
                          </Button>
                        </div>
                      ) : (
                        <motion.div 
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          className="pl-12 text-center space-y-6 p-10 bg-white/5 border border-white/10 rounded-3xl relative overflow-hidden"
                        >
                          <div className="absolute top-0 right-0 p-4 opacity-10">
                            <Trophy size={100} />
                          </div>
                          <div className="space-y-2 relative z-10">
                            <h3 className="text-2xl font-black">Simulado Concluído!</h3>
                            <p className="text-muted-foreground text-sm">Confira seu desempenho abaixo.</p>
                          </div>
                          <div className="relative inline-flex items-center justify-center p-8 z-10">
                            <div className="text-6xl font-black text-primary drop-shadow-[0_0_15px_rgba(var(--primary),0.5)]">
                              {calculateScore()} / {quiz.length}
                            </div>
                          </div>
                          <div className="space-y-4 relative z-10">
                            <p className="text-sm text-muted-foreground max-w-xs mx-auto">
                              {calculateScore() === quiz.length 
                                ? "Incrível! Você acertou todas as questões. Seu conhecimento neste módulo é sólido." 
                                : "Ótimo esforço! Revise as explicações acima para consolidar o que aprendeu."}
                            </p>
                            <div className="flex gap-3 justify-center">
                              <Button variant="outline" className="rounded-xl border-white/10" onClick={generateQuiz}>Refazer Simulado</Button>
                              <Button className="rounded-xl" onClick={() => setSelectedSubject(null)}>Outra Matéria</Button>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </div>
            </ScrollArea>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
