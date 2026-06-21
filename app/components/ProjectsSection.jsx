"use client";
import { useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const projectsData = [
  {
    id: 1,
    title: "LeetLingo — AI Interview Prep",
    description:
      "An interview-prep platform using AI for personalized lessons, speech recognition, and progress tracking. Live and used by 2,500+ people.",
    image: "/images/projects/leetlingo.png",
    tag: ["All", "GenAI", "Web"],
    category: "GenAI",
    stack: ["Next.js", "OpenAI", "Speech", "Python"],
    gitUrl: "",
    previewUrl: "https://leetlingo.site/",
    featured: true,
  },
  {
    id: 8,
    title: "Meeting Note-Taker AI",
    description:
      "Intelligent meeting assistant that transcribes, summarizes, and extracts action items automatically using speech-to-text and LLM pipelines.",
    image:
      "https://cdn.prod.website-files.com/618e9316785b3582a5178502/65ca96699a5d2238f2ed8496_homepage-never-miss-a-detail@2x.jpg",
    tag: ["All", "GenAI"],
    category: "GenAI",
    stack: ["Python", "Whisper", "NLP", "LLM"],
    gitUrl: "https://github.com/ayam04/meeting-note-taker",
    previewUrl: "",
    featured: true,
  },
  {
    id: 7,
    title: "Multi-Agent RAG Customer Support",
    description:
      "Customer-support system using MongoDB, FAISS, and OpenAI to retrieve and generate grounded responses across multiple data sources.",
    image: "/images/projects/7.png",
    tag: ["All", "GenAI"],
    category: "GenAI",
    stack: ["RAG", "FAISS", "MongoDB", "OpenAI"],
    gitUrl: "https://github.com/ayam04/multi-rag-customer-support",
    previewUrl: "",
    featured: false,
  },
  {
    id: 2,
    title: "Scanned PDF → Braille Converter",
    description:
      "Accessibility tool combining LLM, OCR, and image captioning to turn scanned PDFs into braille-readable formats with contextual understanding.",
    image: "/images/projects/2.png",
    tag: ["All", "GenAI"],
    category: "GenAI",
    stack: ["LLM", "OCR", "Captioning", "A11y"],
    gitUrl: "",
    previewUrl: "",
    featured: false,
  },
  {
    id: 3,
    title: "Multimodal Tumor Detection",
    description:
      "ML system for tumor detection in MRI scans using image processing and classical machine learning with high accuracy.",
    image: "/images/projects/3.jpeg",
    tag: ["All", "ML"],
    category: "ML",
    stack: ["Python", "OpenCV", "ML", "Imaging"],
    gitUrl: "https://github.com/ayam04/PyTumorDetection",
    previewUrl: "",
    featured: false,
  },
  {
    id: 9,
    title: "Career Recommendation System",
    description:
      "ML-powered career guidance that analyzes skills, interests, and market trends to suggest optimal paths for students.",
    image:
      "https://media.gettyimages.com/id/686373828/vector/a-career-crossroads.jpg?s=612x612&w=0&k=20&c=9lR3MeYPvAplgYyMu0gq9Fl3rPJDZASK5zPcFPu0Ucs=",
    tag: ["All", "ML"],
    category: "ML",
    stack: ["Python", "Scikit-learn", "ML"],
    gitUrl: "https://github.com/ayam04/career-recommendation-system-squ",
    previewUrl: "",
    featured: false,
  },
  {
    id: 5,
    title: "Contract Farma Platform",
    description:
      "Full-stack platform enabling local farmers to sell crops on a contractual basis nationwide, built with Node.js.",
    image: "/images/projects/5.png",
    tag: ["All", "Web"],
    category: "Web",
    stack: ["Node.js", "Full-Stack", "Web"],
    gitUrl: "https://github.com/ayam04/Contract-Farming",
    previewUrl: "",
    featured: false,
  },
  {
    id: 10,
    title: "RajRasa — Restaurant Experience",
    description:
      "Immersive Rajasthani restaurant site showcasing heritage cuisine with modern, interactive web design.",
    image: "/images/projects/rajrasa.png",
    tag: ["All", "Web"],
    category: "Web",
    stack: ["Next.js", "Design", "Web"],
    gitUrl: "",
    previewUrl: "https://rajrasa.com",
    featured: false,
  },
];

const reveal = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: (i % 3) * 0.08 },
  }),
};

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");

  const filtered = projectsData.filter((p) => p.tag.includes(tag));
  const featured = filtered.filter((p) => p.featured);
  const rest = filtered.filter((p) => !p.featured);

  return (
    <section id="work" className="px-5 md:px-10 py-24 md:py-36">
      {/* Header */}
      <div className="grid md:grid-cols-12 gap-8 items-end mb-12 md:mb-16">
        <div className="md:col-span-8">
          <span className="eyebrow text-ink/45 block mb-6">03 — Selected Work</span>
          <h2 className="display-section">
            Things I&apos;ve<span className="font-serif-italic normal-case tracking-normal text-signal"> shipped</span>
          </h2>
        </div>
        <p className="md:col-span-4 text-base md:text-lg font-light text-ink/70 leading-relaxed md:pb-3">
          AI products, ML systems, and full-stack builds — real code, real users.
        </p>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-3 mb-12">
        {["All", "GenAI", "ML", "Web"].map((t) => (
          <ProjectTag key={t} name={t} onClick={setTag} isSelected={tag === t} />
        ))}
      </div>

      {/* Featured */}
      {featured.length > 0 && (
        <div className="grid lg:grid-cols-2 gap-5 md:gap-6 mb-6">
          {featured.map((p, i) => (
            <motion.div
              key={p.id}
              variants={reveal}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
            >
              <ProjectCard {...p} imgUrl={p.image} index={i} featured />
            </motion.div>
          ))}
        </div>
      )}

      {/* Rest */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
        {rest.map((p, i) => (
          <motion.div
            key={p.id}
            variants={reveal}
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
          >
            <ProjectCard {...p} imgUrl={p.image} index={i + featured.length} />
          </motion.div>
        ))}
      </div>

      {/* CTA */}
      <div className="mt-16 md:mt-20 flex flex-col md:flex-row md:items-center md:justify-between gap-6 border-t border-[var(--line)] pt-10">
        <p className="font-display text-2xl md:text-3xl tracking-tight max-w-xl">
          Got a hard problem worth solving?
        </p>
        <div className="flex gap-4">
          <Link
            href="https://github.com/ayam04"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-grow group inline-flex items-center gap-2 rounded-full border border-ink/25 px-6 py-3.5 text-sm uppercase tracking-[0.14em] hover:border-ink transition-colors"
          >
            All repos
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
          <Link
            href="#contact"
            className="cursor-grow group inline-flex items-center gap-2 rounded-full bg-signal text-paper-pure px-6 py-3.5 text-sm uppercase tracking-[0.14em] hover:bg-signal-deep transition-colors"
          >
            Let&apos;s talk
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
