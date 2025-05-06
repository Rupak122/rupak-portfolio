
import React, { useEffect, useState } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

interface NavItemProps {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
}

const NavItem = ({ href, children, onClick }: NavItemProps) => (
  <a 
    href={href} 
    onClick={onClick}
    className="relative text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors py-2 after:absolute 
    after:left-0 after:bottom-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-blue-600 dark:after:bg-blue-400
    after:transition-all after:duration-300"
  >
    {children}
  </a>
);

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 dark:bg-slate-900/90 backdrop-blur-md py-3 shadow-sm' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <div>
            <a href="#" className="text-xl font-bold text-blue-600">
              Rupak<span className="text-slate-900 dark:text-white">Kumar</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <NavItem href="#about">About</NavItem>
            <NavItem href="#experience">Experience</NavItem>
            <NavItem href="#skills">Skills</NavItem>
            <NavItem href="#projects">Projects</NavItem>
            <NavItem href="#contact">Contact</NavItem>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={toggleMenu} aria-label="Toggle Menu" className="text-slate-900 dark:text-white hover:bg-blue-50 dark:hover:bg-blue-900/20">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 py-4 bg-white dark:bg-slate-900 rounded-md shadow-lg animate-fade-in">
            <nav className="flex flex-col space-y-4 p-4">
              <NavItem href="#about" onClick={toggleMenu}>About</NavItem>
              <NavItem href="#experience" onClick={toggleMenu}>Experience</NavItem>
              <NavItem href="#skills" onClick={toggleMenu}>Skills</NavItem>
              <NavItem href="#projects" onClick={toggleMenu}>Projects</NavItem>
              <NavItem href="#contact" onClick={toggleMenu}>Contact</NavItem>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default NavBar;
