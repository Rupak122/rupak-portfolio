
import React from 'react';
import { Code, Database, Layout } from "lucide-react";
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
      <Card className="hover:shadow-md transition-all duration-300">
        <CardContent className="p-6">
          <div className="flex items-center mb-4">
            <div className="mr-4 p-2 bg-purple-100 rounded-lg">
              {icon}
            </div>
            <h3 className="text-xl font-bold text-portfolio-dark">{title}</h3>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {skills.map((skill, index) => (
              <Badge 
                key={index}
                variant="secondary" 
                className="bg-slate-100 text-slate-700 hover:bg-slate-200"
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
    <section id="skills" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        <RevealOnScroll>
          <div className="text-center mb-12">
            <div className="inline-block p-2 bg-purple-100 rounded-lg mb-4">
              <Code size={24} className="text-portfolio-primary" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-portfolio-dark">Technical Skills</h2>
            <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
              My technical toolkit that I've developed and refined over the years.
            </p>
          </div>
        </RevealOnScroll>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <SkillCategory 
            title="Frontend Development" 
            icon={<Layout size={24} className="text-portfolio-primary" />}
            skills={frontendSkills}
          />
          
          <SkillCategory 
            title="Backend Development" 
            icon={<Code size={24} className="text-portfolio-primary" />}
            skills={backendSkills}
          />
          
          <SkillCategory 
            title="Databases" 
            icon={<Database size={24} className="text-portfolio-primary" />}
            skills={databaseSkills}
          />
          
          <SkillCategory 
            title="DevOps" 
            icon={<Code size={24} className="text-portfolio-primary" />}
            skills={devOpsSkills}
          />
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
