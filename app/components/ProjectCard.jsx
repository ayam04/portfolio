"use client";
import { ArrowUpRight, Github } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const isValid = (url) => url && url !== "/#projects" && url !== "/" && url !== "";

const blur =
  "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkrHB0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R5lQKJJlhgkQ=";

const ProjectCard = ({ imgUrl, title, description, gitUrl, previewUrl, index, category, stack = [], featured }) => {
  return (
    <article className="cursor-grow group relative h-full flex flex-col border border-ink/15 bg-paper overflow-hidden hover:border-ink transition-colors duration-500">
      {/* Image */}
      <div className={`relative overflow-hidden ${featured ? "h-64 md:h-[28rem]" : "h-56 md:h-64"}`}>
        <Image
          src={imgUrl}
          alt={title}
          fill
          className="object-cover grayscale group-hover:grayscale-0 scale-105 group-hover:scale-100 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
          sizes={featured ? "(max-width: 768px) 100vw, 66vw" : "(max-width: 768px) 100vw, 33vw"}
          quality={80}
          loading="lazy"
          placeholder="blur"
          blurDataURL={blur}
        />

        {/* Index + category */}
        <span className="absolute top-4 left-4 font-display text-xs text-paper mix-blend-difference">
          {String(index + 1).padStart(2, "0")}
        </span>
        {category && (
          <span className="absolute top-4 right-4 text-[0.65rem] uppercase tracking-[0.16em] bg-paper text-ink px-3 py-1">
            {category}
          </span>
        )}
      </div>

      {/* Content */}
      <div className={`flex flex-col flex-grow ${featured ? "p-7 md:p-10" : "p-6"}`}>
        <h3 className={`font-display tracking-tight leading-tight ${featured ? "text-2xl md:text-4xl" : "text-xl md:text-2xl"}`}>
          {title}
        </h3>
        <p className={`mt-3 text-ink/65 font-light leading-relaxed flex-grow ${featured ? "text-base max-w-2xl" : "text-sm"}`}>
          {description}
        </p>

        {/* Stack */}
        {stack.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-5">
            {stack.map((s) => (
              <span key={s} className="text-[0.65rem] uppercase tracking-[0.12em] text-ink/55 border border-ink/15 rounded-full px-2.5 py-1">
                {s}
              </span>
            ))}
          </div>
        )}

        {/* Links */}
        <div className="flex items-center gap-6 mt-6 pt-5 border-t border-[var(--line)]">
          {isValid(previewUrl) && (
            <Link
              href={previewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group/l inline-flex items-center gap-1.5 text-sm uppercase tracking-[0.14em] link-underline"
            >
              Live <ArrowUpRight className="w-3.5 h-3.5 group-hover/l:translate-x-0.5 group-hover/l:-translate-y-0.5 transition-transform" />
            </Link>
          )}
          {isValid(gitUrl) && (
            <Link
              href={gitUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm uppercase tracking-[0.14em] link-underline"
            >
              <Github className="w-3.5 h-3.5" /> Code
            </Link>
          )}
          {!isValid(previewUrl) && !isValid(gitUrl) && (
            <span className="text-sm uppercase tracking-[0.14em] text-ink/35">Case study on request</span>
          )}
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
