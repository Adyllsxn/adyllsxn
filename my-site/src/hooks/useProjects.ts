'use client';
import { useState } from 'react';
import { Project, getProjects, getCategories } from '@/utils/projects.utils';

type Category = 'all' | 'web' | 'mobile' | 'designer';

export function useProjects(language: 'pt' | 'en') {
  const [activeCategory, setActiveCategory] = useState<Category>('all');
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 3;

  const allProjects = getProjects();
  const categories = getCategories(language);

  // Filtrar por categoria
  const filteredProjects = activeCategory === 'all'
    ? allProjects.filter(p => p.status === 'published')
    : allProjects.filter(p => p.category === activeCategory && p.status === 'published');

  // Paginação
  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);
  const startIndex = (currentPage - 1) * projectsPerPage;
  const currentProjects = filteredProjects.slice(startIndex, startIndex + projectsPerPage);

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const resetPagination = () => {
    setCurrentPage(1);
  };

  return {
    projects: currentProjects,
    allProjects: filteredProjects,
    categories,
    activeCategory,
    setActiveCategory: (cat: Category) => {
      setActiveCategory(cat);
      resetPagination();
    },
    currentPage,
    totalPages,
    nextPage,
    prevPage,
    hasProjects: filteredProjects.length > 0
  };
}