
import React, { useEffect, useState } from 'react';
import { ArrowDown, Github, Linkedin, Mail, Phone, Terminal, Code, ExternalLink } from "lucide-react";
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
        {/* Code pattern background with reduced opacity */}
        <div className="absolute inset-0 opacity-3 pointer-events-none">
          <div className="absolute inset-0 overflow-hidden">
            <pre className="text-[0.4rem] opacity-10 text-slate-700 dark:text-slate-300 whitespace-pre-wrap">
              {`
              const developer = {
                name: "Rupak Kumar Singh",
                title: "Full Stack Developer",
                experience: 5,
                skills: ["React", "Node.js", "TypeScript", "MongoDB"],
                education: {
                  degree: "Computer Science",
                  university: "Delhi University"
                },
                contact: {
                  email: "rupak8770985@gmail.com",
                  phone: "+919871510636",
                  github: "github.com/rupak122",
                  linkedin: "linkedin.com/in/rupak8770985"
                }
              };

              function hire(developer) {
                return \`Hired \${developer.name} as \${developer.title}\`;
              }
              
              // Output: "Hired Rupak Kumar Singh as Full Stack Developer"
              console.log(hire(developer));
              `.repeat(3)}
            </pre>
          </div>
        </div>
      </FloatingElements>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-center">
          {/* Profile Image with enhanced design */}
          <div className={`lg:col-span-2 flex justify-center lg:justify-end transform ${isVisible ? 'opacity-100' : 'opacity-0 translate-x-[-50px]'} transition-all duration-1000 ease-out`}>
            <div className="relative group">
              <GlowingBorder>
                <div className="p-1 bg-slate-900/90 dark:bg-slate-900 rounded-lg shadow-xl overflow-hidden">
                  {/* Terminal-style header */}
                  <div className="bg-slate-800 text-white py-1 px-3 flex items-center justify-between rounded-t-md">
                    <div className="flex items-center space-x-1">
                      <span className="w-2.5 h-2.5 block rounded-full bg-red-500"></span>
                      <span className="w-2.5 h-2.5 block rounded-full bg-yellow-500"></span>
                      <span className="w-2.5 h-2.5 block rounded-full bg-green-500"></span>
                    </div>
                    <div className="flex items-center">
                      <Terminal size={12} className="mr-1 text-green-400" />
                      <span className="text-xs font-mono">profile.png</span>
                    </div>
                    <span className="text-xs font-mono text-slate-400">~/photos</span>
                  </div>
                  
                  <div className="p-2 bg-slate-800 rounded-b-md">
                    <div className="relative overflow-hidden rounded shadow-inner">
                      <img 
                        src="./lovable-uploads/profile.png" 
                        alt="Rupak Kumar Singh" 
                        className="w-48 h-48 object-cover rounded shadow-md transform group-hover:scale-[1.03] transition-all duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    <div className="mt-2 px-2 py-1 bg-slate-700 rounded font-mono text-xs text-slate-300">
                      <span className="text-blue-400">const</span> <span className="text-green-400">profile</span> = <span className="text-purple-400">new</span> <span className="text-yellow-400">Developer</span>();
                    </div>
                  </div>
                </div>
              </GlowingBorder>
            </div>
          </div>
          
          {/* Bio Content with enhanced design */}
          <div className="lg:col-span-3 space-y-5">
            <div className={`relative ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-[30px]'} transition-all duration-1000 ease-out delay-300`}>
              <GlowingBorder>
                <div className="bg-slate-800 text-white py-1 px-3 flex items-center justify-between rounded-t-lg">
                  <div className="flex items-center space-x-1">
                    <span className="w-2.5 h-2.5 block rounded-full bg-red-500"></span>
                    <span className="w-2.5 h-2.5 block rounded-full bg-yellow-500"></span>
                    <span className="w-2.5 h-2.5 block rounded-full bg-green-500"></span>
                  </div>
                  <div className="flex items-center">
                    <Code size={12} className="mr-1 text-blue-400" />
                    <span className="text-xs font-mono">bio.js</span>
                  </div>
                  <span className="text-xs font-mono text-slate-400">~/documents</span>
                </div>
                
                <div className="bg-slate-900/95 p-5 rounded-b-lg">
                  <div className="font-mono text-sm text-white/90">
                    <span className="text-blue-400">class</span> <span className="text-yellow-400">Developer</span> {'{'}
                    <div className="pl-4 mt-1">
                      <span className="text-blue-400">constructor</span>() {'{'}
                      <div className="pl-5">
                        <span className="block">
                          <span className="text-purple-400">this</span>.<span className="text-green-400">name</span> = <span className="text-orange-400">"Rupak Kumar Singh"</span>;
                        </span>
                        <span className="block">
                          <span className="text-purple-400">this</span>.<span className="text-green-400">role</span> = <span className="text-orange-400">"Full Stack Developer"</span>;
                        </span>
                        <span className="block">
                          <span className="text-purple-400">this</span>.<span className="text-green-400">experience</span> = <span className="text-blue-400">5</span>; <span className="text-slate-400">// years</span>
                        </span>
                      </div>
                      {'}'}
                    </div>
                    {'}'}
                  </div>
                  
                  <div className="mt-3 text-md text-white/80 max-w-2xl px-4 py-2 bg-slate-800/60 rounded-md border border-slate-700/50">
                    <span className="text-slate-400 text-xs">// Brief description</span><br />
                    <p className="mt-1">
                      Experienced Software Engineer with 5+ years creating scalable web applications 
                      and delivering clean, efficient code across diverse projects.
                      <span className="ml-1 animate-pulse text-blue-400">|</span>
                    </p>
                  </div>
                  
                  <div className="flex flex-wrap gap-3 mt-4">
                    <Button asChild size="sm" className="bg-indigo-600 hover:bg-indigo-700 text-white rounded-md shadow-lg hover:shadow-indigo-400/20 transition-all duration-300">
                      <a href="#experience">
                        <Code size={14} className="mr-1.5" /> View Experience
                      </a>
                    </Button>
                    
                    <Button variant="outline" asChild size="sm" className="border-indigo-200 bg-white/10 text-indigo-200 hover:bg-indigo-900/40 hover:text-indigo-100 rounded-md transition-all duration-300">
                      <a href="#contact">
                        <Terminal size={14} className="mr-1.5" /> Get in Touch
                      </a>
                    </Button>
                  </div>
                </div>
              </GlowingBorder>
            </div>
            
            {/* Social links with enhanced design */}
            <div className={`${isVisible && typingComplete ? 'opacity-100' : 'opacity-0 translate-y-[30px]'} transition-all duration-1000 ease-out`}>
              <div className="bg-slate-800 text-white py-0.5 px-3 flex items-center rounded-t-md w-fit">
                <Terminal size={10} className="mr-1 text-green-400" />
                <span className="text-xs font-mono">connect.sh</span>
              </div>
              
              <div className="bg-slate-900/95 p-3 rounded-md rounded-tl-none border border-slate-700/50 font-mono text-sm">
                <span className="text-green-400">$</span> connect --social
                <div className="flex flex-wrap items-center gap-5 mt-1.5">
                  <a 
                    href="https://github.com/rupak122" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-white/80 hover:text-blue-400 transform hover:scale-110 transition-all duration-300 relative group flex items-center"
                  >
                    <div className="p-2 bg-slate-800 rounded-md group-hover:bg-slate-700 transition-colors">
                      <Github size={16} />
                    </div>
                    <span className="ml-2 text-xs">github</span>
                    <ExternalLink size={10} className="ml-1 opacity-70" />
                  </a>
                  <a 
                    href="https://linkedin.com/in/rupak8770985" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-white/80 hover:text-blue-400 transform hover:scale-110 transition-all duration-300 relative group flex items-center"
                  >
                    <div className="p-2 bg-slate-800 rounded-md group-hover:bg-slate-700 transition-colors">
                      <Linkedin size={16} />
                    </div>
                    <span className="ml-2 text-xs">linkedin</span>
                    <ExternalLink size={10} className="ml-1 opacity-70" />
                  </a>
                  <a 
                    href="mailto:rupak8770985@gmail.com" 
                    className="text-white/80 hover:text-blue-400 transform hover:scale-110 transition-all duration-300 relative group flex items-center"
                  >
                    <div className="p-2 bg-slate-800 rounded-md group-hover:bg-slate-700 transition-colors">
                      <Mail size={16} />
                    </div>
                    <span className="ml-2 text-xs">email</span>
                  </a>
                  <a 
                    href="tel:+919871510636" 
                    className="text-white/80 hover:text-blue-400 transform hover:scale-110 transition-all duration-300 relative group flex items-center"
                  >
                    <div className="p-2 bg-slate-800 rounded-md group-hover:bg-slate-700 transition-colors">
                      <Phone size={16} />
                    </div>
                    <span className="ml-2 text-xs">phone</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Code-style Scroll Indicator - more subtle */}
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2">
        <a href="#experience" className="flex flex-col items-center text-indigo-400 animate-bounce">
          <span className="text-xs font-mono">// scroll</span>
          <ArrowDown size={16} />
        </a>
      </div>
    </AnimatedBackground>
  );
};

export default HeroSection;
