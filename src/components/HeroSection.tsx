
import React, { useEffect, useState } from 'react';
import { ArrowDown, Github, Linkedin, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import TypewriterText from './TypewriterText';
import RevealOnScroll from './RevealOnScroll';
import GlowingBorder from './animations/GlowingBorder';
import FloatingElements from './animations/FloatingElements';
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
    <AnimatedBackground variant="gradient" className="py-16 flex flex-col justify-center items-center overflow-hidden">
      <FloatingElements count={8} className="absolute inset-0">
        <div className="absolute inset-0 opacity-5 bg-gradient-to-br from-blue-500/10 via-indigo-500/10 to-purple-500/10"></div>
      </FloatingElements>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
          {/* Profile Image with elegant design */}
          <div className={`lg:col-span-2 flex justify-center lg:justify-end transform ${isVisible ? 'opacity-100' : 'opacity-0 translate-x-[-50px]'} transition-all duration-1000 ease-out`}>
            <div className="relative group">
              <GlowingBorder elegant={true}>
                <div className="p-4 bg-white dark:bg-slate-800 rounded-lg shadow-xl overflow-hidden">
                  <div className="relative overflow-hidden rounded-lg shadow-inner">
                    <img 
                      src="./lovable-uploads/profile.png" 
                      alt="Rupak Kumar Singh" 
                      className="w-56 h-56 object-cover rounded-lg shadow-md transform group-hover:scale-[1.02] transition-all duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </div>
              </GlowingBorder>
            </div>
          </div>
          
          {/* Bio Content with elegant design */}
          <div className="lg:col-span-3 space-y-6">
            <div className={`relative ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-[30px]'} transition-all duration-1000 ease-out delay-300`}>
              <h1 className="text-3xl lg:text-4xl font-bold text-slate-800 dark:text-white mb-2">Rupak Kumar Singh</h1>
              
              <div className="flex items-center text-xl text-blue-600 dark:text-blue-400 font-medium mb-4">
                <TypewriterText 
                  text="Full Stack Developer" 
                  delay={50} 
                  onComplete={handleTypingComplete}
                />
              </div>
              
              <GlowingBorder elegant={true} className="mt-4">
                <div className="bg-white dark:bg-slate-800 p-5 rounded-lg">
                  <p className="text-slate-700 dark:text-slate-300">
                    Experienced Software Engineer with 5+ years creating scalable web applications 
                    and delivering clean, efficient code across diverse projects.
                  </p>
                  
                  <div className="flex flex-wrap gap-3 mt-6">
                    <Button asChild size="sm" className="bg-blue-600 hover:bg-blue-700 text-white rounded-md shadow-lg hover:shadow-blue-400/20 transition-all duration-300">
                      <a href="#experience">
                        View Experience
                      </a>
                    </Button>
                    
                    <Button variant="outline" asChild size="sm" className="border-blue-200 bg-blue-50 text-blue-600 hover:bg-blue-100 dark:bg-blue-900/20 dark:text-blue-300 dark:border-blue-800 rounded-md transition-all duration-300">
                      <a href="#contact">
                        Get in Touch
                      </a>
                    </Button>
                  </div>
                </div>
              </GlowingBorder>
            </div>
            
            {/* Social links with elegant design */}
            <div className={`${isVisible && typingComplete ? 'opacity-100' : 'opacity-0 translate-y-[30px]'} transition-all duration-1000 ease-out`}>
              <div className="bg-white dark:bg-slate-800 p-4 rounded-lg shadow-sm border border-slate-100 dark:border-slate-700">
                <h3 className="text-sm font-medium text-slate-600 dark:text-slate-400 mb-3">
                  Connect With Me
                </h3>
                
                <div className="flex flex-wrap items-center gap-4">
                  <a 
                    href="https://github.com/rupak122" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center px-3 py-2 rounded-md bg-slate-100 dark:bg-slate-700 hover:bg-blue-50 dark:hover:bg-slate-600 text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-300 transition-colors"
                  >
                    <Github size={16} className="mr-2" />
                    <span className="text-sm">GitHub</span>
                  </a>
                  
                  <a 
                    href="https://linkedin.com/in/rupak8770985" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center px-3 py-2 rounded-md bg-slate-100 dark:bg-slate-700 hover:bg-blue-50 dark:hover:bg-slate-600 text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-300 transition-colors"
                  >
                    <Linkedin size={16} className="mr-2" />
                    <span className="text-sm">LinkedIn</span>
                  </a>
                  
                  <a 
                    href="mailto:rupak8770985@gmail.com" 
                    className="flex items-center px-3 py-2 rounded-md bg-slate-100 dark:bg-slate-700 hover:bg-blue-50 dark:hover:bg-slate-600 text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-300 transition-colors"
                  >
                    <Mail size={16} className="mr-2" />
                    <span className="text-sm">Email</span>
                  </a>
                  
                  <a 
                    href="tel:+919871510636" 
                    className="flex items-center px-3 py-2 rounded-md bg-slate-100 dark:bg-slate-700 hover:bg-blue-50 dark:hover:bg-slate-600 text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-300 transition-colors"
                  >
                    <Phone size={16} className="mr-2" />
                    <span className="text-sm">Phone</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Elegant Scroll Indicator */}
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2">
        <a href="#experience" className="flex flex-col items-center text-blue-500 animate-bounce">
          <span className="text-xs mb-1">scroll</span>
          <ArrowDown size={16} />
        </a>
      </div>
    </AnimatedBackground>
  );
};

export default HeroSection;
