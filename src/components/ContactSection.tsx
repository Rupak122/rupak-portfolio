
import React, { useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";

interface ContactCardProps {
  icon: React.ReactNode;
  title: string;
  value: string;
  href: string;
}

const ContactCard = ({ icon, title, value, href }: ContactCardProps) => (
  <Card className="hover:shadow-md transition-all duration-300 project-card">
    <CardContent className="p-6 flex">
      <div className="mr-4 p-2 bg-purple-50 rounded-md text-portfolio-primary">
        {icon}
      </div>
      <div>
        <h3 className="font-medium text-slate-500">{title}</h3>
        <a 
          href={href} 
          className="text-portfolio-dark hover:text-portfolio-primary transition-colors"
        >
          {value}
        </a>
      </div>
    </CardContent>
  </Card>
);

const ContactSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });
    
    const currentSection = sectionRef.current;
    if (currentSection) {
      observer.observe(currentSection);
    }
    
    return () => {
      if (currentSection) {
        observer.unobserve(currentSection);
      }
    };
  }, []);
  
  return (
    <section id="contact" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 reveal" ref={sectionRef}>
          <div className="inline-block p-2 bg-purple-100 rounded-lg mb-4">
            <Mail size={24} className="text-portfolio-primary" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-portfolio-dark">Get In Touch</h2>
          <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
            Have a project in mind or want to discuss potential opportunities? I'd love to hear from you.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 reveal">
          <ContactCard 
            icon={<Mail size={24} />}
            title="Email"
            value="rupak8770985@gmail.com"
            href="mailto:rupak8770985@gmail.com"
          />
          
          <ContactCard 
            icon={<Phone size={24} />}
            title="Phone"
            value="+91 9871510636"
            href="tel:+919871510636"
          />
          
          <ContactCard 
            icon={<MapPin size={24} />}
            title="Location"
            value="New Delhi, India"
            href="#"
          />
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 reveal">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-portfolio-dark">Contact Form</h3>
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-slate-700">Name</label>
                  <Input id="name" placeholder="Your name" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-slate-700">Email</label>
                  <Input id="email" placeholder="Your email" type="email" />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium text-slate-700">Subject</label>
                <Input id="subject" placeholder="Subject" />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-slate-700">Message</label>
                <Textarea id="message" placeholder="Your message" rows={6} />
              </div>
              <Button className="w-full bg-portfolio-primary hover:bg-portfolio-secondary">
                Send Message
              </Button>
            </form>
          </div>
          
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-portfolio-dark">Connect With Me</h3>
            <p className="text-slate-600">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>
            
            <div className="space-y-4">
              <a 
                href="https://github.com/rupak577" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center p-4 border border-slate-200 rounded-lg hover:border-portfolio-primary hover:bg-portfolio-primary/5 transition-colors"
              >
                <Github size={24} className="mr-4 text-slate-700" />
                <div>
                  <h4 className="font-medium text-portfolio-dark">GitHub</h4>
                  <p className="text-sm text-slate-500">Follow my code repositories</p>
                </div>
              </a>
              
              <a 
                href="https://linkedin.com/in/rupak577" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center p-4 border border-slate-200 rounded-lg hover:border-portfolio-primary hover:bg-portfolio-primary/5 transition-colors"
              >
                <Linkedin size={24} className="mr-4 text-slate-700" />
                <div>
                  <h4 className="font-medium text-portfolio-dark">LinkedIn</h4>
                  <p className="text-sm text-slate-500">Let's connect professionally</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
