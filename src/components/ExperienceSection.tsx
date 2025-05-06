
import React from 'react';
import { Briefcase, Calendar, MapPin, Building, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import RevealOnScroll from './RevealOnScroll';

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
    <RevealOnScroll threshold={0.1} delay={200} direction="right">
      <Card className="border-l-4 border-l-blue-500 bg-white dark:bg-slate-800/50 backdrop-blur-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1 experience-card group">
        <CardContent className="p-6">
          <div className="space-y-4">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-blue-500 transition-colors">{title}</h3>
                <div className="flex items-center mt-1 text-blue-500">
                  <Building size={16} className="mr-1" />
                  <span className="font-medium">{company}</span>
                </div>
              </div>
              <div className="px-3 py-1 text-sm font-medium bg-blue-100 text-blue-500 rounded-full dark:bg-blue-900/30">
                {period}
              </div>
            </div>
            
            <div className="flex items-center text-sm text-slate-500">
              <MapPin size={14} className="mr-1" />
              <span>{location}</span>
            </div>
            
            <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-300">
              {achievements.map((achievement, index) => (
                <li key={index} className="flex items-start">
                  <ArrowRight size={14} className="mr-2 mt-1 text-blue-500 flex-shrink-0" />
                  <span>{achievement}</span>
                </li>
              ))}
            </ul>
            
            {technologies && (
              <div className="flex flex-wrap gap-2 pt-2">
                {technologies.map((tech, index) => (
                  <Badge key={index} variant="outline" className="bg-blue-50 text-blue-500 border-blue-200 hover:bg-blue-100 dark:bg-blue-900/20 dark:border-blue-800 dark:text-blue-400">
                    {tech}
                  </Badge>
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
    <section id="experience" className="py-20 bg-gradient-to-b from-white to-slate-50 dark:from-slate-900 dark:to-slate-800">
      <div className="container mx-auto px-4 md:px-6">
        <RevealOnScroll threshold={0.1}>
          <div className="text-center mb-16">
            <div className="inline-block p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg mb-4">
              <Briefcase size={24} className="text-blue-500" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">Professional Experience</h2>
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
            technologies={["React", "Node.js", "Express", "MongoDB", "GraphQL", "AWS", "Docker"]}
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
            technologies={["React", "Angular", "TypeScript", "Node.js", "MongoDB", "SQL"]}
          />
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
