"use client";

const Star = () => (
  <svg viewBox="0 0 100 100" className="w-4 h-4 md:w-5 md:h-5 shrink-0" aria-hidden="true">
    <path
      d="M50 0 L57 38 L95 45 L57 52 L50 90 L43 52 L5 45 L43 38 Z"
      fill="currentColor"
    />
  </svg>
);

/**
 * Seamless infinite marquee. Renders the items twice and translates -50%.
 */
const Marquee = ({ items, reverse = false, className = "", textClass = "" }) => {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <div
        className={`marquee-track ${reverse ? "animate-marquee-reverse" : "animate-marquee"}`}
      >
        {[0, 1].map((dup) => (
          <div key={dup} className="flex items-center" aria-hidden={dup === 1}>
            {items.map((item, i) => (
              <div key={i} className="flex items-center">
                <span
                  className={`font-display uppercase whitespace-nowrap px-5 md:px-8 ${textClass}`}
                >
                  {item}
                </span>
                <Star />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
