
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Github, Linkedin, Mail, MapPin, Phone, Send } from "lucide-react";
import RevealOnScroll from './RevealOnScroll';
import { useToast } from "@/hooks/use-toast";
import GlowingBorder from './animations/GlowingBorder';
import AnimatedBackground from './animations/AnimatedBackground';

interface ContactCardProps {
  icon: React.ReactNode;
  title: string;
  value: string;
  href: string;
}

const ContactCard = ({ icon, title, value, href }: ContactCardProps) => (
  <RevealOnScroll animation="slide" direction="up">
    <GlowingBorder elegant={true}>
      <Card className="overflow-hidden bg-white dark:bg-slate-800 border-0">
        <CardContent className="p-6 flex items-center">
          <div className="mr-4 p-3 rounded-full bg-blue-100 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400">
            {icon}
          </div>
          <div>
            <h4 className="text-sm font-medium text-slate-500 dark:text-slate-400 mb-1">{title}</h4>
            <a 
              href={href} 
              className="text-slate-800 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium"
            >
              {value}
            </a>
          </div>
        </CardContent>
      </Card>
    </GlowingBorder>
  </RevealOnScroll>
);

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    
    toast({
      title: "Message sent",
      description: "Thanks for reaching out! I'll get back to you soon.",
    });
    
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };
  
  return (
    <AnimatedBackground variant="dots" className="py-20 relative">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <RevealOnScroll animation="scale">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">Get In Touch</h2>
            <div className="w-20 h-1 bg-blue-500 mx-auto mt-4"></div>
            <p className="mt-6 text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              Have a project in mind or want to discuss potential opportunities?
              Feel free to reach out.
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
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <RevealOnScroll animation="slide" direction="left">
            <GlowingBorder elegant={true}>
              <Card className="bg-white dark:bg-slate-800 border-0">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-6">Send A Message</h3>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium text-slate-700 dark:text-slate-300">
                          Your name
                        </label>
                        <Input 
                          id="name" 
                          placeholder="Enter your name" 
                          className="border-slate-200 focus:border-blue-500 dark:border-slate-700 dark:bg-slate-800/60"
                          value={formData.name}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium text-slate-700 dark:text-slate-300">
                          Email address
                        </label>
                        <Input 
                          id="email" 
                          placeholder="Your email address" 
                          type="email" 
                          className="border-slate-200 focus:border-blue-500 dark:border-slate-700 dark:bg-slate-800/60"
                          value={formData.email}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="subject" className="text-sm font-medium text-slate-700 dark:text-slate-300">
                        Subject
                      </label>
                      <Input 
                        id="subject" 
                        placeholder="Subject" 
                        className="border-slate-200 focus:border-blue-500 dark:border-slate-700 dark:bg-slate-800/60"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium text-slate-700 dark:text-slate-300">
                        Message
                      </label>
                      <Textarea 
                        id="message" 
                        placeholder="Your message" 
                        rows={6} 
                        className="border-slate-200 focus:border-blue-500 dark:border-slate-700 dark:bg-slate-800/60"
                        value={formData.message}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white py-6 flex items-center justify-center group">
                      <Send size={18} className="mr-2 group-hover:translate-x-1 transition-transform" />
                      <span>Send Message</span>
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </GlowingBorder>
          </RevealOnScroll>
          
          <RevealOnScroll animation="slide" direction="right">
            <div className="space-y-6">
              <GlowingBorder elegant={true}>
                <Card className="bg-white dark:bg-slate-800 border-0">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-6">Connect With Me</h3>
                    <p className="text-slate-600 dark:text-slate-300 mb-8">
                      You can also reach out to me through social media or check out my work on these platforms. I'm always open to connecting with fellow developers and potential collaborators.
                    </p>
                    
                    <div className="space-y-4">
                      <a 
                        href="https://github.com/rupak122" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center p-4 border border-slate-200 dark:border-slate-700 rounded-lg hover:border-blue-500 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all duration-300 group"
                      >
                        <div className="p-2 bg-slate-100 dark:bg-slate-700 rounded-md mr-4 group-hover:bg-blue-100 dark:group-hover:bg-blue-800/30 transition-colors">
                          <Github size={24} className="text-slate-700 dark:text-white" />
                        </div>
                        <div>
                          <h4 className="font-medium text-slate-800 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">GitHub</h4>
                          <p className="text-sm text-slate-500 dark:text-slate-400">View my code repositories</p>
                        </div>
                      </a>
                      
                      <a 
                        href="https://linkedin.com/in/rupak8770985" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center p-4 border border-slate-200 dark:border-slate-700 rounded-lg hover:border-blue-500 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all duration-300 group"
                      >
                        <div className="p-2 bg-slate-100 dark:bg-slate-700 rounded-md mr-4 group-hover:bg-blue-100 dark:group-hover:bg-blue-800/30 transition-colors">
                          <Linkedin size={24} className="text-slate-700 dark:text-white" />
                        </div>
                        <div>
                          <h4 className="font-medium text-slate-800 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">LinkedIn</h4>
                          <p className="text-sm text-slate-500 dark:text-slate-400">Connect with me professionally</p>
                        </div>
                      </a>
                    </div>
                    
                    <div className="mt-10 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-100 dark:border-blue-800/50">
                      <p className="text-blue-700 dark:text-blue-300 text-sm">
                        <span className="font-semibold">Looking to hire?</span> I'm currently available for freelance work and full-time opportunities.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </GlowingBorder>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </AnimatedBackground>
  );
};

export default ContactSection;
