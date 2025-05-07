
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Github, Linkedin, Mail, MapPin, Phone, Code, Terminal, Send } from "lucide-react";
import RevealOnScroll from './RevealOnScroll';
import { useToast } from "@/hooks/use-toast";

interface ContactCardProps {
  icon: React.ReactNode;
  title: string;
  value: string;
  href: string;
}

const ContactCard = ({ icon, title, value, href }: ContactCardProps) => (
  <RevealOnScroll>
    <Card className="hover:shadow-lg transition-all duration-300 border-slate-200 dark:border-slate-700 overflow-hidden">
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
          <div className="mb-2">
            <span className="text-green-600 dark:text-green-400">$</span> echo <span className="text-blue-600 dark:text-blue-400">${title}</span>
          </div>
          <a 
            href={href} 
            className="text-slate-900 hover:text-blue-600 transition-colors dark:text-white dark:hover:text-blue-400 font-medium flex items-center"
          >
            <div className="mr-3 p-2 bg-blue-50 rounded-md text-blue-600 dark:bg-blue-900/20">
              {icon}
            </div>
            <span>{value}</span>
          </a>
        </div>
      </CardContent>
    </Card>
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
    <section id="contact" className="py-24 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4 md:px-6">
        <RevealOnScroll>
          <div className="text-center mb-16">
            <div className="inline-block bg-slate-800 text-white font-mono p-2 rounded-md mb-4">
              <span className="text-blue-400">import</span> <span className="text-green-400">{ "{ contact }" }</span> <span className="text-blue-400">from</span> <span className="text-yellow-400">'./utils'</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mt-4">Get In Touch</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mt-6"></div>
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
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <RevealOnScroll>
            <div className="space-y-8">
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
              
              <form onSubmit={handleSubmit} className="space-y-6 bg-slate-50 dark:bg-slate-800 rounded-b-lg p-6 border border-slate-100 dark:border-slate-700">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-mono text-slate-700 dark:text-slate-300">
                      <span className="text-blue-600 dark:text-blue-400">const</span> name = <span className="text-slate-400">// Your name</span>
                    </label>
                    <Input 
                      id="name" 
                      placeholder="Your name" 
                      className="border-slate-200 focus:border-blue-500 dark:border-slate-700 font-mono"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-mono text-slate-700 dark:text-slate-300">
                      <span className="text-blue-600 dark:text-blue-400">const</span> email = <span className="text-slate-400">// Your email</span>
                    </label>
                    <Input 
                      id="email" 
                      placeholder="Your email" 
                      type="email" 
                      className="border-slate-200 focus:border-blue-500 dark:border-slate-700 font-mono"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-mono text-slate-700 dark:text-slate-300">
                    <span className="text-blue-600 dark:text-blue-400">const</span> subject = <span className="text-slate-400">// Subject</span>
                  </label>
                  <Input 
                    id="subject" 
                    placeholder="Subject" 
                    className="border-slate-200 focus:border-blue-500 dark:border-slate-700 font-mono"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-mono text-slate-700 dark:text-slate-300">
                    <span className="text-blue-600 dark:text-blue-400">function</span> message() {'{'}...{'}'} <span className="text-slate-400">// Your message</span>
                  </label>
                  <Textarea 
                    id="message" 
                    placeholder="Your message" 
                    rows={6} 
                    className="border-slate-200 focus:border-blue-500 dark:border-slate-700 font-mono"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>
                <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-md py-6 flex items-center justify-center">
                  <Send size={18} className="mr-2" />
                  <span className="font-mono">await sendMessage()</span>
                </Button>
              </form>
            </div>
          </RevealOnScroll>
          
          <RevealOnScroll direction="right">
            <div className="space-y-6">
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
              
              <div className="bg-slate-50 dark:bg-slate-800 p-6 rounded-b-lg border border-slate-100 dark:border-slate-700">
                <div className="font-mono text-sm mb-6 text-slate-600 dark:text-slate-300">
                  <span className="text-slate-500 dark:text-slate-400">// Connect with me on social media</span><br/>
                  <span className="text-blue-600 dark:text-blue-400">const</span> <span className="text-green-600 dark:text-green-400">connect</span> = <span className="text-blue-600 dark:text-blue-400">async</span> () {'=> {'}<br/>
                  <span className="pl-4">{'// Choose your preferred platform'}</span><br/>
                  {'}'};
                </div>
                
                <div className="space-y-4">
                  <a 
                    href="https://github.com/rupak122" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center p-4 border border-slate-200 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-colors dark:border-slate-700 dark:hover:border-blue-500 dark:hover:bg-blue-900/20"
                  >
                    <div className="p-2 bg-slate-100 rounded-md dark:bg-slate-700 mr-4">
                      <Github size={24} className="text-slate-700 dark:text-slate-300" />
                    </div>
                    <div>
                      <h4 className="font-medium text-slate-900 dark:text-white font-mono">github.connect()</h4>
                      <p className="text-sm text-slate-500 dark:text-slate-400 font-mono">// Follow my code repositories</p>
                    </div>
                  </a>
                  
                  <a 
                    href="https://linkedin.com/in/rupak8770985" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center p-4 border border-slate-200 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-colors dark:border-slate-700 dark:hover:border-blue-500 dark:hover:bg-blue-900/20"
                  >
                    <div className="p-2 bg-slate-100 rounded-md dark:bg-slate-700 mr-4">
                      <Linkedin size={24} className="text-slate-700 dark:text-slate-300" />
                    </div>
                    <div>
                      <h4 className="font-medium text-slate-900 dark:text-white font-mono">linkedin.connect()</h4>
                      <p className="text-sm text-slate-500 dark:text-slate-400 font-mono">// Let's connect professionally</p>
                    </div>
                  </a>
                </div>
                
                <div className="mt-6 p-3 bg-slate-100 dark:bg-slate-700 rounded-md font-mono text-xs text-slate-600 dark:text-slate-300">
                  <span className="text-green-600 dark:text-green-400">$</span> git clone https://github.com/rupak122/portfolio.git<br/>
                  <span className="text-green-600 dark:text-green-400">$</span> cd portfolio<br/>
                  <span className="text-green-600 dark:text-green-400">$</span> npm install<br/>
                  <span className="text-green-600 dark:text-green-400">$</span> npm start<br/>
                  <span className="text-blue-600 dark:text-blue-400">{">"}</span> Server running at http://localhost:3000
                </div>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
