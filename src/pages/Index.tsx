
import React, { useEffect, useState } from 'react';
import NavBar from '@/components/NavBar';
import HeroSection from '@/components/HeroSection';
import ExperienceSection from '@/components/ExperienceSection';
import SkillsSection from '@/components/SkillsSection';
import ProjectsSection from '@/components/ProjectsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';

const Index = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    // Add a small delay to ensure smooth animation entry
    setTimeout(() => {
      setIsLoaded(true);
    }, 100);
  }, []);
  
  return (
    <div className={`min-h-screen bg-white dark:bg-slate-900 relative transition-opacity duration-700 ease-in-out ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
      {/* Subtle background pattern */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] dark:bg-[radial-gradient(#1f2937_1px,transparent_1px)] [background-size:20px_20px] opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-50/5 to-transparent dark:from-transparent dark:via-blue-900/5 dark:to-transparent"></div>
      </div>
      
      <NavBar />
      
      <main className="relative z-10 w-full">
        {/* Full-width sections without card designs */}
        <HeroSection />
        <ExperienceSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;
