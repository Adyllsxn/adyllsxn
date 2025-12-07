// components/sections/Portfolio.tsx
'use client';
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '@/contexts/ThemeContext';
import { useLanguage } from '@/contexts/LanguageContext';
import { useProjects } from '@/hooks/useProjects';
import Image from 'next/image';
import ProjectModal from '@/components/modals/ProjectModal';

export default function Portfolio() {
  const { theme } = useTheme();
  const { language } = useLanguage();
  const {
    filters,
    projects,
    activeFilter,
    setActiveFilter,
    currentPage,
    totalPages,
    nextPage,
    prevPage,
    selectedProject,
    openModal,
    closeModal,
    hasProjects
  } = useProjects();

  return (
    <section 
      id="portfolio" 
      className="py-16 lg:py-20 transition-all duration-300"
      style={{
        backgroundColor: 'var(--background)'
      }}
    >
      <div className="container mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>
            {language === 'pt' ? 'Portfólio' : 'Portfolio'}
          </h2>
          <p className={`text-lg max-w-3xl mx-auto leading-relaxed ${
            theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
          }`}>
            {language === 'pt'
              ? 'Explore meus projetos mais recentes onde transformo ideias em soluções digitais inovadoras.'
              : 'Explore my recent projects where I transform ideas into innovative digital solutions.'
            }
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Projects Grid */}
          <div className="lg:w-3/4">
            {projects.length === 0 ? (
              <div className="text-center py-20">
                <p className={`text-xl ${
                  theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                }`}>
                  {language === 'pt' 
                    ? 'Nenhum projeto encontrado para este filtro.'
                    : 'No projects found for this filter.'
                  }
                </p>
              </div>
            ) : (
              <>
                <motion.div 
                  className="grid grid-cols-1 md:grid-cols-2 gap-6"
                  layout
                >
                  <AnimatePresence>
                    {projects.map((project, index) => (
                      <motion.div
                        key={project.id}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        className="group relative rounded-xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300"
                        onClick={() => openModal(project)}
                      >
                        {/* APENAS A IMAGEM (visível sempre) */}
                        <div className="aspect-video relative overflow-hidden">
                          <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                          />
                          
                          {/* Overlay escuro só no hover */}
                          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/80 transition-all duration-500" />
                          
                          {/* Type Badge - Sempre visível */}
                          <div className="absolute top-4 left-4">
                            <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                              theme === 'dark' 
                                ? 'bg-black/70 text-white' 
                                : 'bg-white/90 text-gray-800'
                            }`}>
                              {project.type.toUpperCase()}
                            </span>
                          </div>

                          {/* CONTEÚDO QUE APARECE NO HOVER (título + descrição curta + botão) */}
                          <div className="absolute inset-0 flex flex-col justify-center items-center p-6 opacity-0 group-hover:opacity-100 transition-all duration-500">
                            <div className="text-white text-center w-full">
                              {/* Título */}
                              <h3 className="text-xl font-bold mb-3 line-clamp-2">
                                {project.title}
                              </h3>
                              
                              {/* Descrição curta (20 caracteres) */}
                              <p className="text-sm text-gray-200 mb-6 line-clamp-2">
                                {project.description.length > 60 
                                  ? `${project.description.substring(0, 60)}...` 
                                  : project.description}
                              </p>
                              
                              {/* Botão Ver Mais (APENAS ESTE BOTÃO) */}
                              <button className="px-8 py-3 bg-white text-gray-900 rounded-lg font-semibold text-sm hover:bg-gray-100 transition-colors shadow-lg">
                                {language === 'pt' ? 'Ver Mais' : 'View More'}
                              </button>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </motion.div>

                {/* Pagination */}
                {hasProjects && totalPages > 1 && (
                  <div className="flex justify-center items-center gap-4 mt-12">
                    <button
                      onClick={prevPage}
                      disabled={currentPage === 1}
                      className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                        currentPage === 1
                          ? 'opacity-50 cursor-not-allowed'
                          : theme === 'dark'
                            ? 'bg-gray-700 text-white hover:bg-gray-600 shadow-lg'
                            : 'bg-gray-200 text-gray-700 hover:bg-gray-300 shadow-lg'
                      }`}
                    >
                      {language === 'pt' ? '← Anterior' : '← Previous'}
                    </button>
                    
                    <span className={`px-6 py-3 rounded-lg font-medium ${
                      theme === 'dark' 
                        ? 'bg-gray-700 text-white shadow-lg' 
                        : 'bg-gray-200 text-gray-700 shadow-lg'
                    }`}>
                      {language === 'pt' ? 'Página' : 'Page'} {currentPage} {language === 'pt' ? 'de' : 'of'} {totalPages}
                    </span>
                    
                    <button
                      onClick={nextPage}
                      disabled={currentPage === totalPages}
                      className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                        currentPage === totalPages
                          ? 'opacity-50 cursor-not-allowed'
                          : theme === 'dark'
                            ? 'bg-gray-700 text-white hover:bg-gray-600 shadow-lg'
                            : 'bg-gray-200 text-gray-700 hover:bg-gray-300 shadow-lg'
                      }`}
                    >
                      {language === 'pt' ? 'Próximo →' : 'Next →'}
                    </button>
                  </div>
                )}
              </>
            )}
          </div>

          {/* Filters Sidebar - Desktop */}
          <div className="hidden lg:block lg:w-1/4">
            <div className={`sticky top-8 rounded-xl p-6 ${
              theme === 'dark' 
                ? 'bg-gray-800/50 border border-gray-700' 
                : 'bg-white/80 border border-gray-200'
            } shadow-lg`}>
              <h3 className={`text-lg font-bold mb-6 ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>
                {language === 'pt' ? 'Filtrar Projetos' : 'Filter Projects'}
              </h3>
              
              <div className="space-y-3">
                {filters.map((filter) => (
                  <button
                    key={filter.key}
                    onClick={() => setActiveFilter(filter.key as any)}
                    className={`w-full text-left px-4 py-3 rounded-lg font-medium transition-all duration-300 ${
                      activeFilter === filter.key
                        ? theme === 'dark'
                          ? 'bg-blue-500 text-white shadow-lg'
                          : 'bg-blue-600 text-white shadow-lg'
                        : theme === 'dark'
                          ? 'text-gray-300 hover:bg-gray-700 hover:text-white'
                          : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
                    }`}
                  >
                    {filter.label}
                  </button>
                ))}
              </div>

              {/* Additional Info */}
              <div className={`mt-8 pt-6 border-t ${
                theme === 'dark' ? 'border-gray-700' : 'border-gray-200'
              }`}>
                <p className={`text-sm ${
                  theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  {projects.length} {language === 'pt' ? 'projetos encontrados' : 'projects found'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      <ProjectModal 
        project={selectedProject} 
        onClose={closeModal} 
      />
    </section>
  );
}