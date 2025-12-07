// hooks/useProjects.ts
"use client";
import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { getProjects } from "@/data/projects";

export type ProjectType = "web" | "mobile" | "api" | "fullstack";

export interface Project {
  id: number;
  title: string;
  description: string;
  type: ProjectType;
  image: string;
  technologies: string[];
  features: string[];
  links: {
    live: string;
    github: string;
  };
  details?: {
    longDescription: string;
    challenges: string[];
    solutions: string[];
  };
}

export function useProjects() {
  const { language } = useLanguage();
  const [activeFilter, setActiveFilter] = useState<ProjectType | "all">("all");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  
  const projectsPerPage = 4;

  const filters = [
    { key: "all", label: language === "pt" ? "Todos" : "All" },
    { key: "web", label: language === "pt" ? "Web" : "Web" },
    //{ key: "mobile", label: language === "pt" ? "Mobile" : "Mobile" },
    { key: "api", label: "API/Backend" },
    { key: "fullstack", label: language === "pt" ? "Full Stack" : "Full Stack" },
  ];

  // Agora usa a função importada
  const projects = getProjects(language);

  const filteredProjects = activeFilter === "all" 
    ? projects 
    : projects.filter(project => project.type === activeFilter);

  // Pagination logic
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

  const openModal = (project: Project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return {
    filters,
    projects: currentProjects,
    activeFilter,
    setActiveFilter,
    currentPage,
    totalPages,
    nextPage,
    prevPage,
    selectedProject,
    openModal,
    closeModal,
    hasProjects: filteredProjects.length > 0,
  };
}