// projectsData.ts
import kairosImg from '@/assets/fullstack/kairos.png';
import frapiImg from '@/assets/backend/frapi.png';
import mobileAppImg from '@/assets/mobile/kairos.png';
import frontendImg from '@/assets/frontend/kairos.png';

export type ProjectType = 'all' | 'frontend' | 'backend' | 'mobile' | 'fullstack';

export interface ProjectData {
  id: number;
  type: ProjectType;
  title: string;
  description: string;
  tools: string[];
  image: string;
  demo?: string;
  repo: string;
  category: 'frontend' | 'backend' | 'mobile' | 'fullstack';
}

// Lista de projetos atualizada
export const projectsData: ProjectData[] = [
  { 
    id: 1, 
    type: 'fullstack', 
    category: 'fullstack',
    title: 'Kairos', 
    description: 'Complete event management system', 
    tools: ['C#', 'ASP.NET Core', 'React', 'TypeScript', 'PostgreSQL'], 
    image: kairosImg, 
    demo: 'https://kairoschurch.vercel.app/', 
    repo: 'https://github.com/Adyllsxn/kairos' 
  },
  { 
    id: 2, 
    type: 'backend', 
    category: 'backend',
    title: 'Frapi API', 
    description: 'Mock REST APIpractice with Swagger documentation', 
    tools: ['C#', 'ASP.NET Core', 'SQL Server', 'Swagger'], 
    image: frapiImg, 
    repo: 'https://github.com/Adyllsxn/frapi' 
  },
  { 
    id: 3, 
    type: 'backend', 
    category: 'backend',
    title: 'Frapi API', 
    description: 'Mock REST APIpractice with Swagger documentation', 
    tools: ['C#', 'ASP.NET Core', 'SQL Server', 'Swagger'], 
    image: frapiImg, 
    repo: 'https://github.com/Adyllsxn/frapi' 
  },
  { 
    id: 4, 
    type: 'frontend', 
    category: 'frontend',
    title: 'Portfolio Website', 
    description: 'Modern responsive portfolio with dark/light theme and smooth animations', 
    tools: ['React', 'TypeScript', 'CSS3', 'Framer Motion'], 
    image: frontendImg, 
    demo: 'https://adyllsxn.vercel.app', 
    repo: 'https://github.com/Adyllsxn/portfolio' 
  },
  { 
    id: 5, 
    type: 'mobile', 
    category: 'mobile',
    title: 'Fitness Tracker', 
    description: 'Cross-platform mobile app for workout tracking and progress monitoring', 
    tools: ['React Native', 'TypeScript', 'Expo', 'Firebase'], 
    image: mobileAppImg, 
    repo: 'https://github.com/Adyllsxn/fitness-tracker' 
  }
];