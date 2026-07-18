"use client";
import FadeIn from "./FadeIn";
import ContactButton from "./ContactButton";

const links = [
  { label: "ayamullahkhan04@gmail.com", href: "mailto:ayamullahkhan04@gmail.com" },
  { label: "GitHub", href: "https://github.com/ayam04" },
  { label: "LinkedIn", href: "https://linkedin.com/in/ayam04" },
];

const ContactSection = () => {
  return (
    <section
      id="contact"
      className="bg-[#0C0C0C] px-5 sm:px-8 md:px-10 py-24 sm:py-32 md:py-40 flex flex-col items-center gap-10 sm:gap-12 md:gap-14"
    >
      <FadeIn delay={0} y={40}>
        <h2
          className="hero-heading font-black uppercase leading-none tracking-tight text-center"
          style={{ fontSize: "clamp(3rem, 12vw, 160px)" }}
        >
          Let&apos;s talk
        </h2>
      </FadeIn>
      <FadeIn delay={0.15} y={20}>
        <ContactButton label="Book a Call" />
      </FadeIn>
      <FadeIn delay={0.25} y={20}>
        <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
          {links.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                target={link.href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                className="text-[#D7E2EA] font-light uppercase tracking-wider text-xs sm:text-sm hover:opacity-70 transition-opacity duration-200"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </FadeIn>
      <p className="text-[#D7E2EA] font-light uppercase tracking-wider text-[0.65rem] opacity-40">
        New Delhi, IN · IST (UTC+5:30)
      </p>
    </section>
  );
};

export default ContactSection;
