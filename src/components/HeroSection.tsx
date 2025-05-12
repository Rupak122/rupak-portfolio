
import React, { useEffect, useState } from 'react';
import { ArrowDown, Github, Linkedin, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import TypewriterText from './TypewriterText';
import RevealOnScroll from './RevealOnScroll';
import AnimatedBackground from './animations/AnimatedBackground';

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
    <AnimatedBackground variant="gradient" className="py-20 min-h-[90vh] flex flex-col justify-center relative overflow-hidden w-full">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-50/30 to-indigo-50/30 dark:from-blue-900/10 dark:to-indigo-900/10"></div>
      
      <div className="container mx-auto px-4 relative z-10 max-w-7xl">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Left side - Profile image */}
          <div className={`w-full md:w-2/5 ${isVisible ? 'opacity-100' : 'opacity-0 translate-x-[-50px]'} transition-all duration-1000 ease-out`}>
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full opacity-75 blur-md"></div>
              <div className="relative overflow-hidden rounded-full border-4 border-white shadow-xl dark:border-slate-800">
                <img 
                  src="./lovable-uploads/profile.png" 
                  alt="Rupak Kumar Singh" 
                  className="w-full aspect-square object-cover"
                />
              </div>
            </div>
          </div>
          
          {/* Right side - Content */}
          <div className="w-full md:w-3/5 space-y-8">
            <div className={`${isVisible ? 'opacity-100' : 'opacity-0 translate-y-[30px]'} transition-all duration-1000 ease-out delay-300`}>
              <div className="space-y-6">
                <div>
                  <h4 className="text-blue-600 dark:text-blue-400 font-medium mb-2">Hello, I'm</h4>
                  <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-800 dark:text-white mb-3 leading-tight">
                    Rupak Kumar Singh
                  </h1>
                  
                  <div className="flex items-center text-2xl text-blue-600 dark:text-blue-400 font-medium">
                    <TypewriterText 
                      text="Full Stack Developer" 
                      delay={50} 
                      onComplete={handleTypingComplete}
                    />
                  </div>
                </div>
                
                <p className="text-slate-700 dark:text-slate-300 text-lg leading-relaxed">
                  Experienced Software Engineer with 5+ years creating scalable web applications 
                  and delivering clean, efficient code across diverse projects. Passionate about building 
                  innovative solutions that combine technical excellence with intuitive user experiences.
                </p>
                
                <div className="flex flex-wrap gap-4 pt-4">
                  <Button asChild size="lg" className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-md shadow-lg hover:shadow-blue-400/20 transition-all duration-300">
                    <a href="#experience">
                      View Experience
                    </a>
                  </Button>
                  
                  <Button variant="outline" asChild size="lg" className="border-blue-200 bg-white/50 text-blue-600 hover:bg-blue-100/50 dark:bg-blue-900/20 dark:text-blue-300 dark:border-blue-800 rounded-md transition-all duration-300">
                    <a href="#contact">
                      Get in Touch
                    </a>
                  </Button>
                </div>
              </div>
            </div>
            
            {/* Social links */}
            <div className={`${isVisible && typingComplete ? 'opacity-100' : 'opacity-0 translate-y-[30px]'} transition-all duration-1000 ease-out delay-700`}>
              <div className="flex flex-wrap gap-3 pt-6">
                <a 
                  href="https://github.com/rupak122" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center p-3 rounded-full bg-slate-100 dark:bg-slate-700 hover:bg-blue-100 dark:hover:bg-blue-800 text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-300 transition-colors shadow-sm hover:shadow-md"
                >
                  <Github size={22} />
                </a>
                
                <a 
                  href="https://linkedin.com/in/rupak8770985" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center p-3 rounded-full bg-slate-100 dark:bg-slate-700 hover:bg-blue-100 dark:hover:bg-blue-800 text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-300 transition-colors shadow-sm hover:shadow-md"
                >
                  <Linkedin size={22} />
                </a>
                
                <a 
                  href="mailto:rupak8770985@gmail.com" 
                  className="flex items-center justify-center p-3 rounded-full bg-slate-100 dark:bg-slate-700 hover:bg-blue-100 dark:hover:bg-blue-800 text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-300 transition-colors shadow-sm hover:shadow-md"
                >
                  <Mail size={22} />
                </a>
                
                <a 
                  href="tel:+919871510636" 
                  className="flex items-center justify-center p-3 rounded-full bg-slate-100 dark:bg-slate-700 hover:bg-blue-100 dark:hover:bg-blue-800 text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-300 transition-colors shadow-sm hover:shadow-md"
                >
                  <Phone size={22} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2">
        <a href="#experience" className="flex flex-col items-center text-blue-500 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 animate-bounce">
          <span className="text-xs mb-1">explore more</span>
          <ArrowDown size={18} />
        </a>
      </div>
    </AnimatedBackground>
  );
};

export default HeroSection;
