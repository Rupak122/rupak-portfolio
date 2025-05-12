
import React from 'react';
import { Code, Database, Layout, Server } from "lucide-react";
import RevealOnScroll from './RevealOnScroll';

interface SkillCategoryProps {
  title: string;
  icon: React.ReactNode;
  skills: string[];
  bgColor: string;
  iconColor: string;
}

const SkillCategory = ({ title, icon, skills, bgColor, iconColor }: SkillCategoryProps) => {
  return (
    <RevealOnScroll>
      <div className="relative overflow-hidden group">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 transform translate-y-3/4 group-hover:translate-y-0 transition-all duration-500"></div>
        <div className="relative z-10 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
          <div className={`${bgColor} p-4 flex items-center`}>
            <div className={`p-3 rounded-full ${iconColor} mr-4 flex items-center justify-center`}>
              {icon}
            </div>
            <h3 className="font-medium text-xl text-slate-800 dark:text-white">{title}</h3>
          </div>
          
          <div className="p-5 relative z-10">
            <div className="grid grid-cols-2 gap-3">
              {skills.map((skill, index) => (
                <div 
                  key={index} 
                  className="py-2 px-3 rounded bg-slate-50 dark:bg-slate-700/50 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors text-slate-700 dark:text-slate-300 text-sm border border-slate-100 dark:border-slate-700"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
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
    <section id="skills" className="py-20 bg-gradient-to-b from-white to-slate-50 dark:from-slate-900 dark:to-slate-800">
      <div className="container mx-auto px-4">
        <RevealOnScroll>
          <div className="text-center mb-16">
            <div className="inline-block">
              <span className="text-xs font-semibold text-blue-600 dark:text-blue-400 tracking-wider uppercase bg-blue-100 dark:bg-blue-900/30 py-1 px-3 rounded-full mb-3 inline-block">My Expertise</span>
            </div>
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white">Technical Skills</h2>
            <div className="max-w-2xl mx-auto mt-4">
              <p className="text-slate-600 dark:text-slate-400">
                Specialized in modern web technologies with a focus on building scalable and efficient applications
              </p>
            </div>
          </div>
        </RevealOnScroll>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <SkillCategory 
            title="Frontend" 
            icon={<Layout size={24} className="text-blue-600 dark:text-blue-400" />}
            skills={frontendSkills}
            bgColor="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20"
            iconColor="bg-blue-100 dark:bg-blue-900/40"
          />
          
          <SkillCategory 
            title="Backend" 
            icon={<Server size={24} className="text-green-600 dark:text-green-400" />}
            skills={backendSkills}
            bgColor="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20"
            iconColor="bg-green-100 dark:bg-green-900/40"
          />
          
          <SkillCategory 
            title="Database" 
            icon={<Database size={24} className="text-amber-600 dark:text-amber-400" />}
            skills={databaseSkills}
            bgColor="bg-gradient-to-r from-amber-50 to-yellow-50 dark:from-amber-900/20 dark:to-yellow-900/20"
            iconColor="bg-amber-100 dark:bg-amber-900/40"
          />
          
          <SkillCategory 
            title="DevOps" 
            icon={<Code size={24} className="text-purple-600 dark:text-purple-400" />}
            skills={devOpsSkills}
            bgColor="bg-gradient-to-r from-purple-50 to-violet-50 dark:from-purple-900/20 dark:to-violet-900/20"
            iconColor="bg-purple-100 dark:bg-purple-900/40"
          />
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
