
import React from 'react';
import { ExternalLink, Github, Layout, Code, FileCode } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import RevealOnScroll from './RevealOnScroll';

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  achievements: string[];
  period: string;
  githubUrl?: string;
  liveUrl?: string;
  index: number;
}

const ProjectCard = ({ 
  title, 
  description, 
  technologies, 
  achievements, 
  period,
  githubUrl,
  liveUrl,
  index
}: ProjectCardProps) => {
  const isEven = index % 2 === 0;
  
  return (
    <RevealOnScroll animation="slide" direction={isEven ? "left" : "right"}>
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-blue-500/10 transform rotate-1 rounded-2xl"></div>
        <div className="relative bg-white dark:bg-slate-800 overflow-hidden shadow-xl rounded-xl border border-slate-200 dark:border-slate-700 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
          <div className={`absolute h-full w-2 ${isEven ? 'bg-blue-500' : 'bg-indigo-500'} left-0 top-0`}></div>
          
          <div className="p-6 md:p-8">
            <div className="flex flex-wrap justify-between items-start gap-4 mb-6">
              <div>
                <h3 className="font-bold text-2xl text-slate-800 dark:text-white mb-2">{title}</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 flex items-center">
                  <span className="inline-block w-2 h-2 rounded-full bg-blue-500 mr-2"></span>
                  {period}
                </p>
              </div>
              
              <div className="flex space-x-3">
                {githubUrl && (
                  <a 
                    href={githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-2 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-full hover:bg-blue-100 dark:hover:bg-blue-900/30 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    <Github size={20} />
                  </a>
                )}
                
                {liveUrl && (
                  <a 
                    href={liveUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-2 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-full hover:bg-blue-100 dark:hover:bg-blue-900/30 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    <ExternalLink size={20} />
                  </a>
                )}
              </div>
            </div>
            
            <p className="text-slate-600 dark:text-slate-300 mb-6">
              {description}
            </p>
            
            <div className="space-y-4 mb-6">
              <h4 className="text-lg font-semibold text-slate-800 dark:text-slate-200">Key Achievements</h4>
              <ul className="space-y-2 text-slate-700 dark:text-slate-300">
                {achievements.map((achievement, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-blue-500 mr-2 mt-1">•</span>
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-200 mb-3">Technologies Used</h4>
              <div className="flex flex-wrap gap-2">
                {technologies.map((tech, index) => (
                  <span 
                    key={index} 
                    className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-600 dark:from-blue-900/20 dark:to-indigo-900/20 dark:text-blue-400 border border-blue-100 dark:border-blue-900/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </RevealOnScroll>
  );
};

const ProjectsSection = () => {
  const projects = [
    {
      title: "ERP System",
      description: "Complete technical development of web dashboards and mobile applications for enterprise resource planning.",
      period: "2020-2023",
      technologies: ["React", "Node.js", "AWS EC2", "CI/CD", "Firebase"],
      achievements: [
        "Led development of web dashboards and mobile apps",
        "Deployed frontend with CI/CD to AWS EC2",
        "Integrated with Firebase Cloud Functions"
      ],
      githubUrl: "#",
      liveUrl: "#"
    },
    {
      title: "COINTRIBE",
      description: "Spearheaded technical development for scalable web applications with robust architecture.",
      period: "2020-2022",
      technologies: ["Angular","Node.js","Chart.js", "AWS EC2", "Nginx"],
      achievements: [
        "Developed auto-rejection rule engine for loan applications",
        "Implemented dynamic data viz for bank statements with Chart.js"
      ]
    },
    {
      title: "HMAM",
      description: "Led end-to-end technical development for web applications with focus on scalability.",
      period: "2021-2021",
      technologies: ["GCP", "Cloud Functions", "Mortech APIs","Angular","Node.js"],
      achievements: [
        "Led end-to-end technical development",
        "Made key decisions on technology stack",
        "Integrated Mortech APIs for real-time property rates"
      ]
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-slate-50 to-white dark:from-slate-800 dark:to-slate-900 relative">
      <div className="container mx-auto px-4">
        <RevealOnScroll>
          <div className="text-center mb-16">
            <div className="inline-block">
              <span className="text-xs font-semibold text-purple-600 dark:text-purple-400 tracking-wider uppercase bg-purple-100 dark:bg-purple-900/30 py-1 px-3 rounded-full mb-3 inline-block">Portfolio</span>
            </div>
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white">Featured Work</h2>
            <div className="max-w-2xl mx-auto mt-4">
              <p className="text-slate-600 dark:text-slate-400">
                A selection of my most impactful projects and contributions
              </p>
            </div>
          </div>
        </RevealOnScroll>
        
        <div className="space-y-16">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              index={index}
              title={project.title}
              description={project.description}
              period={project.period}
              technologies={project.technologies}
              achievements={project.achievements}
              githubUrl={project.githubUrl}
              liveUrl={project.liveUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
