
import React from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

interface NavItemProps {
  href: string;
  children: React.ReactNode;
}

const NavItem = ({ href, children }: NavItemProps) => (
  <a 
    href={href} 
    className="relative text-slate-700 hover:text-portfolio-primary transition-colors after:absolute 
    after:left-0 after:bottom-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-portfolio-primary 
    after:transition-all after:duration-300"
  >
    {children}
  </a>
);

const NavBar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white bg-opacity-90 backdrop-blur-md py-4 shadow-sm animate-fade-in">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <div>
            <a href="#" className="text-xl font-bold text-portfolio-primary">
              Rupak<span className="text-portfolio-dark">Kumar</span>
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
            <Button variant="ghost" size="icon" onClick={toggleMenu} aria-label="Toggle Menu">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 py-4 bg-white animate-fade-in">
            <nav className="flex flex-col space-y-4">
              <a href="#about" className="px-4 py-2 text-center hover:bg-slate-100 rounded" onClick={toggleMenu}>About</a>
              <a href="#experience" className="px-4 py-2 text-center hover:bg-slate-100 rounded" onClick={toggleMenu}>Experience</a>
              <a href="#skills" className="px-4 py-2 text-center hover:bg-slate-100 rounded" onClick={toggleMenu}>Skills</a>
              <a href="#projects" className="px-4 py-2 text-center hover:bg-slate-100 rounded" onClick={toggleMenu}>Projects</a>
              <a href="#contact" className="px-4 py-2 text-center hover:bg-slate-100 rounded" onClick={toggleMenu}>Contact</a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default NavBar;
