"use client";
import { useEffect, useRef } from "react";

const ROW_ONE = [
  "/images/projects/fya.png",
  "/images/redesign/rajrasa-live.jpg",
  "/images/redesign/dossier-desktop.png",
  "/images/projects/leetlingo.png",
  "/images/redesign/fya-mobile.png",
  "/images/projects/7.png",
];

const ROW_TWO = [
  "/images/redesign/fya-tall.png",
  "/images/projects/dossier.svg",
  "/images/projects/ai-call.svg",
  "/images/projects/audio-accent.svg",
  "/images/projects/mongo-vector.svg",
];

const Row = ({ images, rowRef }) => (
  <div className="flex gap-3 w-max" ref={rowRef} style={{ willChange: "transform" }}>
    {[...images, ...images, ...images].map((src, i) => (
      <img
        key={i}
        src={src}
        alt=""
        loading="lazy"
        width={420}
        height={270}
        className="rounded-2xl object-cover shrink-0 w-[300px] h-[193px] sm:w-[420px] sm:h-[270px]"
      />
    ))}
  </div>
);

const MarqueeSection = () => {
  const sectionRef = useRef(null);
  const rowOneRef = useRef(null);
  const rowTwoRef = useRef(null);

  useEffect(() => {
    const onScroll = () => {
      const el = sectionRef.current;
      if (!el) return;
      const offset = (window.scrollY - el.offsetTop + window.innerHeight) * 0.3;
      if (rowOneRef.current)
        rowOneRef.current.style.transform = `translateX(${-offset}px)`;
      if (rowTwoRef.current)
        rowTwoRef.current.style.transform = `translateX(${offset}px)`;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-[#0C0C0C] pt-24 sm:pt-32 md:pt-40 pb-10 overflow-hidden"
    >
      <div className="flex flex-col gap-3">
        <Row images={ROW_ONE} rowRef={rowOneRef} />
        <div className="flex justify-end">
          <Row images={ROW_TWO} rowRef={rowTwoRef} />
        </div>
      </div>
    </section>
  );
};

export default MarqueeSection;
