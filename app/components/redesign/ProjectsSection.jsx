"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import FadeIn from "./FadeIn";
import LiveProjectButton from "./LiveProjectButton";

const projects = [
  {
    number: "01",
    category: "Open Source",
    name: "FYA",
    href: "https://fya.ayamk.in",
    cta: "Live Project",
    col1: ["/images/projects/fya.png", "/images/redesign/fya-tall.png"],
    col2: "/images/redesign/fya-mobile.png",
  },
  {
    number: "02",
    category: "GenAI",
    name: "Deal Dossier",
    href: "https://dossier.ayamk.in",
    cta: "Live Project",
    col1: ["/images/projects/dossier.svg", "/images/redesign/dossier-desktop.png"],
    col2: "/images/redesign/dossier-mobile.png",
  },
  {
    number: "03",
    category: "EdTech",
    name: "LeetLingo",
    href: "https://github.com/ayam04/leetlingo-frontend",
    cta: "View Code",
    col1: ["/images/projects/leetlingo.png", "/images/redesign/leetlingo-cover.svg"],
    col2: "/images/redesign/leetlingo-stat.svg",
  },
];

const radius = "rounded-[40px] sm:rounded-[50px] md:rounded-[60px]";

const ProjectCard = ({ project, index, total, progress }) => {
  const targetScale = 1 - (total - 1 - index) * 0.03;
  const scale = useTransform(progress, [index / total, 1], [1, targetScale]);

  return (
    <div
      className="sticky h-[85vh]"
      style={{ top: `calc(clamp(4.5rem, 8vw, 7rem) + ${index * 28}px)` }}
    >
      <motion.div
        style={{ scale, transformOrigin: "top center" }}
        className={`${radius} border-2 border-[#D7E2EA] bg-[#0C0C0C] p-4 sm:p-6 md:p-8`}
      >
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div className="flex items-start gap-4 sm:gap-6 md:gap-8">
            <span
              className="text-[#D7E2EA] font-black leading-none"
              style={{ fontSize: "clamp(3rem, 10vw, 140px)" }}
            >
              {project.number}
            </span>
            <div className="flex flex-col gap-1 pt-2 sm:pt-3">
              <span className="text-[#D7E2EA] font-light uppercase tracking-widest text-xs sm:text-sm opacity-60">
                {project.category}
              </span>
              <h3
                className="text-[#D7E2EA] font-medium uppercase"
                style={{ fontSize: "clamp(1.2rem, 3vw, 2.4rem)" }}
              >
                {project.name}
              </h3>
            </div>
          </div>
          <LiveProjectButton
            href={project.href}
            label={project.cta}
            ariaLabel={`${project.cta}: ${project.name}`}
          />
        </div>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-6 sm:mt-8">
          <div className="flex flex-col gap-3 sm:gap-4 w-full sm:w-[40%]">
            <img
              src={project.col1[0]}
              alt={`${project.name} preview`}
              loading="lazy"
              className={`${radius} object-cover w-full`}
              style={{ height: "clamp(130px, 16vw, 230px)" }}
            />
            <img
              src={project.col1[1]}
              alt={`${project.name} preview`}
              loading="lazy"
              className={`${radius} object-cover w-full`}
              style={{ height: "clamp(160px, 22vw, 340px)" }}
            />
          </div>
          <div className="w-full sm:w-[60%]">
            <img
              src={project.col2}
              alt={`${project.name} preview`}
              loading="lazy"
              className={`${radius} object-cover w-full h-[260px] sm:h-full`}
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const ProjectsSection = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <section
      id="projects"
      className="bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 relative z-10 px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32"
    >
      <FadeIn delay={0} y={40}>
        <h2
          className="hero-heading font-black uppercase text-center mb-16 sm:mb-20 md:mb-28 leading-none tracking-tight"
          style={{ fontSize: "clamp(3rem, 12vw, 160px)" }}
        >
          Project
        </h2>
      </FadeIn>

      <div ref={containerRef} className="max-w-6xl mx-auto">
        {projects.map((project, i) => (
          <ProjectCard
            key={project.number}
            project={project}
            index={i}
            total={projects.length}
            progress={scrollYProgress}
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
