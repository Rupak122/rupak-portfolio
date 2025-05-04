
import React from 'react';
import { Github, Heart, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-portfolio-dark text-white py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-2xl font-bold mb-4">Rupak Kumar Singh</h3>
            <p className="text-slate-300 max-w-md">
              Software Engineer specializing in building exceptional digital experiences with modern web technologies.
            </p>
            
            <div className="flex space-x-4 mt-6">
              <a 
                href="https://github.com/rupak577" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-slate-300 hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a 
                href="https://linkedin.com/in/rupak577" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-slate-300 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="mailto:rupak577@gmail.com" 
                className="text-slate-300 hover:text-white transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          <div className="md:text-right">
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <nav className="space-y-2">
              <a href="#about" className="block text-slate-300 hover:text-white transition-colors">About</a>
              <a href="#experience" className="block text-slate-300 hover:text-white transition-colors">Experience</a>
              <a href="#skills" className="block text-slate-300 hover:text-white transition-colors">Skills</a>
              <a href="#projects" className="block text-slate-300 hover:text-white transition-colors">Projects</a>
              <a href="#contact" className="block text-slate-300 hover:text-white transition-colors">Contact</a>
            </nav>
          </div>
        </div>
        
        <div className="border-t border-slate-700 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-400 text-sm">
            © {currentYear} Rupak Kumar Singh. All rights reserved.
          </p>
          <p className="text-slate-400 text-sm flex items-center mt-4 md:mt-0">
            Made with <Heart size={14} className="mx-1 text-red-500" /> and modern web technologies
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
