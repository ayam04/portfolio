"use client";
import { motion } from "framer-motion";

const roles = [
  {
    period: "Feb 2026 — Present",
    place: "Hybrid · Dubai",
    title: "AI SDE",
    company: "myAIcademy",
    points: [
      "Lead development of a B2C app for learning every AI tool on the market.",
      "Built a course-automation system that generates and ships persona-tailored courses within a 72-hour SLA of a new tool dropping.",
      "Built the customer-outreach system (customer.io), helping retain ~8% more users.",
    ],
  },
  {
    period: "May 2025 — Jan 2026",
    place: "Delhi, India",
    title: "AI Engineer",
    company: "Peach",
    points: [
      "Engineered and deployed live agentic workflows for personalized learning paths — reduced user intervention by ~60%.",
      "Integrated Multi-Context Prompt Stacks (MCPS) to optimize multi-turn LLM reasoning, improving accuracy and coherence on complex queries.",
      "Built scalable backend services for LLM-driven content generation and evaluation — cut latency by ~40%.",
    ],
  },
  {
    period: "May 2024 — May 2025",
    place: "Remote",
    title: "GenAI Engineer",
    company: "HYRGPT",
    points: [
      "Built an on-call voice assistant for recruitment workflows — improved shortlisting efficiency by ~90%.",
      "Built a resume retrieval & ranking system using vector embeddings with metadata filtering and relevance heuristics.",
      "Designed a speech-to-text + summarization pipeline with speaker diarization and async inference — ~70% faster turnaround.",
      "Cut LLM inference cost ~60% with a RAG pipeline built on curated datasets, custom scrapers, and eval-driven prompt iteration.",
    ],
  },
  {
    period: "Jun 2024 — Aug 2024",
    place: "Muscat, Oman",
    title: "AI Research",
    company: "Sultan Qaboos University",
    points: [
      "Developed a career-recommendation system combining psychometric signals, structured data, and LLM reasoning.",
      "Ran systematic evaluation across cultural contexts — improved prediction reliability ~85% over baseline heuristics.",
      "Integrated multimodal inputs (text + image) for richer, more interpretable recommendations.",
    ],
  },
  {
    period: "May 2024 — Jun 2024",
    place: "India",
    title: "Researcher",
    company: "CSIR-IHBT",
    points: [
      "Built a React clinical-analytics dashboard for Alzheimer's screening with authenticated access and real-time visualization.",
      "Improved lab website performance and UX by ~60% through frontend and backend optimizations.",
      "Explored IoT-assisted health monitoring with Raspberry Pi for data collection and preprocessing.",
    ],
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="px-5 md:px-10 py-24 md:py-36">
      {/* Header */}
      <div className="grid md:grid-cols-12 gap-8 items-end mb-14 md:mb-20">
        <div className="md:col-span-8">
          <span className="eyebrow text-ink/45 block mb-6">03 — Experience</span>
          <h2 className="display-section">
            Where I&apos;ve<span className="font-serif-italic normal-case tracking-normal text-signal"> worked</span>
          </h2>
        </div>
        <p className="md:col-span-4 text-base md:text-lg font-light text-ink/70 leading-relaxed md:pb-3">
          Two years shipping production AI across startups and research labs — agents, RAG, voice, and the systems around them.
        </p>
      </div>

      {/* Timeline */}
      <div className="border-t border-[var(--line)]">
        {roles.map((role, i) => (
          <motion.div
            key={`${role.company}-${i}`}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: (i % 2) * 0.06 }}
            className="group grid md:grid-cols-12 gap-x-8 gap-y-4 py-9 md:py-11 border-b border-[var(--line)]"
          >
            {/* Left: period + place */}
            <div className="md:col-span-3">
              <div className="eyebrow text-ink/55">{role.period}</div>
              <div className="text-sm text-ink/40 mt-1.5">{role.place}</div>
            </div>

            {/* Right: role + impact */}
            <div className="md:col-span-9">
              <h3 className="font-display text-2xl md:text-3xl tracking-tight leading-none mb-5">
                {role.title}
                <span className="text-ink/35"> · </span>
                <span className="text-signal">{role.company}</span>
              </h3>
              <ul className="space-y-2.5 max-w-3xl">
                {role.points.map((p, j) => (
                  <li key={j} className="flex gap-3 text-ink/70 font-light leading-relaxed">
                    <span className="mt-2 w-3 h-px bg-ink/30 shrink-0 group-hover:bg-signal transition-colors duration-300" />
                    <span className="text-[0.95rem]">{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;
