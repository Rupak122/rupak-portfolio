
import React from 'react';
import { Code, Database, Layout, Server, Terminal, FileCode2, Grid2X2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import RevealOnScroll from './RevealOnScroll';

interface SkillCategoryProps {
  title: string;
  icon: React.ReactNode;
  skills: Array<{ name: string; level: number }>;
}

const SkillCategory = ({ title, icon, skills }: SkillCategoryProps) => {
  return (
    <RevealOnScroll>
      <Card className="hover:shadow-lg transition-all duration-300 border-slate-200 dark:border-slate-700 overflow-hidden group">
        {/* Terminal-like header */}
        <div className="bg-slate-800 text-white py-1.5 px-4 flex items-center justify-between">
          <div className="flex items-center space-x-1.5">
            <span className="w-3 h-3 block rounded-full bg-red-500"></span>
            <span className="w-3 h-3 block rounded-full bg-yellow-500"></span>
            <span className="w-3 h-3 block rounded-full bg-green-500"></span>
          </div>
          <div className="flex items-center">
            {icon}
            <span className="ml-2 font-mono text-sm">{title}.js</span>
          </div>
          <span className="font-mono text-xs text-slate-400">~/skills</span>
        </div>
        
        <CardContent className="p-4 relative z-10">
          <div className="space-y-3">
            {skills.map((skill, index) => (
              <div key={index} className="space-y-1">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-slate-700 dark:text-slate-300 font-mono">
                    <span className="text-blue-500">const</span> {skill.name};
                  </span>
                  <Badge 
                    variant="outline" 
                    className="bg-slate-100 text-slate-700 border-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:border-slate-700"
                  >
                    {skill.level}/5
                  </Badge>
                </div>
                <div className="h-1.5 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-blue-600 dark:bg-blue-500 transition-all duration-1000" 
                    style={{ width: `${(skill.level / 5) * 100}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </RevealOnScroll>
  );
};

const SkillsSection = () => {
  const frontendSkills = [
    { name: "React", level: 5 },
    { name: "Angular", level: 4 },
    { name: "TypeScript", level: 5 },
    { name: "JavaScript", level: 5 },
    { name: "HTML5/CSS3", level: 5 },
    { name: "Tailwind CSS", level: 4 }
  ];
  
  const backendSkills = [
    { name: "Node.js", level: 5 },
    { name: "Express.js", level: 5 },
    { name: "GraphQL", level: 4 },
    { name: "REST APIs", level: 5 },
    { name: "Nest.js", level: 3 },
    { name: "Fastify", level: 3 }
  ];
  
  const databaseSkills = [
    { name: "MongoDB", level: 5 },
    { name: "PostgreSQL", level: 4 },
    { name: "MySQL", level: 4 },
    { name: "Firebase", level: 4 },
    { name: "Redis", level: 3 },
    { name: "Prisma", level: 4 }
  ];
  
  const devOpsSkills = [
    { name: "AWS", level: 4 },
    { name: "Docker", level: 4 },
    { name: "CI/CD", level: 4 },
    { name: "Kubernetes", level: 3 },
    { name: "GitHub Actions", level: 4 },
    { name: "Nginx", level: 3 }
  ];
  
  return (
    <section id="skills" className="py-16 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4">
        <RevealOnScroll>
          <div className="text-center mb-10">
            <div className="inline-block bg-slate-800 text-white font-mono p-2 rounded-md mb-4">
              <span className="text-blue-400">import</span> <span className="text-green-400">{ "{ skills }" }</span> <span className="text-blue-400">from</span> <span className="text-yellow-400">'./expertise'</span>
            </div>
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Technical Stack</h2>
          </div>
        </RevealOnScroll>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <SkillCategory 
            title="Frontend" 
            icon={<Layout size={16} className="text-blue-400" />}
            skills={frontendSkills}
          />
          
          <SkillCategory 
            title="Backend" 
            icon={<Server size={16} className="text-green-400" />}
            skills={backendSkills}
          />
          
          <SkillCategory 
            title="Database" 
            icon={<Database size={16} className="text-yellow-400" />}
            skills={databaseSkills}
          />
          
          <SkillCategory 
            title="DevOps" 
            icon={<FileCode2 size={16} className="text-purple-400" />}
            skills={devOpsSkills}
          />
        </div>
        
        {/* Code-like footer */}
        <div className="text-center mt-8">
          <div className="inline-block bg-slate-100 dark:bg-slate-800 font-mono p-2 rounded-md text-xs text-slate-500 dark:text-slate-400">
            <span className="text-blue-500">console</span>.<span className="text-green-500">log</span>(<span className="text-yellow-500">"Always learning new technologies"</span>);
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
