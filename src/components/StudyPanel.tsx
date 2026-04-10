import * as React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Subject } from "@/src/data/curriculum";
import { generateStudyGuide } from "@/src/services/gemini";
import ReactMarkdown from "react-markdown";
import { Sparkles, Loader2, BookOpen } from "lucide-react";

interface StudyPanelProps {
  subject: Subject | null;
}

export const StudyPanel: React.FC<StudyPanelProps> = ({ subject }) => {
  const [guide, setGuide] = React.useState<string | null>(null);
  const [loading, setLoading] = React.useState(false);

  const handleGenerate = async () => {
    if (!subject) return;
    setLoading(true);
    const result = await generateStudyGuide(subject.title);
    setGuide(result);
    setLoading(false);
  };

  if (!subject) {
    return (
      <div className="h-full flex flex-col items-center justify-center text-center p-8 border-2 border-dashed rounded-xl bg-muted/30">
        <BookOpen className="w-12 h-12 text-muted-foreground mb-4 opacity-20" />
        <h3 className="text-xl font-semibold text-muted-foreground">Selecione uma matéria</h3>
        <p className="text-sm text-muted-foreground max-w-xs mt-2">
          Escolha uma unidade curricular ao lado para ver detalhes e gerar um guia de estudos com IA.
        </p>
      </div>
    );
  }

  return (
    <div className="h-full flex flex-col gap-4">
      <Card className="flex-shrink-0">
        <CardHeader>
          <div className="flex justify-between items-center">
            <div>
              <CardTitle className="text-2xl">{subject.title}</CardTitle>
              <p className="text-muted-foreground mt-1">{subject.description}</p>
            </div>
            <Button 
              onClick={handleGenerate} 
              disabled={loading}
              className="gap-2"
            >
              {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Sparkles className="w-4 h-4" />}
              Gerar Guia com IA
            </Button>
          </div>
        </CardHeader>
      </Card>

      <Card className="flex-grow overflow-hidden flex flex-col">
        <CardContent className="p-0 flex-grow overflow-hidden">
          <ScrollArea className="h-full p-6">
            {guide ? (
              <div className="prose prose-sm dark:prose-invert max-w-none">
                <ReactMarkdown>{guide}</ReactMarkdown>
              </div>
            ) : (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <Sparkles className="w-10 h-10 text-primary mb-4 opacity-20" />
                <p className="text-muted-foreground">
                  Clique no botão acima para gerar um roteiro de estudos personalizado para esta matéria.
                </p>
              </div>
            )}
          </ScrollArea>
        </CardContent>
      </Card>
    </div>
  );
};
