
import React from 'react';
import { Code, Database, Layout, Server } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import RevealOnScroll from './RevealOnScroll';

interface SkillCategoryProps {
  title: string;
  icon: React.ReactNode;
  skills: Array<string>;
}

const SkillCategory = ({ title, icon, skills }: SkillCategoryProps) => {
  return (
    <RevealOnScroll>
      <Card className="hover:shadow-lg transition-all duration-300 border-blue-50 dark:border-blue-900/20 overflow-hidden group">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        <CardContent className="p-8 relative z-10">
          <div className="flex items-center mb-6">
            <div className="mr-4 p-3 bg-blue-50 rounded-full dark:bg-blue-900/20 text-blue-600">
              {icon}
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">{title}</h3>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {skills.map((skill, index) => (
              <Badge 
                key={index}
                variant="secondary" 
                className="px-4 py-2 bg-slate-50 text-slate-700 hover:bg-slate-100 dark:bg-slate-800 dark:text-slate-300 text-sm font-medium transition-colors"
              >
                {skill}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </RevealOnScroll>
  );
};

const SkillsSection = () => {
  const frontendSkills = [
    "React", "Angular", "TypeScript", "JavaScript", 
    "HTML5", "CSS3", "Tailwind CSS", "Redux"
  ];
  
  const backendSkills = [
    "Node.js", "Express.js", "TypeScript", "JavaScript",
    "REST APIs", "GraphQL", "Nest.js", "Fastify"
  ];
  
  const databaseSkills = [
    "MongoDB", "PostgreSQL", "MySQL", "Firebase",
    "Redis", "Prisma", "TypeORM", "Mongoose"
  ];
  
  const devOpsSkills = [
    "AWS", "Docker", "Kubernetes", "CI/CD",
    "Nginx", "GitHub Actions", "Jenkins", "Terraform"
  ];
  
  return (
    <section id="skills" className="py-24 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4 md:px-6">
        <RevealOnScroll>
          <div className="text-center mb-16">
            <span className="px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-sm font-medium dark:bg-blue-900/20">SKILLS</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mt-4">My Technical Expertise</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mt-6"></div>
            <p className="mt-6 text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              The technical skills I've developed and refined throughout my career.
            </p>
          </div>
        </RevealOnScroll>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <SkillCategory 
            title="Frontend Development" 
            icon={<Layout size={24} />}
            skills={frontendSkills}
          />
          
          <SkillCategory 
            title="Backend Development" 
            icon={<Server size={24} />}
            skills={backendSkills}
          />
          
          <SkillCategory 
            title="Databases" 
            icon={<Database size={24} />}
            skills={databaseSkills}
          />
          
          <SkillCategory 
            title="DevOps" 
            icon={<Code size={24} />}
            skills={devOpsSkills}
          />
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
