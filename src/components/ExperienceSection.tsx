
import React from 'react';
import { Briefcase, Calendar, MapPin, Building, ArrowRight, Code, Server, Database, Terminal } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import RevealOnScroll from './RevealOnScroll';

interface TechBadgeProps {
  name: string;
  icon: React.ReactNode;
}

const TechBadge = ({ name, icon }: TechBadgeProps) => {
  return (
    <Badge 
      variant="outline" 
      className="bg-blue-50 text-blue-500 border-blue-200 hover:bg-blue-100 dark:bg-blue-900/20 dark:border-blue-800 dark:text-blue-400 flex items-center gap-1 transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
    >
      {icon}
      <span>{name}</span>
    </Badge>
  );
};

interface ExperienceCardProps {
  title: string;
  company: string;
  period: string;
  location: string;
  achievements: string[];
  technologies?: { name: string; icon: React.ReactNode }[];
}

const ExperienceCard = ({ 
  title, 
  company, 
  period, 
  location, 
  achievements, 
  technologies 
}: ExperienceCardProps) => {
  return (
    <RevealOnScroll threshold={0.1} delay={200} direction="right">
      <Card className="border-l-4 border-l-blue-500 bg-white dark:bg-slate-800/50 backdrop-blur-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1 experience-card group overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        <CardContent className="p-6 relative z-10">
          <div className="space-y-4">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-blue-500 transition-colors">{title}</h3>
                <div className="flex items-center mt-1 text-blue-500">
                  <Building size={16} className="mr-1" />
                  <span className="font-medium">{company}</span>
                </div>
              </div>
              <div className="px-3 py-1 text-sm font-medium bg-blue-100 text-blue-500 rounded-full dark:bg-blue-900/30 flex items-center">
                <Calendar size={14} className="mr-1" />
                <span>{period}</span>
              </div>
            </div>
            
            <div className="flex items-center text-sm text-slate-500 dark:text-slate-400">
              <MapPin size={14} className="mr-1" />
              <span>{location}</span>
            </div>
            
            <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-300">
              {achievements.map((achievement, index) => (
                <li key={index} className="flex items-start group/item">
                  <ArrowRight size={14} className="mr-2 mt-1 text-blue-500 flex-shrink-0 transform group-hover/item:translate-x-1 transition-transform" />
                  <span>{achievement}</span>
                </li>
              ))}
            </ul>
            
            {technologies && (
              <div className="flex flex-wrap gap-2 pt-3 mt-1 border-t border-slate-100 dark:border-slate-700">
                {technologies.map((tech, index) => (
                  <TechBadge key={index} name={tech.name} icon={tech.icon} />
                ))}
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </RevealOnScroll>
  );
};

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20 bg-gradient-to-b from-white to-slate-50 dark:from-slate-900 dark:to-slate-800 relative overflow-hidden">
      {/* Code background pattern */}
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none bg-repeat bg-[length:400px_400px]" 
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='400' height='400' viewBox='0 0 400 400' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M14 36L46 36' stroke='%230000FF' stroke-width='2'/%3E%3Cpath d='M14 46L36 46' stroke='%230000FF' stroke-width='2'/%3E%3Cpath d='M14 56L40 56' stroke='%230000FF' stroke-width='2'/%3E%3Cpath d='M14 66L46 66' stroke='%230000FF' stroke-width='2'/%3E%3Cpath d='M94 96L126 96' stroke='%23FF0000' stroke-width='2'/%3E%3Cpath d='M94 106L116 106' stroke='%23FF0000' stroke-width='2'/%3E%3Cpath d='M94 116L120 116' stroke='%23FF0000' stroke-width='2'/%3E%3Cpath d='M94 126L126 126' stroke='%23FF0000' stroke-width='2'/%3E%3Cpath d='M184 156L216 156' stroke='%2300FF00' stroke-width='2'/%3E%3Cpath d='M184 166L206 166' stroke='%2300FF00' stroke-width='2'/%3E%3Cpath d='M184 176L210 176' stroke='%2300FF00' stroke-width='2'/%3E%3Cpath d='M184 186L216 186' stroke='%2300FF00' stroke-width='2'/%3E%3Cpath d='M274 216L306 216' stroke='%23FF00FF' stroke-width='2'/%3E%3Cpath d='M274 226L296 226' stroke='%23FF00FF' stroke-width='2'/%3E%3Cpath d='M274 236L300 236' stroke='%23FF00FF' stroke-width='2'/%3E%3Cpath d='M274 246L306 246' stroke='%23FF00FF' stroke-width='2'/%3E%3Cpath d='M14 276L46 276' stroke='%2300FFFF' stroke-width='2'/%3E%3Cpath d='M14 286L36 286' stroke='%2300FFFF' stroke-width='2'/%3E%3Cpath d='M14 296L40 296' stroke='%2300FFFF' stroke-width='2'/%3E%3Cpath d='M14 306L46 306' stroke='%2300FFFF' stroke-width='2'/%3E%3Cpath d='M94 336L126 336' stroke='%23FFFF00' stroke-width='2'/%3E%3Cpath d='M94 346L116 346' stroke='%23FFFF00' stroke-width='2'/%3E%3Cpath d='M94 356L120 356' stroke='%23FFFF00' stroke-width='2'/%3E%3Cpath d='M94 366L126 366' stroke='%23FFFF00' stroke-width='2'/%3E%3C/svg%3E")` }}
      ></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <RevealOnScroll threshold={0.1}>
          <div className="text-center mb-16">
            <div className="inline-block p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg mb-4 transform transition-transform hover:rotate-12 duration-500">
              <Briefcase size={24} className="text-blue-500" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white relative inline-block">
              Professional Experience
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></span>
            </h2>
            <p className="mt-4 text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              My journey building scalable web applications and delivering efficient solutions.
            </p>
          </div>
        </RevealOnScroll>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          <ExperienceCard
            title="Freelance, Full Stack Developer"
            company="Self-employed"
            period="Sep 2022 - Present"
            location="New Delhi, INDIA"
            achievements={[
              "Delivered full-stack applications using Node.js, Express, React, and MongoDB for clients across e-commerce, edtech, and SaaS industries",
              "Built RESTful and GraphQL APIs handling 100K+ monthly requests, improving performance by up to 35%",
              "Migrated legacy systems to modern JavaScript stacks, reducing technical debt and boosting load speeds by 50%",
              "Integrated third-party services (Stripe, Firebase, Auth0, AWS S3) across 15+ client platforms"
            ]}
            technologies={[
              { name: "React", icon: <Code size={12} /> },
              { name: "Node.js", icon: <Server size={12} /> },
              { name: "Express", icon: <Server size={12} /> },
              { name: "MongoDB", icon: <Database size={12} /> },
              { name: "GraphQL", icon: <Code size={12} /> },
              { name: "AWS", icon: <Server size={12} /> },
              { name: "Docker", icon: <Terminal size={12} /> }
            ]}
          />
          
          <ExperienceCard
            title="Software Engineer"
            company="Skugal Technologies"
            period="Dec 2020 - Mar 2024"
            location="Remote (India)"
            achievements={[
              "Designed, developed, and maintained full-stack applications using React, Angular, Node.js and MongoDB",
              "Designed robust APIs to enhance functionality and improve overall system efficiency by 30%",
              "Created automated dashboards for schools that reduced managing efforts by 70%",
              "Designed and maintained database schemas, optimized queries, and ensured data integrity"
            ]}
            technologies={[
              { name: "React", icon: <Code size={12} /> },
              { name: "Angular", icon: <Code size={12} /> },
              { name: "TypeScript", icon: <Code size={12} /> },
              { name: "Node.js", icon: <Server size={12} /> },
              { name: "MongoDB", icon: <Database size={12} /> },
              { name: "SQL", icon: <Database size={12} /> }
            ]}
          />
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
