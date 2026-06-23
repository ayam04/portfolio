"use client";
import { useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";

const ShowreelSection = () => {
  const ref = useRef(null);
  const videoRef = useRef(null);
  const inView = useInView(ref, { margin: "-120px" });

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    if (inView) {
      const p = v.play();
      if (p && typeof p.catch === "function") p.catch(() => {});
    } else {
      v.pause();
    }
  }, [inView]);

  return (
    <section id="showreel" ref={ref} className="px-5 md:px-10 pt-2 pb-10 md:pt-3 md:pb-14">
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="relative border border-ink/15 overflow-hidden bg-ink"
      >
        <video
          ref={videoRef}
          src="/reel.mp4"
          muted
          loop
          playsInline
          preload="metadata"
          aria-label="Ayamullah Khan — AI engineer showreel"
          className="w-full aspect-video object-cover block"
        />
      </motion.div>
    </section>
  );
};

export default ShowreelSection;
