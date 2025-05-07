
import React, { useState } from 'react';
import { Briefcase, Calendar, MapPin, Building, ArrowRight } from "lucide-react";
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
    <Card className="h-full bg-white dark:bg-slate-800/50 backdrop-blur-sm transition-all duration-300 hover:shadow-xl border border-gray-100 dark:border-gray-700 overflow-hidden relative group">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-indigo-500 transform origin-left transition-transform scale-x-0 group-hover:scale-x-100 duration-300"></div>
      <CardContent className="p-6 relative z-10">
        <div className="space-y-4">
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
          
          <ScrollArea className="h-32 pr-4">
            <ul className="space-y-2 text-slate-600 dark:text-slate-300">
              {achievements.map((achievement, index) => (
                <li key={index} className="flex items-start group/item">
                  <ArrowRight size={14} className="mr-2 mt-1 text-blue-600 flex-shrink-0 transform group-hover/item:translate-x-1 transition-transform" />
                  <span className="text-sm">{achievement}</span>
                </li>
              ))}
            </ul>
          </ScrollArea>
          
          {technologies && technologies.length > 0 && (
            <>
              <Separator className="bg-slate-100 dark:bg-slate-700" />
              <div className="flex flex-wrap gap-2">
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
      period: "Sep 2022 - Present",
      location: "New Delhi, INDIA",
      achievements: [
        "Delivered full-stack applications using Node.js, Express, React, and MongoDB for clients across e-commerce, edtech, and SaaS industries",
        "Built RESTful and GraphQL APIs handling 100K+ monthly requests, improving performance by up to 35%",
        "Migrated legacy systems to modern JavaScript stacks, reducing technical debt and boosting load speeds by 50%",
        "Integrated third-party services (Stripe, Firebase, Auth0, AWS S3) across 15+ client platforms"
      ],
      technologies: [
        "React", "Node.js", "Express", "MongoDB", "GraphQL", "AWS", "Docker"
      ]
    },
    {
      title: "Software Engineer",
      company: "Skugal Technologies",
      period: "Dec 2020 - Mar 2024",
      location: "Remote (India)",
      achievements: [
        "Designed, developed, and maintained full-stack applications using React, Angular, Node.js and MongoDB",
        "Designed robust APIs to enhance functionality and improve overall system efficiency by 30%",
        "Created automated dashboards for schools that reduced managing efforts by 70%",
        "Designed and maintained database schemas, optimized queries, and ensured data integrity"
      ],
      technologies: [
        "React", "Angular", "TypeScript", "Node.js", "MongoDB", "SQL"
      ]
    },
    {
      title: "Front-end Developer",
      company: "Digital Solutions Inc.",
      period: "Jan 2019 - Nov 2020",
      location: "Bangalore, India",
      achievements: [
        "Developed responsive web applications using React and Vue.js for enterprise clients",
        "Implemented state management solutions with Redux and Vuex across multiple projects",
        "Collaborated with design team to transform mockups into functional user interfaces",
        "Optimized frontend performance resulting in 40% faster load times"
      ],
      technologies: [
        "React", "Vue.js", "Redux", "CSS3", "SASS", "Webpack"
      ]
    },
    {
      title: "Web Development Intern",
      company: "TechStart Solutions",
      period: "May 2018 - Dec 2018",
      location: "Delhi, India",
      achievements: [
        "Assisted in developing UI components for client websites using HTML, CSS, and JavaScript",
        "Participated in daily stand-ups and agile development processes",
        "Created documentation for code and processes to improve team knowledge sharing",
        "Built small-scale projects under supervision to improve coding practices"
      ],
      technologies: [
        "HTML5", "CSS3", "JavaScript", "jQuery", "Bootstrap"
      ]
    }
  ];

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
            <div className="flex items-center justify-center gap-4 mt-8">
              <CarouselPrevious className="static translate-y-0" />
              <CarouselNext className="static translate-y-0" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
