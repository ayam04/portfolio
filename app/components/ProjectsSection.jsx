"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Brainy Counsellor",
    description: "GPT-3.5-turbo chatbot that helps students choose a career path, based on their interests and personality type.",
    image: "/images/projects/1.jpeg",
    tag: ["All", "GenAI"],
    gitUrl: "https://github.com/ayam04/BrainyCs",
    previewUrl: "/#projects",
  },
  {
    id: 2,
    title: "Scanned PDF to BRF Converter",
    description: "Combines LLM, OCR, and image captioning to convert scanned PDFs into braille-readable formats with image contextualization.",
    image: "/images/projects/2.png",
    tag: ["All", "GenAI"],
    gitUrl: "/#projects",
    previewUrl: "/#projects",
  },
  {
    id: 3,
    title: "Multimodal Tumor Detection System",
    description: "A classical ML based system that detects tumors in MRI scans using image processing and ML techniques.",
    image: "/images/projects/3.jpeg",
    tag: ["All", "ML"],
    gitUrl: "https://github.com/ayam04/PyTumorDetection",
    previewUrl: "https://mri-scan-predictor.streamlit.app",
  },
  {
    id: 4,
    title: "Admin Dashboard",
    description: "A React based admin dashboard template for web applications.",
    image: "/images/projects/4.jpg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/ayam04/admin-dashboard",
    previewUrl: "/#projects",
  },
  {
    id: 5,
    title: "Portfolio Website",
    description: "A Next.js and Tailwind CSS based portfolio website for personal use.",
    image: "/images/projects/5.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/ayam04/portfolio",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "Email Marketing AI",
    description: "A mistral-7b and langchain based marketing bot that sends out and writes marketing emails for a list of tagret users, after considering their interests and basic information.",
    image: "/images/projects/6.png",
    tag: ["All", "GenAI"],
    gitUrl: "https://github.com/ayam04/streamlit-email-llm",
    previewUrl: "https://email-llm.streamlit.app/",
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
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="ML"
          isSelected={tag === "ML"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="GenAI"
          isSelected={tag === "GenAI"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;