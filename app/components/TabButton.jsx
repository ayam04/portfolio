"use client";

const TabButton = ({ active, selectTab, children }) => {
  return (
    <button
      onClick={selectTab}
      className={`cursor-grow rounded-full px-5 py-2.5 text-xs uppercase tracking-[0.16em] border transition-all duration-300 ${
        active
          ? "bg-ink text-paper border-ink"
          : "border-ink/25 text-ink/60 hover:border-ink hover:text-ink"
      }`}
    >
      {children}
    </button>
  );
};

export default TabButton;
