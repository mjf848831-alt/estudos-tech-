import * as React from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { curriculum, Subject } from "@/src/data/curriculum";
import { generateStudyGuide } from "@/src/services/gemini";
import ReactMarkdown from "react-markdown";
import { Sparkles, Loader2, BrainCircuit, CheckCircle2, XCircle } from "lucide-react";
import { GoogleGenAI } from "@google/genai";

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
      <div className="lg:col-span-1 space-y-4">
        <h3 className="text-lg font-semibold flex items-center gap-2">
          <BrainCircuit className="w-5 h-5" />
          Selecione para Treinar
        </h3>
        <ScrollArea className="h-[500px] pr-4">
          <div className="space-y-2">
            {curriculum.map((subject) => (
              <Button
                key={subject.id}
                variant={selectedSubject?.id === subject.id ? "default" : "outline"}
                className="w-full justify-start text-left h-auto py-3 px-4"
                onClick={() => setSelectedSubject(subject)}
              >
                <div className="truncate">{subject.title}</div>
              </Button>
            ))}
          </div>
        </ScrollArea>
        <Button 
          className="w-full gap-2" 
          disabled={!selectedSubject || loading}
          onClick={generateQuiz}
        >
          {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Sparkles className="w-4 h-4" />}
          Gerar Exercícios com IA
        </Button>
      </div>

      <div className="lg:col-span-2">
        <Card className="h-full flex flex-col">
          <CardHeader>
            <CardTitle>Área de Treinamento</CardTitle>
            <CardDescription>
              {selectedSubject ? `Praticando: ${selectedSubject.title}` : "Selecione uma matéria ao lado para começar."}
            </CardDescription>
          </CardHeader>
          <CardContent className="flex-grow overflow-hidden">
            <ScrollArea className="h-full pr-4">
              {quiz ? (
                <div className="space-y-8 pb-8">
                  {quiz.map((q, qIdx) => (
                    <div key={qIdx} className="space-y-4">
                      <h4 className="font-medium text-lg">{qIdx + 1}. {q.question}</h4>
                      <div className="grid grid-cols-1 gap-2">
                        {q.options.map((opt, oIdx) => {
                          const isSelected = userAnswers[qIdx] === oIdx;
                          const isCorrect = q.correctAnswer === oIdx;
                          let variant: "outline" | "default" | "secondary" = "outline";
                          
                          if (showResults) {
                            if (isCorrect) variant = "default";
                            else if (isSelected) variant = "secondary";
                          } else if (isSelected) {
                            variant = "default";
                          }

                          return (
                            <Button
                              key={oIdx}
                              variant={variant}
                              className={`justify-start text-left h-auto py-3 px-4 whitespace-normal ${
                                showResults && isCorrect ? "bg-green-600 hover:bg-green-600 text-white" : ""
                              } ${
                                showResults && isSelected && !isCorrect ? "bg-red-600 hover:bg-red-600 text-white" : ""
                              }`}
                              onClick={() => handleAnswer(qIdx, oIdx)}
                            >
                              <span className="mr-2 font-bold">{String.fromCharCode(65 + oIdx)}.</span>
                              {opt}
                            </Button>
                          );
                        })}
                      </div>
                      {showResults && (
                        <div className={`p-4 rounded-lg text-sm ${userAnswers[qIdx] === q.correctAnswer ? "bg-green-500/10 text-green-500" : "bg-red-500/10 text-red-500"}`}>
                          <div className="flex items-center gap-2 font-bold mb-1">
                            {userAnswers[qIdx] === q.correctAnswer ? <CheckCircle2 className="w-4 h-4" /> : <XCircle className="w-4 h-4" />}
                            {userAnswers[qIdx] === q.correctAnswer ? "Correto!" : "Incorreto"}
                          </div>
                          {q.explanation}
                        </div>
                      )}
                    </div>
                  ))}
                  
                  {!showResults ? (
                    <Button 
                      className="w-full" 
                      onClick={() => setShowResults(true)}
                      disabled={Object.keys(userAnswers).length < quiz.length}
                    >
                      Finalizar e Ver Resultados
                    </Button>
                  ) : (
                    <div className="text-center space-y-4 p-6 bg-muted rounded-xl">
                      <h3 className="text-2xl font-bold">Resultado Final</h3>
                      <div className="text-4xl font-black text-primary">
                        {calculateScore()} / {quiz.length}
                      </div>
                      <p className="text-muted-foreground">
                        {calculateScore() === quiz.length ? "Excelente! Você dominou este assunto." : "Bom trabalho! Continue revisando para melhorar ainda mais."}
                      </p>
                      <Button variant="outline" onClick={generateQuiz}>Tentar Novamente</Button>
                    </div>
                  )}
                </div>
              ) : (
                <div className="h-full flex flex-col items-center justify-center text-center py-12 opacity-30">
                  <BrainCircuit className="w-16 h-16 mb-4" />
                  <p>Aguardando geração de exercícios...</p>
                </div>
              )}
            </ScrollArea>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
