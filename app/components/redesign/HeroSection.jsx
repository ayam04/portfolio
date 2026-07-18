"use client";
import FadeIn from "./FadeIn";
import Magnet from "./Magnet";
import ContactButton from "./ContactButton";

const navLinks = [
  { title: "About", href: "#about" },
  { title: "Services", href: "#services" },
  { title: "Projects", href: "#projects" },
  { title: "Contact", href: "#contact" },
];

const HeroSection = () => {
  return (
    <section
      className="relative h-screen flex flex-col"
      style={{ overflowX: "clip", height: "100svh" }}
    >
      <FadeIn as="nav" delay={0} y={-20} className="relative z-20">
        <ul className="flex items-center justify-between px-6 md:px-10 pt-6 md:pt-8">
          {navLinks.map((link) => (
            <li key={link.title}>
              <a
                href={link.href}
                className="text-[#D7E2EA] font-medium uppercase tracking-wider text-xs sm:text-sm md:text-lg lg:text-[1.4rem] hover:opacity-70 transition-opacity duration-200"
              >
                {link.title}
              </a>
            </li>
          ))}
        </ul>
      </FadeIn>

      <div className="overflow-hidden">
        <FadeIn delay={0.15} y={40}>
          <h1 className="hero-heading font-black uppercase tracking-tight leading-none whitespace-nowrap w-full text-center text-[11vw] sm:text-[12vw] md:text-[13vw] lg:text-[14vw] mt-6 sm:mt-4 md:-mt-5">
            Hi, i&apos;m ayam
          </h1>
        </FadeIn>
      </div>

      <div className="absolute left-1/2 -translate-x-1/2 z-10 top-1/2 -translate-y-1/2 sm:top-auto sm:translate-y-0 sm:bottom-0 w-[280px] sm:w-[360px] md:w-[440px] lg:w-[520px]">
        <FadeIn delay={0.6} y={30}>
          <Magnet
            padding={150}
            strength={3}
            activeTransition="transform 0.3s ease-out"
            inactiveTransition="transform 0.6s ease-in-out"
          >
            <img
              src="/images/new.png"
              alt="Ayamullah Khan"
              width={381}
              height={381}
              className="w-full h-auto rounded-3xl"
              draggable={false}
            />
          </Magnet>
        </FadeIn>
      </div>

      <div className="relative z-20 mt-auto flex flex-col sm:flex-row items-start sm:items-end justify-between gap-5 px-6 md:px-10 pb-7 sm:pb-8 md:pb-10">
        <FadeIn delay={0.35} y={20}>
          <p
            className="text-[#D7E2EA] font-light uppercase tracking-wide leading-snug max-w-[160px] sm:max-w-[220px] md:max-w-[260px]"
            style={{ fontSize: "clamp(0.75rem, 1.4vw, 1.5rem)" }}
          >
            an ai engineer driven by building agents and llm products people actually use
          </p>
        </FadeIn>
        <FadeIn delay={0.5} y={20}>
          <ContactButton />
        </FadeIn>
      </div>
    </section>
  );
};

export default HeroSection;
