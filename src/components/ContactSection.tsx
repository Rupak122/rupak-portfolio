
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import RevealOnScroll from './RevealOnScroll';

interface ContactCardProps {
  icon: React.ReactNode;
  title: string;
  value: string;
  href: string;
}

const ContactCard = ({ icon, title, value, href }: ContactCardProps) => (
  <RevealOnScroll>
    <Card className="hover:shadow-lg transition-all duration-300 border-blue-50 dark:border-blue-900/20">
      <CardContent className="p-6 flex items-center">
        <div className="mr-4 p-3 bg-blue-50 rounded-full text-blue-600 dark:bg-blue-900/20">
          {icon}
        </div>
        <div>
          <h3 className="font-medium text-slate-500 dark:text-slate-400 mb-1">{title}</h3>
          <a 
            href={href} 
            className="text-slate-900 hover:text-blue-600 transition-colors dark:text-white dark:hover:text-blue-400 font-medium"
          >
            {value}
          </a>
        </div>
      </CardContent>
    </Card>
  </RevealOnScroll>
);

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4 md:px-6">
        <RevealOnScroll>
          <div className="text-center mb-16">
            <span className="px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-sm font-medium dark:bg-blue-900/20">CONTACT</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mt-4">Get In Touch</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mt-6"></div>
            <p className="mt-6 text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              Have a project in mind or want to discuss potential opportunities? Feel free to reach out.
            </p>
          </div>
        </RevealOnScroll>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
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
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <RevealOnScroll>
            <div className="space-y-8">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Send Me a Message</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-slate-700 dark:text-slate-300">Name</label>
                    <Input id="name" placeholder="Your name" className="border-slate-200 focus:border-blue-500 dark:border-slate-700" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-slate-700 dark:text-slate-300">Email</label>
                    <Input id="email" placeholder="Your email" type="email" className="border-slate-200 focus:border-blue-500 dark:border-slate-700" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium text-slate-700 dark:text-slate-300">Subject</label>
                  <Input id="subject" placeholder="Subject" className="border-slate-200 focus:border-blue-500 dark:border-slate-700" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-slate-700 dark:text-slate-300">Message</label>
                  <Textarea id="message" placeholder="Your message" rows={6} className="border-slate-200 focus:border-blue-500 dark:border-slate-700" />
                </div>
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-md py-6">
                  Send Message
                </Button>
              </form>
            </div>
          </RevealOnScroll>
          
          <RevealOnScroll direction="right">
            <div className="space-y-8">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Connect With Me</h3>
              <p className="text-slate-600 dark:text-slate-300">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
              </p>
              
              <div className="space-y-4">
                <a 
                  href="https://github.com/rupak122" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center p-6 border border-slate-200 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-colors dark:border-slate-700 dark:hover:border-blue-500 dark:hover:bg-blue-900/20"
                >
                  <Github size={24} className="mr-4 text-slate-700 dark:text-slate-300" />
                  <div>
                    <h4 className="font-medium text-slate-900 dark:text-white">GitHub</h4>
                    <p className="text-sm text-slate-500 dark:text-slate-400">Follow my code repositories</p>
                  </div>
                </a>
                
                <a 
                  href="https://linkedin.com/in/rupak8770985" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center p-6 border border-slate-200 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-colors dark:border-slate-700 dark:hover:border-blue-500 dark:hover:bg-blue-900/20"
                >
                  <Linkedin size={24} className="mr-4 text-slate-700 dark:text-slate-300" />
                  <div>
                    <h4 className="font-medium text-slate-900 dark:text-white">LinkedIn</h4>
                    <p className="text-sm text-slate-500 dark:text-slate-400">Let's connect professionally</p>
                  </div>
                </a>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
