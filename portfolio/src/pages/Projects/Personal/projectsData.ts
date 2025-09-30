
//#region import img fullstack
//#endregion

//#region import img backend
import frapiRestImg from '@/assets/backend/frapi-rest.png';
import frapiGtaphglImg from '@/assets/backend/frapi-graphql.png';
//#endregion

//#region import img mobile
import climaxlImg from '@/assets/mobile/climax.jpeg';
//#endregion

//#region import img frontend
import adyllsxnImg from '@/assets/frontend/adyllsxn.png';
import kairosImg from '@/assets/frontend/kairos.png';
//#endregion

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

  //#region fullstack
  /*{ 
    id: 1, 
    type: 'fullstack', 
    category: 'fullstack',
    title: 'kairos', 
    description: 'Full-stack event management system built with Clean Architecture principles.', 
    tools: ['ASP.NET Core', 'React', 'PostgreSQL'], 
    image: kairosImg, 
    demo: 'https://kairos-topaz.vercel.app/', 
    repo: 'https://github.com/Adyllsxn/kairos' 
  },*/
  //#endregion

  //#region backend
  { 
    id: 2, 
    type: 'backend', 
    category: 'backend',
    title: 'frapi-rest', 
    description: 'A mock REST API for frontend developers to practice CRUD operations.', 
    tools: ['ASP.NET Core', 'EF InMemory', 'Swagger'], 
    image: frapiRestImg, 
    repo: 'https://github.com/Adyllsxn/frapi-rest' 
  },
  { 
    id: 3, 
    type: 'backend', 
    category: 'backend',
    title: 'frapi-graphql', 
    description: 'A mock GraphQL API for practicing queries and mutations.', 
    tools: ['ASP.NET Core', 'EF InMemory', 'HotChocolate'], 
    image: frapiGtaphglImg, 
    repo: 'https://github.com/Adyllsxn/frapi-graphql' 
  },
  //#endregion

  //#region frontend
  { 
    id: 4, 
    type: 'frontend', 
    category: 'frontend',
    title: 'portfolio Website', 
    description: 'Modern responsive portfolio with dark/light theme and smooth animations', 
    tools: ['React', 'TypeScript', 'Framer Motion'], 
    image: adyllsxnImg, 
    demo: 'https://adyllsxn.vercel.app', 
    repo: 'https://github.com/Adyllsxn/portfolio' 
  },
  { 
    id: 4, 
    type: 'frontend', 
    category: 'frontend',
    title: 'kairos', 
    description: 'React with Tailwind CSS, modern responsive interface', 
    tools: ['React', 'TypeScript', 'Tailwind CSS'], 
    image: kairosImg, 
    demo: 'https://kaiross.vercel.app/', 
    repo: 'https://github.com/Adyllsxn/kairos' 
  },
  //#endregion

  //#region mobile
 { 
    id: 5, 
    type: 'mobile', 
    category: 'mobile',
    title: 'climax', 
    description: 'A weather app that uses your location to provide real-time forecasts', 
    tools: ['React Native', 'JavaScript', 'Expo'], 
    image: climaxlImg, 
    repo: 'https://github.com/Adyllsxn/fitness-tracker' 
  }
  //#endregion
];