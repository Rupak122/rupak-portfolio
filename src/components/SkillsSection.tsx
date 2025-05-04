
import React, { useEffect, useRef, useState } from 'react';
import { Code, Database, Layout, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface SkillCategoryProps {
  title: string;
  icon: React.ReactNode;
  skills: Array<{ name: string; level: number }>;
}

const SkillCategory = ({ title, icon, skills }: SkillCategoryProps) => {
  const [animate, setAnimate] = useState(false);
  const categoryRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setAnimate(true);
      }
    }, { threshold: 0.2 });
    
    const currentRef = categoryRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }
    
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);
  
  return (
    <Card className="hover:shadow-md transition-all duration-300" ref={categoryRef}>
      <CardContent className="p-6">
        <div className="flex items-center mb-4">
          <div className="mr-4 p-2 bg-purple-100 rounded-lg">
            {icon}
          </div>
          <h3 className="text-xl font-bold text-portfolio-dark">{title}</h3>
        </div>
        
        <div className="space-y-4">
          {skills.map((skill, index) => (
            <div key={index} className="space-y-1">
              <div className="flex justify-between">
                <span className="font-medium text-slate-700">{skill.name}</span>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      size={14}
                      className={`${i < skill.level ? 'text-portfolio-primary' : 'text-slate-300'}`}
                      fill={i < skill.level ? 'currentColor' : 'none'}
                    />
                  ))}
                </div>
              </div>
              <div className="skill-bar-bg">
                <div 
                  className="skill-bar" 
                  style={{ 
                    width: animate ? `${skill.level * 20}%` : '0%',
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

const SkillsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });
    
    const currentSection = sectionRef.current;
    if (currentSection) {
      observer.observe(currentSection);
    }
    
    return () => {
      if (currentSection) {
        observer.unobserve(currentSection);
      }
    };
  }, []);
  
  const frontendSkills = [
    { name: "React", level: 5 },
    { name: "Angular", level: 4 },
    { name: "TypeScript", level: 5 },
    { name: "JavaScript", level: 5 },
  ];
  
  const backendSkills = [
    { name: "Node.js", level: 5 },
    { name: "Express.js", level: 5 },
    { name: "TypeScript", level: 5 },
    { name: "JavaScript", level: 5 },
  ];
  
  const databaseSkills = [
    { name: "MongoDB", level: 5 },
    { name: "SQL", level: 4 },
    { name: "Firebase", level: 4 },
  ];
  
  const devOpsSkills = [
    { name: "AWS", level: 4 },
    { name: "Docker", level: 4 },
    { name: "Kubernetes", level: 3 },
    { name: "Nginx", level: 4 },
  ];
  
  return (
    <section id="skills" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 reveal" ref={sectionRef}>
          <div className="inline-block p-2 bg-purple-100 rounded-lg mb-4">
            <Code size={24} className="text-portfolio-primary" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-portfolio-dark">Technical Skills</h2>
          <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
            My technical toolkit that I've developed and refined over the years.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 reveal">
          <SkillCategory 
            title="Frontend Development" 
            icon={<Layout size={24} className="text-portfolio-primary" />}
            skills={frontendSkills}
          />
          
          <SkillCategory 
            title="Backend Development" 
            icon={<Code size={24} className="text-portfolio-primary" />}
            skills={backendSkills}
          />
          
          <SkillCategory 
            title="Databases" 
            icon={<Database size={24} className="text-portfolio-primary" />}
            skills={databaseSkills}
          />
          
          <SkillCategory 
            title="DevOps" 
            icon={<Code size={24} className="text-portfolio-primary" />}
            skills={devOpsSkills}
          />
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
