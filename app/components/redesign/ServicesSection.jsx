"use client";
import FadeIn from "./FadeIn";

const services = [
  {
    number: "01",
    name: "Agentic Systems",
    description:
      "Multi-agent pipelines with tool use, memory, and orchestration that turn LLMs into systems that finish real work.",
  },
  {
    number: "02",
    name: "LLM Apps and RAG",
    description:
      "Retrieval-augmented generation, structured outputs, and grounded LLM features built end to end, from data pipeline to production API.",
  },
  {
    number: "03",
    name: "Voice AI",
    description:
      "Realtime voice agents over telephony with speech recognition, low latency responses, and full call handling.",
  },
  {
    number: "04",
    name: "AI Security",
    description:
      "Dynamic security scanning for web apps and APKs with OWASP mapped checks, proof of exploit requests, and concrete fixes.",
  },
  {
    number: "05",
    name: "Full Stack Builds",
    description:
      "Clean, modern, conversion focused products built with Next.js, from landing page to database, shipped and deployed.",
  },
];

const ServicesSection = () => {
  return (
    <section
      id="services"
      className="bg-white rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 relative z-10"
    >
      <FadeIn delay={0} y={40}>
        <h2
          className="text-[#0C0C0C] font-black uppercase text-center mb-16 sm:mb-20 md:mb-28 leading-none tracking-tight"
          style={{ fontSize: "clamp(3rem, 12vw, 160px)" }}
        >
          Services
        </h2>
      </FadeIn>

      <div className="max-w-5xl mx-auto">
        {services.map((service, i) => (
          <FadeIn key={service.number} delay={i * 0.1}>
            <div
              className="flex items-start gap-6 sm:gap-10 md:gap-14 py-8 sm:py-10 md:py-12"
              style={{ borderTop: i === 0 ? "none" : "1px solid rgba(12, 12, 12, 0.15)" }}
            >
              <span
                className="text-[#0C0C0C] font-black leading-none shrink-0"
                style={{ fontSize: "clamp(3rem, 10vw, 140px)" }}
              >
                {service.number}
              </span>
              <div className="flex flex-col gap-3 sm:gap-4 pt-2 sm:pt-4">
                <h3
                  className="text-[#0C0C0C] font-medium uppercase"
                  style={{ fontSize: "clamp(1rem, 2.2vw, 2.1rem)" }}
                >
                  {service.name}
                </h3>
                <p
                  className="text-[#0C0C0C] font-light leading-relaxed max-w-2xl"
                  style={{ fontSize: "clamp(0.85rem, 1.6vw, 1.25rem)", opacity: 0.6 }}
                >
                  {service.description}
                </p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
