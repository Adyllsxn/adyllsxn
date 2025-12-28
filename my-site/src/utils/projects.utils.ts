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
    image: 'learnApi.png',
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
    image: '/projects/food-delivery.jpg',
    technologies: ['React Native', 'Firebase', 'Google Maps API', 'Redux'],
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
    image: '/projects/design-system.jpg',
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
  },
  {
    id: '4',
    title: {
      pt: 'E-commerce Moderno',
      en: 'Modern E-commerce'
    },
    category: 'web',
    description: {
      pt: 'Loja online com carrinho, checkout e integração de pagamentos.',
      en: 'Online store with cart, checkout and payment integration.'
    },
    image: '/projects/ecommerce.jpg',
    technologies: ['Next.js', 'Stripe', 'MongoDB', 'TypeScript'],
    features: {
      pt: ['Carrinho de compras', 'Checkout seguro', 'Painel do vendedor', 'SEO otimizado'],
      en: ['Shopping cart', 'Secure checkout', 'Seller dashboard', 'SEO optimized']
    },
    links: {
      live: 'https://store.example.com',
      github: 'https://github.com/username/project'
    },
    status: 'published'
  }
];

export const getCategories = (language: 'pt' | 'en') => [
  { key: 'all', label: language === 'pt' ? 'Todos' : 'All', count: 4 },
  { key: 'web', label: 'Web', count: 2 },
  { key: 'mobile', label: 'Mobile', count: 1 },
  { key: 'designer', label: language === 'pt' ? 'Designer' : 'Designer', count: 1 }
];