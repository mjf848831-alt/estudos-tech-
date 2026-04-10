import * as React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Subject } from "@/src/data/curriculum";
import { generateStudyGuide } from "@/src/services/gemini";
import ReactMarkdown from "react-markdown";
import { Sparkles, Loader2, BookOpen, Brain, Target, Lightbulb } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface StudyPanelProps {
  subject: Subject | null;
}

export const StudyPanel: React.FC<StudyPanelProps> = ({ subject }) => {
  const [guide, setGuide] = React.useState<string | null>(null);
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    setGuide(null);
  }, [subject]);

  const handleGenerate = async () => {
    if (!subject) return;
    setLoading(true);
    try {
      const result = await generateStudyGuide(subject.title);
      setGuide(result);
    } catch (error) {
      console.error("Error generating guide:", error);
    } finally {
      setLoading(false);
    }
  };

  if (!subject) {
    return (
      <div className="h-full flex flex-col items-center justify-center text-center p-12 border border-white/5 rounded-3xl bg-white/[0.02] backdrop-blur-sm">
        <div className="w-20 h-20 bg-white/5 rounded-full flex items-center justify-center mb-6">
          <BookOpen className="w-10 h-10 text-muted-foreground/30" />
        </div>
        <h3 className="text-2xl font-bold tracking-tight">Selecione uma matéria</h3>
        <p className="text-sm text-muted-foreground max-w-xs mt-3 leading-relaxed">
          Escolha uma unidade curricular ao lado para ver detalhes e gerar um guia de estudos inteligente.
        </p>
      </div>
    );
  }

  return (
    <div className="h-full flex flex-col gap-6">
      <Card className="border-white/5 bg-[#0f0f0f] overflow-hidden">
        <div className="absolute top-0 right-0 p-8 opacity-5">
          <Brain size={120} />
        </div>
        <CardHeader className="relative z-10">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-1">
              <CardTitle className="text-3xl font-black tracking-tight">{subject.title}</CardTitle>
              <p className="text-muted-foreground text-sm max-w-xl">{subject.description}</p>
            </div>
            <Button 
              onClick={handleGenerate} 
              disabled={loading}
              className="rounded-xl gap-2 shadow-lg shadow-primary/20 h-12 px-6 shrink-0"
            >
              {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : <Sparkles className="w-5 h-5" />}
              Gerar Guia com IA
            </Button>
          </div>
        </CardHeader>
      </Card>

      <Card className="flex-grow overflow-hidden flex flex-col border-white/5 bg-[#0f0f0f]">
        <CardContent className="p-0 flex-grow overflow-hidden relative">
          <ScrollArea className="h-full">
            <div className="p-8">
              <AnimatePresence mode="wait">
                {guide ? (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="prose prose-sm dark:prose-invert max-w-none prose-headings:font-bold prose-headings:tracking-tight prose-p:leading-relaxed prose-li:my-1"
                  >
                    <ReactMarkdown>{guide}</ReactMarkdown>
                  </motion.div>
                ) : (
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="h-[400px] flex flex-col items-center justify-center text-center space-y-6"
                  >
                    <div className="flex gap-4">
                      <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary animate-bounce">
                        <Target className="w-6 h-6" />
                      </div>
                      <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-500 animate-bounce [animation-delay:0.2s]">
                        <Lightbulb className="w-6 h-6" />
                      </div>
                      <div className="w-12 h-12 rounded-2xl bg-purple-500/10 flex items-center justify-center text-purple-500 animate-bounce [animation-delay:0.4s]">
                        <Brain className="w-6 h-6" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <p className="text-lg font-bold">Pronto para começar?</p>
                      <p className="text-muted-foreground text-sm max-w-xs mx-auto">
                        Nossa IA está pronta para criar um roteiro de estudos focado nos objetivos desta matéria.
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </ScrollArea>
          {!guide && !loading && (
            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#0f0f0f] to-transparent pointer-events-none" />
          )}
        </CardContent>
      </Card>
    </div>
  );
};
