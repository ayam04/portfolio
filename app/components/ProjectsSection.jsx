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
    title: "fya: Security Scanner",
    description:
      "Open-source dynamic scanner that runs 58 OWASP-mapped checks across web apps, APKs, and source code, orchestrating nuclei, nikto, sqlmap, and nmap behind one command. 42 stars and published on PyPI.",
    image: "/images/projects/fya.png",
    tag: ["All", "Security"],
    category: "Security",
    stack: ["Python", "DAST", "OWASP", "PyPI"],
    gitUrl: "https://github.com/ayam04/fya",
    previewUrl: "https://fya.ayamk.in",
    featured: true,
  },
  {
    id: 2,
    title: "Deal Dossier Generator",
    description:
      "Drop a company domain and get a meeting-ready deal dossier. Streams structured output from Gemini with Google Search grounding into an interactive signals timeline.",
    image: "/images/projects/dossier.svg",
    tag: ["All", "GenAI"],
    category: "GenAI",
    stack: ["Next.js", "Gemini", "Grounding", "Streaming"],
    gitUrl: "https://github.com/ayam04/dossier",
    previewUrl: "https://dossier.ayamk.in",
    featured: true,
  },
  {
    id: 3,
    title: "LeetLingo: AI Interview Prep",
    description:
      "An interview-prep platform using AI for personalized lessons, speech recognition, and progress tracking. Live and used by 2,500+ people.",
    image: "/images/projects/leetlingo.png",
    tag: ["All", "GenAI"],
    category: "GenAI",
    stack: ["Next.js", "OpenAI", "Speech", "Python"],
    gitUrl: "https://github.com/ayam04/leetlingo-frontend",
    previewUrl: "",
    featured: false,
  },
  {
    id: 4,
    title: "AI Voice Screening Agent",
    description:
      "Deployed voice agent that screens candidates over the phone, wiring Plivo telephony to Deepgram speech and MongoDB. Ran in production at HyrGPT.",
    image: "/images/projects/ai-call.svg",
    tag: ["All", "GenAI"],
    category: "GenAI",
    stack: ["Plivo", "Deepgram", "MongoDB", "Voice AI"],
    gitUrl: "https://github.com/ayam04/ai-call",
    previewUrl: "",
    featured: false,
  },
  {
    id: 5,
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
    featured: false,
  },
  {
    id: 6,
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
    id: 7,
    title: "Indian Accent Matcher",
    description:
      "Audio matching algorithm that scores similarity between Indian-accent voice samples using audio embeddings and vector search.",
    image: "/images/projects/audio-accent.svg",
    tag: ["All", "ML"],
    category: "ML",
    stack: ["Python", "Audio", "Embeddings", "ML"],
    gitUrl: "https://github.com/ayam04/audio-accent-vector-match",
    previewUrl: "",
    featured: false,
  },
  {
    id: 8,
    title: "PDF Vector Search",
    description:
      "Semantic search over PDF documents backed by a MongoDB vector index, returning grounded passages for downstream RAG.",
    image: "/images/projects/mongo-vector.svg",
    tag: ["All", "ML"],
    category: "ML",
    stack: ["MongoDB", "Vectors", "RAG", "Python"],
    gitUrl: "https://github.com/ayam04/mongoDB-pdf-vector-search",
    previewUrl: "",
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
          <span className="eyebrow text-ink/45 block mb-6">04 — Selected Work</span>
          <h2 className="display-section">
            Things I&apos;ve<span className="font-serif-italic normal-case tracking-normal text-signal"> shipped</span>
          </h2>
        </div>
        <p className="md:col-span-4 text-base md:text-lg font-light text-ink/70 leading-relaxed md:pb-3">
          AI products, agentic systems, and security tooling. Real code, real users.
        </p>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-3 mb-12">
        {["All", "GenAI", "ML", "Security"].map((t) => (
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
