
import React from 'react';
import { ExternalLink, Github, Layout, Code, FileCode, Terminal, Grid2X2 } from "lucide-react";
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
      <Card className="h-full hover:shadow-xl transition-all duration-300 border-slate-200 dark:border-slate-700 overflow-hidden group">
        {/* Terminal-like header */}
        <div className="bg-slate-800 text-white py-1.5 px-4 flex items-center justify-between">
          <div className="flex items-center space-x-1.5">
            <span className="w-3 h-3 block rounded-full bg-red-500"></span>
            <span className="w-3 h-3 block rounded-full bg-yellow-500"></span>
            <span className="w-3 h-3 block rounded-full bg-green-500"></span>
          </div>
          <div className="flex items-center">
            <Terminal size={14} className="mr-1.5 text-blue-400" />
            <span className="font-mono text-sm">{title.toLowerCase().replace(/\s+/g, '-')}.js</span>
          </div>
          <span className="font-mono text-xs text-slate-400">{period}</span>
        </div>
        
        <CardContent className="p-4 relative z-10">
          <div className="space-y-3">
            <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
              <span className="text-blue-500 font-mono text-xs">// </span>
              {description}
            </p>
            
            <div className="space-y-1">
              <div className="flex items-center mb-1">
                <Code size={14} className="mr-1.5 text-blue-500" />
                <span className="text-xs font-mono text-slate-500 dark:text-slate-400">Achievements:</span>
              </div>
              <ul className="space-y-1 text-slate-700 dark:text-slate-300 list-none pl-4 text-sm">
                {achievements.map((achievement, index) => (
                  <li key={index} className="relative">
                    <span className="text-green-500 absolute left-0 -translate-x-4">→</span>
                    {achievement}
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <div className="flex items-center mb-2">
                <FileCode size={14} className="mr-1.5 text-blue-500" />
                <span className="text-xs font-mono text-slate-500 dark:text-slate-400">Tech Stack:</span>
              </div>
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
    </RevealOnScroll>
  );
};

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-16 bg-slate-50 dark:bg-slate-800">
      <div className="container mx-auto px-4">
        <RevealOnScroll>
          <div className="text-center mb-10">
            <div className="inline-block bg-slate-800 text-white font-mono p-2 rounded-md mb-4">
              <span className="text-blue-400">export default</span> <span className="text-green-400">Projects</span><span className="text-yellow-400">;</span>
            </div>
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Featured Work</h2>
          </div>
        </RevealOnScroll>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
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
        
        {/* Code-like footer */}
        <div className="text-center mt-8">
          <div className="inline-block bg-slate-100 dark:bg-slate-800 font-mono p-2 rounded-md text-xs text-slate-500 dark:text-slate-400">
            <span className="text-blue-500">return</span> (<span className="text-green-500">{"<>"}</span><span className="text-blue-500">...more projects coming soon</span><span className="text-green-500">{"</>"}</span>);
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
