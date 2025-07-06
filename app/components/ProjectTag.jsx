import React from "react";
import { Star, Bot, Brain, Globe, Folder } from "lucide-react";

const ProjectTag = ({ name, onClick, isSelected }) => {
  return (
    <button
      className={`px-0 py-2 font-light transition-all duration-300 text-sm uppercase tracking-wider border-b-2 ${
        isSelected
          ? "text-gray-900 border-gray-900"
          : "text-gray-500 hover:text-gray-900 border-transparent hover:border-gray-300"
      }`}
      onClick={() => onClick(name)}
    >
      {name}
    </button>
  );
};

export default ProjectTag;