
import React from 'react';
import { ExternalLink, Github, Layout } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import RevealOnScroll from './RevealOnScroll';

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  achievements: string[];
  period: string;
  githubUrl?: string;
  liveUrl?: string;
}

const ProjectCard = ({ 
  title, 
  description, 
  technologies, 
  achievements, 
  period,
  githubUrl,
  liveUrl
}: ProjectCardProps) => {
  return (
    <RevealOnScroll>
      <Card className="h-full hover:shadow-xl transition-all duration-300 border-0 overflow-hidden group">
        <CardContent className="p-8">
          <div className="space-y-5">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors dark:text-white">{title}</h3>
              <span className="text-sm text-slate-500 dark:text-slate-400">{period}</span>
            </div>
            
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">{description}</p>
            
            <ul className="space-y-2 text-slate-700 dark:text-slate-300 list-disc pl-5">
              {achievements.map((achievement, index) => (
                <li key={index}>{achievement}</li>
              ))}
            </ul>
            
            <div className="flex flex-wrap gap-2 pt-4">
              {technologies.map((tech, index) => (
                <Badge key={index} variant="outline" className="bg-blue-50 text-blue-600 border-blue-100 dark:bg-blue-900/20 dark:border-blue-800 dark:text-blue-400">
                  {tech}
                </Badge>
              ))}
            </div>
            
            <div className="flex space-x-6 pt-4">
              {githubUrl && (
                <a 
                  href={githubUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center text-sm text-slate-700 hover:text-blue-600 transition-colors dark:text-slate-300 dark:hover:text-blue-400"
                >
                  <Github size={18} className="mr-2" />
                  <span>View Code</span>
                </a>
              )}
              
              {liveUrl && (
                <a 
                  href={liveUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center text-sm text-slate-700 hover:text-blue-600 transition-colors dark:text-slate-300 dark:hover:text-blue-400"
                >
                  <ExternalLink size={18} className="mr-2" />
                  <span>Live Demo</span>
                </a>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </RevealOnScroll>
  );
};

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 bg-slate-50 dark:bg-slate-800">
      <div className="container mx-auto px-4 md:px-6">
        <RevealOnScroll>
          <div className="text-center mb-16">
            <span className="px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-sm font-medium dark:bg-blue-900/20">PROJECTS</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mt-4">Featured Work</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mt-6"></div>
            <p className="mt-6 text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              Selected projects that showcase my skills and expertise.
            </p>
          </div>
        </RevealOnScroll>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ProjectCard
            title="ERP System"
            description="Complete technical development of both web dashboards and mobile applications."
            period="12/2020 - 03/2023"
            technologies={["React", "Node.js", "AWS EC2", "CI/CD", "Firebase"]}
            achievements={[
              "Led the complete technical development of both web dashboards and mobile applications",
              "Deployed frontend applications using CI/CD pipelines to Nginx on AWS EC2",
              "Deployed backend services via Firebase Cloud Functions for seamless integration"
            ]}
            githubUrl="#"
            liveUrl="#"
          />
          
          <ProjectCard
            title="COINTRIBE"
            description="Spearheaded technical development for scalable web applications, ensuring robust architecture and performance."
            period="12/2020 - 08/2022"
            technologies={["Angular","Node.js","Chart.js", "AWS EC2", "Nginx", "CI/CD"]}
            achievements={[
              "Developed an auto-rejection rule engine that automatically filters out non-eligible loan applications",
              "Designed and implemented dynamic data visualization of bank statements using Chart.js"
            ]}
          />
          
          <ProjectCard
            title="HMAM"
            description="Led end-to-end technical development for web applications, ensuring scalability and reliability."
            period="01/2021 - 12/2021"
            technologies={["Google Cloud Platform", "Cloud Functions", "Mortech APIs","Angular","Node.js"]}
            achievements={[
              "Led end-to-end technical development for web applications",
              "Made key decisions on the technology stack, aligning project requirements",
              "Integrated Mortech APIs to fetch real-time property interest rates"
            ]}
          />
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
