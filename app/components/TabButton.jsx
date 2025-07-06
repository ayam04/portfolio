import React from "react";
import { motion } from "framer-motion";

const variants = {
  default: { width: 0 },
  active: { width: "calc(100% - 0.75rem)" },
};

const TabButton = ({ active, selectTab, children }) => {
  return (
    <button 
      onClick={selectTab}
      className={`relative px-0 py-2 font-light transition-all duration-300 text-sm uppercase tracking-wider border-b-2 ${
        active 
          ? "text-gray-900 border-gray-900" 
          : "text-gray-500 hover:text-gray-900 border-transparent hover:border-gray-300"
      }`}
    >
      {children}
    </button>
  );
};

export default TabButton;