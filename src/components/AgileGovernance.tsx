import * as React from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { 
  Zap, 
  Shield, 
  Handshake, 
  Presentation, 
  RefreshCw, 
  Kanban, 
  Settings, 
  Bell, 
  Check, 
  ArrowDown, 
  GraduationCap,
  Laptop
} from "lucide-react";
import { motion } from "motion/react";

export const AgileGovernance: React.FC = () => {
  return (
    <div className="h-full flex flex-col gap-6">
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-indigo-600 to-blue-600 p-8 text-white shadow-xl">
        <div className="relative z-10 max-w-2xl space-y-4">
          <h2 className="text-4xl font-extrabold tracking-tight">
            A Jornada: Gestão Ágil & Governança de TI
          </h2>
          <p className="text-lg text-blue-100 font-light">
            Como inovar e entregar valor rapidamente sem perder o controle, a segurança e o alinhamento com o negócio.
          </p>
          <Button variant="secondary" className="rounded-full font-bold gap-2" onClick={() => {
            document.getElementById('intro-section')?.scrollIntoView({ behavior: 'smooth' });
          }}>
            Começar a Aula <ArrowDown className="w-4 h-4" />
          </Button>
        </div>
        <div className="absolute right-0 bottom-0 opacity-10 transform translate-x-1/4 translate-y-1/4">
          <GraduationCap size={300} />
        </div>
      </div>

      <ScrollArea className="flex-grow pr-4">
        <div className="space-y-12 pb-12">
          {/* Introdução */}
          <section id="intro-section" className="scroll-mt-6">
            <Card className="border-l-4 border-l-indigo-500 bg-indigo-500/5">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-indigo-500">
                  <Presentation className="w-6 h-6" />
                  Boas-vindas do seu Instrutor
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Olá! Historicamente, a TI era vista de duas formas extremas: ou muito burocrática e lenta (excesso de governança tradicional) ou caótica e sem documentação (falsa agilidade).
                </p>
                <p>
                  O desafio do profissional e líder de TI moderno é criar a <strong>Governança Ágil</strong>. Isso significa estabelecer "guardrails" (barreiras de proteção) que permitam aos times correrem rápido e inovarem, mas em uma direção segura e alinhada aos objetivos da empresa.
                </p>
              </CardContent>
            </Card>
          </section>

          {/* Módulo 1: Gestão Ágil */}
          <section className="space-y-6">
            <div className="text-center space-y-2">
              <h3 className="text-3xl font-bold flex items-center justify-center gap-3">
                <Zap className="w-8 h-8 text-green-500" />
                Módulo 1: Gestão Ágil
              </h3>
              <p className="text-muted-foreground">Foco em adaptabilidade, pessoas e entrega contínua de valor.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-t-4 border-t-green-500 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <RefreshCw className="w-10 h-10 text-green-500 mb-2" />
                  <CardTitle>Scrum</CardTitle>
                  <CardDescription>Framework estruturado para produtos complexos.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground italic">Trabalha com ciclos curtos chamados Sprints (2 a 4 semanas).</p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex gap-2"><strong>Papéis:</strong> Scrum Master, PO, Developers.</li>
                    <li className="flex gap-2"><strong>Artefatos:</strong> Backlogs e Incremento.</li>
                    <li className="flex gap-2"><strong>Cerimônias:</strong> Planning, Daily, Review, Retrô.</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-t-4 border-t-green-400 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Kanban className="w-10 h-10 text-green-400 mb-2" />
                  <CardTitle>Kanban</CardTitle>
                  <CardDescription>Gestão visual do fluxo de trabalho.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground italic">Excelente para sustentação ou demandas imprevisíveis.</p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex gap-2"><strong>Visualização:</strong> Quadros (To Do, Doing, Done).</li>
                    <li className="flex gap-2"><strong>Limitação:</strong> WIP (Work In Progress).</li>
                    <li className="flex gap-2"><strong>Foco:</strong> Terminar tarefas antes de começar novas.</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Módulo 2: Governança */}
          <section className="space-y-6">
            <div className="text-center space-y-2">
              <h3 className="text-3xl font-bold flex items-center justify-center gap-3">
                <Shield className="w-8 h-8 text-blue-500" />
                Módulo 2: Governança de TI
              </h3>
              <p className="text-muted-foreground">Alinhamento estratégico, gestão de riscos e conformidade.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-t-4 border-t-blue-600 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Settings className="w-10 h-10 text-blue-600 mb-2" />
                  <CardTitle>COBIT 2019</CardTitle>
                  <CardDescription>Framework de governança corporativa de TI.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground italic">Ajuda a atingir objetivos de governança e gestão.</p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex gap-2"><strong>Separação:</strong> Governança vs Gestão.</li>
                    <li className="flex gap-2"><strong>Cascata:</strong> Alinha TI com metas de negócio.</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-t-4 border-t-blue-400 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Bell className="w-10 h-10 text-blue-400 mb-2" />
                  <CardTitle>ITIL 4</CardTitle>
                  <CardDescription>Gerenciamento de serviços de TI (ITSM).</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground italic">Foca na co-criação de valor com o cliente.</p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex gap-2"><strong>Sistema de Valor:</strong> Demanda em valor.</li>
                    <li className="flex gap-2"><strong>Práticas:</strong> Incidentes, Mudanças, Problemas.</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Módulo 3: Integração */}
          <section>
            <div className="rounded-3xl bg-slate-900 p-8 md:p-12 text-white shadow-2xl space-y-8">
              <div className="text-center space-y-2">
                <h3 className="text-3xl font-bold flex items-center justify-center gap-3">
                  <Handshake className="w-8 h-8 text-yellow-500" />
                  Módulo 3: Governança Ágil
                </h3>
                <p className="text-slate-400">O segredo da união entre desenvolvedores e gestores.</p>
              </div>

              <div className="grid gap-6">
                {[
                  {
                    title: "Automação de Conformidade (DevSecOps)",
                    desc: "Regras de negócio e segurança codificadas no pipeline de CI/CD. Se o código passa nos testes, está em conformidade."
                  },
                  {
                    title: "Mudança de Mindset da Auditoria",
                    desc: "A auditoria avalia o processo de automação e controles ágeis (Pull Requests, Kanban), não calhamaços de papel."
                  },
                  {
                    title: "Métricas Focadas em Valor",
                    desc: "Sucesso medido por ROI, OKRs e satisfação do cliente, alinhando Sprints com objetivos COBIT."
                  }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 items-start group">
                    <div className="bg-indigo-500/20 p-3 rounded-full group-hover:bg-indigo-500/40 transition-colors">
                      <Check className="w-5 h-5 text-yellow-500" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-yellow-500">{item.title}</h4>
                      <p className="text-slate-300 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <footer className="text-center space-y-4 pt-8 border-t border-border/40">
            <div className="flex items-center justify-center gap-2 text-xl font-semibold">
              <Laptop className="w-6 h-6" />
              Desenvolvido pelo seu Tutor de TI
            </div>
            <p className="text-muted-foreground italic">
              "Abrace a agilidade com responsabilidade. A verdadeira magia acontece quando a velocidade encontra a direção certa."
            </p>
          </footer>
        </div>
      </ScrollArea>
    </div>
  );
};
