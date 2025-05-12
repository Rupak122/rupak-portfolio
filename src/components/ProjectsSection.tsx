
import React from 'react';
import { ExternalLink, Github, Layout, Code, FileCode } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import RevealOnScroll from './RevealOnScroll';
import GlowingBorder from './animations/GlowingBorder';

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
      <GlowingBorder elegant={true}>
        <Card className="h-full hover:shadow-xl transition-all duration-300 border-slate-200 dark:border-slate-700 overflow-hidden group">
          <div className="bg-gradient-to-r from-indigo-50 to-blue-50 dark:from-slate-800 dark:to-slate-700 p-4">
            <h3 className="font-bold text-xl text-slate-800 dark:text-white">{title}</h3>
            <p className="text-sm text-slate-500 dark:text-slate-400">{period}</p>
          </div>
          
          <CardContent className="p-4 relative z-10">
            <div className="space-y-4">
              <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                {description}
              </p>
              
              <div className="space-y-2">
                <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-200">Achievements</h4>
                <ul className="space-y-1 text-slate-700 dark:text-slate-300 list-disc pl-5 text-sm">
                  {achievements.map((achievement, index) => (
                    <li key={index}>
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-200 mb-2">Tech Stack</h4>
                <div className="flex flex-wrap gap-1.5">
                  {technologies.map((tech, index) => (
                    <Badge key={index} variant="outline" className="bg-slate-100 text-slate-700 border-slate-200 hover:bg-slate-200 dark:bg-slate-800 dark:border-slate-700 dark:text-slate-300 text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
              
              <div className="flex space-x-4 pt-2 border-t border-slate-100 dark:border-slate-700 mt-3">
                {githubUrl && (
                  <a 
                    href={githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center text-xs text-slate-700 hover:text-blue-600 transition-colors dark:text-slate-300 dark:hover:text-blue-400"
                  >
                    <Github size={16} className="mr-1.5" />
                    <span>View Code</span>
                  </a>
                )}
                
                {liveUrl && (
                  <a 
                    href={liveUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center text-xs text-slate-700 hover:text-blue-600 transition-colors dark:text-slate-300 dark:hover:text-blue-400"
                  >
                    <ExternalLink size={16} className="mr-1.5" />
                    <span>Live Demo</span>
                  </a>
                )}
              </div>
            </div>
          </CardContent>
        </Card>
      </GlowingBorder>
    </RevealOnScroll>
  );
};

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-16 bg-slate-50 dark:bg-slate-800">
      <div className="container mx-auto px-4">
        <RevealOnScroll>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Featured Work</h2>
            <div className="w-20 h-1 bg-blue-500 mx-auto mt-4"></div>
            <p className="mt-4 text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              A selection of my most impactful projects and contributions
            </p>
          </div>
        </RevealOnScroll>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ProjectCard
            title="ERP System"
            description="Complete technical development of web dashboards and mobile applications for enterprise resource planning."
            period="2020-2023"
            technologies={["React", "Node.js", "AWS EC2", "CI/CD", "Firebase"]}
            achievements={[
              "Led development of web dashboards and mobile apps",
              "Deployed frontend with CI/CD to AWS EC2",
              "Integrated with Firebase Cloud Functions"
            ]}
            githubUrl="#"
            liveUrl="#"
          />
          
          <ProjectCard
            title="COINTRIBE"
            description="Spearheaded technical development for scalable web applications with robust architecture."
            period="2020-2022"
            technologies={["Angular","Node.js","Chart.js", "AWS EC2", "Nginx"]}
            achievements={[
              "Developed auto-rejection rule engine for loan applications",
              "Implemented dynamic data viz for bank statements with Chart.js"
            ]}
          />
          
          <ProjectCard
            title="HMAM"
            description="Led end-to-end technical development for web applications with focus on scalability."
            period="2021-2021"
            technologies={["GCP", "Cloud Functions", "Mortech APIs","Angular","Node.js"]}
            achievements={[
              "Led end-to-end technical development",
              "Made key decisions on technology stack",
              "Integrated Mortech APIs for real-time property rates"
            ]}
          />
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
