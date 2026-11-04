"use client";
import { motion } from "framer-motion";

const roles = [
  {
    period: "Jun 2026 to Present",
    place: "Delhi, India · remote clients",
    title: "Founding Engineer & Software Consultant",
    company: "oorik Technologies",
    points: [
      "Consult for HRtech and Edtech clients on LLM features and backend services, taking scoped work from technical design through deployment and monitoring.",
      "Built oorik ERP (erp.oorik.in), a multi-tenant SaaS ERP for Indian SMBs, from an empty repo to production: Hono API on PostgreSQL with Drizzle, 22 incremental migrations including row-level tenant isolation, Better Auth organisations, Razorpay subscription billing, and 200+ vitest files gating CI, deployed on Railway and Vercel.",
      "Delivered a restaurant POS, kitchen display and online ordering stack for a Noida quick-service restaurant as a fixed-scope contract: Turborepo monorepo of 13 packages, GST-correct pricing engine, Razorpay UPI and Pine Labs card-terminal integrations, WhatsApp receipts with a retry worker, idempotent webhooks, Sentry error tracking.",
      "Contributed 18 merged pull requests upstream to hflow, Orbit and RAGFlow, with 13 more open across Keploy (Go), LlamaIndex, google-cloud-python, Hoppscotch, Chatwoot, Documenso, Omnivore, Onyx and Unstructured; each a root-caused fix or feature shipped with regression tests.",
    ],
  },
  {
    period: "Feb 2026 to Jun 2026",
    place: "Hybrid · Dubai, UAE",
    title: "Software Development Engineer",
    company: "myAIcademy",
    points: [
      "Owned a Flutter and web AI-learning platform end to end, from Go backend services through release, reaching 10,000+ students onboarded and 50,000+ learning sessions.",
      "Worked across Go services on Google Cloud Run and Cloud Functions with Firestore behind an OpenAPI-first REST API (70+ endpoints generated with oapi-codegen) and Dockerised Python content services.",
      "Built a course automation pipeline that generates and ships persona-targeted courses within a 72-hour SLA of a new AI tool launch, replacing a fully manual authoring process.",
      "Built the customer outreach system on Customer.io, lifting user retention by 8%.",
    ],
  },
  {
    period: "May 2025 to Jan 2026",
    place: "Delhi, India",
    title: "AI Engineer",
    company: "Peach",
    points: [
      "Led AI backend and agent orchestration for a learning platform, processing 15,000+ submissions in production.",
      "Built an automated grading system that scored 5,000+ worksheets at 92% rubric accuracy, removing manual review from the critical path.",
      "Shipped image and video analysis pipelines adopted by 20+ NGO partners for field-submitted media.",
      "Engineered live agentic workflows with multi-turn context management that generate personalized learning paths, cutting manual intervention per session by 60%.",
    ],
  },
  {
    period: "May 2024 to May 2025",
    place: "Remote",
    title: "GenAI Engineer",
    company: "HYRGPT",
    points: [
      "Built a production voice AI assistant handling real-time Hinglish conversations at 1.5-second end-to-end latency for 500 daily active users, used live in recruitment screening calls.",
      "Cut LLM inference cost by 60% by introducing a RAG pipeline over curated datasets, custom scrapers, and prompt iteration driven by offline evals.",
      "Implemented a resume retrieval and ranking system using vector embeddings with metadata filtering and relevance heuristics, returning recruiter shortlists in real time.",
      "Designed a speech-to-text and summarization pipeline with speaker diarization and asynchronous inference, cutting transcript turnaround by 70%.",
    ],
  },
  {
    period: "Jun 2024 to Aug 2024",
    place: "Muscat, Oman",
    title: "AI Research Intern",
    company: "Sultan Qaboos University",
    points: [
      "Developed a career recommendation system combining psychometric signals, structured user data, and LLM reasoning, evaluated across cultural contexts with multimodal inputs.",
    ],
  },
  {
    period: "May 2024 to Jun 2024",
    place: "Palampur, India",
    title: "Research Intern",
    company: "CSIR-IHBT",
    points: [
      "Built a React clinical analytics dashboard for Alzheimer's screening experiments, pairing real-time visualization with authenticated access to patient-level data.",
      "Optimized the lab website across frontend and backend, improving page-load performance by 60%.",
    ],
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="px-5 md:px-10 py-24 md:py-36">
      <div className="grid md:grid-cols-12 gap-8 items-end mb-14 md:mb-20">
        <div className="md:col-span-8">
          <span className="eyebrow text-ink/45 block mb-6">03 — Experience</span>
          <h2 className="display-section">
            Where I&apos;ve<span className="font-serif-italic normal-case tracking-normal text-signal"> worked</span>
          </h2>
        </div>
        <p className="md:col-span-4 text-base md:text-lg font-light text-ink/70 leading-relaxed md:pb-3">
          Three years shipping production systems end to end in Go, TypeScript and Python, at three early-stage startups and now as a founding engineer and consultant.
        </p>
      </div>

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
            <div className="md:col-span-3">
              <div className="eyebrow text-ink/55">{role.period}</div>
              <div className="text-sm text-ink/40 mt-1.5">{role.place}</div>
            </div>

            <div className="md:col-span-9">
              <h3 className="font-display text-2xl md:text-3xl tracking-tight leading-tight mb-5">
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
