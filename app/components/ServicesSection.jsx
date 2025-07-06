"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { 
  Brain,
  Calendar, 
  ArrowRight,
  Sparkles,
  Globe,
  BarChart3
} from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "AI & Machine Learning Solutions",
      description: "Custom machine learning models and AI systems for automation, data analysis, and intelligent decision-making. I build practical AI tools that solve real business problems.",
      features: ["Custom ML Models", "Predictive Analytics", "Process Automation", "Computer Vision", "Natural Language Processing"],
      calendlyLink: "https://calendly.com/ayamk/30min",
      pricing: "Starting from $500"
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Generative AI Applications",
      description: "Modern AI applications using large language models - chatbots, content generators, and intelligent assistants that understand context and provide helpful responses.",
      features: ["Custom Chatbots", "Document Analysis", "Content Generation", "LLM Integration", "AI Assistants"],
      calendlyLink: "https://calendly.com/ayamk/30min",
      pricing: "Starting from $800"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Full-Stack Web Development",
      description: "Modern, responsive websites and web applications built with React, Next.js, and cloud technologies. Fast, reliable, and user-friendly solutions.",
      features: ["React/Next.js Apps", "API Development", "Database Design", "Cloud Deployment", "Performance Optimization"],
      calendlyLink: "https://calendly.com/ayamk/30min",
      pricing: "Starting from $300"
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Data Science & Analytics",
      description: "Turn your data into actionable insights through statistical analysis, data visualization, and reporting dashboards that help you make better business decisions.",
      features: ["Data Analysis", "Statistical Modeling", "Business Intelligence", "Data Visualization", "Reporting Dashboards"],
      calendlyLink: "https://calendly.com/ayamk/30min",
      pricing: "Starting from $400"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section className="relative py-8 overflow-hidden bg-transparent" id="services">
      {/* Editorial decorative elements */}
      <div className="absolute top-20 left-10 w-10 h-10 opacity-8">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <path d="M50 0 L55 35 L90 40 L55 45 L50 80 L45 45 L10 40 L45 35 Z" fill="currentColor" className="text-purple-400"/>
        </svg>
      </div>
      <div className="absolute bottom-32 right-20 w-8 h-8 opacity-6">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <path d="M50 0 L55 35 L90 40 L55 45 L50 80 L45 45 L10 40 L45 35 Z" fill="currentColor" className="text-lime-400"/>
        </svg>
      </div>
      <div className="absolute top-1/3 right-1/4 w-12 h-12 opacity-7">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <path d="M50 0 L55 35 L90 40 L55 45 L50 80 L45 45 L10 40 L45 35 Z" fill="currentColor" className="text-sky-400"/>
        </svg>
      </div>
      <div className="absolute bottom-20 left-1/4 w-14 h-14 opacity-5">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <path d="M50 0 L55 35 L90 40 L55 45 L50 80 L45 45 L10 40 L45 35 Z" fill="currentColor" className="text-rose-300"/>
        </svg>
      </div>
      <div className="absolute top-40 left-1/3 w-6 h-6 opacity-9">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <path d="M50 0 L55 35 L90 40 L55 45 L50 80 L45 45 L10 40 L45 35 Z" fill="currentColor" className="text-fuchsia-400"/>
        </svg>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Editorial header */}
        <div className="mb-20">
          <div className="grid md:grid-cols-12 gap-16 items-end">
            <div className="md:col-span-8">
              <span className="text-sm uppercase tracking-[0.2em] text-gray-500 font-light mb-8 block">
                02 — Services
              </span>
              <h2 className="text-6xl md:text-7xl lg:text-8xl font-light text-gray-900 mb-4 leading-[0.8] tracking-tight">
                What I
              </h2>
              <h3 className="text-6xl md:text-7xl lg:text-8xl font-serif italic text-gray-400 leading-[0.8] tracking-tight">
                Build
              </h3>
            </div>
            <div className="md:col-span-4 text-right">
              <p className="text-lg text-gray-600 font-light leading-relaxed">
                Practical AI solutions and modern web applications that solve real business problems.
              </p>
            </div>
          </div>
        </div>
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8 mb-16"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative"
            >
              {/* Subtle editorial card glow */}
              <div className="relative bg-white/60 backdrop-blur-sm border border-gray-200 rounded-2xl p-8 h-full hover:border-purple-200 transition-all duration-300 shadow-sm">
                {/* Icon */}
                <div className="inline-flex p-4 bg-gray-200 mb-6"> 
                  {service.icon}
                </div>
                {/* Content */}
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors font-serif italic">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3 text-gray-700">
                      <div className="w-2 h-2 bg-gray-900 rounded-full"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                {/* Pricing */}
                <div className="mb-6">
                  <span className="text-gray-500 text-sm">Starting from</span>
                  <div className="text-2xl font-bold text-gray-900">
                    {service.pricing}
                  </div>
                </div>
                {/* CTA Button */}
                <Link
                  href={service.calendlyLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/btn inline-flex items-center gap-3 px-6 py-3 border border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 w-full justify-center bg-white"
                >
                  <Calendar size={20} />
                  Schedule Consultation
                  <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
        {/* Process Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h3 className="text-3xl font-bold text-gray-900 mb-8 font-serif italic">How We Work Together</h3>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: "1", title: "Discovery", desc: "Understanding your needs and goals" },
              { step: "2", title: "Strategy", desc: "Developing the perfect solution approach" },
              { step: "3", title: "Development", desc: "Building with cutting-edge technology" },
              { step: "4", title: "Delivery", desc: "Launching and optimizing your solution" }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center text-2xl font-bold text-gray-900 mx-auto mb-4">
                  {item.step}
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2 font-serif italic">{item.title}</h4>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
