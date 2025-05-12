
import React from 'react';
import { Code, Database, Layout, Server } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import RevealOnScroll from './RevealOnScroll';
import GlowingBorder from './animations/GlowingBorder';

interface SkillCategoryProps {
  title: string;
  icon: React.ReactNode;
  skills: string[];
}

const SkillCategory = ({ title, icon, skills }: SkillCategoryProps) => {
  return (
    <RevealOnScroll>
      <GlowingBorder elegant={true}>
        <Card className="hover:shadow-lg transition-all duration-300 border-slate-200 dark:border-slate-700 overflow-hidden h-full">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-slate-700 dark:to-slate-800 p-3 flex items-center">
            <div className="p-2 rounded-full bg-blue-500/10 text-blue-600 dark:bg-blue-400/10 dark:text-blue-400 mr-2">
              {icon}
            </div>
            <h3 className="font-medium text-slate-800 dark:text-white">{title}</h3>
          </div>
          
          <CardContent className="p-4 relative z-10 bg-white dark:bg-slate-800">
            <div className="grid grid-cols-2 gap-2">
              {skills.map((skill, index) => (
                <div 
                  key={index} 
                  className="py-1.5 px-2 rounded hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors text-slate-700 dark:text-slate-300 text-sm"
                >
                  {skill}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </GlowingBorder>
    </RevealOnScroll>
  );
};

const SkillsSection = () => {
  const frontendSkills = [
    "React", "Angular", "TypeScript", 
    "JavaScript", "HTML5/CSS3", "Tailwind CSS"
  ];
  
  const backendSkills = [
    "Node.js", "Express.js", "GraphQL", 
    "REST APIs", "Nest.js", "Fastify"
  ];
  
  const databaseSkills = [
    "MongoDB", "PostgreSQL", "MySQL", 
    "Firebase", "Redis", "Prisma"
  ];
  
  const devOpsSkills = [
    "AWS", "Docker", "CI/CD", 
    "Kubernetes", "GitHub Actions", "Nginx"
  ];
  
  return (
    <section id="skills" className="py-16 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4">
        <RevealOnScroll>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Technical Expertise</h2>
            <div className="w-20 h-1 bg-blue-500 mx-auto mt-4"></div>
            <p className="mt-4 text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Specialized in modern web technologies with a focus on building scalable and efficient applications
            </p>
          </div>
        </RevealOnScroll>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <SkillCategory 
            title="Frontend" 
            icon={<Layout size={18} />}
            skills={frontendSkills}
          />
          
          <SkillCategory 
            title="Backend" 
            icon={<Server size={18} />}
            skills={backendSkills}
          />
          
          <SkillCategory 
            title="Database" 
            icon={<Database size={18} />}
            skills={databaseSkills}
          />
          
          <SkillCategory 
            title="DevOps" 
            icon={<Code size={18} />}
            skills={devOpsSkills}
          />
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
