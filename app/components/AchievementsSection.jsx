"use client";
import React from "react";
import { motion } from "framer-motion";
import { Rocket, GraduationCap, Award, Users, Star, Code } from "lucide-react";

const achievementsList = [
  {
    metric: "Projects",
    value: "20+",
    description: "AI & Web Applications",
    subtext: "Delivered across multiple domains",
    icon: Rocket,
    highlight: "Featured"
  },
  {
    metric: "Experience",
    value: "3+",
    description: "Years in Tech",
    subtext: "Continuous learning & innovation",
    icon: GraduationCap,
    highlight: "Growing"
  },
  {
    metric: "Certifications",
    value: "12+",
    description: "Industry Credentials",
    subtext: "AWS, GCP, ML Specializations",
    icon: Award,
    highlight: "Certified"
  },
  {
    metric: "CGPA",
    value: "i pass*",
    description: "Academic Excellence",
    subtext: "Computer Science Engineering",
    icon: Star,
    highlight: "Distinction"
  }
];

const AchievementsSection = () => {
  return (
    <section className="py-16 px-4 xl:px-16 relative bg-transparent overflow-hidden">
      {/* Editorial decorative elements */}
      <div className="absolute top-20 left-20 w-8 h-8 opacity-8">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <path d="M50 0 L55 35 L90 40 L55 45 L50 80 L45 45 L10 40 L45 35 Z" fill="currentColor" className="text-pink-400"/>
        </svg>
      </div>
      <div className="absolute bottom-20 right-16 w-12 h-12 opacity-6">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <path d="M50 0 L55 35 L90 40 L55 45 L50 80 L45 45 L10 40 L45 35 Z" fill="currentColor" className="text-green-400"/>
        </svg>
      </div>
      <div className="absolute top-1/3 right-1/3 w-10 h-10 opacity-7">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <path d="M50 0 L55 35 L90 40 L55 45 L50 80 L45 45 L10 40 L45 35 Z" fill="currentColor" className="text-blue-300"/>
        </svg>
      </div>
      <div className="absolute bottom-1/3 left-1/4 w-6 h-6 opacity-8">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <path d="M50 0 L55 35 L90 40 L55 45 L50 80 L45 45 L10 40 L45 35 Z" fill="currentColor" className="text-orange-400"/>
        </svg>
      </div>
      
      {/* Header Section */}
      <div className="mb-16">
        <span className="text-sm uppercase tracking-[0.2em] text-gray-500 font-light mb-8 block">
          01 — Milestones
        </span>
        <div className="grid md:grid-cols-12 gap-16 items-end">
          <div className="md:col-span-8">
            <h2 className="text-6xl md:text-7xl lg:text-8xl font-light text-gray-900 mb-4 leading-[0.8] tracking-tight">
              Key
            </h2>
            <h3 className="text-6xl md:text-7xl lg:text-8xl font-serif italic text-gray-400 leading-[0.8] tracking-tight">
              Achievements
            </h3>
          </div>
          <div className="md:col-span-4">
            <p className="text-lg text-gray-600 leading-relaxed font-light">
              Milestones that showcase continuous growth, innovation, and commitment to excellence in technology.
            </p>
          </div>
        </div>
      </div>
      
      {/* Achievements Grid - Editorial Magazine Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {achievementsList.map((achievement, index) => {
          const Icon = achievement.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative bg-white/70 backdrop-blur-sm border border-gray-200/50 hover:border-gray-300/70 transition-all duration-300 hover:shadow-xl overflow-hidden"
            >
              {/* Subtle gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
              
              <div className="relative p-8">
                {/* Icon */}
                <div className="mb-6">
                  <div className="w-12 h-12 bg-gray-100 group-hover:bg-gray-900 transition-all duration-300 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-gray-600 group-hover:text-white transition-all duration-300" />
                  </div>
                </div>
                
                {/* Highlight Badge */}
                <div className="mb-4">
                  <span className="text-xs uppercase tracking-wider text-gray-500 bg-gray-100 px-2 py-1">
                    {achievement.highlight}
                  </span>
                </div>
                
                {/* Large Number Display */}
                <div className="mb-4">
                  <h3 className="text-5xl md:text-6xl font-light text-gray-900 leading-none tracking-tight">
                    {achievement.value}
                  </h3>
                </div>
                
                {/* Metric Title */}
                <div className="mb-3">
                  <h4 className="text-lg font-light text-gray-900 uppercase tracking-wider">
                    {achievement.metric}
                  </h4>
                </div>
                
                {/* Description */}
                <div className="space-y-2">
                  <p className="text-sm text-gray-700 font-medium">
                    {achievement.description}
                  </p>
                  <p className="text-xs text-gray-500 leading-relaxed">
                    {achievement.subtext}
                  </p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
      
      {/* Bottom editorial element */}
      <div className="mt-16 text-center">
        <div className="inline-flex items-center gap-4 text-sm text-gray-500 uppercase tracking-wider">
          <div className="w-8 h-px bg-gray-300"></div>
          <span>Committed to Excellence</span>
          <div className="w-8 h-px bg-gray-300"></div>
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
