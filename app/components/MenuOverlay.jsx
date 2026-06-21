"use client";
import Link from "next/link";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.07, delayChildren: 0.1 } },
  exit: { opacity: 0, transition: { duration: 0.25 } },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } },
};

const MenuOverlay = ({ links, onClose }) => {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="md:hidden fixed inset-0 z-40 bg-ink text-paper flex flex-col justify-center px-8 pointer-events-auto"
    >
      <ul className="space-y-2">
        {links.map((link) => (
          <motion.li key={link.title} variants={item}>
            <Link
              href={link.path}
              onClick={onClose}
              className="display-section block text-paper py-1"
            >
              {link.title}
            </Link>
          </motion.li>
        ))}
      </ul>

      <motion.div variants={item} className="mt-16 flex flex-col gap-2 text-sm">
        <span className="eyebrow text-paper/50">Get in touch</span>
        <a href="mailto:ayamullahkhan04@gmail.com" className="link-underline w-fit">
          ayamullahkhan04@gmail.com
        </a>
        <div className="flex gap-6 mt-4 text-paper/60 text-xs uppercase tracking-[0.18em]">
          <a href="https://github.com/ayam04" target="_blank" rel="noopener noreferrer" className="hover:text-paper">GitHub</a>
          <a href="https://linkedin.com/in/ayam04" target="_blank" rel="noopener noreferrer" className="hover:text-paper">LinkedIn</a>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default MenuOverlay;
