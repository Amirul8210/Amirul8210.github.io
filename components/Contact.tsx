"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FiMail, FiMapPin, FiSend } from "react-icons/fi";
import SectionWrapper from "./SectionWrapper";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      console.warn(
        "EmailJS environment variables (NEXT_PUBLIC_EMAILJS_SERVICE_ID, NEXT_PUBLIC_EMAILJS_TEMPLATE_ID, NEXT_PUBLIC_EMAILJS_PUBLIC_KEY) are not set. Falling back to simulation."
      );
      // Simulate API call fallback
      setTimeout(() => {
        setIsSubmitting(false);
        setSubmitted(true);
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setSubmitted(false), 5000);
      }, 1500);
      return;
    }

    emailjs
      .send(
        serviceId,
        templateId,
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
          title: "Portfolio Contact Form",
        },
        publicKey
      )
      .then(
        () => {
          setIsSubmitting(false);
          setSubmitted(true);
          setFormData({ name: "", email: "", message: "" });
          setTimeout(() => setSubmitted(false), 5000);
        },
        (error) => {
          console.error("EmailJS submission error:", error);
          setIsSubmitting(false);
          alert("Failed to send message. Please try again or email directly at amirulislammahin@gmail.com.");
        }
      );
  };

  return (
    <SectionWrapper id="contact">
      <div className="flex items-center gap-4 mb-12">
        <div className="h-[1px] flex-1 bg-white/10" />
        <h2 className="text-3xl md:text-4xl font-bold text-white">Get In Touch</h2>
        <div className="h-[1px] flex-1 bg-white/10" />
      </div>

      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-12">
        
        {/* Contact Info */}
        <div className="md:col-span-2 space-y-8">
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">Let&apos;s Connect</h3>
            <p className="text-text-secondary leading-relaxed">
              I&apos;m currently open for backend engineering, DevOps, and AI research opportunities. 
              Whether you have a question or just want to say hi, I&apos;ll try my best to get back to you!
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="p-4 bg-white/5 rounded-full text-accent-primary">
                <FiMail size={24} />
              </div>
              <div>
                <p className="text-sm text-text-secondary">Email me at</p>
                <a href="mailto:amirulislammahin@gmail.com" className="text-white font-medium hover:text-accent-primary transition-colors">
                  amirulislammahin@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="p-4 bg-white/5 rounded-full text-accent-secondary">
                <FiMapPin size={24} />
              </div>
              <div>
                <p className="text-sm text-text-secondary">Location</p>
                <p className="text-white font-medium">Dhaka, Bangladesh</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="md:col-span-3 glass-card p-8 rounded-2xl"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-text-secondary">Name</label>
                <input 
                  type="text" 
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full bg-primary/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent-primary transition-colors"
                  placeholder="John Doe"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-text-secondary">Email</label>
                <input 
                  type="email" 
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full bg-primary/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent-primary transition-colors"
                  placeholder="john@example.com"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium text-text-secondary">Message</label>
              <textarea 
                id="message"
                required
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                className="w-full bg-primary/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent-primary transition-colors resize-none"
                placeholder="Hello Khandaker, I'd like to discuss an opportunity..."
              ></textarea>
            </div>

            <button 
              type="submit"
              disabled={isSubmitting}
              className="w-full py-4 bg-accent-primary hover:bg-accent-violet text-white font-bold rounded-lg transition-all flex items-center justify-center gap-2 disabled:opacity-70"
            >
              {isSubmitting ? (
                <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : submitted ? (
                "Message Sent!"
              ) : (
                <>Send Message <FiSend /></>
              )}
            </button>
          </form>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
