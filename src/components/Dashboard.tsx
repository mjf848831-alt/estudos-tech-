import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { curriculum } from "@/src/data/curriculum";
import { GraduationCap, Clock, Layout, Code, TrendingUp, Award, BookOpen, CheckCircle2, Database, Cpu, ShieldCheck } from "lucide-react";
import { motion } from "motion/react";

export const Dashboard: React.FC = () => {
  const totalHours = curriculum.reduce((acc, s) => acc + s.totalHours, 0);
  const totalSubjects = curriculum.length;
  const techSubjects = curriculum.filter(s => s.id.includes('frontend') || s.id.includes('backend') || s.id.includes('api') || s.id.includes('logica')).length;

  const stats = [
    {
      label: "Carga Horária",
      value: `${totalHours}h`,
      sub: "Total do curso",
      icon: Clock,
      color: "text-blue-500",
      bg: "bg-blue-500/10"
    },
    {
      label: "Módulos",
      value: totalSubjects,
      sub: "Unidades curriculares",
      icon: GraduationCap,
      color: "text-purple-500",
      bg: "bg-purple-500/10"
    },
    {
      label: "Módulos Técnicos",
      value: techSubjects,
      sub: "Foco em Dev",
      icon: Code,
      color: "text-cyan-500",
      bg: "bg-cyan-500/10"
    },
    {
      label: "Progresso Geral",
      value: "32%",
      sub: "Em andamento",
      icon: TrendingUp,
      color: "text-green-500",
      bg: "bg-green-500/10"
    }
  ];

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: idx * 0.1 }}
          >
            <Card className="border-white/5 bg-[#0f0f0f] hover:bg-white/[0.02] transition-colors overflow-hidden group">
              <CardContent className="p-6 relative">
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">{stat.label}</p>
                    <div className="text-3xl font-black tracking-tight">{stat.value}</div>
                    <p className="text-[10px] text-muted-foreground">{stat.sub}</p>
                  </div>
                  <div className={`${stat.bg} ${stat.color} p-3 rounded-xl group-hover:scale-110 transition-transform`}>
                    <stat.icon className="w-6 h-6" />
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="border-white/5 bg-[#0f0f0f] p-8">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold flex items-center gap-2">
              <Award className="w-5 h-5 text-yellow-500" />
              Próximas Conquistas
            </h3>
            <span className="text-xs text-muted-foreground hover:text-primary cursor-pointer transition-colors">Ver todas</span>
          </div>
          <div className="space-y-4">
            {[
              { title: "Lógica de Dados", progress: 85, icon: Database },
              { title: "Fundamentos de TI", progress: 40, icon: Cpu },
              { title: "Gestão Ágil", progress: 10, icon: ShieldCheck }
            ].map((item, idx) => (
              <div key={idx} className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2">
                    <item.icon className="w-4 h-4 text-muted-foreground" />
                    <span className="font-medium">{item.title}</span>
                  </div>
                  <span className="text-xs font-mono">{item.progress}%</span>
                </div>
                <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: `${item.progress}%` }}
                    className="h-full bg-primary rounded-full"
                  />
                </div>
              </div>
            ))}
          </div>
        </Card>

        <Card className="border-white/5 bg-[#0f0f0f] p-8 relative overflow-hidden group">
          <div className="relative z-10">
            <h3 className="text-xl font-bold mb-2">Dica do Dia</h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              "A prática constante da lógica de programação é o que separa um codificador de um engenheiro de software de elite. Tente resolver um desafio hoje!"
            </p>
            <Button className="rounded-xl gap-2">
              Ver Desafio <TrendingUp className="w-4 h-4" />
            </Button>
          </div>
          <div className="absolute -right-8 -bottom-8 opacity-5 group-hover:opacity-10 transition-opacity">
            <BookOpen size={200} />
          </div>
        </Card>
      </div>
    </div>
  );
};
