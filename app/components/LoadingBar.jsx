"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const LoadingBar = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsVisible(false);
            onComplete?.();
          }, 450);
          return 100;
        }
        const increment = prev < 70 ? Math.random() * 16 + 6 : Math.random() * 6 + 2;
        return Math.min(prev + increment, 100);
      });
    }, 90);
    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[100] bg-ink text-paper flex flex-col justify-between p-6 md:p-12 overflow-hidden"
        >
          {/* Top row */}
          <div className="flex items-start justify-between">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="font-display text-sm tracking-tight"
            >
              Ayamullah Khan
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="eyebrow text-paper/50"
            >
              ©2026 — Portfolio
            </motion.div>
          </div>

          {/* Center label */}
          <div className="flex-1 flex items-center">
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="display-hero"
            >
              AI<span className="font-serif-italic lowercase tracking-normal text-signal"> engineer</span>
            </motion.h2>
          </div>

          {/* Bottom: progress */}
          <div>
            <div className="flex items-end justify-between mb-4">
              <span className="eyebrow text-paper/50">Loading</span>
              <span className="font-display text-5xl md:text-7xl tabular-nums leading-none">
                {String(Math.round(progress)).padStart(3, "0")}
              </span>
            </div>
            <div className="relative h-px w-full bg-paper/20 overflow-hidden">
              <motion.div
                className="absolute inset-y-0 left-0 bg-paper"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingBar;
