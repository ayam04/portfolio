"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import TabButton from "./TabButton";

const skillGroups = [
  { label: "Languages", items: ["Go", "TypeScript", "Python", "JavaScript", "SQL", "Dart"] },
  { label: "Backend & APIs", items: ["Hono", "FastAPI", "Node.js", "OpenAPI / oapi-codegen", "Webhooks & idempotency", "Background workers"] },
  { label: "Databases", items: ["PostgreSQL", "Drizzle ORM", "SQLite", "MongoDB", "Firestore", "Vector search"] },
  { label: "Frontend & Mobile", items: ["React", "Next.js", "Vite", "Tailwind CSS", "Flutter"] },
  { label: "AI & LLM Engineering", items: ["Agentic workflows", "RAG", "Embeddings & re-ranking", "LLM evals", "OpenAI / Gemini APIs", "Whisper"] },
  { label: "Cloud & Infrastructure", items: ["AWS", "GCP Cloud Run", "Docker", "Railway", "Vercel", "GitHub Actions", "Sentry"] },
];

const education = [
  {
    title: "B.Tech, Computer Science Engineering",
    org: "Manipal University Jaipur",
    note: "Specialization in Data Science & AI",
  },
  {
    title: "Diploma in Data Science",
    org: "Indian Institute of Technology, Madras",
    note: "Advanced analytics & machine learning",
  },
  {
    title: "International Exchange Program",
    org: "Sultan Qaboos University, Oman",
    note: "Cross-cultural academic experience",
  },
];

const certifications = [
  { title: "IBM Data Science Professional", kind: "Professional Certificate" },
  { title: "IBM AI Engineer", kind: "Professional Certificate" },
  { title: "Google Generative AI", kind: "Specialization" },
  { title: "DeepLearning.AI GenAI", kind: "Specialization" },
  { title: "Microsoft Azure AI", kind: "Fundamentals" },
  { title: "Kaggle — Python, ML & APIs", kind: "Multiple" },
];

const TabContent = ({ tab }) => {
  if (tab === "skills") {
    return (
      <div className="grid sm:grid-cols-2 gap-x-12 gap-y-10">
        {skillGroups.map((g) => (
          <div key={g.label}>
            <h4 className="eyebrow text-ink/45 mb-5">{g.label}</h4>
            <div className="flex flex-wrap gap-2.5">
              {g.items.map((s) => (
                <span
                  key={s}
                  className="text-sm border border-ink/20 rounded-full px-4 py-1.5 hover:border-ink hover:bg-ink hover:text-paper transition-colors duration-300"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (tab === "education") {
    return (
      <div className="divide-y divide-[var(--line)] border-t border-[var(--line)]">
        {education.map((e) => (
          <div key={e.title} className="grid md:grid-cols-12 gap-2 md:gap-8 py-6 items-baseline">
            <div className="md:col-span-8">
              <h4 className="font-display text-xl md:text-2xl tracking-tight">{e.title}</h4>
              <p className="text-ink/70 mt-1">{e.org}</p>
            </div>
            <span className="md:col-span-4 eyebrow text-ink/45 md:text-right">{e.note}</span>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="grid sm:grid-cols-2 gap-px bg-[var(--line)] border border-[var(--line)]">
      {certifications.map((c) => (
        <div key={c.title} className="bg-paper p-6 hover:bg-paper-dim transition-colors">
          <h4 className="font-display text-lg tracking-tight mb-2">{c.title}</h4>
          <span className="eyebrow text-ink/45">{c.kind}</span>
        </div>
      ))}
    </div>
  );
};

const AboutSection = () => {
  const [tab, setTab] = useState("skills");

  return (
    <section id="about" className="px-5 md:px-10 py-24 md:py-36">
      {/* Header */}
      <span className="eyebrow text-ink/45 block mb-10">01 — About</span>

      <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-start mb-20 md:mb-28">
        {/* Portrait */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="md:col-span-4 cursor-grow group relative"
        >
          <div className="relative w-full aspect-[4/5] overflow-hidden border border-ink/15">
            <Image
              src="/images/IMG_7779.png"
              alt="Ayamullah Khan"
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover grayscale group-hover:grayscale-0 transition-[filter] duration-700"
            />
          </div>
          <div className="absolute -bottom-4 left-4 bg-ink text-paper px-4 py-2">
            <span className="eyebrow">Full-Stack &amp; AI Engineer</span>
          </div>
        </motion.div>

        {/* Intro */}
        <div className="md:col-span-8">
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="display-section mb-8"
          >
            Hey!
          </motion.h2>
          <div className="space-y-6 max-w-2xl text-lg md:text-xl font-light leading-relaxed text-ink/80">
            <p>
              I&apos;m <span className="text-ink font-normal">Ayamullah Khan</span>, a full-stack and AI
              engineer based in Delhi. I have spent three years building production systems end to end in Go,
              TypeScript and Python, from data model and API design through deployment and monitoring.
            </p>
            <p>
              I build 0 to 1 at early-stage startups and now consult through{" "}
              <span className="text-ink font-normal">oorik Technologies</span>. I also author{" "}
              <span className="text-ink font-normal">fya</span>, an open-source security scanner with
              800+ downloads, and have 18 merged upstream pull requests.
            </p>
          </div>
        </div>
      </div>

      {/* Value statement */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="border-y border-[var(--line)] py-12 md:py-16 mb-20 md:mb-28"
      >
        <p className="font-display text-3xl md:text-5xl lg:text-6xl leading-[1.05] tracking-tight max-w-5xl">
          <span className="text-ink/35">From data model to deployment,</span> I take scoped work and rough ideas to{" "}
          <span className="font-serif-italic tracking-normal text-signal">reliable production systems.</span>{" "}
          Tested, monitored, measured.
        </p>
      </motion.div>

      {/* Tabs */}
      <div className="flex flex-wrap gap-3 mb-12">
        <TabButton active={tab === "skills"} selectTab={() => setTab("skills")}>Skills</TabButton>
        <TabButton active={tab === "education"} selectTab={() => setTab("education")}>Education</TabButton>
        <TabButton active={tab === "certifications"} selectTab={() => setTab("certifications")}>Certifications</TabButton>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={tab}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          <TabContent tab={tab} />
        </motion.div>
      </AnimatePresence>
    </section>
  );
};

export default AboutSection;
