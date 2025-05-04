
import React from 'react';
import { Briefcase, Calendar, MapPin } from "lucide-react";
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
  isLeft?: boolean;
  isLast?: boolean;
}

const ExperienceCard = ({ 
  title, 
  company, 
  period, 
  location, 
  achievements, 
  technologies,
  isLeft = false,
  isLast = false 
}: ExperienceCardProps) => {
  return (
    <div className="relative mb-8 md:mb-12">
      <div className="hidden md:block absolute top-0 left-0 md:left-1/2 w-6 h-6 rounded-full bg-portfolio-primary transform -translate-x-1/2 z-10 timeline-dot"></div>
      
      <Card className={`md:w-[calc(50%-20px)] ${isLeft ? 'md:mr-auto md:pr-6' : 'md:ml-auto'} hover:shadow-md transition-shadow duration-300 project-card`}>
        <CardContent className="p-6">
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-bold text-portfolio-dark">{title}</h3>
              <p className="text-portfolio-primary font-medium">{company}</p>
              <div className="flex items-center text-sm text-slate-500 mt-1">
                <Calendar size={14} className="mr-1" />
                <span>{period}</span>
                <span className="mx-2">•</span>
                <MapPin size={14} className="mr-1" />
                <span>{location}</span>
              </div>
            </div>
            
            <ul className="space-y-2 text-sm text-slate-700 list-disc pl-4">
              {achievements.map((achievement, index) => (
                <li key={index}>{achievement}</li>
              ))}
            </ul>
            
            {technologies && (
              <div className="flex flex-wrap gap-2 pt-2">
                {technologies.map((tech, index) => (
                  <Badge key={index} variant="outline" className="bg-slate-100 text-slate-700 hover:bg-slate-200">
                    {tech}
                  </Badge>
                ))}
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <RevealOnScroll threshold={0.1}>
          <div className="text-center mb-12">
            <div className="inline-block p-2 bg-purple-100 rounded-lg mb-4">
              <Briefcase size={24} className="text-portfolio-primary" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-portfolio-dark">Professional Experience</h2>
            <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
              My journey building scalable web applications and delivering efficient solutions.
            </p>
          </div>
        </RevealOnScroll>
        
        <div className="relative">
          <div className="hidden md:block absolute top-0 bottom-0 left-1/2 w-0.5 bg-slate-200 transform -translate-x-1/2"></div>
          
          <div className="space-y-0">
            <RevealOnScroll threshold={0.1} delay={200}>
              <ExperienceCard
                title="Senior Frontend Developer"
                company="TechInnovate Solutions"
                period="04/2024 - Present"
                location="San Francisco, USA"
                achievements={[
                  "Leading a team of 4 developers in building a next-gen SaaS dashboard using React and TypeScript",
                  "Implemented micro-frontend architecture reducing build times by 65% and improving team velocity",
                  "Established comprehensive component testing strategy achieving 92% code coverage",
                  "Mentored junior developers through code reviews and pair programming sessions"
                ]}
                technologies={["React", "TypeScript", "Next.js", "TailwindCSS", "Jest", "Cypress"]}
                isLeft={true}
              />
            </RevealOnScroll>
            
            <RevealOnScroll threshold={0.1} delay={300}>
              <ExperienceCard
                title="Freelance, Full Stack Developer (MEAN & MERN)"
                company="Self-employed"
                period="09/2022 - Present"
                location="New Delhi, INDIA"
                achievements={[
                  "Delivered full-stack applications using Node.js, Express, React, and MongoDB for clients across e-commerce, edtech, and SaaS industries.",
                  "Built RESTful and GraphQL APIs handling 100K+ monthly requests, improving performance by up to 35% through optimized queries and caching.",
                  "Migrated legacy systems to modern JavaScript stacks, reducing technical debt and boosting load speeds by 50%.",
                  "Integrated third-party services (Stripe, Firebase, Auth0, AWS S3) across 15+ client platforms, reducing integration timelines by 40%.",
                  "Automated testing and deployment workflows with Jest, ESLint, Docker, and GitHub Actions, cutting release times by 30%."
                ]}
                technologies={["React", "Node.js", "Express", "MongoDB", "GraphQL", "AWS", "Docker"]}
              />
            </RevealOnScroll>
            
            <RevealOnScroll threshold={0.1} delay={400}>
              <ExperienceCard
                title="UI/UX Developer"
                company="DesignFirst Agency"
                period="06/2021 - 08/2022"
                location="Berlin, Germany (Remote)"
                achievements={[
                  "Developed responsive interfaces for 12+ client websites using modern CSS frameworks",
                  "Created interactive prototypes with Figma that improved client approval rates by 40%",
                  "Collaborated with design team to implement accessibility best practices (WCAG 2.1)",
                  "Optimized frontend performance achieving 90+ Lighthouse scores across projects"
                ]}
                technologies={["HTML5", "CSS3/SCSS", "JavaScript", "Figma", "Sketch", "Adobe XD"]}
                isLeft={true}
              />
            </RevealOnScroll>
            
            <RevealOnScroll threshold={0.1} delay={500}>
              <ExperienceCard
                title="Software Engineer"
                company="Shopti Technologies"
                period="12/2020 - 03/2024"
                location="Remote (India)"
                achievements={[
                  "Designed, developed, and maintained full-stack applications using technologies such as React, Angular, Node.js and MongoDB.",
                  "Designed Robust APIs to enhance functionality and improve overall system efficiency by 30%.",
                  "Created automated dashboards for schools that reduced managing efforts by 70% improving Operational Excellence.",
                  "Designed and maintained database schemas, optimized queries, and ensured data integrity for scalable and efficient applications.",
                  "Implemented CRUD operations and complex database relationships, contributing to improved system performance."
                ]}
                technologies={["React", "Angular", "TypeScript", "Node.js", "MongoDB", "SQL"]}
                isLast={true}
              />
            </RevealOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
