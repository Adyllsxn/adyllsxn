// data/services.ts
import { FaGlobe, FaServer, FaLaptopCode } from 'react-icons/fa';
import { IconType } from 'react-icons';

export interface Service {
  id: string;
  icon: IconType;
  title: { pt: string; en: string };
  description: { pt: string; en: string };
}

export const services: Service[] = [
  {
    id: 'web',
    icon: FaGlobe,
    title: {
      pt: 'Desenvolvimento Web',
      en: 'Web Development'
    },
    description: {
      pt: 'Crio sites e aplicações web modernas, rápidas e responsivas que funcionam perfeitamente em qualquer dispositivo.',
      en: 'I create modern, fast, and responsive websites and web applications that work perfectly on any device.'
    }
  },
  {
    id: 'api',
    icon: FaServer,
    title: {
      pt: 'APIs & Backend',
      en: 'APIs & Backend'
    },
    description: {
      pt: 'Desenvolvimento de sistemas de backend completos, incluindo APIs, automações e integrações entre serviços.',
      en: 'Development of complete backend systems, including APIs, automations, and integrations between services.'
    }
  },
  {
    id: 'fullstack',
    icon: FaLaptopCode,
    title: {
      pt: 'Soluções Full Stack',
      en: 'Full Stack Solutions'
    },
    description: {
      pt: 'Entrego projetos completos que integram frontend, backend e banco de dados em uma solução coesa.',
      en: 'I deliver complete projects integrating frontend, backend and database into a cohesive solution.'
    }
  }
];