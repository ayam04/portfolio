"use client";
import { useEffect, useRef, useState } from "react";

const Magnet = ({
  children,
  padding = 100,
  strength = 2,
  activeTransition = "transform 0.3s ease-out",
  inactiveTransition = "transform 0.6s ease-in-out",
  className = "",
}) => {
  const ref = useRef(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [active, setActive] = useState(false);

  useEffect(() => {
    const onMove = (e) => {
      if (!ref.current) return;
      const r = ref.current.getBoundingClientRect();
      const cx = r.left + r.width / 2;
      const cy = r.top + r.height / 2;
      const dx = Math.abs(cx - e.clientX);
      const dy = Math.abs(cy - e.clientY);
      if (dx < r.width / 2 + padding && dy < r.height / 2 + padding) {
        setActive(true);
        setOffset({ x: (e.clientX - cx) / strength, y: (e.clientY - cy) / strength });
      } else {
        setActive(false);
        setOffset((prev) => (prev.x === 0 && prev.y === 0 ? prev : { x: 0, y: 0 }));
      }
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, [padding, strength]);

  return (
    <div ref={ref} className={className}>
      <div
        style={{
          transform: `translate3d(${offset.x}px, ${offset.y}px, 0)`,
          transition: active ? activeTransition : inactiveTransition,
          willChange: "transform",
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default Magnet;
