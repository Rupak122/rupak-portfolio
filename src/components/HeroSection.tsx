
import React, { useEffect, useState } from 'react';
import { ArrowDown, Github, Linkedin, Mail, Phone, Code, Terminal } from "lucide-react";
import { Button } from "@/components/ui/button";
import RevealOnScroll from './RevealOnScroll';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="about" className="relative min-h-screen flex flex-col justify-center items-center pt-16 pb-12 overflow-hidden">
      {/* Dark code-inspired gradient background */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 z-0"></div>
      
      {/* Code-like decorative elements */}
      <div className="absolute top-20 right-10 opacity-10 text-teal-400 text-8xl font-mono">{`{`}</div>
      <div className="absolute bottom-20 left-10 opacity-10 text-teal-400 text-8xl font-mono">{`}`}</div>
      
      {/* Animated particles resembling code */}
      <div className="absolute top-1/4 right-1/3 w-2 h-2 bg-teal-400 rounded-full opacity-50 animate-pulse"></div>
      <div className="absolute top-1/3 left-1/4 w-3 h-3 bg-teal-500 rounded-full opacity-30 animate-pulse-light"></div>
      <div className="absolute bottom-1/3 right-1/4 w-2 h-2 bg-teal-400 rounded-full opacity-40 animate-pulse"></div>
      <div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-teal-500 rounded-full opacity-20 animate-pulse-light"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
          {/* Profile Image with terminal-like frame */}
          <div className={`lg:col-span-2 flex justify-center lg:justify-end transform ${isVisible ? 'opacity-100' : 'opacity-0 translate-x-[-50px]'} transition-all duration-1000 ease-out`}>
            <div className="relative group">
              <div className="absolute -inset-0.5 rounded-xl bg-gradient-to-r from-teal-400 to-emerald-400 opacity-70 group-hover:opacity-100 transition-opacity duration-700"></div>
              <div className="relative">
                <div className="bg-slate-800 rounded-t-xl h-8 flex items-center px-3 border-b border-teal-400/30">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="ml-3 text-xs text-slate-400 font-mono">developer_profile.png</div>
                </div>
                <div className="p-1 bg-slate-800 rounded-b-xl">
                  <img 
                    src="./lovable-uploads/profile.png" 
                    alt="Rupak Kumar Singh CV" 
                    className="relative w-full max-w-sm rounded-lg shadow-xl transform group-hover:scale-[1.02] transition-all duration-500"
                  />
                </div>
              </div>
            </div>
          </div>
          
          {/* Bio Content with code-styled animations */}
          <div className="lg:col-span-3 space-y-8">
            <div className={`${isVisible ? 'opacity-100' : 'opacity-0 translate-y-[30px]'} transition-all duration-1000 ease-out delay-300`}>
              <div className="flex items-center gap-2 mb-2">
                <Terminal size={18} className="text-teal-400" />
                <h2 className="text-sm font-mono text-teal-400 tracking-wider">software_engineer.exe</h2>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
                <span className="inline-block font-mono">Hi, I'm </span>
                <span className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-emerald-400 font-mono">
                  Rupak Kumar Singh
                </span>
              </h1>
            </div>
            
            <p className={`text-xl text-slate-300 max-w-2xl leading-relaxed font-light ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-[30px]'} transition-all duration-1000 ease-out delay-500`}>
              <span className="text-teal-400 font-mono">// </span>
              Software Engineer with 5+ year's experience — 3+ in organizations, 2+ freelancing. 
              Skilled in building scalable web apps and delivering clean, efficient code across diverse projects.
            </p>
            
            <div className={`flex flex-wrap gap-4 pt-2 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-[30px]'} transition-all duration-1000 ease-out delay-700`}>
              <Button asChild className="bg-teal-600 hover:bg-teal-700 text-white shadow-lg hover:shadow-teal-500/20 transition-all duration-300 border border-teal-500/30">
                <a href="#experience">
                  <Code size={16} className="mr-2" /> View Experience
                </a>
              </Button>
              
              <Button variant="outline" asChild className="border-teal-700 bg-slate-800/50 text-teal-400 hover:bg-slate-700 hover:text-teal-300 transition-all duration-300">
                <a href="#contact">
                  <Terminal size={16} className="mr-2" /> Get in Touch
                </a>
              </Button>
            </div>
            
            <div className={`flex items-center pt-4 space-x-6 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-[30px]'} transition-all duration-1000 ease-out delay-900`}>
              <a 
                href="https://github.com/rupak122" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-teal-400 transform hover:scale-110 transition-all duration-300"
              >
                <Github size={20} />
                <span className="sr-only">GitHub</span>
              </a>
              <a 
                href="https://linkedin.com/in/rupak8770985" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-teal-400 transform hover:scale-110 transition-all duration-300"
              >
                <Linkedin size={20} />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a 
                href="mailto:rupak8770985@gmail.com" 
                className="text-slate-400 hover:text-teal-400 transform hover:scale-110 transition-all duration-300"
              >
                <Mail size={20} />
                <span className="sr-only">Email</span>
              </a>
              <a 
                href="tel:+919871510636" 
                className="text-slate-400 hover:text-teal-400 transform hover:scale-110 transition-all duration-300"
              >
                <Phone size={20} />
                <span className="sr-only">Phone</span>
              </a>
            </div>
            
            {/* Terminal-like typing animation */}
            <div className={`font-mono text-sm text-slate-400 pt-4 ${isVisible ? 'opacity-100' : 'opacity-0'} transition-all duration-1000 ease-out delay-1000`}>
              <div className="flex items-center">
                <span className="text-teal-400">$</span>
                <span className="ml-2">npm start dev_collaboration</span>
                <span className="ml-2 w-2 h-4 bg-teal-400 animate-pulse"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Animated Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <ArrowDown size={24} className="text-teal-400 animate-bounce" />
      </div>
    </section>
  );
};

export default HeroSection;
