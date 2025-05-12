
import React from 'react';
import { Briefcase, Calendar, MapPin, Building } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import RevealOnScroll from './RevealOnScroll';
import GlowingBorder from './animations/GlowingBorder';

interface TimelineExperienceProps {
  title: string;
  company: string;
  period: string;
  location: string;
  achievements: string[];
  technologies?: string[];
  isLeft: boolean;
}

const TimelineExperience = ({ 
  title, 
  company, 
  period, 
  location, 
  achievements, 
  technologies,
  isLeft
}: TimelineExperienceProps) => {
  return (
    <div className={`flex w-full ${isLeft ? 'flex-row' : 'flex-row-reverse'}`}>
      {/* Timeline center line with dot */}
      <div className="flex-none w-6 relative flex justify-center">
        <div className="h-full w-[2px] bg-blue-200 dark:bg-blue-800 absolute"></div>
        <div className="w-4 h-4 rounded-full bg-blue-500 relative z-10 top-10 shadow-md"></div>
      </div>
      
      {/* Content area taking 50% width */}
      <div className={`w-[calc(50%-1.5rem)] ${isLeft ? 'pr-6' : 'pl-6'}`}>
        <RevealOnScroll threshold={0.1} direction={isLeft ? "left" : "right"}>
          <GlowingBorder elegant={true}>
            <div className="bg-white dark:bg-slate-800 rounded-lg shadow-md overflow-hidden">
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-slate-700 dark:to-slate-800 p-4">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                  {title}
                </h3>
                <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 mt-1 flex-wrap">
                  <div className="flex items-center">
                    <Building size={14} className="mr-1 text-blue-500" />
                    <span className="font-medium text-sm text-blue-600 dark:text-blue-400">{company}</span>
                  </div>
                  <div className="hidden sm:block text-slate-400">|</div>
                  <div className="flex items-center">
                    <MapPin size={14} className="mr-1 text-slate-500" />
                    <span className="text-sm text-slate-500 dark:text-slate-400">{location}</span>
                  </div>
                  <div className="hidden sm:block text-slate-400">|</div>
                  <div className="flex items-center">
                    <Calendar size={14} className="mr-1 text-slate-500" />
                    <span className="text-sm text-slate-500 dark:text-slate-400">{period}</span>
                  </div>
                </div>
              </div>
              
              <div className="p-4 relative z-10">
                <div className="max-h-48 overflow-y-auto pr-2">
                  <ul className="space-y-2 text-slate-600 dark:text-slate-300">
                    {achievements.map((achievement, index) => (
                      <li key={index} className="flex items-start text-sm">
                        <span className="text-blue-500 mr-2">•</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                {technologies && technologies.length > 0 && (
                  <div className="mt-3 pt-3 border-t border-slate-100 dark:border-slate-700">
                    <h4 className="text-xs font-semibold text-slate-500 dark:text-slate-400 mb-2">TECHNOLOGIES</h4>
                    <div className="flex flex-wrap gap-1.5">
                      {technologies.map((tech, index) => (
                        <Badge 
                          key={index}
                          variant="outline" 
                          className="bg-blue-50 text-blue-600 border-blue-100 hover:bg-blue-100 dark:bg-blue-900/20 dark:border-blue-800 dark:text-blue-400 transition-all duration-300"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </GlowingBorder>
        </RevealOnScroll>
      </div>
    </div>
  );
};

const ExperienceSection = () => {
  const experiences = [
    {
      title: "Full Stack Developer",
      company: "Self-employed",
      period: "2022-Present",
      location: "New Delhi, INDIA",
      achievements: [
        "Delivered full-stack apps using Node.js, Express, React, MongoDB",
        "Built RESTful/GraphQL APIs handling 100K+ monthly requests, 35% faster",
        "Migrated legacy systems to modern JS, reducing load times by 50%",
        "Integrated third-party services across 15+ client platforms"
      ],
      technologies: [
        "React", "Node.js", "Express", "MongoDB", "GraphQL", "AWS", "Docker"
      ]
    },
    {
      title: "Software Engineer",
      company: "Skugal",
      period: "2020-2024",
      location: "Remote",
      achievements: [
        "Built full-stack apps with React, Angular, Node.js, MongoDB",
        "Designed APIs improving system efficiency by 30%",
        "Created automated school dashboards reducing effort by 70%",
        "Optimized DB schemas and queries for performance"
      ],
      technologies: [
        "React", "Angular", "TypeScript", "Node.js", "MongoDB", "SQL"
      ]
    },
    {
      title: "Front-end Developer",
      company: "Digital Solutions",
      period: "2019-2020",
      location: "Bangalore",
      achievements: [
        "Developed responsive web apps using React and Vue.js",
        "Implemented Redux/Vuex state management solutions",
        "Transformed mockups into functional UIs",
        "Optimized frontend for 40% faster load times"
      ],
      technologies: [
        "React", "Vue.js", "Redux", "CSS3", "SASS", "Webpack"
      ]
    },
    {
      title: "Web Dev Intern",
      company: "TechStart",
      period: "2018",
      location: "Delhi",
      achievements: [
        "Built UI components with HTML, CSS, and JavaScript",
        "Participated in agile development processes",
        "Created documentation for code and processes",
        "Developed small projects under supervision"
      ],
      technologies: [
        "HTML5", "CSS3", "JavaScript", "jQuery", "Bootstrap"
      ]
    }
  ];

  return (
    <section id="experience" className="py-16 bg-slate-50 dark:bg-slate-800 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <RevealOnScroll threshold={0.1}>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Professional Journey</h2>
            <div className="w-20 h-1 bg-blue-500 mx-auto mt-4"></div>
            <p className="mt-4 text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              A timeline of my professional experience and key achievements
            </p>
          </div>
        </RevealOnScroll>
        
        <div className="max-w-5xl mx-auto">
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <TimelineExperience
                key={index}
                title={exp.title}
                company={exp.company}
                period={exp.period}
                location={exp.location}
                achievements={exp.achievements}
                technologies={exp.technologies}
                isLeft={index % 2 === 0}
              />
            ))}
            
            {/* Final dot at the end of timeline */}
            <div className="flex justify-center">
              <div className="w-6 flex justify-center">
                <div className="w-4 h-4 rounded-full bg-blue-200 dark:bg-blue-800"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
