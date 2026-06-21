"use client";
import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const CustomCursor = () => {
  const [mounted, setMounted] = useState(false);
  const [hovering, setHovering] = useState(false);

  const dotX = useMotionValue(-100);
  const dotY = useMotionValue(-100);
  const ringX = useSpring(dotX, { stiffness: 350, damping: 28, mass: 0.4 });
  const ringY = useSpring(dotY, { stiffness: 350, damping: 28, mass: 0.4 });

  useEffect(() => {
    // Only enable on devices with a fine pointer (real mouse)
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    setMounted(true);

    const move = (e) => {
      dotX.set(e.clientX);
      dotY.set(e.clientY);
    };

    const over = (e) => {
      if (e.target.closest("a, button, [role='button'], input, textarea, select, .cursor-grow")) {
        setHovering(true);
      }
    };
    const out = (e) => {
      if (e.target.closest("a, button, [role='button'], input, textarea, select, .cursor-grow")) {
        setHovering(false);
      }
    };

    window.addEventListener("mousemove", move, { passive: true });
    document.addEventListener("mouseover", over);
    document.addEventListener("mouseout", out);
    return () => {
      window.removeEventListener("mousemove", move);
      document.removeEventListener("mouseover", over);
      document.removeEventListener("mouseout", out);
    };
  }, [dotX, dotY]);

  if (!mounted) return null;

  return (
    <>
      <motion.div
        className="cursor-ring gpu"
        style={{ x: ringX, y: ringY }}
        animate={{
          width: hovering ? 64 : 38,
          height: hovering ? 64 : 38,
          opacity: hovering ? 0.9 : 1,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
      />
      <motion.div
        className="cursor-dot gpu"
        style={{ x: dotX, y: dotY }}
        animate={{ scale: hovering ? 0 : 1 }}
        transition={{ duration: 0.18 }}
      />
    </>
  );
};

export default CustomCursor;
