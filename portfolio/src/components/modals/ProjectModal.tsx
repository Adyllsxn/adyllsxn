// components/modals/ProjectModal.tsx
'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '@/contexts/ThemeContext';
import { useLanguage } from '@/contexts/LanguageContext';
import { Project } from '@/hooks/useProjects';
import { X, ExternalLink, Github, Tag, Check, FileText } from 'lucide-react';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const { theme } = useTheme();
  const { language } = useLanguage();
  
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50" 
        onClick={onClose}
      />
      
      {/* Modal Content */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        className={`relative w-full max-w-md rounded-xl ${
          theme === 'dark' ? 'bg-gray-800' : 'bg-white'
        } shadow-2xl`}
      >
        {/* Header */}
        <div className="p-5 border-b border-gray-700/30">
          <div className="flex justify-between items-start">
            <div>
              <span className={`text-xs font-medium px-2 py-1 rounded ${
                theme === 'dark' ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-600'
              }`}>
                {project.type.toUpperCase()}
              </span>
              <h2 className="text-xl font-bold mt-2 text-foreground">
                {project.title}
              </h2>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 hover:bg-red-500/10 rounded-lg text-red-500 hover:text-red-600"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-5 max-h-[60vh] overflow-y-auto">
          {/* Apenas Long Description (SEM a curta) */}
          {project.details?.longDescription && (
            <div className="mb-5">
              <p className={`text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                {project.details.longDescription}
              </p>
            </div>
          )}

          {/* Links */}
          <div className="flex gap-2 mb-5">
            <a
              href={project.links.live}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg font-medium flex-1 ${
                theme === 'dark'
                  ? 'bg-blue-600 hover:bg-blue-700 text-white'
                  : 'bg-blue-500 hover:bg-blue-600 text-white'
              }`}
            >
              <ExternalLink size={16} />
              {language === 'pt' ? 'Ver Projeto' : 'View Project'} {/* UNIVERSAL */}
            </a>
            
            <a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg font-medium flex-1 border ${
                theme === 'dark'
                  ? 'bg-gray-700 border-gray-600 hover:bg-gray-600 text-white'
                  : 'bg-gray-100 border-gray-300 hover:bg-gray-200 text-gray-900'
              }`}
            >
              <Github size={16} />
              {language === 'pt' ? 'Código' : 'Code'}
            </a>
          </div>

          {/* Tech Stack */}
          <div className="mb-4">
            <div className="flex items-center gap-2 mb-2">
              <Tag size={14} className={theme === 'dark' ? 'text-gray-400' : 'text-gray-500'} />
              <span className={`text-sm font-medium ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                {language === 'pt' ? 'Tecnologias' : 'Technologies'}
              </span>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {project.technologies.slice(0, 5).map((tech) => (
                <span
                  key={tech}
                  className={`px-2.5 py-1 rounded text-xs ${theme === 'dark' ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-700'}`}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Features */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Check size={14} className={theme === 'dark' ? 'text-gray-400' : 'text-gray-500'} />
              <span className={`text-sm font-medium ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                {language === 'pt' ? 'Funcionalidades' : 'Features'}
              </span>
            </div>
            <ul className="space-y-1.5">
              {project.features.slice(0, 3).map((feature, index) => (
                <li key={index} className="flex items-start gap-2 text-sm">
                  <span className="text-green-500 mt-0.5">•</span>
                  <span className={theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}>
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </motion.div>
    </div>
  );
}