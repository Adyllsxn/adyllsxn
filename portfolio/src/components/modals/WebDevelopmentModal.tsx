// components/modals/WebDevelopmentModal.tsx
'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import BaseModal from './BaseModal';
import { FaCode, FaPalette, FaLaptop } from 'react-icons/fa';
import { 
  SiHtml5, SiCss3, SiTailwindcss, SiJavascript, 
  SiTypescript, SiReact, SiNextdotjs 
} from 'react-icons/si';

interface WebDevelopmentModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function WebDevelopmentModal({ isOpen, onClose }: WebDevelopmentModalProps) {
  const { language } = useLanguage();

  const technologies = [
    { icon: <SiHtml5 className="text-orange-500" />, name: 'HTML5' },
    { icon: <SiCss3 className="text-blue-500" />, name: 'CSS3' },
    { icon: <SiTailwindcss className="text-cyan-500" />, name: 'Tailwind CSS' },
    { icon: <SiJavascript className="text-yellow-400" />, name: 'JavaScript' },
    { icon: <SiTypescript className="text-blue-500" />, name: 'TypeScript' },
    { icon: <SiReact className="text-cyan-400" />, name: 'React.js' },
    { icon: <SiNextdotjs className="text-black dark:text-white" />, name: 'Next.js' },
    { icon: <div className="text-green-500 text-2xl">+5</div>, name: language === 'pt' ? 'e mais...' : 'and more...' }
  ];

  const projectTypes = [
    {
      title: language === 'pt' ? 'Landing Pages' : 'Landing Pages',
      description: language === 'pt' 
        ? 'Páginas de conversão otimizadas para capturar leads e vendas'
        : 'Optimized conversion pages to capture leads and sales',
      features: language === 'pt' 
        ? ['Design Responsivo', 'Otimização SEO', 'Formulários de Contato', 'Integração com APIs']
        : ['Responsive Design', 'SEO Optimization', 'Contact Forms', 'API Integration']
    },
    {
      title: language === 'pt' ? 'One Page Applications' : 'One Page Applications',
      description: language === 'pt'
        ? 'Sites completos em uma única página com navegação suave'
        : 'Complete websites in a single page with smooth navigation',
      features: language === 'pt'
        ? ['Scroll Suave', 'Animações Modernas', 'Design Interativo', 'Otimizado para Mobile']
        : ['Smooth Scroll', 'Modern Animations', 'Interactive Design', 'Mobile Optimized']
    },
    {
      title: language === 'pt' ? 'Sites Estáticos' : 'Static Sites',
      description: language === 'pt'
        ? 'Sites rápidos e seguros sem necessidade de banco de dados'
        : 'Fast and secure websites without database requirements',
      features: language === 'pt'
        ? ['Alta Performance', 'Segurança Máxima', 'Baixo Custo', 'Fácil Manutenção']
        : ['High Performance', 'Maximum Security', 'Low Cost', 'Easy Maintenance']
    },
    {
      title: language === 'pt' ? 'Sites Dinâmicos' : 'Dynamic Sites',
      description: language === 'pt'
        ? 'Sites com integração API, conteúdo dinâmico e painel administrativo'
        : 'Sites with API integration, dynamic content and admin panel',
      features: language === 'pt'
        ? ['Integração API REST', 'Painel Administrativo', 'Conteúdo Dinâmico', 'Blog Integrado']
        : ['REST API Integration', 'Admin Panel', 'Dynamic Content', 'Integrated Blog']
    }
  ];

  return (
    <BaseModal
      isOpen={isOpen}
      onClose={onClose}
      title={language === 'pt' ? 'Desenvolvimento Web' : 'Web Development'}
      description={language === 'pt'
        ? 'Sites modernos, responsivos e de alta performance com as melhores tecnologias frontend'
        : 'Modern, responsive and high-performance websites with the best frontend technologies'
      }
      icon={<FaCode size={28} className="text-white" />}
      iconColor="#3B82F6" // blue-500
    >
      {/* Technologies Section */}
      <div className="mb-8">
        <h3 className="text-2xl font-bold mb-6 text-center flex items-center justify-center">
          <FaPalette className="mr-3 text-blue-500" />
          {language === 'pt' ? 'Tecnologias' : 'Technologies'}
        </h3>
        
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col items-center p-4 rounded-lg bg-gray-800/40 dark:bg-gray-700/40 shadow-md hover:scale-105 transition-transform duration-300"
            >
              <span className="text-2xl mb-2">{tech.icon}</span>
              <span className="text-sm font-medium text-center">{tech.name}</span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Project Types */}
      <div className="mb-6">
        <h3 className="text-2xl font-bold mb-6 text-center flex items-center justify-center">
          <FaLaptop className="mr-3 text-green-500" />
          {language === 'pt' ? 'Tipos de Projeto' : 'Project Types'}
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projectTypes.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="p-6 rounded-xl border border-gray-700 dark:border-gray-600 bg-gray-800/20 dark:bg-gray-700/20 hover:border-blue-400 transition-colors duration-300"
            >
              <h4 className="text-xl font-bold mb-3 text-blue-400">{project.title}</h4>
              <p className="text-sm mb-4 text-gray-300 dark:text-gray-400">
                {project.description}
              </p>
              <ul className="space-y-2">
                {project.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm">
                    <span className="text-green-500 mr-2">✓</span>
                    <span className="text-gray-300 dark:text-gray-400">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </BaseModal>
  );
}