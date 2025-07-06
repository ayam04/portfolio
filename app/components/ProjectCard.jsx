import { ExternalLink, Github } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const ProjectCard = ({ imgUrl, title, description, gitUrl, previewUrl }) => {
  return (
    <div className="group relative h-full transition-all duration-300">
      {/* Editorial layout card */}
      <div className="bg-white/60 backdrop-blur-sm border border-gray-200/50 overflow-hidden h-full hover:border-gray-300/70 transition-all duration-300">
        {/* Image Container with editorial aspect ratio */}
        <div className="relative h-64 md:h-72 overflow-hidden">
          <Image
            src={imgUrl}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            quality={75}
            loading="lazy"
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkrHB0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R5lQKJJlhgkQ="
          />
          
          {/* Minimal overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
          
          {/* Action buttons - minimal */}
          <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 flex gap-2">
            {gitUrl && gitUrl !== "/#projects" && gitUrl !== "/" && gitUrl !== "" && (
              <Link
                href={gitUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/90 backdrop-blur-sm border border-gray-200/50 hover:bg-gray-900 hover:text-white transition-all duration-300"
              >
                <Github className="w-4 h-4" />
              </Link>
            )}
            
            {previewUrl && previewUrl !== "/#projects" && previewUrl !== "/" && previewUrl !== "" && (
              <Link
                href={previewUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/90 backdrop-blur-sm border border-gray-200/50 hover:bg-gray-900 hover:text-white transition-all duration-300"
              >
                <ExternalLink className="w-4 h-4" />
              </Link>
            )}
          </div>
        </div>
        
        {/* Content - Editorial Typography */}
        <div className="p-8 flex flex-col h-full">
          <h3 className="text-xl font-light text-gray-900 mb-4 leading-tight">
            {title}
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed flex-grow font-light">
            {description}
          </p>
          
          {/* Editorial action links */}
          <div className="flex gap-6 mt-6">
            {gitUrl && gitUrl !== "/#projects" && gitUrl !== "/" && gitUrl !== "" && (
              <Link
                href={gitUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm uppercase tracking-wider text-gray-500 hover:text-gray-900 transition-colors border-b border-transparent hover:border-gray-900"
              >
                Code
              </Link>
            )}
            
            {previewUrl && previewUrl !== "/#projects" && previewUrl !== "/" && previewUrl !== "" && (
              <Link
                href={previewUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm uppercase tracking-wider text-gray-500 hover:text-gray-900 transition-colors border-b border-transparent hover:border-gray-900"
              >
                Demo
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;