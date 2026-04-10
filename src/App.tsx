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
import { Button } from "@/components/ui/button";
import { GraduationCap, LayoutDashboard, BookOpen, BrainCircuit, Rocket, ChevronRight, Database, Code2, ShieldCheck, Cpu, Menu, X, User, Settings as SettingsIcon, LogOut, Search, Bell } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function App() {
  const [selectedSubject, setSelectedSubject] = React.useState<Subject | null>(null);
  const [activeTab, setActiveTab] = React.useState("overview");
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(true);

  // Force dark mode on mount
  React.useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  const navGroups = [
    {
      label: "Principal",
      items: [
        { id: "overview", label: "Visão Geral", icon: LayoutDashboard },
      ]
    },
    {
      label: "Trilha de Aprendizado",
      items: [
        { id: "fundamentals", label: "Fundamentos TI", icon: Cpu },
        { id: "logic", label: "Lógica de Dados", icon: Code2 },
        { id: "governance", label: "Gestão & Gov", icon: ShieldCheck },
        { id: "ssma", label: "Banco SSMA", icon: Database },
      ]
    },
    {
      label: "Prática & Ferramentas",
      items: [
        { id: "training", label: "Treinar com IA", icon: BrainCircuit },
        { id: "launch", label: "Guia de Lançamento", icon: Rocket },
      ]
    },
    {
      label: "Acadêmico",
      items: [
        { id: "curriculum", label: "Grade Curricular", icon: BookOpen },
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-foreground flex flex-col lg:flex-row dark selection:bg-primary/30">
      {/* Sidebar - Desktop: Fixed, Mobile: Drawer */}
      <aside 
        className={`${
          isSidebarOpen ? "translate-x-0 w-72" : "-translate-x-full lg:translate-x-0 lg:w-20"
        } fixed lg:sticky top-0 left-0 h-screen transition-all duration-300 border-r border-white/5 bg-[#0f0f0f] flex flex-col z-50`}
      >
        <div className="p-6 flex items-center justify-between">
          <div className={`flex items-center gap-3 overflow-hidden transition-opacity duration-300 ${isSidebarOpen ? "opacity-100" : "lg:opacity-0 lg:w-0"}`}>
            <div className="bg-primary text-primary-foreground p-2 rounded-xl shadow-lg shadow-primary/20">
              <GraduationCap className="w-6 h-6" />
            </div>
            <span className="font-bold text-xl tracking-tight whitespace-nowrap">EduTech</span>
          </div>
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="hover:bg-white/5 hidden lg:flex"
          >
            {isSidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => setIsSidebarOpen(false)}
            className="hover:bg-white/5 lg:hidden"
          >
            <X className="w-5 h-5" />
          </Button>
        </div>

        <div className="flex-grow overflow-y-auto px-4 py-4 space-y-8 custom-scrollbar">
          {navGroups.map((group, idx) => (
            <div key={idx} className="space-y-2">
              {isSidebarOpen && (
                <h3 className="px-4 text-[10px] font-bold uppercase tracking-widest text-muted-foreground/50">
                  {group.label}
                </h3>
              )}
              <div className="space-y-1">
                {group.items.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setActiveTab(item.id)}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group relative ${
                      activeTab === item.id 
                        ? "bg-primary/10 text-primary font-medium" 
                        : "text-muted-foreground hover:bg-white/5 hover:text-foreground"
                    }`}
                  >
                    <item.icon className={`w-5 h-5 shrink-0 ${activeTab === item.id ? "text-primary" : "group-hover:scale-110 transition-transform"}`} />
                    {isSidebarOpen && <span className="text-sm">{item.label}</span>}
                    {activeTab === item.id && (
                      <motion.div 
                        layoutId="active-pill"
                        className="absolute left-0 w-1 h-6 bg-primary rounded-r-full"
                      />
                    )}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="p-4 border-t border-white/5 space-y-4">
          <div className={`flex items-center gap-3 p-2 rounded-xl bg-white/5 border border-white/5 ${isSidebarOpen ? "" : "justify-center"}`}>
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-blue-600 flex items-center justify-center text-white font-bold shadow-lg">
              MJ
            </div>
            {isSidebarOpen && (
              <div className="overflow-hidden">
                <p className="text-sm font-bold truncate">MJ Fernandes</p>
                <p className="text-[10px] text-muted-foreground truncate">mjf848831@gmail.com</p>
              </div>
            )}
          </div>
          {isSidebarOpen && (
            <div className="flex gap-2">
              <Button variant="ghost" size="icon" className="flex-1 hover:bg-white/5"><SettingsIcon className="w-4 h-4" /></Button>
              <Button variant="ghost" size="icon" className="flex-1 hover:bg-white/5 text-red-500/70 hover:text-red-500"><LogOut className="w-4 h-4" /></Button>
            </div>
          )}
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-grow flex flex-col h-screen overflow-hidden pb-20 lg:pb-0">
        {/* Top Header */}
        <header className="h-20 border-b border-white/5 bg-[#0a0a0a]/80 backdrop-blur-xl flex items-center justify-between px-4 lg:px-8 sticky top-0 z-40">
          <div className="flex items-center gap-3 lg:hidden">
            <Button variant="ghost" size="icon" onClick={() => setIsSidebarOpen(true)}>
              <Menu className="w-6 h-6" />
            </Button>
            <div className="bg-primary text-primary-foreground p-1.5 rounded-lg">
              <GraduationCap className="w-5 h-5" />
            </div>
          </div>
          <div className="flex items-center gap-4 flex-grow max-w-xl mx-4">
            <div className="relative w-full group">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground group-focus-within:text-primary transition-colors" />
              <input 
                type="text" 
                placeholder="Pesquisar..." 
                className="w-full bg-white/5 border border-white/10 rounded-xl py-2 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/40 transition-all"
              />
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-500/10 border border-green-500/20">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-[10px] font-bold text-green-500 uppercase tracking-wider">Online</span>
            </div>
            <Button variant="outline" size="icon" className="rounded-xl border-white/10 hover:bg-white/5 lg:px-4 lg:w-auto">
              <Bell className="w-4 h-4 lg:mr-2" />
              <span className="hidden lg:inline">Notificações</span>
            </Button>
          </div>
        </header>

        <ScrollArea className="flex-grow">
          <div className="p-4 lg:p-8 max-w-7xl mx-auto space-y-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="outline-none"
              >
                {activeTab === "overview" && (
                  <div className="space-y-8">
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                      <div>
                        <h2 className="text-4xl font-black tracking-tight">Painel de Controle</h2>
                        <p className="text-muted-foreground mt-1">Bem-vindo de volta! Aqui está um resumo do seu aprendizado.</p>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" className="rounded-xl border-white/10">Relatório Semanal</Button>
                        <Button className="rounded-xl shadow-lg shadow-primary/20">Continuar Estudos</Button>
                      </div>
                    </div>
                    
                    <Dashboard />
                    
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                      <div className="lg:col-span-1 space-y-4">
                        <div className="flex items-center justify-between">
                          <h3 className="text-lg font-bold flex items-center gap-2">
                            <BookOpen className="w-5 h-5 text-primary" />
                            Suas Matérias
                          </h3>
                          <span className="text-xs text-muted-foreground">{curriculum.length} módulos</span>
                        </div>
                        <ScrollArea className="h-[500px] pr-4">
                          <div className="grid grid-cols-1 gap-3">
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
                      
                      <div className="lg:col-span-2">
                        <StudyPanel subject={selectedSubject} />
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === "fundamentals" && <ITFundamentals />}
                {activeTab === "training" && <TrainingTool />}
                {activeTab === "ssma" && <SSMABank />}
                {activeTab === "logic" && <LogicLesson />}
                {activeTab === "governance" && <AgileGovernance />}
                {activeTab === "launch" && <LaunchGuide />}
                
                {activeTab === "curriculum" && (
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <h2 className="text-3xl font-bold">Grade Curricular</h2>
                        <p className="text-muted-foreground">Estrutura completa do curso de Tecnologia da Informação.</p>
                      </div>
                      <Button variant="outline" className="rounded-xl border-white/10">Exportar PDF</Button>
                    </div>
                    <Card className="overflow-hidden border-white/5 bg-[#0f0f0f]">
                      <div className="overflow-x-auto">
                        <table className="w-full text-sm text-left">
                          <thead className="text-xs text-muted-foreground uppercase bg-white/5">
                            <tr>
                              <th className="px-6 py-5">Unidade Curricular</th>
                              <th className="px-6 py-5">Tópicos de Estudo</th>
                              <th className="px-6 py-5 text-center">Total</th>
                              <th className="px-6 py-5 text-center">Presencial</th>
                              <th className="px-6 py-5 text-center">Online</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-white/5">
                            {curriculum.map((s) => (
                              <tr key={s.id} className="hover:bg-white/[0.02] transition-colors group">
                                <td className="px-6 py-5 font-bold align-top min-w-[200px] group-hover:text-primary transition-colors">{s.title}</td>
                                <td className="px-6 py-5 max-w-md">
                                  <ul className="space-y-1.5">
                                    {s.topics?.map((topic, idx) => (
                                      <li key={idx} className="flex items-start gap-2 text-muted-foreground text-xs">
                                        <ChevronRight className="w-3 h-3 mt-0.5 text-primary/50 flex-shrink-0" />
                                        <span>{topic}</span>
                                      </li>
                                    ))}
                                  </ul>
                                </td>
                                <td className="px-6 py-5 align-top text-center font-mono text-xs">{s.totalHours}h</td>
                                <td className="px-6 py-5 align-top text-center font-mono text-xs text-muted-foreground">{s.presencialHours}h</td>
                                <td className="px-6 py-5 align-top text-center font-mono text-xs text-muted-foreground">{s.googleClassroomHours}h</td>
                              </tr>
                            ))}
                          </tbody>
                          <tfoot className="bg-white/5 font-bold">
                            <tr>
                              <td className="px-6 py-5">Total Geral do Curso</td>
                              <td className="px-6 py-5"></td>
                              <td className="px-6 py-5 text-center font-mono text-primary">1200h</td>
                              <td className="px-6 py-5 text-center font-mono">960h</td>
                              <td className="px-6 py-5 text-center font-mono">240h</td>
                            </tr>
                          </tfoot>
                        </table>
                      </div>
                    </Card>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </ScrollArea>

        {/* Mobile Bottom Navigation */}
        <nav className="lg:hidden fixed bottom-0 left-0 w-full bg-[#0f0f0f]/90 backdrop-blur-xl border-t border-white/5 px-6 py-3 flex items-center justify-between z-50">
          {[
            { id: "overview", label: "Início", icon: LayoutDashboard },
            { id: "fundamentals", label: "Fundos", icon: Cpu },
            { id: "training", label: "Treino", icon: BrainCircuit },
            { id: "logic", label: "Lógica", icon: Code2 },
            { id: "more", label: "Mais", icon: Menu },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => {
                if (item.id === "more") setIsSidebarOpen(true);
                else setActiveTab(item.id);
              }}
              className={`flex flex-col items-center gap-1 transition-colors ${
                activeTab === item.id && item.id !== "more" ? "text-primary" : "text-muted-foreground"
              }`}
            >
              <item.icon className="w-6 h-6" />
              <span className="text-[10px] font-medium">{item.label}</span>
              {activeTab === item.id && item.id !== "more" && (
                <motion.div layoutId="mobile-active" className="w-1 h-1 rounded-full bg-primary mt-0.5" />
              )}
            </button>
          ))}
        </nav>
      </main>
    </div>
  );
}
