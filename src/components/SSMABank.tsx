import * as React from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { 
  HeartPulse, 
  ShieldAlert, 
  Leaf, 
  BarChart3, 
  Search, 
  Database, 
  Stethoscope, 
  Armchair, 
  Brain, 
  HardHat, 
  ShieldCheck, 
  Users, 
  ArrowUp, 
  Recycle, 
  Globe2, 
  FileSignature, 
  PieChart, 
  MessageSquare, 
  Cpu,
  Sparkles,
  Loader2,
  ListChecks,
  Megaphone
} from "lucide-react";
import { GoogleGenAI } from "@google/genai";
import ReactMarkdown from "react-markdown";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || "" });

interface SSMAEntry {
  id: number;
  category: "Saúde" | "Segurança" | "Meio Ambiente" | "Gestão";
  title: string;
  summary: string;
  details: string;
  icon: React.ReactNode;
  tags: string[];
}

const dbSSMA: SSMAEntry[] = [
  {
    id: 1,
    category: "Saúde",
    title: "PCMSO (NR-7)",
    summary: "Programa de Controle Médico de Saúde Ocupacional.",
    details: "O PCMSO tem o objetivo de promover e preservar a saúde do conjunto dos seus trabalhadores. Ele exige exames médicos admissionais, periódicos, de retorno ao trabalho, de mudança de riscos ocupacionais e demissionais. Ele deve estar articulado com o PGR (Programa de Gerenciamento de Riscos).",
    icon: <Stethoscope className="w-5 h-5" />,
    tags: ["NR-7", "Exames", "Prevenção", "Medicina do Trabalho"]
  },
  {
    id: 2,
    category: "Saúde",
    title: "Ergonomia (NR-17)",
    summary: "Adaptação das condições de trabalho às características dos trabalhadores.",
    details: "A ergonomia visa estabelecer parâmetros para que o trabalho proporcione o máximo de conforto, segurança e desempenho eficiente. Inclui levantamento, transporte e descarga de materiais, mobiliário dos postos de trabalho, equipamentos e condições ambientais (ruído, temperatura, iluminação).",
    icon: <Armchair className="w-5 h-5" />,
    tags: ["NR-17", "Postura", "Conforto", "AEP", "AET"]
  },
  {
    id: 3,
    category: "Saúde",
    title: "Saúde Mental no Trabalho",
    summary: "Prevenção de riscos psicossociais, Burnout e estresse.",
    details: "Além dos riscos físicos, químicos e biológicos, os riscos psicossociais ganharam extrema importância. Envolvem carga horária, cobrança excessiva e assédio moral. A Síndrome de Burnout (esgotamento profissional) agora é reconhecida como doença ocupacional pela OMS.",
    icon: <Brain className="w-5 h-5" />,
    tags: ["Psicologia", "Burnout", "Estresse", "Bem-estar"]
  },
  {
    id: 4,
    category: "Segurança",
    title: "EPI (NR-6)",
    summary: "Equipamentos de Proteção Individual.",
    details: "Considera-se EPI todo dispositivo ou produto, de uso individual utilizado pelo trabalhador, destinado à proteção de riscos suscetíveis de ameaçar a segurança e a saúde no trabalho. A empresa é obrigada a fornecer gratuitamente o EPI adequado, em perfeito estado, exigindo seu uso.",
    icon: <HardHat className="w-5 h-5" />,
    tags: ["NR-6", "Botinas", "Capacetes", "Luvas"]
  },
  {
    id: 5,
    category: "Segurança",
    title: "PGR (NR-1)",
    summary: "Programa de Gerenciamento de Riscos.",
    details: "Substituiu o antigo PPRA. É um material vivo e dinâmico que estrutura a gestão de riscos (físicos, químicos, biológicos, ergonômicos e de acidentes) na empresa. É composto pelo Inventário de Riscos e pelo Plano de Ação.",
    icon: <ShieldCheck className="w-5 h-5" />,
    tags: ["NR-1", "Prevenção", "Gestão de Riscos", "Matriz de Risco"]
  },
  {
    id: 6,
    category: "Segurança",
    title: "CIPA (NR-5)",
    summary: "Comissão Interna de Prevenção de Acidentes e Assédio.",
    details: "Tem o objetivo de prevenir acidentes e doenças decorrentes do trabalho, de modo a tornar compatível permanentemente o trabalho com a preservação da vida. Recentemente, passou a englobar também a prevenção e combate ao assédio sexual e moral.",
    icon: <Users className="w-5 h-5" />,
    tags: ["NR-5", "CIPATR", "Membros", "Prevenção", "Assédio"]
  },
  {
    id: 7,
    category: "Segurança",
    title: "Trabalho em Altura (NR-35)",
    summary: "Requisitos para atividades executadas acima de 2,0m.",
    details: "Estabelece os requisitos mínimos e as medidas de proteção para o trabalho em altura, envolvendo o planejamento, a organização e a execução, de forma a garantir a segurança dos trabalhadores. Exige treinamento específico, Atestado de Saúde Ocupacional (ASO) apto para altura e Análise de Risco (AR).",
    icon: <ArrowUp className="w-5 h-5" />,
    tags: ["NR-35", "Cinto de Segurança", "Linha de Vida", "Queda"]
  },
  {
    id: 8,
    category: "Meio Ambiente",
    title: "PGRS",
    summary: "Plano de Gerenciamento de Resíduos Sólidos.",
    details: "Documento técnico que identifica a tipologia e a quantidade de geração de cada tipo de resíduo (Classes I, IIA, IIB) e indica as formas ambientalmente corretas para o manejo, acondicionamento, transporte, tratamento e disposição final.",
    icon: <Recycle className="w-5 h-5" />,
    tags: ["Resíduos", "Lixo", "Coleta Seletiva", "CONAMA"]
  },
  {
    id: 9,
    category: "Meio Ambiente",
    title: "ISO 14001",
    summary: "Sistema de Gestão Ambiental (SGA).",
    details: "Norma internacional que define os requisitos para implementar um Sistema de Gestão Ambiental efetivo. Ajuda as organizações a melhorar seu desempenho ambiental pelo uso eficiente dos recursos e pela redução do desperdício, ganhando vantagem competitiva e a confiança das partes interessadas.",
    icon: <Globe2 className="w-5 h-5" />,
    tags: ["ISO", "Certificação", "Sustentabilidade", "Auditoria"]
  },
  {
    id: 10,
    category: "Meio Ambiente",
    title: "Licenciamento Ambiental",
    summary: "Procedimento para autorizar instalação e operação de atividades.",
    details: "Exigência legal para atividades utilizadoras de recursos ambientais ou potencialmente poluidoras. Divide-se em três etapas básicas: Licença Prévia (LP), Licença de Instalação (LI) e Licença de Operação (LO).",
    icon: <FileSignature className="w-5 h-5" />,
    tags: ["IBAMA", "Órgão Ambiental", "Legislação", "Impacto"]
  },
  {
    id: 11,
    category: "Gestão",
    title: "Indicadores Reativos e Proativos",
    summary: "Métricas para avaliar o desempenho de SSMA.",
    details: "Indicadores Reativos (Lagging): Taxa de Frequência de Acidentes, Taxa de Gravidade, Número de multas ambientais. Indicadores Proativos (Leading): % de treinamentos realizados, Quase-acidentes relatados, inspeções realizadas, DDS executados.",
    icon: <PieChart className="w-5 h-5" />,
    tags: ["KPIs", "Estatística", "Taxa de Frequência"]
  },
  {
    id: 12,
    category: "Gestão",
    title: "DDS",
    summary: "Diálogo Diário de Segurança.",
    details: "Pequenas reuniões (5 a 15 minutos) realizadas diariamente com a equipe antes do início das atividades. O objetivo é despertar a conscientização e a prevenção de riscos nas tarefas daquele dia, englobando também temas de saúde e meio ambiente.",
    icon: <MessageSquare className="w-5 h-5" />,
    tags: ["Rotina", "Liderança", "Conscientização"]
  },
  {
    id: 13,
    category: "Gestão",
    title: "Indústria 4.0 e SSMA",
    summary: "Introdução à Quarta Revolução Industrial aplicada à Saúde, Segurança e Meio Ambiente.",
    details: "A Indústria 4.0 integra tecnologias físicas e digitais, como a Internet das Coisas (IoT), Inteligência Artificial (IA), Big Data e Robótica Avançada. No contexto de SSMA, isso permite o monitoramento em tempo real da exposição a riscos, predição de acidentes com análise de dados e gestão ambiental inteligente.",
    icon: <Cpu className="w-5 h-5" />,
    tags: ["Inovação", "IoT", "Tecnologia", "Big Data", "Automação"]
  }
];

export const SSMABank: React.FC = () => {
  const [currentCategory, setCurrentCategory] = React.useState<string>("Todos");
  const [searchTerm, setSearchTerm] = React.useState<string>("");
  const [selectedEntry, setSelectedEntry] = React.useState<SSMAEntry | null>(null);
  const [aiContent, setAiContent] = React.useState<string | null>(null);
  const [aiLoading, setAiLoading] = React.useState(false);

  const filteredData = dbSSMA.filter(item => {
    const matchCategory = currentCategory === "Todos" || item.category === currentCategory;
    const matchSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                        item.summary.toLowerCase().includes(searchTerm.toLowerCase()) ||
                        item.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchCategory && matchSearch;
  });

  const categories = [
    { name: "Todos", icon: <Database className="w-4 h-4" />, color: "text-slate-400" },
    { name: "Saúde", icon: <HeartPulse className="w-4 h-4" />, color: "text-blue-400" },
    { name: "Segurança", icon: <ShieldAlert className="w-4 h-4" />, color: "text-orange-400" },
    { name: "Meio Ambiente", icon: <Leaf className="w-4 h-4" />, color: "text-green-400" },
    { name: "Gestão", icon: <BarChart3 className="w-4 h-4" />, color: "text-purple-400" },
  ];

  const generateAI = async (type: 'checklist' | 'dds') => {
    if (!selectedEntry) return;
    setAiLoading(true);
    setAiContent(null);

    try {
      const prompt = type === 'checklist' 
        ? `Crie um checklist de inspeção de campo simples, em formato bullet points, com 5 itens de verificação cruciais (não óbvios) para o tema "${selectedEntry.title}". O foco é prevenir riscos sérios.`
        : `Escreva um roteiro inspirador e direto para um Diálogo Diário de Segurança (DDS) abordando o tema: "${selectedEntry.title}". O roteiro deve levar menos de 2 minutos para ser lido.`;

      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: prompt,
      });

      setAiContent(response.text || "Não foi possível gerar o conteúdo.");
    } catch (error) {
      console.error("AI Error:", error);
      setAiContent("Erro ao gerar conteúdo com IA.");
    } finally {
      setAiLoading(false);
    }
  };

  return (
    <div className="flex flex-col md:flex-row h-full gap-6">
      {/* Sidebar */}
      <aside className="w-full md:w-64 flex flex-col gap-4">
        <div className="bg-card border rounded-xl p-4 space-y-2">
          <h3 className="text-sm font-semibold text-muted-foreground px-2 mb-4 uppercase tracking-wider">Categorias</h3>
          {categories.map((cat) => (
            <Button
              key={cat.name}
              variant={currentCategory === cat.name ? "secondary" : "ghost"}
              className={`w-full justify-start gap-3 ${currentCategory === cat.name ? 'bg-secondary' : ''}`}
              onClick={() => setCurrentCategory(cat.name)}
            >
              <span className={cat.color}>{cat.icon}</span>
              {cat.name}
            </Button>
          ))}
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col gap-6 min-w-0">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h2 className="text-2xl font-bold">{currentCategory === "Todos" ? "Banco de Conhecimento SSMA" : currentCategory}</h2>
            <p className="text-sm text-muted-foreground">Consulte diretrizes, normas e conceitos fundamentais.</p>
          </div>
          <div className="relative w-full md:w-72">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input 
              placeholder="Buscar termo ou norma..." 
              className="pl-9"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        <ScrollArea className="flex-1">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 pb-6">
            {filteredData.map((item) => (
              <Card 
                key={item.id} 
                className="cursor-pointer hover:shadow-md transition-all border-l-4 border-l-primary/50"
                onClick={() => {
                  setSelectedEntry(item);
                  setAiContent(null);
                }}
              >
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 rounded-lg bg-primary/10 text-primary">
                      {item.icon}
                    </div>
                    <Badge variant="outline" className="text-[10px] uppercase font-bold">
                      {item.category}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
                    {item.summary}
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {item.tags.slice(0, 3).map(tag => (
                      <Badge key={tag} variant="secondary" className="text-[10px]">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {filteredData.length === 0 && (
            <div className="flex flex-col items-center justify-center py-20 text-muted-foreground">
              <Database className="w-12 h-12 mb-4 opacity-20" />
              <p>Nenhum registro encontrado para sua busca.</p>
            </div>
          )}
        </ScrollArea>
      </div>

      {/* Detail Panel (Modal-like but sidebar/overlay) */}
      {selectedEntry && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm">
          <Card className="w-full max-w-2xl max-h-[90vh] flex flex-col shadow-2xl">
            <CardHeader className="border-b flex flex-row items-center justify-between space-y-0">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-primary/10 text-primary">
                  {selectedEntry.icon}
                </div>
                <div>
                  <CardTitle className="text-2xl">{selectedEntry.title}</CardTitle>
                  <CardDescription>{selectedEntry.category}</CardDescription>
                </div>
              </div>
              <Button variant="ghost" size="icon" onClick={() => setSelectedEntry(null)}>
                <span className="text-2xl">&times;</span>
              </Button>
            </CardHeader>
            <ScrollArea className="flex-1 p-6">
              <div className="space-y-6">
                <section>
                  <h4 className="text-sm font-semibold text-muted-foreground uppercase mb-2">Resumo</h4>
                  <p className="text-lg italic text-muted-foreground border-l-4 pl-4 py-1">
                    {selectedEntry.summary}
                  </p>
                </section>

                <section>
                  <h4 className="text-sm font-semibold text-muted-foreground uppercase mb-2">Descrição Detalhada</h4>
                  <p className="leading-relaxed">
                    {selectedEntry.details}
                  </p>
                </section>

                <section>
                  <h4 className="text-sm font-semibold text-muted-foreground uppercase mb-2">Tags & Diretrizes</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedEntry.tags.map(tag => (
                      <Badge key={tag} variant="secondary">{tag}</Badge>
                    ))}
                  </div>
                </section>

                {/* AI Section */}
                <section className="pt-6 border-t">
                  <div className="bg-primary/5 rounded-2xl p-6 border border-primary/10">
                    <div className="flex items-center gap-2 mb-4">
                      <Sparkles className="w-5 h-5 text-primary" />
                      <h4 className="font-bold text-lg">Assistente IA de SSMA</h4>
                    </div>
                    <p className="text-sm text-muted-foreground mb-6">
                      Gere materiais práticos e dinâmicos específicos sobre <strong>{selectedEntry.title}</strong>.
                    </p>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                      <Button 
                        onClick={() => generateAI('checklist')}
                        disabled={aiLoading}
                        className="gap-2"
                      >
                        <ListChecks className="w-4 h-4" />
                        Gerar Checklist
                      </Button>
                      <Button 
                        onClick={() => generateAI('dds')}
                        disabled={aiLoading}
                        variant="outline"
                        className="gap-2"
                      >
                        <Megaphone className="w-4 h-4" />
                        Criar Roteiro DDS
                      </Button>
                    </div>

                    {aiLoading && (
                      <div className="flex items-center justify-center py-8 gap-3 text-primary">
                        <Loader2 className="w-6 h-6 animate-spin" />
                        <span className="font-medium">IA processando...</span>
                      </div>
                    )}

                    {aiContent && !aiLoading && (
                      <div className="bg-background rounded-xl p-5 border shadow-inner prose prose-sm dark:prose-invert max-w-none">
                        <ReactMarkdown>{aiContent}</ReactMarkdown>
                      </div>
                    )}
                  </div>
                </section>
              </div>
            </ScrollArea>
            <div className="p-4 border-t bg-muted/30 flex justify-end">
              <Button onClick={() => setSelectedEntry(null)}>Fechar</Button>
            </div>
          </Card>
        </div>
      )}
    </div>
  );
};
