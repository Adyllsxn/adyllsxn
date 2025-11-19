// components/modals/PortfolioModal.tsx
'use client';
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '@/contexts/ThemeContext';
import { Project } from '@/hooks/usePortfolio';
import Image from 'next/image';
import { X, ExternalLink, Github } from 'lucide-react';

interface PortfolioModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function PortfolioModal({ project, onClose }: PortfolioModalProps) {
  const { theme } = useTheme();

  if (!project) return null;

  return (
    <AnimatePresence>
      {project && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={onClose}
          />
          
          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className={`relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl ${
              theme === 'dark' 
                ? 'bg-gray-800 text-white' 
                : 'bg-white text-gray-900'
            } shadow-2xl`}
          >
            {/* Close Button - Melhorado */}
            <button
              onClick={onClose}
              className={`absolute top-4 right-4 z-10 p-3 rounded-full transition-all duration-300 hover:scale-110 ${
                theme === 'dark'
                  ? 'bg-red-500 hover:bg-red-600 text-white shadow-lg'
                  : 'bg-red-500 hover:bg-red-600 text-white shadow-lg'
              }`}
            >
              <X size={20} />
            </button>

            {/* Modal Content */}
            <div className="p-6">
              {/* Header */}
              <div className="flex flex-col lg:flex-row gap-6 mb-8">
                {/* Image */}
                <div className="lg:w-2/5">
                  <div className="aspect-video relative rounded-xl overflow-hidden shadow-lg">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                {/* Basic Info */}
                <div className="lg:w-3/5">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h2 className="text-2xl lg:text-3xl font-bold mb-2">
                        {project.title}
                      </h2>
                      <p className={`text-lg ${
                        theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                      }`}>
                        {project.description}
                      </p>
                    </div>
                    
                    {/* Category Badge */}
                    <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                      theme === 'dark' ? 'bg-gray-700 text-white' : 'bg-gray-200 text-gray-800'
                    }`}>
                      {project.category === 'web' ? 'Web/Frontend' : 
                       project.category === 'api' ? 'API/Backend' : 'Automação'}
                    </span>
                  </div>

                  {/* Technologies */}
                  <div className="mb-6">
                    <h3 className="font-semibold mb-3 text-lg">Tecnologias</h3>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className={`px-3 py-2 rounded-lg text-sm font-medium ${
                            theme === 'dark'
                              ? 'bg-blue-500/20 text-blue-300 border border-blue-500/30'
                              : 'bg-blue-100 text-blue-700 border border-blue-200'
                          }`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-wrap gap-3">
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 ${
                          theme === 'dark'
                            ? 'bg-green-500 hover:bg-green-600 text-white shadow-lg'
                            : 'bg-green-500 hover:bg-green-600 text-white shadow-lg'
                        }`}
                      >
                        <ExternalLink size={18} />
                        Ver Demo
                      </a>
                    )}
                    
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold border transition-all duration-300 hover:scale-105 ${
                          theme === 'dark'
                            ? 'bg-gray-700 hover:bg-gray-600 text-white border-gray-600 shadow-lg'
                            : 'bg-gray-800 hover:bg-gray-700 text-white border-gray-700 shadow-lg'
                        }`}
                      >
                        <Github size={18} />
                        Ver Código
                      </a>
                    )}
                  </div>
                </div>
              </div>

              {/* Detailed Information */}
              {project.details && (
                <div className="space-y-8">
                  {/* Long Description */}
                  <div>
                    <h3 className="text-2xl font-bold mb-4">Sobre o Projeto</h3>
                    <p className={`text-lg leading-relaxed ${
                      theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                    }`}>
                      {project.details.longDescription}
                    </p>
                  </div>

                  {/* Features */}
                  <div>
                    <h3 className="text-2xl font-bold mb-4">Funcionalidades Principais</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {project.details.features.map((feature, index) => (
                        <div
                          key={index}
                          className={`flex items-center gap-3 p-4 rounded-xl ${
                            theme === 'dark'
                              ? 'bg-gray-700/50 border border-gray-600'
                              : 'bg-gray-50 border border-gray-200'
                          }`}
                        >
                          <div className={`w-3 h-3 rounded-full ${
                            theme === 'dark' ? 'bg-green-400' : 'bg-green-500'
                          }`} />
                          <span className={`font-medium ${
                            theme === 'dark' ? 'text-gray-200' : 'text-gray-700'
                          }`}>
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}