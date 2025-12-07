// data/skills.ts
import { IconType } from 'react-icons';
import { 
  FaJs, FaReact, FaGitAlt, FaDocker, FaMicrosoft, FaUbuntu, FaCloud, 
  FaCode, FaGlobe, FaServer, FaDatabase, FaCogs, FaShieldAlt, FaLayerGroup 
} from 'react-icons/fa';
import { 
  SiTypescript, SiNextdotjs, SiSharp, SiHtml5, SiCss3, SiPostgresql, SiMongodb 
} from 'react-icons/si';

export interface Skill {
  name: string;
  icon: IconType;
  color: string;
}

export interface SkillCategory {
  title: { pt: string; en: string };
  skills: Skill[];
}

export const skillCategories: Record<string, SkillCategory> = {
  languages: {
    title: { pt: 'Linguagens', en: 'Languages' },
    skills: [
      { name: 'JavaScript', icon: FaJs, color: 'text-yellow-400' },
      { name: 'TypeScript', icon: SiTypescript, color: 'text-blue-600' },
      { name: 'C#', icon: SiSharp, color: 'text-purple-600' },
      { name: 'HTML5', icon: SiHtml5, color: 'text-orange-500' },
      { name: 'CSS3', icon: SiCss3, color: 'text-blue-500' }
    ]
  },
  frameworks: {
    title: { pt: 'Frameworks', en: 'Frameworks' },
    skills: [
      { name: 'React', icon: FaReact, color: 'text-cyan-400' },
      { name: 'Next.js', icon: SiNextdotjs, color: 'text-black dark:text-white' },
      { name: '.NET Core', icon: FaMicrosoft, color: 'text-purple-500' },
      { name: 'ASP.NET Core', icon: FaServer, color: 'text-purple-600' }
    ]
  },
  tools: {
    title: { pt: 'Ferramentas', en: 'Tools' },
    skills: [
      { name: 'Git', icon: FaGitAlt, color: 'text-orange-500' },
      { name: 'Azure', icon: FaCloud, color: 'text-blue-500' },
      { name: 'Ubuntu', icon: FaUbuntu, color: 'text-orange-600' },
      { name: 'PostgreSQL', icon: SiPostgresql, color: 'text-blue-700' },
      { name: 'MongoDB', icon: SiMongodb, color: 'text-green-500' },
      { name: 'Docker', icon: FaDocker, color: 'text-blue-500' },
      { name: 'VS Code', icon: FaCode, color: 'text-blue-500' }
    ]
  },
  architecture: {
    title: { pt: 'Arquitetura', en: 'Architecture' },
    skills: [
      { name: 'SOLID', icon: FaShieldAlt, color: 'text-green-500' },
      { name: 'CQRS', icon: FaCogs, color: 'text-blue-400' },
      { name: 'Design Patterns', icon: FaLayerGroup, color: 'text-purple-500' },
      { name: 'Clean Architecture', icon: FaServer, color: 'text-cyan-500' },
      { name: 'Vertical Slice', icon: FaCode, color: 'text-orange-500' },
      { name: 'RESTful APIs', icon: FaGlobe, color: 'text-blue-600' }
    ]
  }
};