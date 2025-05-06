
import React, { useEffect, useState } from 'react';
import { ArrowDown, Github, Linkedin, Mail, Phone, Code, Terminal, Database, Server } from "lucide-react";
import { Button } from "@/components/ui/button";
import TypewriterText from './TypewriterText';
import RevealOnScroll from './RevealOnScroll';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [typingComplete, setTypingComplete] = useState(false);
  const [showIcons, setShowIcons] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    const iconsTimer = setTimeout(() => {
      setShowIcons(true);
    }, 2500);
    
    return () => clearTimeout(iconsTimer);
  }, []);

  const handleTypingComplete = () => {
    setTypingComplete(true);
  };

  return (
    <section id="about" className="relative min-h-screen flex flex-col justify-center items-center pt-16 pb-12 overflow-hidden">
      {/* Figma-inspired gradient background */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 z-0"></div>
      
      {/* Code grid pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxjaXJjbGUgY3g9IjIwIiBjeT0iMjAiIHI9IjEiIGZpbGw9InJnYmEoMCwwLDAsMC4xKSIvPjwvZz48L3N2Zz4=')] opacity-50"></div>
      
      {/* Floating tech icons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {showIcons && (
          <>
            <div className="absolute top-[15%] left-[10%] animate-float opacity-20 dark:opacity-30">
              <Code size={36} className="text-blue-500" />
            </div>
            <div className="absolute top-[25%] right-[15%] animate-float-delay-1 opacity-20 dark:opacity-30">
              <Terminal size={48} className="text-purple-500" />
            </div>
            <div className="absolute bottom-[30%] left-[20%] animate-float-delay-2 opacity-20 dark:opacity-30">
              <Database size={40} className="text-green-500" />
            </div>
            <div className="absolute bottom-[20%] right-[25%] animate-float-delay-3 opacity-20 dark:opacity-30">
              <Server size={32} className="text-orange-500" />
            </div>
          </>
        )}
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
          {/* Profile Image with Figma-style frame */}
          <div className={`lg:col-span-2 flex justify-center lg:justify-end transform ${isVisible ? 'opacity-100' : 'opacity-0 translate-x-[-50px]'} transition-all duration-1000 ease-out`}>
            <div className="relative group">
              <div className="absolute -inset-0.5 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 opacity-70 group-hover:opacity-100 transition-opacity duration-700 animate-pulse"></div>
              <div className="relative">
                <div className="bg-white dark:bg-slate-800 rounded-t-xl h-8 flex items-center px-3 border-b border-slate-200 dark:border-slate-700">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="ml-3 text-xs text-slate-500 dark:text-slate-400 font-mono">profile.fig</div>
                </div>
                <div className="p-1 bg-white dark:bg-slate-800 rounded-b-xl">
                  <img 
                    src="./lovable-uploads/profile.png" 
                    alt="Rupak Kumar Singh CV" 
                    className="relative w-full max-w-sm rounded-lg shadow-xl transform group-hover:scale-[1.02] transition-all duration-500"
                  />
                </div>
              </div>
              
              {/* Code decorations */}
              <div className="absolute -right-12 -top-10 opacity-40 hidden lg:block">
                <div className="text-xs font-mono text-blue-500">
                  <div>{"<Profile"}</div>
                  <div className="pl-4">{"name=\"Rupak\""}</div>
                  <div className="pl-4">{"role=\"Full Stack Developer\""}</div>
                  <div>{">"}</div>
                </div>
              </div>
              
              <div className="absolute -left-12 -bottom-10 opacity-40 hidden lg:block">
                <div className="text-xs font-mono text-blue-500">
                  <div>{"</Profile>"}</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Bio Content with Figma-style typography */}
          <div className="lg:col-span-3 space-y-8">
            <div className={`${isVisible ? 'opacity-100' : 'opacity-0 translate-y-[30px]'} transition-all duration-1000 ease-out delay-300`}>
              <div className="flex items-center gap-2 mb-2">
                <Terminal size={18} className="text-blue-500" />
                <h2 className="text-sm font-mono text-blue-500 tracking-wider">software_engineer.fig</h2>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white">
                <span className="inline-block font-mono">Hi, I'm </span>
                <TypewriterText text="Rupak Kumar Singh" delay={100} onComplete={handleTypingComplete} />
              </h1>
            </div>
            
            <p className={`text-xl text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed font-light ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-[30px]'} transition-all duration-1000 ease-out delay-500`}>
              <span className="text-blue-500 font-mono">// </span>
              Software Engineer with 5+ year's experience — 3+ in organizations, 2+ freelancing. 
              Skilled in building scalable web apps and delivering clean, efficient code across diverse projects.
            </p>
            
            <div className={`flex flex-wrap gap-4 pt-2 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-[30px]'} transition-all duration-1000 ease-out delay-700`}>
              <Button asChild className="bg-blue-500 hover:bg-blue-600 text-white shadow-lg hover:shadow-blue-500/20 transition-all duration-300 border border-blue-400/30 relative overflow-hidden group">
                <a href="#experience">
                  <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-400 to-blue-500 group-hover:scale-105 transition-transform duration-500"></span>
                  <span className="relative flex items-center">
                    <Code size={16} className="mr-2" /> View Experience
                  </span>
                </a>
              </Button>
              
              <Button variant="outline" asChild className="border-blue-200 bg-white/50 text-blue-500 hover:bg-blue-50 hover:text-blue-600 transition-all duration-300 dark:border-blue-800 dark:bg-slate-900/50 dark:text-blue-400 dark:hover:bg-slate-800 relative overflow-hidden group">
                <a href="#contact">
                  <span className="absolute inset-0 w-0 bg-blue-100 dark:bg-blue-900/30 group-hover:w-full transition-all duration-300"></span>
                  <span className="relative flex items-center">
                    <Terminal size={16} className="mr-2" /> Get in Touch
                  </span>
                </a>
              </Button>
            </div>
            
            {/* Social links with Figma-style hover effects */}
            <div className={`flex items-center pt-4 space-x-6 ${isVisible && typingComplete ? 'opacity-100' : 'opacity-0 translate-y-[30px]'} transition-all duration-1000 ease-out`}>
              <a 
                href="https://github.com/rupak122" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-blue-500 transform hover:scale-110 transition-all duration-300 relative group"
              >
                <span className="absolute -inset-2 rounded-full bg-slate-100 dark:bg-slate-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                <Github size={20} className="relative" />
                <span className="sr-only">GitHub</span>
              </a>
              <a 
                href="https://linkedin.com/in/rupak8770985" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-blue-500 transform hover:scale-110 transition-all duration-300 relative group"
              >
                <span className="absolute -inset-2 rounded-full bg-slate-100 dark:bg-slate-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                <Linkedin size={20} className="relative" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a 
                href="mailto:rupak8770985@gmail.com" 
                className="text-slate-400 hover:text-blue-500 transform hover:scale-110 transition-all duration-300 relative group"
              >
                <span className="absolute -inset-2 rounded-full bg-slate-100 dark:bg-slate-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                <Mail size={20} className="relative" />
                <span className="sr-only">Email</span>
              </a>
              <a 
                href="tel:+919871510636" 
                className="text-slate-400 hover:text-blue-500 transform hover:scale-110 transition-all duration-300 relative group"
              >
                <span className="absolute -inset-2 rounded-full bg-slate-100 dark:bg-slate-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                <Phone size={20} className="relative" />
                <span className="sr-only">Phone</span>
              </a>
            </div>
            
            {/* Terminal animation */}
            <div className={`font-mono text-sm text-slate-500 pt-4 ${isVisible && typingComplete ? 'opacity-100' : 'opacity-0'} transition-all duration-1000 ease-out`}>
              <div className="flex items-center">
                <span className="text-blue-500">$</span>
                <TypewriterText text=" figma start new_project" delay={50} />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Animated Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <ArrowDown size={24} className="text-blue-500 animate-bounce" />
      </div>
    </section>
  );
};

export default HeroSection;
