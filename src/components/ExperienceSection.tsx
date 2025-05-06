
import React from 'react';
import { Briefcase, Calendar, MapPin, Building, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import RevealOnScroll from './RevealOnScroll';

interface TechBadgeProps {
  name: string;
}

const TechBadge = ({ name }: TechBadgeProps) => {
  return (
    <Badge 
      variant="outline" 
      className="bg-blue-50 text-blue-600 border-blue-100 hover:bg-blue-100 dark:bg-blue-900/20 dark:border-blue-800 dark:text-blue-400 transition-all duration-300"
    >
      {name}
    </Badge>
  );
};

interface ExperienceCardProps {
  title: string;
  company: string;
  period: string;
  location: string;
  achievements: string[];
  technologies?: string[];
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
    <RevealOnScroll threshold={0.1} delay={200} direction="up">
      <Card className="bg-white dark:bg-slate-800/50 backdrop-blur-sm transition-all duration-300 hover:shadow-xl border-0 overflow-hidden relative group">
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-blue-600"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        <CardContent className="p-8 relative z-10">
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
              <div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 transition-colors">{title}</h3>
                <div className="flex items-center mt-2 text-blue-600">
                  <Building size={16} className="mr-1.5" />
                  <span className="font-medium">{company}</span>
                </div>
              </div>
              <div className="px-4 py-1.5 text-sm font-medium bg-blue-50 text-blue-600 rounded-full dark:bg-blue-900/30 flex items-center whitespace-nowrap">
                <Calendar size={14} className="mr-1.5" />
                <span>{period}</span>
              </div>
            </div>
            
            <div className="flex items-center text-sm text-slate-500 dark:text-slate-400">
              <MapPin size={14} className="mr-1.5" />
              <span>{location}</span>
            </div>
            
            <ul className="space-y-3 text-slate-600 dark:text-slate-300">
              {achievements.map((achievement, index) => (
                <li key={index} className="flex items-start group/item">
                  <ArrowRight size={14} className="mr-2 mt-1 text-blue-600 flex-shrink-0 transform group-hover/item:translate-x-1 transition-transform" />
                  <span>{achievement}</span>
                </li>
              ))}
            </ul>
            
            {technologies && (
              <div className="flex flex-wrap gap-2 pt-4 mt-1 border-t border-slate-100 dark:border-slate-700">
                {technologies.map((tech, index) => (
                  <TechBadge key={index} name={tech} />
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
    <section id="experience" className="py-24 bg-slate-50 dark:bg-slate-800 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <RevealOnScroll threshold={0.1}>
          <div className="text-center mb-16">
            <span className="px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-sm font-medium dark:bg-blue-900/20">EXPERIENCE</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mt-4">Professional Journey</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mt-6"></div>
            <p className="mt-6 text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              My experience building scalable web applications and delivering efficient solutions.
            </p>
          </div>
        </RevealOnScroll>
        
        <div className="grid grid-cols-1 gap-8 max-w-4xl mx-auto">
          <ExperienceCard
            title="Full Stack Developer"
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
              "React", "Node.js", "Express", "MongoDB", "GraphQL", "AWS", "Docker"
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
              "React", "Angular", "TypeScript", "Node.js", "MongoDB", "SQL"
            ]}
          />
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
