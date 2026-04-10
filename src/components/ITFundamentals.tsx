import * as React from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { 
  Cpu, 
  Code, 
  Wifi, 
  Globe, 
  Database, 
  Cloud, 
  Layers, 
  GraduationCap, 
  ArrowDown, 
  Presentation, 
  Laptop,
  Microchip,
  Monitor
} from "lucide-react";
import { motion } from "motion/react";

export const ITFundamentals: React.FC = () => {
  return (
    <div className="h-full flex flex-col gap-6">
      {/* Hero Section */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-cyan-700 to-blue-600 p-8 text-white shadow-xl">
        <div className="relative z-10 max-w-2xl space-y-4">
          <h2 className="text-4xl font-extrabold tracking-tight">
            A Jornada: Fundamentos de TI
          </h2>
          <p className="text-lg text-blue-100 font-light">
            Os alicerces da Tecnologia da Informação: compreenda como computadores, redes e dados se conectam para formar o mundo digital.
          </p>
          <Button 
            variant="secondary" 
            className="rounded-full font-bold gap-2" 
            onClick={() => {
              document.getElementById('it-intro')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Iniciar a Aula <ArrowDown className="w-4 h-4" />
          </Button>
        </div>
        <div className="absolute right-0 bottom-0 opacity-10 transform translate-x-1/4 translate-y-1/4">
          <Monitor size={300} />
        </div>
      </div>

      <ScrollArea className="flex-grow pr-4">
        <div className="space-y-12 pb-12">
          {/* Introdução */}
          <section id="it-intro" className="scroll-mt-6">
            <Card className="border-l-4 border-l-cyan-500 bg-cyan-500/5">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-cyan-500">
                  <Presentation className="w-6 h-6" />
                  Boas-vindas do seu Instrutor
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Olá novamente! Para dominarmos temas avançados como Gestão Ágil e Governança, é crucial termos os alicerces bem consolidados. A Tecnologia da Informação (TI) é o motor do mundo moderno.
                </p>
                <p>
                  Neste guia, vamos desmistificar os quatro grandes pilares que compõem qualquer sistema informático: a parte física (<strong>Hardware</strong>), a parte lógica (<strong>Software</strong>), a forma como comunicam (<strong>Redes</strong>) e onde a informação é guardada (<strong>Bases de Dados e Cloud</strong>).
                </p>
              </CardContent>
            </Card>
          </section>

          {/* Módulo 1: Hardware & Software */}
          <section className="space-y-6">
            <div className="text-center space-y-2">
              <h3 className="text-3xl font-bold flex items-center justify-center gap-3">
                <Laptop className="w-8 h-8 text-blue-500" />
                Módulo 1: Hardware e Software
              </h3>
              <p className="text-muted-foreground">O corpo e o cérebro dos sistemas informáticos.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-t-4 border-t-blue-500 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Microchip className="w-10 h-10 text-blue-500 mb-2" />
                  <CardTitle>Hardware</CardTitle>
                  <CardDescription>A parte física do computador.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground">Componentes eletrónicos e mecânicos que você pode tocar.</p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex gap-2"><strong>CPU:</strong> O "cérebro" que executa instruções.</li>
                    <li className="flex gap-2"><strong>RAM:</strong> Memória volátil para tarefas rápidas.</li>
                    <li className="flex gap-2"><strong>Storage:</strong> Onde os ficheiros vivem (SSD/HD).</li>
                    <li className="flex gap-2"><strong>Periféricos:</strong> Teclado, rato, ecrã.</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-t-4 border-t-blue-400 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Code className="w-10 h-10 text-blue-400 mb-2" />
                  <CardTitle>Software</CardTitle>
                  <CardDescription>A parte lógica e instruções.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground">Programas que dizem ao hardware o que fazer.</p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex gap-2"><strong>Sistemas Operativos:</strong> Windows, Linux, macOS.</li>
                    <li className="flex gap-2"><strong>Aplicações:</strong> Chrome, Word, Apps móveis.</li>
                    <li className="flex gap-2"><strong>Linguagens:</strong> Python, Java, JavaScript.</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Módulo 2: Redes */}
          <section className="space-y-6">
            <div className="text-center space-y-2">
              <h3 className="text-3xl font-bold flex items-center justify-center gap-3">
                <Wifi className="w-8 h-8 text-indigo-500" />
                Módulo 2: Redes e Internet
              </h3>
              <p className="text-muted-foreground">Como os computadores comunicam entre si globalmente.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-t-4 border-t-indigo-600 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Wifi className="w-10 h-10 text-indigo-600 mb-2" />
                  <CardTitle>Conceitos de Rede</CardTitle>
                  <CardDescription>Computadores interligados para partilha.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-2 text-sm">
                    <li className="flex gap-2"><strong>LAN:</strong> Rede local (casa ou escritório).</li>
                    <li className="flex gap-2"><strong>WAN:</strong> Rede de longa distância (Internet).</li>
                    <li className="flex gap-2"><strong>Equipamentos:</strong> Routers e Switches.</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-t-4 border-t-indigo-500 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Globe className="w-10 h-10 text-indigo-500 mb-2" />
                  <CardTitle>A Internet (Protocolos)</CardTitle>
                  <CardDescription>Infraestrutura global e regras.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-2 text-sm">
                    <li className="flex gap-2"><strong>Endereço IP:</strong> A "morada" única do dispositivo.</li>
                    <li className="flex gap-2"><strong>DNS:</strong> Traduz nomes (google.com) em IPs.</li>
                    <li className="flex gap-2"><strong>HTTP/HTTPS:</strong> Protocolos para páginas web.</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Módulo 3: Dados e Nuvem */}
          <section>
            <div className="rounded-3xl bg-slate-900 p-8 md:p-12 text-white shadow-2xl space-y-8">
              <div className="text-center space-y-2">
                <h3 className="text-3xl md:text-4xl font-bold flex items-center justify-center gap-3">
                  <Database className="w-8 h-8 text-cyan-400" />
                  Módulo 3: Bases de Dados e Cloud
                </h3>
                <p className="text-cyan-200">Onde a informação vive e como é processada.</p>
              </div>

              <div className="grid gap-8">
                <div className="flex gap-4 items-start">
                  <div className="bg-cyan-800 p-3 rounded-full shrink-0">
                    <Database className="w-5 h-5 text-cyan-300" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-cyan-300">Bases de Dados (SQL vs NoSQL)</h4>
                    <p className="text-slate-300">Sistemas organizados para gerir dados. <strong>SQL</strong> usa tabelas rígidas; <strong>NoSQL</strong> é flexível para grandes volumes não estruturados.</p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="bg-cyan-800 p-3 rounded-full shrink-0">
                    <Cloud className="w-5 h-5 text-cyan-300" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-cyan-300">Cloud Computing</h4>
                    <p className="text-slate-300">Aluguer de capacidade de computação pela Internet (AWS, Azure, Google Cloud) em vez de manter servidores físicos.</p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="bg-cyan-800 p-3 rounded-full shrink-0">
                    <Layers className="w-5 h-5 text-cyan-300" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-cyan-300">Modelos de Nuvem</h4>
                    <p className="text-slate-300"><strong>IaaS</strong> (Infraestrutura), <strong>PaaS</strong> (Plataforma para devs) e <strong>SaaS</strong> (Software pronto como Gmail).</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <footer className="text-center space-y-4 pt-8 border-t border-border/40">
            <div className="flex items-center justify-center gap-2 text-xl font-semibold">
              <Laptop className="w-6 h-6" />
              Desenvolvido pelo seu Tutor de TI
            </div>
            <p className="text-muted-foreground italic">
              "Compreender os fundamentos é o primeiro passo para dominar a inovação digital. Continue a explorar o fascinante mundo da tecnologia!"
            </p>
          </footer>
        </div>
      </ScrollArea>
    </div>
  );
};
