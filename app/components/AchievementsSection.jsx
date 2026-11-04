"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion, useInView, animate } from "framer-motion";
import Marquee from "./Marquee";

const stats = [
  { value: 10000, suffix: "+", label: "Students onboarded", sub: "myAIcademy platform" },
  { value: 15000, suffix: "+", label: "Submissions processed", sub: "Agent orchestration at Peach" },
  { value: 18, suffix: "", label: "Merged upstream PRs", sub: "Go, Python and TypeScript" },
  { value: 800, suffix: "+", label: "fya downloads", sub: "Open-source security scanner" },
];

const Stat = ({ value, suffix, label, sub, index }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, value, {
      duration: 1.6,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setDisplay(Math.floor(v)),
    });
    return () => controls.stop();
  }, [inView, value]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.08 }}
      className="px-6 md:px-8 py-10 md:py-14"
    >
      <div className="font-display text-5xl md:text-7xl lg:text-8xl leading-none tracking-tightest tabular-nums">
        {display.toLocaleString()}
        <span className="text-signal">{suffix}</span>
      </div>
      <div className="mt-5 font-display uppercase tracking-[0.16em] text-sm text-paper">{label}</div>
      <div className="mt-1 text-sm text-paper/45 font-light">{sub}</div>
    </motion.div>
  );
};

const AchievementsSection = () => {
  return (
    <section className="section-dark">
      <Marquee
        items={["Go", "TypeScript", "Python", "PostgreSQL", "Agentic Workflows", "RAG", "Voice AI", "Multi-Tenant SaaS", "Open Source"]}
        className="py-6 border-b border-paper/15 text-paper/70"
        textClass="text-2xl md:text-4xl"
      />

      <div className="px-5 md:px-10 pt-16 md:pt-24">
        <div className="flex items-end justify-between mb-10 md:mb-14">
          <h2 className="display-section text-paper">
            By the<span className="font-serif-italic normal-case tracking-normal text-signal"> numbers</span>
          </h2>
          <span className="eyebrow text-paper/40 hidden md:block mb-3">Impact</span>
        </div>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-y lg:divide-y-0 divide-paper/15 border-t border-paper/15">
        {stats.map((s, i) => (
          <Stat key={s.label} {...s} index={i} />
        ))}
      </div>

      <div className="h-16 md:h-24" />
    </section>
  );
};

export default AchievementsSection;
