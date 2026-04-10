import * as React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { curriculum } from "@/src/data/curriculum";
import { GraduationCap, Clock, Layout, Code } from "lucide-react";

export const Dashboard: React.FC = () => {
  const totalHours = curriculum.reduce((acc, s) => acc + s.totalHours, 0);
  const totalSubjects = curriculum.length;
  const techSubjects = curriculum.filter(s => s.id.includes('frontend') || s.id.includes('backend') || s.id.includes('api') || s.id.includes('logica')).length;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
          <CardTitle className="text-sm font-medium">Carga Horária Total</CardTitle>
          <Clock className="w-4 h-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{totalHours}h</div>
          <p className="text-xs text-muted-foreground">Curso completo de TI</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
          <CardTitle className="text-sm font-medium">Unidades Curriculares</CardTitle>
          <GraduationCap className="w-4 h-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{totalSubjects}</div>
          <p className="text-xs text-muted-foreground">Módulos de aprendizado</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
          <CardTitle className="text-sm font-medium">Foco em Desenvolvimento</CardTitle>
          <Code className="w-4 h-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{techSubjects}</div>
          <p className="text-xs text-muted-foreground">Módulos técnicos core</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
          <CardTitle className="text-sm font-medium">Status do Curso</CardTitle>
          <Layout className="w-4 h-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-green-600">Ativo</div>
          <p className="text-xs text-muted-foreground">Em andamento</p>
        </CardContent>
      </Card>
    </div>
  );
};
