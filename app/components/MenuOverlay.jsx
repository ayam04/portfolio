import React from "react";
import NavLink from "./NavLink";

const MenuOverlay = ({ links }) => {
  return (
    <div className="md:hidden bg-transparent backdrop-blur-md border-t border-gray-200/50">
      <ul className="flex flex-col py-8 items-center space-y-6">
        {links.map((link, index) => (
          <li key={index}>
            <NavLink href={link.path} title={link.title} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MenuOverlay;