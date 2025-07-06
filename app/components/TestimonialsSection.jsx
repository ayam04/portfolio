"use client";
import React from "react";
import { motion } from "framer-motion";
import { Quote, Star, Building } from "lucide-react";
import Link from "next/link";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Dr. Sarah Johnson",
      role: "AI Research Director",
      company: "TechCorp Solutions",
      content: "Ayamullah's expertise in AI and machine learning is exceptional. His innovative approach to solving complex problems and ability to translate technical concepts into practical solutions makes him a valuable asset to any team.",
      rating: 5,
    },
    {
      name: "Michael Chen",
      role: "CTO",
      company: "DataFlow Analytics",
      content: "Working with Ayamullah on our GenAI project was fantastic. His deep understanding of LLMs and ability to build scalable AI solutions exceeded our expectations. Highly recommended for any AI-related projects.",
      rating: 5,
    },
    {
      name: "Prof. Anita Sharma",
      role: "Data Science Professor",
      company: "Manipal University",
      content: "Ayamullah consistently demonstrates exceptional analytical skills and innovative thinking. His projects showcase a perfect blend of theoretical knowledge and practical application in data science and AI.",
      rating: 5,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section className="relative py-5 bg-transparent overflow-hidden" id="testimonials">
      {/* Editorial decorative elements */}
      <div className="absolute top-16 left-12 w-10 h-10 opacity-8">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <path d="M50 0 L55 35 L90 40 L55 45 L50 80 L45 45 L10 40 L45 35 Z" fill="currentColor" className="text-violet-400"/>
        </svg>
      </div>
      <div className="absolute bottom-16 right-12 w-14 h-14 opacity-6">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <path d="M50 0 L55 35 L90 40 L55 45 L50 80 L45 45 L10 40 L45 35 Z" fill="currentColor" className="text-cyan-300"/>
        </svg>
      </div>
      <div className="absolute top-1/3 right-1/4 w-8 h-8 opacity-7">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <path d="M50 0 L55 35 L90 40 L55 45 L50 80 L45 45 L10 40 L45 35 Z" fill="currentColor" className="text-amber-400"/>
        </svg>
      </div>
      <div className="absolute bottom-1/4 left-1/5 w-6 h-6 opacity-9">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <path d="M50 0 L55 35 L90 40 L55 45 L50 80 L45 45 L10 40 L45 35 Z" fill="currentColor" className="text-emerald-500"/>
        </svg>
      </div>
      <div className="relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-serif italic"
          >
            What People Say
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed"
          >
            Testimonials from colleagues, mentors, and clients who have experienced 
            the quality of work and dedication firsthand.
          </motion.p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative"
            >
              {/* Subtle editorial card glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-100/40 to-pink-100/40 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500"></div>
              <div className="relative bg-white/60 backdrop-blur-sm border border-gray-200 rounded-2xl p-8 h-full hover:border-purple-200 transition-all duration-300 shadow-sm">
                {/* Quote icon */}
                <div className="flex justify-between items-start mb-6">
                  <Quote className="w-8 h-8 text-purple-400" />
                  <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" />
                    ))}
                  </div>
                </div>
                {/* Content */}
                <p className="text-gray-700 leading-relaxed mb-8 italic">
                  "{testimonial.content}"
                </p>
                {/* Author info */}
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">{testimonial.name}</h4>
                    <p className="text-gray-500 text-sm font-medium">{testimonial.role}</p>
                    <p className="text-gray-400 text-sm flex items-center gap-1">
                      <Building size={14} />
                      {testimonial.company}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to action */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <div className="bg-white/60 backdrop-blur-sm border border-gray-200 rounded-2xl p-8 max-w-2xl mx-auto shadow-sm">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 font-serif italic">Ready to Work Together?</h3>
            <p className="text-gray-600 mb-6">
              Join these satisfied clients and let's create something amazing together!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="https://calendly.com/ayamk/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 border border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 bg-white"
              >
                Book a Call
              </Link>
              <Link
                href="#contact"
                className="px-8 py-3 border border-purple-400 text-purple-600 hover:bg-purple-50 font-semibold rounded-lg transition-all duration-300 bg-white"
              >
                Send Message
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
