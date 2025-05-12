
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Github, Linkedin, Mail, MapPin, Phone, Send } from "lucide-react";
import RevealOnScroll from './RevealOnScroll';
import { useToast } from "@/hooks/use-toast";
import AnimatedBackground from './animations/AnimatedBackground';

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
    <section id="contact" className="py-20 relative bg-gradient-to-b from-white to-slate-50 dark:from-slate-900 dark:to-slate-800">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:20px_20px]"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <RevealOnScroll animation="scale">
          <div className="text-center mb-16">
            <div className="inline-block">
              <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 tracking-wider uppercase bg-emerald-100 dark:bg-emerald-900/30 py-1 px-3 rounded-full mb-3 inline-block">Contact</span>
            </div>
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white">Get In Touch</h2>
            <div className="max-w-2xl mx-auto mt-4">
              <p className="text-slate-600 dark:text-slate-400">
                Have a project in mind or want to discuss potential opportunities?
                Feel free to reach out.
              </p>
            </div>
          </div>
        </RevealOnScroll>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 max-w-6xl mx-auto">
          {/* Contact Info - 2 columns */}
          <div className="lg:col-span-2 space-y-8">
            <RevealOnScroll animation="slide" direction="left">
              <div className="bg-white dark:bg-slate-800 rounded-xl shadow-xl p-8 border border-slate-200 dark:border-slate-700">
                <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-6">Contact Information</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg mr-4">
                      <Mail size={22} className="text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-slate-500 dark:text-slate-400 mb-1">Email</h4>
                      <a href="mailto:rupak8770985@gmail.com" className="text-slate-800 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium">
                        rupak8770985@gmail.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 p-2 bg-green-100 dark:bg-green-900/30 rounded-lg mr-4">
                      <Phone size={22} className="text-green-600 dark:text-green-400" />
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-slate-500 dark:text-slate-400 mb-1">Phone</h4>
                      <a href="tel:+919871510636" className="text-slate-800 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium">
                        +91 9871510636
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 p-2 bg-amber-100 dark:bg-amber-900/30 rounded-lg mr-4">
                      <MapPin size={22} className="text-amber-600 dark:text-amber-400" />
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-slate-500 dark:text-slate-400 mb-1">Location</h4>
                      <p className="text-slate-800 dark:text-white font-medium">
                        New Delhi, India
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-10 pt-6 border-t border-slate-200 dark:border-slate-700">
                  <h4 className="text-sm font-medium text-slate-500 dark:text-slate-400 mb-4">Connect With Me</h4>
                  <div className="flex space-x-4">
                    <a 
                      href="https://github.com/rupak122" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="p-3 rounded-lg bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 hover:bg-blue-100 dark:hover:bg-blue-900/30 hover:text-blue-600 dark:hover:text-blue-400 transition-all"
                    >
                      <Github size={20} />
                    </a>
                    <a 
                      href="https://linkedin.com/in/rupak8770985" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="p-3 rounded-lg bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 hover:bg-blue-100 dark:hover:bg-blue-900/30 hover:text-blue-600 dark:hover:text-blue-400 transition-all"
                    >
                      <Linkedin size={20} />
                    </a>
                    <a 
                      href="mailto:rupak8770985@gmail.com" 
                      className="p-3 rounded-lg bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 hover:bg-blue-100 dark:hover:bg-blue-900/30 hover:text-blue-600 dark:hover:text-blue-400 transition-all"
                    >
                      <Mail size={20} />
                    </a>
                    <a 
                      href="tel:+919871510636" 
                      className="p-3 rounded-lg bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 hover:bg-blue-100 dark:hover:bg-blue-900/30 hover:text-blue-600 dark:hover:text-blue-400 transition-all"
                    >
                      <Phone size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </RevealOnScroll>
            
            <RevealOnScroll animation="fade">
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-8 rounded-xl shadow-xl relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImEiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblRyYW5zZm9ybT0icm90YXRlKDQ1KSI+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiBmaWxsPSIjZmZmIiBvcGFjaXR5PSIwLjQiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjYSkiLz48L3N2Zz4=')]"></div>
                
                <div className="relative">
                  <h3 className="text-xl font-bold mb-4">Looking for a developer?</h3>
                  <p className="text-white/80 mb-6">
                    I'm currently available for freelance work and full-time opportunities. Let's build something amazing together.
                  </p>
                  
                  <Button asChild variant="secondary" className="bg-white text-blue-600 hover:bg-blue-50">
                    <a href="mailto:rupak8770985@gmail.com">
                      <Mail size={16} className="mr-2" />
                      <span>Drop me an email</span>
                    </a>
                  </Button>
                </div>
              </div>
            </RevealOnScroll>
          </div>
          
          {/* Contact Form - 3 columns */}
          <RevealOnScroll animation="slide" direction="right" className="lg:col-span-3">
            <div className="bg-white dark:bg-slate-800 rounded-xl shadow-xl p-8 border border-slate-200 dark:border-slate-700">
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
                <Button type="submit" className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white py-6 flex items-center justify-center group">
                  <Send size={18} className="mr-2 group-hover:translate-x-1 transition-transform" />
                  <span>Send Message</span>
                </Button>
              </form>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
