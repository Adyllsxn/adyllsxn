// components/sections/Portfolio.tsx
'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '@/contexts/ThemeContext';
import { useLanguage } from '@/contexts/LanguageContext';
import Image from 'next/image';

export default function Portfolio() {
  const { theme } = useTheme();
  const { language } = useLanguage();
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = [
    { key: 'all', label: language === 'pt' ? 'Todos os Projetos' : 'All Projects' },
    { key: 'web', label: language === 'pt' ? 'Web/Frontend' : 'Web/Frontend' },
    { key: 'api', label: 'API' },
    { key: 'automation', label: language === 'pt' ? 'Automação' : 'Automation' }
  ];

  const projects = [
    {
      id: 1,
      title: language === 'pt' ? 'Plataforma E-commerce' : 'E-commerce Platform',
      description: language === 'pt' 
        ? 'Solução completa de e-commerce com design responsivo e performance otimizada'
        : 'Complete e-commerce solution with responsive design and optimized performance',
      category: 'web',
      image: '/images/img005.png',
      technologies: ['React', 'Next.js', 'TypeScript'],
      link: '#'
    },
    {
      id: 2,
      title: language === 'pt' ? 'API de Pagamentos' : 'Payments API',
      description: language === 'pt'
        ? 'API segura para processamento de pagamentos com múltiplos métodos'
        : 'Secure API for payment processing with multiple methods',
      category: 'api',
      image: '/images/img004.png',
      technologies: ['Node.js', 'Express', 'MongoDB'],
      link: '#'
    },
    {
      id: 3,
      title: language === 'pt' ? 'Automação de Marketing' : 'Marketing Automation',
      description: language === 'pt'
        ? 'Sistema inteligente para automação de campanhas e análise de resultados'
        : 'Intelligent system for campaign automation and results analysis',
      category: 'automation',
      image: '/images/img006.png',
      technologies: ['Python', 'Selenium', 'PostgreSQL'],
      link: '#'
    },
    {
      id: 4,
      title: language === 'pt' ? 'Dashboard Analytics' : 'Analytics Dashboard',
      description: language === 'pt'
        ? 'Painel interativo com métricas em tempo real e visualizações avançadas'
        : 'Interactive dashboard with real-time metrics and advanced visualizations',
      category: 'web',
      image: '/images/img003.png',
      technologies: ['Vue.js', 'Chart.js', 'REST API'],
      link: '#'
    }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

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
              ? 'Explore meus projetos mais recentes onde transformo ideias em soluções digitais inovadoras. Cada trabalho representa um desafio único e uma oportunidade de criar algo extraordinário.'
              : 'Explore my latest projects where I turn ideas into innovative digital solutions. Each work represents a unique challenge and an opportunity to create something extraordinary.'
            }
          </p>
        </div>

        {/* Mobile Filters - Top on mobile */}
        <div className="lg:hidden mb-8">
          <div className={`rounded-xl p-6 ${
            theme === 'dark' 
              ? 'bg-gray-800/50 border border-gray-700' 
              : 'bg-white/80 border border-gray-200'
          } shadow-lg`}>
            <h3 className={`text-lg font-bold mb-4 ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>
              {language === 'pt' ? 'Filtrar Projetos' : 'Filter Projects'}
            </h3>
            
            <div className="grid grid-cols-2 gap-3">
              {filters.map((filter) => (
                <button
                  key={filter.key}
                  onClick={() => setActiveFilter(filter.key)}
                  className={`px-4 py-3 rounded-lg font-medium text-sm transition-all duration-300 ${
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
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Projects Grid - Left Side */}
          <div className="lg:w-3/4">
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
              layout
            >
              <AnimatePresence>
                {filteredProjects.map((project, index) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="group relative rounded-xl overflow-hidden cursor-pointer"
                  >
                    {/* Project Image */}
                    <div className="aspect-video relative overflow-hidden">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/70 transition-all duration-300" />
                      
                      {/* Hidden Content on Hover */}
                      <div className="absolute inset-0 flex flex-col justify-end p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                        <div className="text-white">
                          <h3 className="text-xl font-bold mb-2">
                            {project.title}
                          </h3>
                          <p className="text-sm text-gray-200 mb-4">
                            {project.description}
                          </p>
                          <div className="flex flex-wrap gap-2 mb-4">
                            {project.technologies.map((tech) => (
                              <span
                                key={tech}
                                className="px-2 py-1 bg-white/20 rounded text-xs"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                          <button className="px-6 py-2 bg-white text-gray-900 rounded-lg font-semibold text-sm hover:bg-gray-100 transition-colors">
                            {language === 'pt' ? 'Ver Mais' : 'View More'}
                          </button>
                        </div>
                      </div>

                      {/* Category Badge - Always Visible */}
                      <div className="absolute top-4 left-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'
                        }`}>
                          {project.category === 'web' ? (language === 'pt' ? 'Web' : 'Web') : 
                           project.category === 'api' ? 'API' : 
                           language === 'pt' ? 'Automação' : 'Automation'}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          </div>

          {/* Filters - Right Side - Hidden on mobile */}
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
                    onClick={() => setActiveFilter(filter.key)}
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
                  {language === 'pt' 
                    ? 'Desenvolvendo soluções inovadoras com as tecnologias mais modernas do mercado'
                    : 'Developing innovative solutions with the most modern technologies on the market'
                  }
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}