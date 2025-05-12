
import React from 'react';
import { Briefcase, Calendar, MapPin, Building, ArrowDown } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import RevealOnScroll from './RevealOnScroll';

interface ExperienceProps {
  title: string;
  company: string;
  period: string;
  location: string;
  achievements: string[];
  technologies?: string[];
  isActive?: boolean;
}

const TimelineItem = ({ 
  title, 
  company, 
  period, 
  location, 
  achievements, 
  technologies,
  isActive = false
}: ExperienceProps) => {
  return (
    <div className="relative">
      {/* Timeline line */}
      <div className="absolute left-6 top-0 w-1 h-full bg-blue-200 dark:bg-blue-900/50"></div>
      
      {/* Timeline dot */}
      <div className="absolute left-4 top-8 w-5 h-5 rounded-full border-4 border-white bg-blue-500 dark:border-slate-900 z-10"></div>
      
      <div className={`ml-16 pb-12 relative ${isActive ? 'opacity-100' : 'opacity-80 hover:opacity-100 transition-opacity'}`}>
        <RevealOnScroll animation="slide" direction="right">
          <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg border border-slate-200 dark:border-slate-700 relative">
            <div className={`absolute -left-2 top-8 w-8 h-1 ${isActive ? 'bg-blue-600 dark:bg-blue-500' : 'bg-blue-300 dark:bg-blue-700'}`}></div>
            
            <div className="flex flex-col md:flex-row md:items-center gap-3 md:gap-6 md:justify-between mb-4">
              <div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">{title}</h3>
                <div className="flex items-center text-blue-600 dark:text-blue-400 mt-1">
                  <Building size={16} className="mr-1" />
                  <span className="font-medium">{company}</span>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-3 text-sm">
                <div className="flex items-center px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300">
                  <Calendar size={14} className="mr-1" />
                  <span>{period}</span>
                </div>
                
                <div className="flex items-center px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300">
                  <MapPin size={14} className="mr-1" />
                  <span>{location}</span>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <ul className="space-y-2 text-slate-600 dark:text-slate-300">
                {achievements.map((achievement, index) => (
                  <li key={index} className="flex items-start text-sm">
                    <span className="text-blue-500 mr-2 mt-1">•</span>
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
              
              {technologies && technologies.length > 0 && (
                <div>
                  <h4 className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase mb-3">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {technologies.map((tech, index) => (
                      <Badge 
                        key={index}
                        variant="outline" 
                        className="bg-gradient-to-r from-slate-50 to-white text-slate-700 border-slate-200 hover:bg-slate-100 dark:from-slate-800 dark:to-slate-700 dark:text-slate-300 dark:border-slate-600"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
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
      ],
      isActive: true
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
    <section id="experience" className="py-20 bg-gradient-to-b from-slate-50 to-white dark:from-slate-800 dark:to-slate-900 relative">
      <div className="container mx-auto px-4 relative z-10">
        <RevealOnScroll threshold={0.1}>
          <div className="text-center mb-16">
            <div className="inline-block">
              <span className="text-xs font-semibold text-blue-600 dark:text-blue-400 tracking-wider uppercase bg-blue-100 dark:bg-blue-900/30 py-1 px-3 rounded-full mb-3 inline-block">Experience</span>
            </div>
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white">Professional Journey</h2>
            <div className="max-w-2xl mx-auto mt-4">
              <p className="text-slate-600 dark:text-slate-400">
                A timeline of my professional experience and key achievements
              </p>
            </div>
          </div>
        </RevealOnScroll>
        
        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <TimelineItem
              key={index}
              title={exp.title}
              company={exp.company}
              period={exp.period}
              location={exp.location}
              achievements={exp.achievements}
              technologies={exp.technologies}
              isActive={exp.isActive}
            />
          ))}
          
          {/* Timeline end */}
          <div className="relative ml-16">
            <div className="absolute -left-12 -top-2 w-5 h-5 rounded-full border-4 border-white bg-blue-200 dark:border-slate-900 dark:bg-blue-800 z-10"></div>
            <div className="text-slate-500 dark:text-slate-400 text-sm italic">Beginning of career</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
