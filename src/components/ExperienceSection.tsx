
import React from 'react';
import { Briefcase, Calendar, MapPin, Building, ArrowRight, Terminal, Code, FileCode } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import RevealOnScroll from './RevealOnScroll';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ScrollArea } from "@/components/ui/scroll-area";

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

interface TimelineExperienceProps {
  title: string;
  company: string;
  period: string;
  location: string;
  achievements: string[];
  technologies?: string[];
}

const TimelineExperience = ({ 
  title, 
  company, 
  period, 
  location, 
  achievements, 
  technologies,
}: TimelineExperienceProps) => {
  return (
    <Card className="h-full bg-white dark:bg-slate-800/50 backdrop-blur-sm transition-all duration-300 hover:shadow-xl border border-slate-200 dark:border-slate-700 overflow-hidden relative group">
      {/* Terminal-like header */}
      <div className="bg-slate-800 text-white py-1.5 px-4 flex items-center justify-between">
        <div className="flex items-center space-x-1.5">
          <span className="w-3 h-3 block rounded-full bg-red-500"></span>
          <span className="w-3 h-3 block rounded-full bg-yellow-500"></span>
          <span className="w-3 h-3 block rounded-full bg-green-500"></span>
        </div>
        <div className="flex items-center text-xs text-slate-400 font-mono">
          <Terminal size={12} className="mr-1.5" />
          <span>{company}.sh</span>
        </div>
        <span className="font-mono text-xs text-slate-400">{period}</span>
      </div>
      
      <CardContent className="p-4 relative z-10">
        <div className="space-y-3">
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
            <div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-blue-600 font-mono transition-colors">
                <span className="text-blue-500 mr-1">&gt;</span> {title}
              </h3>
              <div className="flex items-center mt-1 text-blue-600">
                <Building size={14} className="mr-1" />
                <span className="font-medium text-sm">{company}</span>
                <span className="mx-2 text-slate-400">|</span>
                <MapPin size={14} className="mr-1" />
                <span className="text-sm text-slate-500 dark:text-slate-400">{location}</span>
              </div>
            </div>
          </div>
          
          <ScrollArea className="h-28 pr-4 border-l-2 border-blue-200 dark:border-blue-800 pl-3">
            <ul className="space-y-1 text-slate-600 dark:text-slate-300">
              {achievements.map((achievement, index) => (
                <li key={index} className="flex items-start group/item text-sm">
                  <Code size={12} className="mr-2 mt-1 text-blue-500 flex-shrink-0" />
                  <span>{achievement}</span>
                </li>
              ))}
            </ul>
          </ScrollArea>
          
          {technologies && technologies.length > 0 && (
            <>
              <div className="flex items-center">
                <FileCode size={14} className="mr-2 text-blue-500" />
                <span className="text-xs font-mono text-slate-500 dark:text-slate-400">// Tech Stack</span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {technologies.map((tech, index) => (
                  <TechBadge key={index} name={tech} />
                ))}
              </div>
            </>
          )}
        </div>
      </CardContent>
    </Card>
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
        {/* Code-like section header */}
        <RevealOnScroll threshold={0.1}>
          <div className="text-center mb-10">
            <div className="inline-block bg-slate-800 text-white font-mono p-2 rounded-md mb-4">
              <span className="text-blue-400">const</span> <span className="text-green-400">experience</span> <span className="text-blue-400">=</span> <span className="text-yellow-400">{"{"}</span>
            </div>
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Professional Journey</h2>
            <div className="max-w-2xl mx-auto mt-4 px-4 py-2 bg-slate-100 dark:bg-slate-700/50 rounded-md">
              <code className="text-sm text-slate-600 dark:text-slate-300 font-mono">
                <span className="text-blue-500">function</span> <span className="text-green-500">showExperience</span><span className="text-yellow-500">()</span> <span className="text-blue-500">{" {"}</span> <span className="text-slate-400">// My career timeline</span>
              </code>
            </div>
          </div>
        </RevealOnScroll>
        
        <div className="max-w-5xl mx-auto px-4">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {experiences.map((exp, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <div className="h-full">
                    <RevealOnScroll threshold={0.1} delay={index * 100} direction="right">
                      <TimelineExperience
                        title={exp.title}
                        company={exp.company}
                        period={exp.period}
                        location={exp.location}
                        achievements={exp.achievements}
                        technologies={exp.technologies}
                      />
                    </RevealOnScroll>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex items-center justify-center gap-4 mt-6">
              <CarouselPrevious className="static translate-y-0" />
              <CarouselNext className="static translate-y-0" />
            </div>
          </Carousel>
        </div>
        
        {/* Code-like footer */}
        <div className="text-center mt-8">
          <div className="inline-block bg-slate-800 text-white font-mono p-2 rounded-md">
            <span className="text-yellow-400">{"}"}</span><span className="text-blue-400">;</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
