
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Github, Linkedin, Mail, MapPin, Phone, Code, Terminal, Send } from "lucide-react";
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
    <GlowingBorder>
      <Card className="overflow-hidden bg-slate-900/90 border-0">
        {/* Terminal-like header */}
        <div className="bg-slate-800 text-white py-1.5 px-4 flex items-center justify-between">
          <div className="flex items-center space-x-1.5">
            <span className="w-2.5 h-2.5 block rounded-full bg-red-500"></span>
            <span className="w-2.5 h-2.5 block rounded-full bg-yellow-500"></span>
            <span className="w-2.5 h-2.5 block rounded-full bg-green-500"></span>
          </div>
          <div className="flex items-center">
            <Terminal size={14} className="mr-1.5 text-green-400" />
            <span className="text-xs font-mono">{title}.sh</span>
          </div>
        </div>
        
        <CardContent className="p-0 relative z-10">
          <div className="p-4 font-mono">
            <div className="mb-2 text-white/80">
              <span className="text-green-400">$</span> echo <span className="text-blue-400">${title}</span>
            </div>
            <a 
              href={href} 
              className="text-white hover:text-blue-400 transition-colors font-medium flex items-center"
            >
              <div className="mr-3 p-2 bg-slate-800/80 rounded-md text-blue-400">
                {icon}
              </div>
              <span>{value}</span>
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
            <div className="inline-block bg-slate-800 text-white font-mono p-2 rounded-md mb-4 animate-glow">
              <span className="text-blue-400">import</span> <span className="text-green-400">{ "{ contact }" }</span> <span className="text-blue-400">from</span> <span className="text-yellow-400">'./utils'</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mt-4 meta-gradient-text">Get In Touch</h2>
            <div className="w-24 h-1 bg-indigo-600 mx-auto mt-6"></div>
            <p className="mt-6 text-slate-600 dark:text-slate-300 max-w-2xl mx-auto font-mono">
              <span className="text-green-600 dark:text-green-500">// </span>
              Have a project in mind or want to discuss potential opportunities?
              <br/>
              <span className="text-green-600 dark:text-green-500">// </span>
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
            <GlowingBorder>
              <div className="bg-slate-800 text-white py-1.5 px-4 flex items-center justify-between rounded-t-lg">
                <div className="flex items-center space-x-1.5">
                  <span className="w-3 h-3 block rounded-full bg-red-500"></span>
                  <span className="w-3 h-3 block rounded-full bg-yellow-500"></span>
                  <span className="w-3 h-3 block rounded-full bg-green-500"></span>
                </div>
                <div className="flex items-center">
                  <Code size={14} className="mr-1.5 text-blue-400" />
                  <span className="text-xs font-mono">message.js</span>
                </div>
                <span className="text-xs font-mono text-slate-400">~/contact</span>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-6 bg-slate-900/95 rounded-b-lg p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-mono text-slate-300">
                      <span className="text-blue-400">const</span> name = <span className="text-slate-400">// Your name</span>
                    </label>
                    <Input 
                      id="name" 
                      placeholder="Your name" 
                      className="border-slate-700 bg-slate-800/60 focus:border-indigo-500 text-white font-mono"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-mono text-slate-300">
                      <span className="text-blue-400">const</span> email = <span className="text-slate-400">// Your email</span>
                    </label>
                    <Input 
                      id="email" 
                      placeholder="Your email" 
                      type="email" 
                      className="border-slate-700 bg-slate-800/60 focus:border-indigo-500 text-white font-mono"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-mono text-slate-300">
                    <span className="text-blue-400">const</span> subject = <span className="text-slate-400">// Subject</span>
                  </label>
                  <Input 
                    id="subject" 
                    placeholder="Subject" 
                    className="border-slate-700 bg-slate-800/60 focus:border-indigo-500 text-white font-mono"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-mono text-slate-300">
                    <span className="text-blue-400">function</span> message() {'{'}...{'}'} <span className="text-slate-400">// Your message</span>
                  </label>
                  <Textarea 
                    id="message" 
                    placeholder="Your message" 
                    rows={6} 
                    className="border-slate-700 bg-slate-800/60 focus:border-indigo-500 text-white font-mono"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>
                <Button type="submit" className="w-full bg-indigo-600 hover:bg-indigo-700 text-white rounded-md py-6 flex items-center justify-center group">
                  <Send size={18} className="mr-2 group-hover:translate-x-1 transition-transform" />
                  <span className="font-mono">await sendMessage()</span>
                </Button>
              </form>
            </GlowingBorder>
          </RevealOnScroll>
          
          <RevealOnScroll animation="slide" direction="right">
            <div className="space-y-6">
              <GlowingBorder>
                <div className="bg-slate-800 text-white py-1.5 px-4 flex items-center justify-between rounded-t-lg">
                  <div className="flex items-center space-x-1.5">
                    <span className="w-3 h-3 block rounded-full bg-red-500"></span>
                    <span className="w-3 h-3 block rounded-full bg-yellow-500"></span>
                    <span className="w-3 h-3 block rounded-full bg-green-500"></span>
                  </div>
                  <div className="flex items-center">
                    <Terminal size={14} className="mr-1.5 text-green-400" />
                    <span className="text-xs font-mono">social.js</span>
                  </div>
                  <span className="text-xs font-mono text-slate-400">~/connect</span>
                </div>
                
                <div className="bg-slate-900/95 p-6 rounded-b-lg">
                  <div className="font-mono text-sm mb-6 text-white/80">
                    <span className="text-slate-400">// Connect with me on social media</span><br/>
                    <span className="text-blue-400">const</span> <span className="text-green-400">connect</span> = <span className="text-blue-400">async</span> () {'=> {'}<br/>
                    <span className="pl-4">{'// Choose your preferred platform'}</span><br/>
                    {'}'};
                  </div>
                  
                  <div className="space-y-4">
                    <a 
                      href="https://github.com/rupak122" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center p-4 border border-slate-700/50 rounded-lg hover:border-indigo-500 hover:bg-indigo-900/20 transition-all duration-300 group"
                    >
                      <div className="p-2 bg-slate-800 rounded-md mr-4 group-hover:bg-indigo-800/30 transition-colors">
                        <Github size={24} className="text-white" />
                      </div>
                      <div>
                        <h4 className="font-medium text-white font-mono group-hover:text-indigo-300 transition-colors">github.connect()</h4>
                        <p className="text-sm text-slate-400 font-mono">// Follow my code repositories</p>
                      </div>
                    </a>
                    
                    <a 
                      href="https://linkedin.com/in/rupak8770985" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center p-4 border border-slate-700/50 rounded-lg hover:border-indigo-500 hover:bg-indigo-900/20 transition-all duration-300 group"
                    >
                      <div className="p-2 bg-slate-800 rounded-md mr-4 group-hover:bg-indigo-800/30 transition-colors">
                        <Linkedin size={24} className="text-white" />
                      </div>
                      <div>
                        <h4 className="font-medium text-white font-mono group-hover:text-indigo-300 transition-colors">linkedin.connect()</h4>
                        <p className="text-sm text-slate-400 font-mono">// Let's connect professionally</p>
                      </div>
                    </a>
                  </div>
                  
                  <div className="mt-6 p-3 bg-slate-800/80 rounded-md font-mono text-xs text-slate-300">
                    <span className="text-green-400">$</span> git clone https://github.com/rupak122/portfolio.git<br/>
                    <span className="text-green-400">$</span> cd portfolio<br/>
                    <span className="text-green-400">$</span> npm install<br/>
                    <span className="text-green-400">$</span> npm start<br/>
                    <span className="text-blue-400">{">"}</span> Server running at http://localhost:3000
                  </div>
                </div>
              </GlowingBorder>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </AnimatedBackground>
  );
};

export default ContactSection;
