// utils/projects.utils.ts
export interface Project {
  id: string;
  title: { pt: string; en: string };
  category: 'web' | 'mobile' | 'designer';
  description: { pt: string; en: string };
  image: string;
  technologies: string[];
  features: { pt: string[]; en: string[] };
  links: {
    live?: string;
    github?: string;
    behance?: string;
    figma?: string;
  };
  status: 'published' | 'draft';
}

export const getProjects = (): Project[] => [
  {
    id: '1',
    title: {
      pt: 'Sistema de Gestão Escolar',
      en: 'School Management System'
    },
    category: 'web',
    description: {
      pt: 'Sistema completo para gestão de escolas com painel administrativo.',
      en: 'Complete system for school management with admin panel.'
    },
    image: '/img/LearnAPI.png',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Tailwind CSS'],
    features: {
      pt: ['Painel administrativo', 'Gestão de alunos', 'Relatórios em PDF', 'Multi-tenant'],
      en: ['Admin panel', 'Student management', 'PDF reports', 'Multi-tenant']
    },
    links: {
      live: 'https://example.com',
      github: 'https://github.com/username/project'
    },
    status: 'published'
  },
  {
    id: '2',
    title: {
      pt: 'App Delivery de Comida',
      en: 'Food Delivery App'
    },
    category: 'mobile',
    description: {
      pt: 'Aplicativo de delivery com rastreamento em tempo real.',
      en: 'Delivery app with real-time tracking.'
    },
    image: '/img/rn-notion-ui.png',
    technologies: ['React Native', 'Firebase', 'Redux', 'Google Maps API'],
    features: {
      pt: ['Rastreamento em tempo real', 'Pagamentos online', 'Avaliações', 'Push notifications'],
      en: ['Real-time tracking', 'Online payments', 'Ratings', 'Push notifications']
    },
    links: {
      github: 'https://github.com/username/project'
    },
    status: 'published'
  },
  {
    id: '3',
    title: {
      pt: 'Design System Completo',
      en: 'Complete Design System'
    },
    category: 'designer',
    description: {
      pt: 'Sistema de design completo com componentes reutilizáveis.',
      en: 'Complete design system with reusable components.'
    },
    image: '/img/Portifolio.png',
    technologies: ['Figma', 'Storybook', 'React', 'Styled Components'],
    features: {
      pt: ['Componentes reutilizáveis', 'Documentação interativa', 'Tokens de design', 'Acessibilidade'],
      en: ['Reusable components', 'Interactive documentation', 'Design tokens', 'Accessibility']
    },
    links: {
      figma: 'https://figma.com/file/...',
      behance: 'https://behance.net/project'
    },
    status: 'published'
  }
];

// ✅ CORRIGIDO: AGORA CALCULA DINAMICAMENTE
export const getCategories = (language: 'pt' | 'en') => {
  const allProjects = getProjects();
  const publishedProjects = allProjects.filter(p => p.status === 'published');
  
  // Conta projetos por categoria
  const webCount = publishedProjects.filter(p => p.category === 'web').length;
  const mobileCount = publishedProjects.filter(p => p.category === 'mobile').length;
  const designerCount = publishedProjects.filter(p => p.category === 'designer').length;
  const allCount = publishedProjects.length; // Total de projetos publicados
  
  return [
    { key: 'all', label: language === 'pt' ? 'Todos' : 'All', count: allCount },
    { key: 'web', label: 'Web', count: webCount },
    { key: 'mobile', label: 'Mobile', count: mobileCount },
    { key: 'designer', label: language === 'pt' ? 'Designer' : 'Designer', count: designerCount }
  ];
};