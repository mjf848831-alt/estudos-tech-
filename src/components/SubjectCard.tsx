import * as React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Subject } from "@/src/data/curriculum";
import { Clock, BookOpen, Users, ChevronRight } from "lucide-react";
import { motion } from "motion/react";

interface SubjectCardProps {
  subject: Subject;
  onClick: (subject: Subject) => void;
  isActive?: boolean;
}

export const SubjectCard: React.FC<SubjectCardProps> = ({ subject, onClick, isActive }) => {
  return (
    <motion.div
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.98 }}
    >
      <Card 
        className={`cursor-pointer transition-all duration-300 border-white/5 bg-[#0f0f0f] hover:bg-white/[0.03] group relative overflow-hidden ${
          isActive ? 'ring-2 ring-primary bg-primary/5 border-primary/20' : ''
        }`}
        onClick={() => onClick(subject)}
      >
        <CardHeader className="pb-3">
          <div className="flex justify-between items-start gap-4">
            <CardTitle className={`text-base font-bold leading-tight transition-colors ${isActive ? 'text-primary' : 'group-hover:text-primary'}`}>
              {subject.title}
            </CardTitle>
            <Badge variant="outline" className="bg-white/5 border-white/10 text-[10px] uppercase tracking-wider font-mono">
              {subject.totalHours}h
            </Badge>
          </div>
          <CardDescription className="line-clamp-2 text-xs mt-1.5 opacity-70">
            {subject.description}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between">
            <div className="flex items-center text-[10px] text-muted-foreground gap-3">
              <div className="flex items-center gap-1">
                <Users className="w-3 h-3" />
                <span>{subject.presencialHours}h</span>
              </div>
              <div className="flex items-center gap-1">
                <BookOpen className="w-3 h-3" />
                <span>{subject.googleClassroomHours}h</span>
              </div>
            </div>
            <div className={`p-1.5 rounded-lg transition-all ${isActive ? 'bg-primary text-primary-foreground' : 'bg-white/5 text-muted-foreground group-hover:bg-primary/20 group-hover:text-primary'}`}>
              <ChevronRight className="w-4 h-4" />
            </div>
          </div>
        </CardContent>
        {isActive && (
          <div className="absolute top-0 left-0 w-1 h-full bg-primary" />
        )}
      </Card>
    </motion.div>
  );
};
