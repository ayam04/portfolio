"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";

const lineReveal = {
  hidden: { y: "115%" },
  visible: (i = 0) => ({
    y: "0%",
    transition: { duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.35 + i * 0.12 },
  }),
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (d = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: d },
  }),
};

const Marker = ({ children, className = "" }) => (
  <span className={`eyebrow text-ink/45 ${className}`}>{children}</span>
);

const HeroSection = () => {
  return (
    <section
      id="top"
      className="relative min-h-screen flex flex-col justify-between pt-28 md:pt-32 pb-8 px-5 md:px-10"
    >
      {/* Top marker row */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        custom={0.15}
        className="flex items-center justify-between"
      >
        <Marker>©2026</Marker>
        <Marker className="hidden md:inline">Fine-Tuning · Quantization · Agents · MLOps</Marker>
        <Marker>New Delhi, IN</Marker>
      </motion.div>

      {/* Giant centered identity */}
      <div className="flex-1 flex flex-col items-center justify-center py-8">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.25}
          className="eyebrow text-ink/50 mb-5 md:mb-7 text-center"
        >
          Portfolio — Ayamullah Khan
        </motion.div>

        {/* Line 1 */}
        <div className="overflow-hidden">
          <motion.h1 variants={lineReveal} initial="hidden" animate="visible" custom={0} className="display-hero">
            Ayamullah
          </motion.h1>
        </div>

        {/* Portrait + side markers */}
        <div className="w-full grid grid-cols-[1fr_auto_1fr] items-center gap-4 md:gap-8 my-1 md:my-2">
          <div className="flex justify-end">
            <Marker className="hidden md:block text-right leading-relaxed">
              Building since<br />2021
            </Marker>
          </div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.9}
            className="cursor-grow relative w-24 h-24 sm:w-28 sm:h-28 md:w-40 md:h-40 rounded-2xl overflow-hidden border border-ink/15 group"
          >
            <Image
              src="/images/new.png"
              alt="Ayamullah Khan"
              fill
              priority
              quality={90}
              sizes="160px"
              className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
            />
          </motion.div>

          <div className="flex justify-start">
            <Marker className="hidden md:block leading-relaxed">
              Open to<br />AI/ML roles
            </Marker>
          </div>
        </div>

        {/* Line 2 */}
        <div className="overflow-hidden">
          <motion.h1
            variants={lineReveal}
            initial="hidden"
            animate="visible"
            custom={1}
            className="display-hero flex items-baseline gap-3 md:gap-6"
          >
            Khan
            <span className="font-serif-italic text-signal normal-case tracking-normal text-[0.34em]">
              AI engineer
            </span>
          </motion.h1>
        </div>
      </div>

      {/* Bottom row: value prop + CTAs */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        custom={1.15}
        className="grid md:grid-cols-12 gap-8 items-end border-t border-[var(--line)] pt-7"
      >
        <p className="md:col-span-6 text-lg md:text-xl font-light leading-snug text-ink/80 max-w-xl">
          I <span className="text-ink font-normal">fine-tune, quantize &amp; ship large language models</span> —
          and build the agentic systems and full-stack products around them. AI tools used by 2,500+ people.
        </p>

        <div className="md:col-span-6 flex flex-col sm:flex-row md:justify-end gap-3">
          <Link
            href="#contact"
            className="cursor-grow group inline-flex items-center justify-between gap-4 rounded-full bg-signal text-paper-pure px-6 py-4 text-sm uppercase tracking-[0.16em] hover:bg-signal-deep transition-colors"
          >
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-paper-pure animate-pulse" />
              Open to roles
            </span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
          <Link
            href="#work"
            className="cursor-grow group inline-flex items-center justify-between gap-4 rounded-full border border-ink/25 px-6 py-4 text-sm uppercase tracking-[0.16em] hover:border-ink transition-colors"
          >
            View work
            <ArrowDownRight className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
          </Link>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
