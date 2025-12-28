// components/projects/ProjectCard.tsx
'use client';
import React from 'react';
// ✅ MUDAR PARA SUPABASE
import { Project } from '@/utils/supabase/projects.utils';
import { FiGlobe, FiSmartphone, FiPenTool, FiGithub, FiExternalLink, FiFigma } from 'react-icons/fi';

interface ProjectCardProps {
  project: Project;
  language: 'pt' | 'en';
  theme: 'dark' | 'light';
}

export default function ProjectCard({ project, language, theme }: ProjectCardProps) {
  const getCategoryIcon = () => {
    // Garante que category é string
    const category = String(project.category).toLowerCase();
    
    switch (category) {
      case 'web': return <FiGlobe className="w-4 h-4" />;
      case 'mobile': return <FiSmartphone className="w-4 h-4" />;
      case 'designer': return <FiPenTool className="w-4 h-4" />;
      default: return <FiGlobe className="w-4 h-4" />;
    }
  };

  const getCategoryColor = () => {
    // Garante que category é string
    const category = String(project.category).toLowerCase();
    
    switch (category) {
      case 'web': return theme === 'dark' ? 'text-blue-400' : 'text-blue-600';
      case 'mobile': return theme === 'dark' ? 'text-green-400' : 'text-green-600';
      case 'designer': return theme === 'dark' ? 'text-purple-400' : 'text-purple-600';
      default: return theme === 'dark' ? 'text-gray-400' : 'text-gray-600';
    }
  };

  const getCategoryLabel = () => {
    // Garante que category é string
    const category = String(project.category).toLowerCase();
    
    switch (category) {
      case 'web': return 'WEB';
      case 'mobile': return 'MOBILE';
      case 'designer': return 'DESIGN';
      default: return category.toUpperCase();
    }
  };

  return (
    <div className={`group relative rounded-xl transition-all duration-500 hover:-translate-y-2 ${
      theme === 'dark'
        ? 'bg-gray-900/30 hover:bg-gray-900/50 border border-gray-800/40'
        : 'bg-white/80 hover:bg-white border border-gray-200/60'
    } backdrop-blur-sm shadow-lg hover:shadow-xl`}>
      {/* Category Badge */}
      <div className="absolute -top-2 left-4 z-10">
        <div className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-normal ${
          theme === 'dark' 
            ? 'bg-gray-800 text-gray-300' 
            : 'bg-gray-100 text-gray-700'
        }`}>
          <span className={getCategoryColor()}>
            {getCategoryIcon()}
          </span>
          <span>{getCategoryLabel()}</span>
        </div>
      </div>

      {/* Imagem do Supabase */}
      <div className="aspect-video relative rounded-t-xl overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title[language]}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = `https://via.placeholder.com/800x450/${
              theme === 'dark' ? '1f2937' : 'f3f4f6'
            }/${theme === 'dark' ? 'ffffff' : '000000'}?text=${encodeURIComponent(project.title[language])}`;
          }}
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className={`text-xl font-normal mb-3 ${
          theme === 'dark' ? 'text-white' : 'text-gray-900'
        }`}>
          {project.title[language]}
        </h3>

        <p className={`text-sm font-light mb-4 leading-relaxed ${
          theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
        }`}>
          {project.description[language]}
        </p>

        {/* Technologies */}
        <div className="mb-6">
          <div className="flex flex-wrap gap-1.5">
            {project.technologies.slice(0, 3).map((tech) => (
              <span
                key={tech}
                className={`px-2 py-1 text-xs rounded ${
                  theme === 'dark' 
                    ? 'bg-gray-800 text-gray-400' 
                    : 'bg-gray-100 text-gray-600'
                }`}
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 3 && (
              <span className={`px-2 py-1 text-xs rounded ${
                theme === 'dark' 
                  ? 'bg-gray-800 text-gray-400' 
                  : 'bg-gray-100 text-gray-600'
              }`}>
                +{project.technologies.length - 3}
              </span>
            )}
          </div>
        </div>

        {/* Links */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-800/30 dark:border-gray-700/30">
          <div className="flex items-center gap-3">
            {project.links.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-2 rounded-lg transition-all duration-300 hover:scale-110 ${
                  theme === 'dark'
                    ? 'text-gray-400 hover:text-white hover:bg-gray-800'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-200'
                }`}
                title="GitHub"
              >
                <FiGithub className="w-4 h-4" />
              </a>
            )}
            {project.links.live && (
              <a
                href={project.links.live}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-2 rounded-lg transition-all duration-300 hover:scale-110 ${
                  theme === 'dark'
                    ? 'text-gray-400 hover:text-white hover:bg-gray-800'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-200'
                }`}
                title="Live Demo"
              >
                <FiExternalLink className="w-4 h-4" />
              </a>
            )}
            {project.links.figma && (
              <a
                href={project.links.figma}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-2 rounded-lg transition-all duration-300 hover:scale-110 ${
                  theme === 'dark'
                    ? 'text-gray-400 hover:text-white hover:bg-gray-800'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-200'
                }`}
                title="Figma"
              >
                <FiFigma className="w-4 h-4" />
              </a>
            )}
          </div>

          <span className={`text-xs font-light ${
            theme === 'dark' ? 'text-gray-500' : 'text-gray-500'
          }`}>
            {project.features[language].length} {language === 'pt' ? 'features' : 'features'}
          </span>
        </div>
      </div>
    </div>
  );
}