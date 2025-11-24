// hooks/usePortfolio.ts
"use client";
import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

export interface Project {
  id: number;
  title: string;
  description: string;
  category: "web" | "api" | "automation";
  image: string;
  technologies: string[];
  link?: string;
  github?: string;
  demo?: string;
  details?: {
    longDescription: string;
    features: string[];
  };
}

export function usePortfolio() {
  const { language } = useLanguage();
  const [activeFilter, setActiveFilter] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const projectsPerPage = 4;

  const filters = [
    {
      key: "all",
      label: language === "pt" ? "Todos os Projetos" : "All Projects",
    },
    { key: "web", label: language === "pt" ? "Web/Frontend" : "Web/Frontend" },
    { key: "api", label: "API" },
    {
      key: "automation",
      label: language === "pt" ? "Automação" : "Automation",
    },
  ];

  const projects: Project[] = [
    {
      id: 1,
      title:
        language === "pt"
          ? "Kairos - Plataforma Religiosa"
          : "Kairos - Religious Platform",
      description:
        language === "pt"
          ? "One Page PWA com animações 3D avançadas para eventos religiosos"
          : "One Page PWA with advanced 3D animations for religious events",
      category: "web",
      image: "/images/web/kairos-event.png",
      technologies: [
        "React",
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Three.js",
        "PWA",
      ],
      demo: "https://kaiross.vercel.app/",
      github: "https://github.com/Adyllsxn/kairos",
      details: {
        longDescription:
          language === "pt"
            ? "One Page PWA moderna para eventos religiosos com animações 3D impressionantes usando Three.js. Desenvolvida com React e Next.js, oferecendo experiência imersiva e performance otimizada."
            : "Modern One Page PWA for religious events with impressive 3D animations using Three.js. Developed with React and Next.js, offering immersive experience and optimized performance.",
        features: [
          language === "pt"
            ? "Animações 3D com Three.js"
            : "3D animations with Three.js",
          language === "pt"
            ? "Progressive Web App (PWA)"
            : "Progressive Web App (PWA)",
          language === "pt"
            ? "Design responsivo com Tailwind CSS"
            : "Responsive design with Tailwind CSS",
          language === "pt"
            ? "One Page com rolagem suave"
            : "One Page with smooth scrolling",
          language === "pt"
            ? "Otimização de performance"
            : "Performance optimization",
          language === "pt"
            ? "Interface moderna e imersiva"
            : "Modern and immersive interface",
        ],
      },
    },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  // Pagination logic
  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);
  const startIndex = (currentPage - 1) * projectsPerPage;
  const currentProjects = filteredProjects.slice(
    startIndex,
    startIndex + projectsPerPage
  );

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
