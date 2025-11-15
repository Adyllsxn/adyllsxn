// components/sections/Portfolio.tsx
'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '@/contexts/ThemeContext';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Portfolio() {
  const { theme } = useTheme();
  const { language } = useLanguage();
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = [
    { key: 'all', label: language === 'pt' ? 'Todos' : 'All' },
    { key: 'web', label: language === 'pt' ? 'Web' : 'Web' },
    { key: 'mobile', label: language === 'pt' ? 'Mobile' : 'Mobile' },
    { key: 'fullstack', label: language === 'pt' ? 'Full Stack' : 'Full Stack' }
  ];

  const projects = [
    {
      id: 1,
      title: language === 'pt' ? 'Sistema de E-commerce' : 'E-commerce System',
      description: language === 'pt' 
        ? 'Plataforma completa de e-commerce com painel administrativo'
        : 'Complete e-commerce platform with admin dashboard',
      category: 'web',
      image: '/api/placeholder/400/300',
      technologies: ['React', 'Node.js', 'MongoDB'],
      link: '#'
    },
    {
      id: 2,
      title: language === 'pt' ? 'App de Delivery' : 'Delivery App',
      description: language === 'pt'
        ? 'Aplicativo de delivery com rastreamento em tempo real'
        : 'Delivery app with real-time tracking',
      category: 'mobile',
      image: '/api/placeholder/400/300',
      technologies: ['React Native', 'Firebase'],
      link: '#'
    },
    {
      id: 3,
      title: language === 'pt' ? 'Dashboard Analytics' : 'Analytics Dashboard',
      description: language === 'pt'
        ? 'Dashboard interativo com gráficos e métricas em tempo real'
        : 'Interactive dashboard with real-time charts and metrics',
      category: 'fullstack',
      image: '/api/placeholder/400/300',
      technologies: ['Next.js', 'TypeScript', 'PostgreSQL'],
      link: '#'
    },
    {
      id: 4,
      title: language === 'pt' ? 'Plataforma Educacional' : 'Educational Platform',
      description: language === 'pt'
        ? 'Sistema de ensino online com videoaulas e exercícios'
        : 'Online learning system with video lessons and exercises',
      category: 'web',
      image: '/api/placeholder/400/300',
      technologies: ['Vue.js', 'Laravel', 'MySQL'],
      link: '#'
    },
    {
      id: 5,
      title: language === 'pt' ? 'App de Finanças' : 'Finance App',
      description: language === 'pt'
        ? 'Aplicativo de controle financeiro pessoal'
        : 'Personal finance control application',
      category: 'mobile',
      image: '/api/placeholder/400/300',
      technologies: ['Flutter', 'SQLite'],
      link: '#'
    },
    {
      id: 6,
      title: language === 'pt' ? 'API RESTful' : 'RESTful API',
      description: language === 'pt'
        ? 'API robusta para sistema de gestão empresarial'
        : 'Robust API for business management system',
      category: 'fullstack',
      image: '/api/placeholder/400/300',
      technologies: ['ASP.NET Core', 'SQL Server', 'Docker'],
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
        {/* Section Title */}
        <div className="text-center mb-12 lg:mb-16">
          <span className="text-blue-500 font-bold text-sm uppercase tracking-widest mb-3 block">
            {language === 'pt' ? 'PORTFÓLIO' : 'PORTFOLIO'}
          </span>
          <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>
            {language === 'pt' ? 'Meus Projetos' : 'My Projects'}
          </h2>
          <p className={`text-lg max-w-3xl mx-auto leading-relaxed ${
            theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
          }`}>
            {language === 'pt' 
              ? 'Confira alguns dos projetos que desenvolvi com paixão e dedicação'
              : 'Check out some of the projects I developed with passion and dedication'
            }
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.key}
              onClick={() => setActiveFilter(filter.key)}
              className={`px-6 py-3 rounded-xl font-semibold text-sm uppercase tracking-wider transition-all duration-300 ${
                activeFilter === filter.key
                  ? theme === 'dark'
                    ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/30'
                    : 'bg-blue-600 text-white shadow-lg shadow-blue-600/30'
                  : theme === 'dark'
                    ? 'bg-gray-800 text-gray-300 hover:bg-gray-700 border border-gray-600'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300 border border-gray-300'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          layout
        >
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`rounded-2xl overflow-hidden border transition-all duration-300 hover:scale-105 ${
                  theme === 'dark'
                    ? 'bg-gray-800/50 border-gray-700 hover:border-blue-500'
                    : 'bg-white/80 border-gray-200 hover:border-blue-500'
                } shadow-lg`}
              >
                {/* Project Image */}
                <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-600 relative overflow-hidden">
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="absolute bottom-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'
                    }`}>
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className={`text-xl font-bold mb-2 ${
                    theme === 'dark' ? 'text-white' : 'text-gray-900'
                  }`}>
                    {project.title}
                  </h3>
                  <p className={`text-sm mb-4 ${
                    theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className={`px-3 py-1 rounded-full text-xs font-medium ${
                          theme === 'dark'
                            ? 'bg-blue-500/20 text-blue-300'
                            : 'bg-blue-100 text-blue-700'
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* View Project Button */}
                  <button className={`w-full py-2 px-4 rounded-lg font-semibold text-sm transition-all duration-300 ${
                    theme === 'dark'
                      ? 'bg-gray-700 text-white hover:bg-gray-600'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}>
                    {language === 'pt' ? 'Ver Projeto' : 'View Project'}
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}