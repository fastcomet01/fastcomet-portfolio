
import React from 'react';
import { ExternalIcon } from '../constants';
import { Project } from '../types';

interface MetalPlateProps {
  project: Project;
}

const MetalPlate: React.FC<MetalPlateProps> = ({ project }) => {
  const isExternal = !project.link.startsWith('#');

  const handleClick = (e: React.MouseEvent) => {
    if (!isExternal) {
      e.preventDefault();
      const el = document.querySelector(project.link);
      el?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <a
      href={project.link}
      target={isExternal ? "_blank" : "_self"}
      rel={isExternal ? "noopener noreferrer" : ""}
      onClick={handleClick}
      className="group block brushed-metal-dark p-8 border border-hairline transition-all duration-700 ease-[cubic-bezier(0.2,0.8,0.2,1)] hover:-translate-y-2 hover:border-electric-blue/50 glow-blue active:scale-[0.98]"
    >
      <div className="flex flex-col h-full space-y-6">
        <div className="flex justify-between items-start">
          <div className="flex flex-col">
            <span className="text-[9px] font-mono tracking-widest text-secondary-text group-hover:text-electric-blue transition-colors">ID: {project.index}</span>
            <div className="w-8 h-[1px] bg-hairline mt-1"></div>
          </div>
          <div className="flex gap-1.5">
            <div className="w-1.5 h-1.5 bg-electric-blue opacity-40 rounded-full group-hover:animate-ping" />
            <div className="w-1.5 h-1.5 border border-white/20 rounded-full" />
          </div>
        </div>

        <div className="flex-grow pt-4">
          <h3 className="text-3xl font-serif font-medium text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-electric-blue transition-all">
            {project.name}
            {isExternal && <span className="inline-block ml-2 opacity-30 group-hover:opacity-100 group-hover:translate-x-1 transition-all"><ExternalIcon /></span>}
          </h3>
          <p className="text-sm font-sans text-secondary-text mt-3 leading-relaxed max-w-[80%]">
            {project.subtitle}
          </p>
        </div>

        <div className="flex flex-wrap gap-2 pt-6">
          {project.tags.map((tag) => (
            <span 
              key={tag}
              className="text-[9px] uppercase tracking-[0.2em] px-3 py-1 border border-white/10 text-secondary-text group-hover:border-neon-pink/40 group-hover:text-white transition-all bg-white/5"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Hover Light Effect */}
      <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-electric-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
    </a>
  );
};

export default MetalPlate;
