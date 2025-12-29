// hooks/useProjects.ts
'use client';
import { useState, useEffect } from 'react';
import { Project, getProjects, getCategories } from '@/utils/supabase/projects.utils';

type Category = 'all' | 'web' | 'mobile' | 'designer';

export function useProjects(language: 'pt' | 'en') {
  const [activeCategory, setActiveCategory] = useState<Category>('all');
  const [currentPage, setCurrentPage] = useState(1);
  const [projects, setProjects] = useState<Project[]>([]);
  const [categories, setCategories] = useState<{ key: string; label: string; count: number }[]>([]);
  const [loading, setLoading] = useState(true);
  
  const projectsPerPage = 3;

  useEffect(() => {
    loadData();
  }, [language]);

  async function loadData() {
    setLoading(true);
    console.log('📦 Carregando dados do Supabase...');
    
    try {
      const [projectsData, categoriesData] = await Promise.all([
        getProjects(),
        getCategories(language)
      ]);
      
      setProjects(projectsData);
      setCategories(categoriesData);
      console.log('✅ Dados carregados com sucesso!');
    } catch (error) {
      console.error('❌ Erro ao carregar dados:', error);
    } finally {
      setLoading(false);
    }
  }

  // Filtrar por categoria
  const filteredProjects = activeCategory === 'all'
    ? projects
    : projects.filter(p => p.category === activeCategory);

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
      console.log('🔘 Categoria alterada:', cat);
      setActiveCategory(cat);
      resetPagination();
    },
    currentPage,
    totalPages,
    nextPage,
    prevPage,
    hasProjects: filteredProjects.length > 0,
    loading
  };
}