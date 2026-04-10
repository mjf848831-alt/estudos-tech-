import * as React from "react";
import { curriculum, Subject } from "@/src/data/curriculum";
import { SubjectCard } from "@/src/components/SubjectCard";
import { StudyPanel } from "@/src/components/StudyPanel";
import { Dashboard } from "@/src/components/Dashboard";
import { TrainingTool } from "@/src/components/TrainingTool";
import { LaunchGuide } from "@/src/components/LaunchGuide";
import { SSMABank } from "@/src/components/SSMABank";
import { LogicLesson } from "@/src/components/LogicLesson";
import { AgileGovernance } from "@/src/components/AgileGovernance";
import { ITFundamentals } from "@/src/components/ITFundamentals";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";
import { GraduationCap, LayoutDashboard, BookOpen, BrainCircuit, Rocket, ChevronRight, Database, Code2, ShieldCheck, Cpu } from "lucide-react";
import { motion } from "motion/react";

export default function App() {
  const [selectedSubject, setSelectedSubject] = React.useState<Subject | null>(null);

  // Force dark mode on mount
  React.useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col dark">
      {/* Header */}
      <header className="border-b bg-card/50 backdrop-blur-md sticky top-0 z-50">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="bg-primary text-primary-foreground p-1.5 rounded-lg">
              <GraduationCap className="w-6 h-6" />
            </div>
            <h1 className="text-xl font-bold tracking-tight">EduTech <span className="text-muted-foreground font-normal">| Portal</span></h1>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <a href="#" className="text-sm font-medium hover:text-primary transition-colors">Início</a>
            <a href="#" className="text-sm font-medium hover:text-primary transition-colors">Minha Grade</a>
            <a href="#" className="text-sm font-medium hover:text-primary transition-colors">Certificados</a>
            <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center border border-border">
              <span className="text-xs font-bold">MJ</span>
            </div>
          </nav>
        </div>
      </header>

      <main className="flex-grow container mx-auto px-4 py-8">
        <Tabs defaultValue="overview" className="space-y-8">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div>
              <h2 className="text-3xl font-bold tracking-tight">Bem-vindo, MJ!</h2>
              <p className="text-muted-foreground">Acompanhe seu progresso e estude com auxílio de IA.</p>
            </div>
            <TabsList className="grid w-full lg:w-auto grid-cols-2 md:grid-cols-4 lg:grid-cols-8 h-auto p-1 bg-muted/50">
              <TabsTrigger value="overview" className="gap-2 py-2">
                <LayoutDashboard className="w-4 h-4" />
                Visão Geral
              </TabsTrigger>
              <TabsTrigger value="fundamentals" className="gap-2 py-2">
                <Cpu className="w-4 h-4" />
                Fundamentos
              </TabsTrigger>
              <TabsTrigger value="training" className="gap-2 py-2">
                <BrainCircuit className="w-4 h-4" />
                Treinar
              </TabsTrigger>
              <TabsTrigger value="ssma" className="gap-2 py-2">
                <Database className="w-4 h-4" />
                Banco SSMA
              </TabsTrigger>
              <TabsTrigger value="logic" className="gap-2 py-2">
                <Code2 className="w-4 h-4" />
                Lógica
              </TabsTrigger>
              <TabsTrigger value="governance" className="gap-2 py-2">
                <ShieldCheck className="w-4 h-4" />
                Gestão
              </TabsTrigger>
              <TabsTrigger value="launch" className="gap-2 py-2">
                <Rocket className="w-4 h-4" />
                Lançar Site
              </TabsTrigger>
              <TabsTrigger value="curriculum" className="gap-2 py-2">
                <BookOpen className="w-4 h-4" />
                Grade
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="overview" className="space-y-8 outline-none">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <Dashboard />
              
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-1 space-y-4">
                  <h3 className="text-lg font-semibold flex items-center gap-2">
                    <BookOpen className="w-5 h-5" />
                    Suas Matérias
                  </h3>
                  <ScrollArea className="h-[600px] pr-4">
                    <div className="grid grid-cols-1 gap-4">
                      {curriculum.map((subject) => (
                        <SubjectCard 
                          key={subject.id} 
                          subject={subject} 
                          onClick={setSelectedSubject}
                          isActive={selectedSubject?.id === subject.id}
                        />
                      ))}
                    </div>
                  </ScrollArea>
                </div>
                
                <div className="lg:col-span-2 h-[600px]">
                  <StudyPanel subject={selectedSubject} />
                </div>
              </div>
            </motion.div>
          </TabsContent>

          <TabsContent value="fundamentals" className="h-[700px] outline-none">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="h-full"
            >
              <ITFundamentals />
            </motion.div>
          </TabsContent>

          <TabsContent value="training" className="h-[700px] outline-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              className="h-full"
            >
              <TrainingTool />
            </motion.div>
          </TabsContent>

          <TabsContent value="ssma" className="h-[700px] outline-none">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="h-full"
            >
              <SSMABank />
            </motion.div>
          </TabsContent>

          <TabsContent value="logic" className="h-[700px] outline-none">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="h-full"
            >
              <LogicLesson />
            </motion.div>
          </TabsContent>

          <TabsContent value="governance" className="h-[700px] outline-none">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="h-full"
            >
              <AgileGovernance />
            </motion.div>
          </TabsContent>

          <TabsContent value="launch" className="h-[700px] outline-none">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="h-full"
            >
              <LaunchGuide />
            </motion.div>
          </TabsContent>

          <TabsContent value="curriculum" className="outline-none">
            <Card className="overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-sm text-left">
                  <thead className="text-xs text-muted-foreground uppercase bg-muted/50">
                    <tr>
                      <th className="px-6 py-4 rounded-tl-lg">Unidade Curricular</th>
                      <th className="px-6 py-4">Tópicos de Estudo</th>
                      <th className="px-6 py-4">Carga Total</th>
                      <th className="px-6 py-4">Presencial</th>
                      <th className="px-6 py-4 rounded-tr-lg">Online</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {curriculum.map((s) => (
                      <tr key={s.id} className="hover:bg-muted/30 transition-colors">
                        <td className="px-6 py-4 font-bold align-top min-w-[200px]">{s.title}</td>
                        <td className="px-6 py-4 py-4 max-w-md">
                          <ul className="space-y-1">
                            {s.topics?.map((topic, idx) => (
                              <li key={idx} className="flex items-start gap-2 text-muted-foreground">
                                <ChevronRight className="w-3 h-3 mt-1 text-primary flex-shrink-0" />
                                <span>{topic}</span>
                              </li>
                            ))}
                          </ul>
                        </td>
                        <td className="px-6 py-4 align-top whitespace-nowrap font-mono">{s.totalHours}h</td>
                        <td className="px-6 py-4 align-top whitespace-nowrap font-mono">{s.presencialHours}h</td>
                        <td className="px-6 py-4 align-top whitespace-nowrap font-mono">{s.googleClassroomHours}h</td>
                      </tr>
                    ))}
                  </tbody>
                  <tfoot className="bg-muted/20 font-bold">
                    <tr>
                      <td className="px-6 py-4">Total Geral</td>
                      <td className="px-6 py-4"></td>
                      <td className="px-6 py-4 font-mono">1200h</td>
                      <td className="px-6 py-4 font-mono">960h</td>
                      <td className="px-6 py-4 font-mono">240h</td>
                    </tr>
                  </tfoot>
                </table>
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </main>

      <footer className="border-t py-8 bg-card/30">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>© 2026 EduTech Portal de Estudos. Desenvolvido para excelência em TI.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-primary transition-colors">Privacidade</a>
            <a href="#" className="hover:text-primary transition-colors">Termos</a>
            <a href="#" className="hover:text-primary transition-colors">Suporte</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
