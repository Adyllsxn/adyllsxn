// data/projects.ts
import { Project } from '@/hooks/useProjects';

export const getProjects = (language: 'pt' | 'en'): Project[] => [
  {
    id: 1,
    title: "LearnAPI",
    description: language === "pt" 
      ? "API educacional .NET 10" 
      : ".NET 10 Educational API",
    type: "api",
    image: "/images/api/learnApi.png",
    technologies: [".NET 10", "Entity Framework", "Minimal API", "Swagger", "InMemory DB"],
    features: [
      language === "pt" ? "CRUD completo usuários" : "Complete user CRUD",
      language === "pt" ? "Documentação Swagger" : "Swagger documentation",
      language === "pt" ? "Validações de domínio" : "Domain validations"
    ],
    links: {
      live: "https://learnap1.vercel.app/",
      github: "https://github.com/Adyllsxn/LearnAPI"
    },
    details: {
      longDescription: language === "pt"
        ? "API educacional construída com .NET 10, Entity Framework Core e Minimal API. Focada em arquitetura limpa, boas práticas e documentação Swagger completa para aprendizagem e portfólio."
        : "Educational API built with .NET 10, Entity Framework Core and Minimal API. Focused on clean architecture, best practices and complete Swagger documentation for learning and portfolio.",
      challenges: [
        language === "pt" ? "Implementar arquitetura limpa" : "Implement clean architecture",
        language === "pt" ? "Validações em tempo real" : "Real-time validations"
      ],
      solutions: [
        language === "pt" ? "Entity Framework InMemory" : "Entity Framework InMemory",
        language === "pt" ? "Minimal API endpoints" : "Minimal API endpoints"
      ]
    }
  },
  // Adicione mais projetos aqui...
];