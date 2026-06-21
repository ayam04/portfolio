"use client";

const ProjectTag = ({ name, onClick, isSelected }) => {
  return (
    <button
      onClick={() => onClick(name)}
      className={`cursor-grow rounded-full px-5 py-2.5 text-xs uppercase tracking-[0.16em] border transition-all duration-300 ${
        isSelected
          ? "bg-ink text-paper border-ink"
          : "border-ink/25 text-ink/60 hover:border-ink hover:text-ink"
      }`}
    >
      {name}
    </button>
  );
};

export default ProjectTag;
