import * as React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Subject } from "@/src/data/curriculum";
import { Clock, BookOpen, Users } from "lucide-react";

interface SubjectCardProps {
  subject: Subject;
  onClick: (subject: Subject) => void;
  isActive?: boolean;
}

export const SubjectCard: React.FC<SubjectCardProps> = ({ subject, onClick, isActive }) => {
  return (
    <Card 
      className={`cursor-pointer transition-all hover:shadow-md ${isActive ? 'ring-2 ring-primary' : ''}`}
      onClick={() => onClick(subject)}
    >
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <CardTitle className="text-lg font-bold leading-tight">{subject.title}</CardTitle>
          <Badge variant="secondary" className="ml-2 whitespace-nowrap">
            {subject.totalHours}h
          </Badge>
        </div>
        <CardDescription className="line-clamp-2 mt-1">
          {subject.description}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          <div className="flex items-center text-sm text-muted-foreground gap-4">
            <div className="flex items-center gap-1">
              <Users className="w-4 h-4" />
              <span>{subject.presencialHours}h Presencial</span>
            </div>
            <div className="flex items-center gap-1">
              <BookOpen className="w-4 h-4" />
              <span>{subject.googleClassroomHours}h Online</span>
            </div>
          </div>
          <div className="space-y-1">
            <div className="flex justify-between text-xs font-medium">
              <span>Progresso</span>
              <span>0%</span>
            </div>
            <Progress value={0} className="h-1" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
