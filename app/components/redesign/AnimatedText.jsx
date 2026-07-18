"use client";
import { Fragment, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const Char = ({ children, progress, range }) => {
  const opacity = useTransform(progress, range, [0.2, 1]);
  return <motion.span style={{ opacity }}>{children}</motion.span>;
};

const AnimatedText = ({ text, className = "", style }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.8", "end 0.2"],
  });

  const words = text.split(" ");
  const total = text.length;
  let count = 0;

  return (
    <p ref={ref} className={className} style={style}>
      {words.map((word, wi) => {
        const start = count;
        count += word.length + 1;
        return (
          <Fragment key={wi}>
          <span style={{ display: "inline-block", whiteSpace: "nowrap" }}>
            {word.split("").map((c, ci) => (
              <Char
                key={ci}
                progress={scrollYProgress}
                range={[(start + ci) / total, (start + ci + 1) / total]}
              >
                {c}
              </Char>
            ))}
          </span>
          {wi < words.length - 1 ? " " : null}
          </Fragment>
        );
      })}
    </p>
  );
};

export default AnimatedText;
