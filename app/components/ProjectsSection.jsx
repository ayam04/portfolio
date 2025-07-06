"use client";
import { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";
import Link from "next/link";

const projectsData = [
  {
    id: 1,
    title: "LeetLingo - AI Interview Prep",
    description: "An interview prep platform using AI for personalized lessons, speech recognition, and progress tracking. Built with modern web technologies.",
    image: "/images/projects/leetlingo.png",
    tag: ["All", "GenAI", "Web"],
    gitUrl: "",
    previewUrl: "https://leetlingo.site/",
    featured: true,
  },
  {
    id: 8,
    title: "Meeting Note Taker AI",
    description: "Intelligent meeting assistant that automatically transcribes, summarizes, and extracts action items from meetings using advanced NLP.",
    image: "https://cdn.prod.website-files.com/618e9316785b3582a5178502/65ca96699a5d2238f2ed8496_homepage-never-miss-a-detail@2x.jpg",
    tag: ["All", "GenAI"],
    gitUrl: "https://github.com/ayam04/meeting-note-taker",
    previewUrl: "",
    featured: true,
  },
  {
    id: 10,
    title: "RajRasa Restaurant Experience",
    description: "Immersive Rajasthani restaurant website showcasing heritage cuisine and cultural experience with modern web design and interactive elements.",
    image: "/images/projects/rajrasa.png",
    tag: ["All", "Web"],
    gitUrl: "",
    previewUrl: "https://rajrasa.com",
    featured: false,
  },
  {
    id: 9,
    title: "Career Recommendation System",
    description: "ML-powered career guidance system that analyzes skills, interests, and market trends to suggest optimal career paths for students.",
    image: "https://media.gettyimages.com/id/686373828/vector/a-career-crossroads.jpg?s=612x612&w=0&k=20&c=9lR3MeYPvAplgYyMu0gq9Fl3rPJDZASK5zPcFPu0Ucs=",
    tag: ["All", "ML"],
    gitUrl: "https://github.com/ayam04/career-recommendation-system-squ",
    previewUrl: "",
    featured: false,
  },
  {
    id: 7,
    title: "Multi Agent RAG Customer Support",
    description: "Sophisticated customer support system using MongoDB, FAISS, and OpenAI to retrieve and generate responses from multiple data sources.",
    image: "/images/projects/7.png",
    tag: ["All", "GenAI"],
    gitUrl: "https://github.com/ayam04/multi-rag-customer-support",
    previewUrl: "",
  },
  {
    id: 2,
    title: "Scanned PDF to BRF Converter",
    description: "Accessibility tool combining LLM, OCR, and image captioning to convert scanned PDFs into braille-readable formats with contextual understanding.",
    image: "/images/projects/2.png",
    tag: ["All", "GenAI"],
    gitUrl: "",
    previewUrl: "",
  },
  {
    id: 3,
    title: "Multimodal Tumor Detection System",
    description: "Classical ML system for tumor detection in MRI scans using advanced image processing and machine learning techniques with high accuracy.",
    image: "/images/projects/3.jpeg",
    tag: ["All", "ML"],
    gitUrl: "https://github.com/ayam04/PyTumorDetection",
    previewUrl: "",
  },
  {
    id: 5,
    title: "Contract Farma Platform",
    description: "Full-stack application enabling local farmers to sell crops on contractual basis nationwide, built with Node.js and modern web technologies.",
    image: "/images/projects/5.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/ayam04/Contract-Farming",
    previewUrl: "",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects" className="relative py-8 bg-transparent overflow-hidden">
      {/* Editorial decorative elements */}
      <div className="absolute top-20 right-20 w-12 h-12 opacity-8">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <path d="M50 0 L55 35 L90 40 L55 45 L50 80 L45 45 L10 40 L45 35 Z" fill="currentColor" className="text-cyan-400"/>
        </svg>
      </div>
      <div className="absolute bottom-40 left-10 w-8 h-8 opacity-6">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <path d="M50 0 L55 35 L90 40 L55 45 L50 80 L45 45 L10 40 L45 35 Z" fill="currentColor" className="text-purple-500"/>
        </svg>
      </div>
      <div className="absolute top-1/3 left-1/4 w-10 h-10 opacity-7">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <path d="M50 0 L55 35 L90 40 L55 45 L50 80 L45 45 L10 40 L45 35 Z" fill="currentColor" className="text-orange-400"/>
        </svg>
      </div>
      <div className="absolute bottom-20 right-1/3 w-14 h-14 opacity-5">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <path d="M50 0 L55 35 L90 40 L55 45 L50 80 L45 45 L10 40 L45 35 Z" fill="currentColor" className="text-emerald-300"/>
        </svg>
      </div>
      <div className="absolute top-40 right-1/5 w-6 h-6 opacity-8">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <path d="M50 0 L55 35 L90 40 L55 45 L50 80 L45 45 L10 40 L45 35 Z" fill="currentColor" className="text-red-400"/>
        </svg>
      </div>
      
      <div className="relative z-10">
        {/* Editorial Header */}
        <div className="mb-20 px-4 xl:px-16">
          <div className="grid md:grid-cols-12 gap-16 items-end">
            <div className="md:col-span-8">
              <span className="text-sm uppercase tracking-[0.2em] text-gray-500 font-light mb-8 block">
                03 — Portfolio
              </span>
              <h2 className="text-6xl md:text-7xl lg:text-8xl font-light text-gray-900 mb-4 leading-[0.8] tracking-tight">
                Featured
              </h2>
              <h3 className="text-6xl md:text-7xl lg:text-8xl font-serif italic text-gray-400 leading-[0.8] tracking-tight">
                Projects
              </h3>
            </div>
            <div className="md:col-span-4">
              <p className="text-lg text-gray-600 leading-relaxed font-light">
                A collection of AI-powered applications, machine learning models, and modern web solutions 
                that showcase my expertise in cutting-edge technology.
              </p>
            </div>
          </div>
        </div>

        {/* Editorial Filter Tags */}
        <div className="flex flex-wrap justify-start items-center gap-6 py-8 mb-16 px-4 xl:px-16">
          <ProjectTag
            onClick={handleTagChange}
            name="All"
            isSelected={tag === "All"}
          />
          <ProjectTag
            onClick={handleTagChange}
            name="GenAI"
            isSelected={tag === "GenAI"}
          />
          <ProjectTag
            onClick={handleTagChange}
            name="ML"
            isSelected={tag === "ML"}
          />
          <ProjectTag
            onClick={handleTagChange}
            name="Web"
            isSelected={tag === "Web"}
          />
        </div>

        {/* Editorial Projects Grid */}
        <div className="px-4 xl:px-16">
          <div ref={ref} className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-20">
            {filteredProjects.filter(project => project.featured).map((project, index) => (
              <motion.div
                key={project.id}
                variants={cardVariants}
                initial="initial"
                animate={isInView ? "animate" : "initial"}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className={`${index === 0 ? 'md:col-span-2 lg:col-span-2' : ''} h-full`}
              >
                <ProjectCard
                  key={project.id}
                  title={project.title}
                  description={project.description}
                  imgUrl={project.image}
                  gitUrl={project.gitUrl}
                  previewUrl={project.previewUrl}
                  featured={true}
                />
              </motion.div>
            ))}
          </div>

          {/* Other Projects - Editorial grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {filteredProjects.filter(project => !project.featured).map((project, index) => (
              <motion.div
                key={project.id}
                variants={cardVariants}
                initial="initial"
                animate={isInView ? "animate" : "initial"}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="h-full"
              >
                <ProjectCard
                  key={project.id}
                  title={project.title}
                  description={project.description}
                  imgUrl={project.image}
                  gitUrl={project.gitUrl}
                  previewUrl={project.previewUrl}
                />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Editorial CTA Section */}
        <div className="mt-32 px-4 xl:px-16">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h3 className="text-4xl md:text-5xl font-light text-gray-900 mb-6 leading-tight">
                Interested in 
                <span className="font-serif italic text-gray-400"> Working Together?</span>
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed font-light mb-8">
                I'm always excited to take on new challenges and collaborate on innovative projects. 
                Whether it's AI development, machine learning, or full-stack applications, let's create something exceptional.
              </p>
              <Link
                href="/#contact"
                className="inline-block border border-gray-900 hover:bg-gray-900 text-gray-900 hover:text-white font-light px-8 py-4 transition-all duration-300"
              >
                <span className="text-sm uppercase tracking-wider">Start Project</span>
              </Link>
            </div>
            <div className="text-right">
              <div className="text-sm text-gray-500 uppercase tracking-wider mb-4">
                Ready to collaborate
              </div>
              <Link
                href="https://calendly.com/ayamk/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm uppercase tracking-wider text-gray-500 hover:text-gray-900 transition-colors border-b border-transparent hover:border-gray-900"
              >
                Schedule Consultation
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;