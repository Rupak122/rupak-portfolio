
import React from 'react';
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";

const ContactInfo = () => {
  return (
    <div className="space-y-6">
      <div className="bg-white dark:bg-slate-800 rounded-xl shadow-xl p-6 sm:p-8 border border-slate-200 dark:border-slate-700">
        <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-6">Contact Information</h3>
        
        <div className="space-y-6">
          <div className="flex items-start">
            <div className="flex-shrink-0 p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg mr-4">
              <Mail size={20} className="text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <h4 className="text-sm font-medium text-slate-500 dark:text-slate-400 mb-1">Email</h4>
              <a href="mailto:rupak8770985@gmail.com" className="text-slate-800 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium text-sm sm:text-base break-all">
                rupak8770985@gmail.com
              </a>
            </div>
          </div>
          
          <div className="flex items-start">
            <div className="flex-shrink-0 p-2 bg-green-100 dark:bg-green-900/30 rounded-lg mr-4">
              <Phone size={20} className="text-green-600 dark:text-green-400" />
            </div>
            <div>
              <h4 className="text-sm font-medium text-slate-500 dark:text-slate-400 mb-1">Phone</h4>
              <a href="tel:+919871510636" className="text-slate-800 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium text-sm sm:text-base">
                +91 9871510636
              </a>
            </div>
          </div>
          
          <div className="flex items-start">
            <div className="flex-shrink-0 p-2 bg-amber-100 dark:bg-amber-900/30 rounded-lg mr-4">
              <MapPin size={20} className="text-amber-600 dark:text-amber-400" />
            </div>
            <div>
              <h4 className="text-sm font-medium text-slate-500 dark:text-slate-400 mb-1">Location</h4>
              <p className="text-slate-800 dark:text-white font-medium text-sm sm:text-base">
                New Delhi, India
              </p>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-700">
          <h4 className="text-sm font-medium text-slate-500 dark:text-slate-400 mb-4">Connect With Me</h4>
          <div className="flex flex-wrap gap-3">
            <a 
              href="https://github.com/rupak122" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-2.5 rounded-lg bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 hover:bg-blue-100 dark:hover:bg-blue-900/30 hover:text-blue-600 dark:hover:text-blue-400 transition-all"
            >
              <Github size={18} />
            </a>
            <a 
              href="https://linkedin.com/in/rupak8770985" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-2.5 rounded-lg bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 hover:bg-blue-100 dark:hover:bg-blue-900/30 hover:text-blue-600 dark:hover:text-blue-400 transition-all"
            >
              <Linkedin size={18} />
            </a>
            <a 
              href="mailto:rupak8770985@gmail.com" 
              className="p-2.5 rounded-lg bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 hover:bg-blue-100 dark:hover:bg-blue-900/30 hover:text-blue-600 dark:hover:text-blue-400 transition-all"
            >
              <Mail size={18} />
            </a>
            <a 
              href="tel:+919871510636" 
              className="p-2.5 rounded-lg bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 hover:bg-blue-100 dark:hover:bg-blue-900/30 hover:text-blue-600 dark:hover:text-blue-400 transition-all"
            >
              <Phone size={18} />
            </a>
          </div>
        </div>
      </div>
      
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-6 sm:p-8 rounded-xl shadow-xl relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImEiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblRyYW5zZm9ybT0icm90YXRlKDQ1KSI+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiBmaWxsPSIjZmZmIiBvcGFjaXR5PSIwLjQiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjYSkiLz48L3N2Zz4=')]"></div>
        
        <div className="relative">
          <h3 className="text-lg sm:text-xl font-bold mb-4">Looking for a developer?</h3>
          <p className="text-white/80 mb-6 text-sm sm:text-base">
            I'm currently available for freelance work and full-time opportunities. Let's build something amazing together.
          </p>
          
          <Button asChild variant="secondary" className="bg-white text-blue-600 hover:bg-blue-50 w-full sm:w-auto text-sm">
            <a href="mailto:rupak8770985@gmail.com">
              <Mail size={16} className="mr-2" />
              <span>Drop me an email</span>
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
