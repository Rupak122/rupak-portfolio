
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactForm = () => {
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
    <div className="bg-white dark:bg-slate-800 rounded-xl shadow-xl p-6 sm:p-8 border border-slate-200 dark:border-slate-700">
      <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-6">Send A Message</h3>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
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
        <Button type="submit" className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white py-5 flex items-center justify-center group">
          <Send size={18} className="mr-2 group-hover:translate-x-1 transition-transform" />
          <span>Send Message</span>
        </Button>
      </form>
    </div>
  );
};

export default ContactForm;
