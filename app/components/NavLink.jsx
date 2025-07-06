import Link from "next/link";

const NavLink = ({ href, title }) => {
  return (
    <Link
      href={href}
      className="text-sm uppercase tracking-wider text-gray-500 hover:text-gray-900 transition-colors border-b border-transparent hover:border-gray-900 py-2"
    >
      {title}
    </Link>
  );
};

export default NavLink;