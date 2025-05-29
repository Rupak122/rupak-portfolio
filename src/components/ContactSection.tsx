
import React from 'react';
import RevealOnScroll from './RevealOnScroll';
import ContactForm from './ContactForm';
import ContactInfo from './ContactInfo';

const ContactSection = () => {
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
          {/* Contact Info - 2 columns on lg, full width on mobile */}
          <div className="lg:col-span-2">
            <RevealOnScroll animation="slide" direction="left">
              <ContactInfo />
            </RevealOnScroll>
          </div>
          
          {/* Contact Form - 3 columns on lg, full width on mobile */}
          <RevealOnScroll animation="slide" direction="right" className="lg:col-span-3">
            <ContactForm />
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
