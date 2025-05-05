
import React, { useEffect, useState } from 'react';
import { ArrowDown, Github, Linkedin, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import RevealOnScroll from './RevealOnScroll';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="about" className="relative min-h-screen flex flex-col justify-center items-center pt-16 pb-12 overflow-hidden">
      {/* Elegant gradient background with pleasant colors */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-50 via-indigo-50 to-blue-50 z-0"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-purple-200 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-indigo-200 rounded-full filter blur-3xl opacity-20 animate-pulse-light"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
          {/* Profile Image with elegant animation */}
          <div className={`lg:col-span-2 flex justify-center lg:justify-end transform ${isVisible ? 'opacity-100' : 'opacity-0 translate-x-[-50px]'} transition-all duration-1000 ease-out`}>
            <div className="relative group">
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-violet-300 to-indigo-300 blur-xl opacity-30 group-hover:opacity-40 transition-opacity duration-700"></div>
              <div className="absolute -inset-0.5 rounded-xl bg-gradient-to-r from-violet-400 to-indigo-400 opacity-0 group-hover:opacity-30 transition-opacity duration-700 blur-sm"></div>
              <img 
                src="./lovable-uploads/profile.png" 
                alt="Rupak Kumar Singh CV" 
                className="relative w-full max-w-sm rounded-xl shadow-xl transform group-hover:scale-[1.02] transition-all duration-500"
              />
            </div>
          </div>
          
          {/* Bio Content with staggered animations */}
          <div className="lg:col-span-3 space-y-8">
            <div className={`${isVisible ? 'opacity-100' : 'opacity-0 translate-y-[30px]'} transition-all duration-1000 ease-out delay-300`}>
              <h2 className="text-sm font-medium text-indigo-600 tracking-wider uppercase mb-2">Software Engineer</h2>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-800">
                <span className="inline-block">Hi, I'm </span>
                <span className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-violet-500 to-indigo-500">
                  Rupak Kumar Singh
                </span>
              </h1>
            </div>
            
            <p className={`text-xl text-slate-600 max-w-2xl leading-relaxed ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-[30px]'} transition-all duration-1000 ease-out delay-500`}>
              Software Engineer with 5+ year's experience — 3+ in organizations, 2+ freelancing. 
              Skilled in building scalable web apps and delivering clean, efficient code across diverse projects.
            </p>
            
            <div className={`flex flex-wrap gap-4 pt-2 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-[30px]'} transition-all duration-1000 ease-out delay-700`}>
              <Button asChild className="bg-violet-600 hover:bg-violet-700 shadow-lg shadow-violet-200 hover:shadow-violet-300 transition-all duration-300">
                <a href="#experience">
                  View Experience
                </a>
              </Button>
              
              <Button variant="outline" asChild className="border-violet-300 text-violet-700 hover:bg-violet-50 hover:text-violet-800 transition-all duration-300">
                <a href="#contact">
                  Get in Touch
                </a>
              </Button>
            </div>
            
            <div className={`flex items-center pt-4 space-x-6 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-[30px]'} transition-all duration-1000 ease-out delay-900`}>
              <a 
                href="https://github.com/rupak122" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-slate-600 hover:text-violet-600 transform hover:scale-110 transition-all duration-300"
              >
                <Github size={20} />
                <span className="sr-only">GitHub</span>
              </a>
              <a 
                href="https://linkedin.com/in/rupak8770985" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-slate-600 hover:text-violet-600 transform hover:scale-110 transition-all duration-300"
              >
                <Linkedin size={20} />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a 
                href="mailto:rupak8770985@gmail.com" 
                className="text-slate-600 hover:text-violet-600 transform hover:scale-110 transition-all duration-300"
              >
                <Mail size={20} />
                <span className="sr-only">Email</span>
              </a>
              <a 
                href="tel:+919871510636" 
                className="text-slate-600 hover:text-violet-600 transform hover:scale-110 transition-all duration-300"
              >
                <Phone size={20} />
                <span className="sr-only">Phone</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Animated Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <ArrowDown size={24} className="text-violet-500 animate-bounce" />
      </div>
    </section>
  );
};

export default HeroSection;
