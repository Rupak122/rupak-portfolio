
import React, { useEffect, useState } from 'react';
import { ArrowDown, Github, Linkedin, Mail, Phone, Terminal, Code, ExternalLink } from "lucide-react";
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
    <section id="about" className="relative min-h-screen flex flex-col justify-center items-center pt-16 pb-12 overflow-hidden bg-slate-50 dark:bg-slate-900">
      {/* Code pattern background */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute inset-0 overflow-hidden">
          <pre className="text-[0.4rem] opacity-30 text-slate-700 dark:text-slate-300 whitespace-pre-wrap">
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
            `.repeat(10)}
          </pre>
        </div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
          {/* Profile Image with code-style frame */}
          <div className={`lg:col-span-2 flex justify-center lg:justify-end transform ${isVisible ? 'opacity-100' : 'opacity-0 translate-x-[-50px]'} transition-all duration-1000 ease-out`}>
            <div className="relative group">
              <div className="absolute inset-0 bg-slate-800 rounded-lg opacity-70 transform translate-x-2 translate-y-2"></div>
              <div className="relative p-1 bg-slate-100 dark:bg-slate-800 border-2 border-slate-300 dark:border-slate-700 rounded-lg shadow-lg">
                {/* Terminal-style header */}
                <div className="bg-slate-800 text-white py-1.5 px-4 flex items-center justify-between rounded-t-md">
                  <div className="flex items-center space-x-1.5">
                    <span className="w-3 h-3 block rounded-full bg-red-500"></span>
                    <span className="w-3 h-3 block rounded-full bg-yellow-500"></span>
                    <span className="w-3 h-3 block rounded-full bg-green-500"></span>
                  </div>
                  <div className="flex items-center">
                    <Terminal size={14} className="mr-1.5 text-green-400" />
                    <span className="text-xs font-mono">profile.png</span>
                  </div>
                  <span className="text-xs font-mono text-slate-400">~/photos</span>
                </div>
                
                <div className="px-3 py-2 bg-slate-200 dark:bg-slate-900 rounded-b-md">
                  <img 
                    src="./lovable-uploads/profile.png" 
                    alt="Rupak Kumar Singh" 
                    className="w-56 h-56 rounded-md object-cover shadow-md transform group-hover:scale-[1.02] transition-all duration-500"
                  />
                  <div className="mt-2 px-2 py-1 bg-slate-100 dark:bg-slate-800 rounded font-mono text-xs text-slate-700 dark:text-slate-300">
                    <span className="text-blue-600 dark:text-blue-400">const</span> <span className="text-green-600 dark:text-green-400">profile</span> = <span className="text-purple-600 dark:text-purple-400">new</span> <span className="text-yellow-600 dark:text-yellow-400">Developer</span>();
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Bio Content with code-style typography */}
          <div className="lg:col-span-3 space-y-6">
            <div className={`code-block relative ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-[30px]'} transition-all duration-1000 ease-out delay-300`}>
              <div className="bg-slate-800 text-white py-1.5 px-4 flex items-center justify-between rounded-t-lg">
                <div className="flex items-center space-x-1.5">
                  <span className="w-3 h-3 block rounded-full bg-red-500"></span>
                  <span className="w-3 h-3 block rounded-full bg-yellow-500"></span>
                  <span className="w-3 h-3 block rounded-full bg-green-500"></span>
                </div>
                <div className="flex items-center">
                  <Code size={14} className="mr-1.5 text-blue-400" />
                  <span className="text-xs font-mono">bio.js</span>
                </div>
                <span className="text-xs font-mono text-slate-400">~/documents</span>
              </div>
              
              <div className="bg-slate-100 dark:bg-slate-900 p-5 rounded-b-lg border border-slate-200 dark:border-slate-700">
                <div className="font-mono">
                  <span className="text-blue-600 dark:text-blue-400">class</span> <span className="text-yellow-600 dark:text-yellow-400">Developer</span> {'{'}
                  <div className="pl-4 mt-2">
                    <span className="text-blue-600 dark:text-blue-400">constructor</span>() {'{'}
                    <div className="pl-6">
                      <span className="block">
                        <span className="text-purple-600 dark:text-purple-400">this</span>.<span className="text-green-600 dark:text-green-400">name</span> = <span className="text-orange-600 dark:text-orange-400">"Rupak Kumar Singh"</span>;
                      </span>
                      <span className="block">
                        <span className="text-purple-600 dark:text-purple-400">this</span>.<span className="text-green-600 dark:text-green-400">role</span> = <span className="text-orange-600 dark:text-orange-400">"Full Stack Developer"</span>;
                      </span>
                      <span className="block">
                        <span className="text-purple-600 dark:text-purple-400">this</span>.<span className="text-green-600 dark:text-green-400">experience</span> = <span className="text-blue-600 dark:text-blue-400">5</span>; <span className="text-slate-500">// years</span>
                      </span>
                    </div>
                    {'}'}
                  </div>
                  {'}'}
                </div>
                
                <div className="mt-4 text-lg text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed">
                  <span className="text-slate-500 dark:text-slate-400">// Brief description</span><br />
                  Experienced Software Engineer with 5+ years creating scalable web applications 
                  and delivering clean, efficient code across diverse projects.
                </div>
                
                <div className="flex flex-wrap gap-4 mt-6">
                  <Button asChild className="bg-blue-600 hover:bg-blue-700 text-white rounded-md py-6 shadow-lg hover:shadow-blue-400/20 transition-all duration-300">
                    <a href="#experience">
                      <Code size={18} className="mr-2" /> View Experience
                    </a>
                  </Button>
                  
                  <Button variant="outline" asChild className="border-blue-200 bg-white/50 text-blue-600 hover:bg-blue-50 hover:text-blue-700 rounded-md py-6 transition-all duration-300 dark:border-blue-800 dark:bg-slate-900/50 dark:text-blue-400 dark:hover:bg-slate-800">
                    <a href="#contact">
                      <Terminal size={18} className="mr-2" /> Get in Touch
                    </a>
                  </Button>
                </div>
              </div>
            </div>
            
            {/* Social links with terminal-style design */}
            <div className={`${isVisible && typingComplete ? 'opacity-100' : 'opacity-0 translate-y-[30px]'} transition-all duration-1000 ease-out`}>
              <div className="bg-slate-800 text-white py-1 px-4 flex items-center rounded-t-md w-fit">
                <Terminal size={12} className="mr-1.5 text-green-400" />
                <span className="text-xs font-mono">connect.sh</span>
              </div>
              
              <div className="bg-slate-100 dark:bg-slate-800 p-3 rounded-md rounded-tl-none border border-slate-200 dark:border-slate-700 font-mono text-sm">
                <span className="text-green-600 dark:text-green-400">$</span> connect --social
                <div className="flex items-center space-x-6 mt-2">
                  <a 
                    href="https://github.com/rupak122" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-slate-700 hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-400 transform hover:scale-110 transition-all duration-300 relative group flex items-center"
                  >
                    <Github size={20} className="mr-1" />
                    <span>github</span>
                    <ExternalLink size={12} className="ml-1 opacity-70" />
                  </a>
                  <a 
                    href="https://linkedin.com/in/rupak8770985" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-slate-700 hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-400 transform hover:scale-110 transition-all duration-300 relative group flex items-center"
                  >
                    <Linkedin size={20} className="mr-1" />
                    <span>linkedin</span>
                    <ExternalLink size={12} className="ml-1 opacity-70" />
                  </a>
                  <a 
                    href="mailto:rupak8770985@gmail.com" 
                    className="text-slate-700 hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-400 transform hover:scale-110 transition-all duration-300 relative group flex items-center"
                  >
                    <Mail size={20} className="mr-1" />
                    <span>email</span>
                  </a>
                  <a 
                    href="tel:+919871510636" 
                    className="text-slate-700 hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-400 transform hover:scale-110 transition-all duration-300 relative group flex items-center"
                  >
                    <Phone size={20} className="mr-1" />
                    <span>phone</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Code-style Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
        <a href="#experience" className="flex flex-col items-center text-blue-600 animate-bounce">
          <span className="mb-1 text-sm font-mono">// scroll</span>
          <ArrowDown size={20} />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
