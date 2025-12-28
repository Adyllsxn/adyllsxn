// components/sections/Projects.tsx
'use client';
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useTheme } from '@/contexts/ThemeContext';
import { useProjects } from '@/hooks/useProjects';
import ProjectCard from '@/components/projects/ProjectCard';

interface CategoryType {
  key: string;
  label: string;
  count: number;
}

export default function Projects() {
  const { language } = useLanguage();
  const { theme } = useTheme();
  const {
    projects,
    categories,
    activeCategory,
    setActiveCategory,
    currentPage,
    totalPages,
    nextPage,
    prevPage,
    hasProjects,
    loading
  } = useProjects(language);

  const handleCategoryClick = (categoryKey: string) => {
    setActiveCategory(categoryKey as any);
  };

  return (
    <section id="projects" className="py-20 lg:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-20 max-w-2xl mx-auto">
          <div className="inline-flex items-center mb-8">
            <div className={`h-px w-12 ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-300'}`}></div>
            <span className={`mx-6 text-xs font-normal uppercase tracking-[0.2em] ${
              theme === 'dark' ? 'text-gray-500' : 'text-gray-400'
            }`}>
              {language === 'pt' ? 'PROJETOS' : 'PROJECTS'}
            </span>
            <div className={`h-px w-12 ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-300'}`}></div>
          </div>
          
          <h2 className={`text-4xl sm:text-5xl font-bold mb-6 tracking-tight ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>
            {language === 'pt' ? 'Meus Projetos' : 'My Projects'}
          </h2>
          
          <p className={`text-sm font-light leading-relaxed tracking-wide ${
            theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
          }`}>
            {language === 'pt' 
              ? 'Soluções práticas desenvolvidas para problemas reais'
              : 'Practical solutions developed for real problems'
            }
          </p>
        </div>

        {/* Loading State */}
        {loading ? (
          <div className="text-center py-20">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500 mb-4"></div>
            <p className={`text-lg ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
              {language === 'pt' 
                ? 'Carregando projetos...'
                : 'Loading projects...'
              }
            </p>
            <p className={`text-sm mt-2 ${theme === 'dark' ? 'text-gray-500' : 'text-gray-400'}`}>
              Conectando ao Supabase...
            </p>
          </div>
        ) : (
          <>
            {/* Category Filters */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {categories.map((category: CategoryType) => (
                <button
                  key={category.key}
                  onClick={() => handleCategoryClick(category.key)}
                  className={`px-5 py-2.5 rounded-full text-sm font-normal transition-all duration-300 ${
                    activeCategory === category.key
                      ? theme === 'dark'
                        ? 'bg-gray-800 text-white'
                        : 'bg-gray-900 text-white'
                      : theme === 'dark'
                        ? 'text-gray-400 hover:text-gray-300 hover:bg-gray-800/50'
                        : 'text-gray-600 hover:text-gray-900 hover:bg-gray-200'
                  }`}
                >
                  {category.label} ({category.count})
                </button>
              ))}
            </div>

            {/* Projects Grid */}
            {!hasProjects ? (
              <div className="text-center py-20">
                <p className={`text-lg ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
                  {language === 'pt' 
                    ? 'Nenhum projeto encontrado nesta categoria.'
                    : 'No projects found in this category.'
                  }
                </p>
                <p className={`text-sm mt-2 ${theme === 'dark' ? 'text-gray-500' : 'text-gray-400'}`}>
                  {language === 'pt'
                    ? 'Adicione projetos no Supabase Table Editor.'
                    : 'Add projects in Supabase Table Editor.'
                  }
                </p>
              </div>
            ) : (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                  {projects.map((project) => (
                    <ProjectCard
                      key={project.id}
                      project={project}
                      language={language}
                      theme={theme}
                    />
                  ))}
                </div>

                {/* Pagination */}
                {totalPages > 1 && (
                  <div className="flex justify-center items-center gap-4 mt-16">
                    <button
                      onClick={prevPage}
                      disabled={currentPage === 1}
                      className={`px-5 py-2.5 rounded-lg text-sm font-normal transition-all duration-300 ${
                        currentPage === 1
                          ? 'opacity-50 cursor-not-allowed'
                          : theme === 'dark'
                            ? 'text-gray-300 hover:text-white hover:bg-gray-800'
                            : 'text-gray-600 hover:text-gray-900 hover:bg-gray-200'
                      }`}
                    >
                      ← {language === 'pt' ? 'Anterior' : 'Previous'}
                    </button>
                    
                    <span className={`px-4 py-2.5 rounded-lg text-sm font-normal ${
                      theme === 'dark' 
                        ? 'text-gray-300' 
                        : 'text-gray-600'
                    }`}>
                      {currentPage} / {totalPages}
                    </span>
                    
                    <button
                      onClick={nextPage}
                      disabled={currentPage === totalPages}
                      className={`px-5 py-2.5 rounded-lg text-sm font-normal transition-all duration-300 ${
                        currentPage === totalPages
                          ? 'opacity-50 cursor-not-allowed'
                          : theme === 'dark'
                            ? 'text-gray-300 hover:text-white hover:bg-gray-800'
                            : 'text-gray-600 hover:text-gray-900 hover:bg-gray-200'
                      }`}
                    >
                      {language === 'pt' ? 'Próximo' : 'Next'} →
                    </button>
                  </div>
                )}
              </>
            )}
          </>
        )}
      </div>
    </section>
  );
}