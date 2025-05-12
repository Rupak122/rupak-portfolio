
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
    <AnimatedBackground variant="gradient" className="py-20 flex flex-col justify-center items-center overflow-hidden w-full">
      <FloatingElements count={12} className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-indigo-500/5 to-purple-500/5"></div>
      </FloatingElements>
      
      <div className="container mx-auto px-4 relative z-10 max-w-7xl w-full">
        <div className="flex flex-col items-center lg:flex-row lg:items-center lg:justify-between gap-8">
          {/* Left content: Profile Image with elegant design */}
          <div className={`w-full lg:w-2/5 flex justify-center transform ${isVisible ? 'opacity-100' : 'opacity-0 translate-x-[-50px]'} transition-all duration-1000 ease-out`}>
            <GlowingBorder elegant={true} className="w-full max-w-md">
              <div className="p-6 bg-white/80 dark:bg-slate-800/90 backdrop-blur-sm rounded-lg shadow-2xl overflow-hidden">
                <div className="relative overflow-hidden rounded-lg">
                  <img 
                    src="./lovable-uploads/profile.png" 
                    alt="Rupak Kumar Singh" 
                    className="w-full aspect-square object-cover rounded-lg shadow-md transform hover:scale-[1.02] transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                {/* Profile title and typewriter - now moved to image side */}
                <div className="mt-6 text-center">
                  <h1 className="text-3xl font-bold text-slate-800 dark:text-white mb-2">Rupak Kumar Singh</h1>
                  
                  <div className="flex justify-center items-center text-xl text-blue-600 dark:text-blue-400 font-medium mb-4">
                    <TypewriterText 
                      text="Full Stack Developer" 
                      delay={50} 
                      onComplete={handleTypingComplete}
                    />
                  </div>
                </div>
              </div>
            </GlowingBorder>
          </div>
          
          {/* Right content: Bio and Social Links */}
          <div className="w-full lg:w-3/5 space-y-8">
            <div className={`${isVisible ? 'opacity-100' : 'opacity-0 translate-y-[30px]'} transition-all duration-1000 ease-out delay-300`}>
              <GlowingBorder elegant={true} className="w-full">
                <div className="bg-white/80 dark:bg-slate-800/90 backdrop-blur-sm p-8 rounded-lg">
                  <h2 className="text-2xl font-semibold text-slate-800 dark:text-white mb-4">About Me</h2>
                  
                  <p className="text-slate-700 dark:text-slate-300 text-lg leading-relaxed mb-6">
                    Experienced Software Engineer with 5+ years creating scalable web applications 
                    and delivering clean, efficient code across diverse projects. Passionate about building 
                    innovative solutions that combine technical excellence with intuitive user experiences.
                  </p>
                  
                  <div className="flex flex-wrap gap-4 mt-6">
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
              </GlowingBorder>
            </div>
            
            {/* Social links with elegant design */}
            <div className={`${isVisible && typingComplete ? 'opacity-100' : 'opacity-0 translate-y-[30px]'} transition-all duration-1000 ease-out delay-700`}>
              <GlowingBorder elegant={true} className="w-full">
                <div className="bg-white/80 dark:bg-slate-800/90 backdrop-blur-sm p-6 rounded-lg">
                  <h3 className="text-xl font-medium text-slate-800 dark:text-slate-200 mb-4">
                    Connect With Me
                  </h3>
                  
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <a 
                      href="https://github.com/rupak122" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center justify-center px-4 py-3 rounded-md bg-white dark:bg-slate-700 hover:bg-blue-50 dark:hover:bg-slate-600 text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-300 transition-colors shadow-sm hover:shadow-md"
                    >
                      <Github size={20} className="mr-2" />
                      <span>GitHub</span>
                    </a>
                    
                    <a 
                      href="https://linkedin.com/in/rupak8770985" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center justify-center px-4 py-3 rounded-md bg-white dark:bg-slate-700 hover:bg-blue-50 dark:hover:bg-slate-600 text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-300 transition-colors shadow-sm hover:shadow-md"
                    >
                      <Linkedin size={20} className="mr-2" />
                      <span>LinkedIn</span>
                    </a>
                    
                    <a 
                      href="mailto:rupak8770985@gmail.com" 
                      className="flex items-center justify-center px-4 py-3 rounded-md bg-white dark:bg-slate-700 hover:bg-blue-50 dark:hover:bg-slate-600 text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-300 transition-colors shadow-sm hover:shadow-md"
                    >
                      <Mail size={20} className="mr-2" />
                      <span>Email</span>
                    </a>
                    
                    <a 
                      href="tel:+919871510636" 
                      className="flex items-center justify-center px-4 py-3 rounded-md bg-white dark:bg-slate-700 hover:bg-blue-50 dark:hover:bg-slate-600 text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-300 transition-colors shadow-sm hover:shadow-md"
                    >
                      <Phone size={20} className="mr-2" />
                      <span>Phone</span>
                    </a>
                  </div>
                </div>
              </GlowingBorder>
            </div>
          </div>
        </div>
      </div>
      
      {/* Elegant Scroll Indicator */}
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
