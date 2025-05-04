
import React, { useEffect, useState } from 'react';
import { ArrowDown, Github, Linkedin, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="about" className="relative min-h-screen flex flex-col justify-center items-center pt-16 pb-12 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-slate-50 to-purple-50 z-0"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
          {/* Profile Image */}
          <div className={`lg:col-span-2 flex justify-center lg:justify-end transform ${isVisible ? 'opacity-100' : 'opacity-0 translate-x-[-50px]'} transition-all duration-1000 ease-out`}>
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-portfolio-primary blur-xl opacity-20 animate-pulse-light"></div>
              <img 
                src="./lovable-uploads/profile.png" 
                alt="Rupak Kumar Singh CV" 
                className="w-full max-w-md rounded-lg shadow-xl transform hover:scale-[1.02] transition-transform duration-300"
              />
            </div>
          </div>
          
          {/* Bio Content */}
          <div className={`lg:col-span-3 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-[50px]'} transition-all duration-1000 ease-out delay-300`}>
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-portfolio-dark">
                <span className="inline-block">Hi, I'm </span>
                <span className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-portfolio-primary to-portfolio-secondary">
                  Rupak Kumar Singh
                </span>
              </h1>
              
              <p className="text-xl text-slate-700 max-w-2xl leading-relaxed">
                Software Engineer with 5+ year's experience — 3+ in organizations, 2+ freelancing. 
                Skilled in building scalable web apps and delivering clean, efficient code across diverse projects.
              </p>
              
              <div className="flex flex-wrap gap-4 pt-2">
                <Button asChild className="bg-portfolio-primary hover:bg-portfolio-secondary">
                  <a href="#experience">
                    View Experience
                  </a>
                </Button>
                
                <Button variant="outline" asChild className="border-portfolio-primary text-portfolio-primary hover:bg-portfolio-primary/10">
                  <a href="#contact">
                    Get in Touch
                  </a>
                </Button>
              </div>
              
              <div className="flex items-center pt-4 space-x-6">
                <a 
                  href="https://github.com/rupak577" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-slate-700 hover:text-portfolio-primary transition-colors"
                >
                  <Github size={20} />
                  <span className="sr-only">GitHub</span>
                </a>
                <a 
                  href="https://linkedin.com/in/rupak577" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-slate-700 hover:text-portfolio-primary transition-colors"
                >
                  <Linkedin size={20} />
                  <span className="sr-only">LinkedIn</span>
                </a>
                <a 
                  href="mailto:rupak577@gmail.com" 
                  className="text-slate-700 hover:text-portfolio-primary transition-colors"
                >
                  <Mail size={20} />
                  <span className="sr-only">Email</span>
                </a>
                <a 
                  href="tel:+919871536936" 
                  className="text-slate-700 hover:text-portfolio-primary transition-colors"
                >
                  <Phone size={20} />
                  <span className="sr-only">Phone</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <ArrowDown size={24} className="text-portfolio-primary scroll-indicator" />
      </div>
    </section>
  );
};

export default HeroSection;
