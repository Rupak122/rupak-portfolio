
import React, { useEffect, useState } from 'react';
import { ArrowDown, Github, Linkedin, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import TypewriterText from './TypewriterText';
import RevealOnScroll from './RevealOnScroll';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [typingComplete, setTypingComplete] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleTypingComplete = () => {
    setTypingComplete(true);
  };

  return (
    <section id="about" className="relative min-h-screen flex flex-col justify-center items-center pt-16 pb-12 overflow-hidden">
      {/* Professional gradient background */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 z-0"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
          {/* Profile Image with professional frame */}
          <div className={`lg:col-span-2 flex justify-center lg:justify-end transform ${isVisible ? 'opacity-100' : 'opacity-0 translate-x-[-50px]'} transition-all duration-1000 ease-out`}>
            <div className="relative group">
              <div className="absolute -inset-0.5 rounded-xl bg-gradient-to-r from-blue-400 to-blue-600 opacity-70 group-hover:opacity-100 transition-opacity duration-700"></div>
              <div className="relative bg-white dark:bg-slate-800 rounded-xl p-1">
                <img 
                  src="./lovable-uploads/profile.png" 
                  alt="Rupak Kumar Singh" 
                  className="relative w-full max-w-sm rounded-lg shadow-lg transform group-hover:scale-[1.02] transition-all duration-500"
                />
              </div>
            </div>
          </div>
          
          {/* Bio Content with professional typography */}
          <div className="lg:col-span-3 space-y-8">
            <div className={`${isVisible ? 'opacity-100' : 'opacity-0 translate-y-[30px]'} transition-all duration-1000 ease-out delay-300`}>
              <h2 className="text-sm font-medium text-blue-600 tracking-wider mb-2">SOFTWARE ENGINEER</h2>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white">
                <span className="inline-block">Hi, I'm </span>
                <TypewriterText text="Rupak Kumar Singh" delay={100} onComplete={handleTypingComplete} />
              </h1>
            </div>
            
            <p className={`text-xl text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed font-light ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-[30px]'} transition-all duration-1000 ease-out delay-500`}>
              Software Engineer with 5+ year's experience — 3+ in organizations, 2+ freelancing. 
              Skilled in building scalable web apps and delivering clean, efficient code across diverse projects.
            </p>
            
            <div className={`flex flex-wrap gap-4 pt-2 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-[30px]'} transition-all duration-1000 ease-out delay-700`}>
              <Button asChild className="bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-blue-400/20 transition-all duration-300">
                <a href="#experience">
                  View Experience
                </a>
              </Button>
              
              <Button variant="outline" asChild className="border-blue-200 bg-white/50 text-blue-600 hover:bg-blue-50 hover:text-blue-700 transition-all duration-300 dark:border-blue-800 dark:bg-slate-900/50 dark:text-blue-400 dark:hover:bg-slate-800">
                <a href="#contact">
                  Get in Touch
                </a>
              </Button>
            </div>
            
            {/* Social links with professional hover effects */}
            <div className={`flex items-center pt-4 space-x-6 ${isVisible && typingComplete ? 'opacity-100' : 'opacity-0 translate-y-[30px]'} transition-all duration-1000 ease-out`}>
              <a 
                href="https://github.com/rupak122" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-slate-500 hover:text-blue-600 transform hover:scale-110 transition-all duration-300 relative group"
              >
                <span className="absolute -inset-2 rounded-full bg-slate-100 dark:bg-slate-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                <Github size={20} className="relative" />
                <span className="sr-only">GitHub</span>
              </a>
              <a 
                href="https://linkedin.com/in/rupak8770985" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-slate-500 hover:text-blue-600 transform hover:scale-110 transition-all duration-300 relative group"
              >
                <span className="absolute -inset-2 rounded-full bg-slate-100 dark:bg-slate-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                <Linkedin size={20} className="relative" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a 
                href="mailto:rupak8770985@gmail.com" 
                className="text-slate-500 hover:text-blue-600 transform hover:scale-110 transition-all duration-300 relative group"
              >
                <span className="absolute -inset-2 rounded-full bg-slate-100 dark:bg-slate-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                <Mail size={20} className="relative" />
                <span className="sr-only">Email</span>
              </a>
              <a 
                href="tel:+919871510636" 
                className="text-slate-500 hover:text-blue-600 transform hover:scale-110 transition-all duration-300 relative group"
              >
                <span className="absolute -inset-2 rounded-full bg-slate-100 dark:bg-slate-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                <Phone size={20} className="relative" />
                <span className="sr-only">Phone</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Animated Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <ArrowDown size={24} className="text-blue-600 animate-bounce" />
      </div>
    </section>
  );
};

export default HeroSection;
