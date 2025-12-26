// utils/bars.utils.ts
export interface MenuItem {
  name: string;
  href: string;
  icon: string;
  size: number;
}

export interface SocialLink {
  name: string;
  href: string;
  icon: string;
  size: number;
}

export interface LanguageOption {
  value: string;
  label: string;
}

// 🔴 ORDEM CORRETA: Hero → Services → Projects → Process → About → Contact
export const getMenuItems = (t: (key: string) => string): MenuItem[] => [
  { name: t('home'), href: '#home', icon: 'Home', size: 24 },
  { name: t('services'), href: '#services', icon: 'Services', size: 24 },
  { name: t('projects'), href: '#projects', icon: 'Projects', size: 24 }, 
  { name: t('process'), href: '#process', icon: 'Process', size: 24 },   
  { name: t('about'), href: '#about', icon: 'About', size: 24 },        
  { name: t('contact'), href: '#contact', icon: 'Contact', size: 24 },
];

// Mobile - mesma ordem
export const getMobileMenuItems = (t: (key: string) => string): MenuItem[] => [
  { name: t('home'), href: '#home', icon: 'Home', size: 20 },
  { name: t('services'), href: '#services', icon: 'Services', size: 20 },
  { name: t('projects'), href: '#projects', icon: 'Projects', size: 20 },
  { name: t('process'), href: '#process', icon: 'Process', size: 20 },
  { name: t('about'), href: '#about', icon: 'About', size: 20 },
  { name: t('contact'), href: '#contact', icon: 'Contact', size: 20 },
];

// Social links - ORDENADO POR RELEVÂNCIA PROFISSIONAL
export const socialLinks: SocialLink[] = [
  { name: 'GitHub', href: 'https://github.com/Adyllsxn', icon: 'GitHub', size: 16 },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/adyllsxn/', icon: 'LinkedIn', size: 16 },
  { name: 'Instagram', href: 'https://www.instagram.com/_adyllsxn/', icon: 'Instagram', size: 16 },
  { name: 'Facebook', href: 'https://www.facebook.com/adyllsxn', icon: 'Facebook', size: 16 },
];

// Mobile - mesma ordem
export const mobileSocialLinks: SocialLink[] = [
  { name: 'GitHub', href: 'https://github.com/Adyllsxn', icon: 'GitHub', size: 18 },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/adyllsxn/', icon: 'LinkedIn', size: 18 },
  { name: 'Instagram', href: 'https://www.instagram.com/_adyllsxn/', icon: 'Instagram', size: 18 },
  { name: 'Facebook', href: 'https://www.facebook.com/adyllsxn', icon: 'Facebook', size: 18 },
];

// Language options
export const getLanguageOptions = (t: (key: string) => string): LanguageOption[] => [
  { value: 'pt', label: t('portuguese') },
  { value: 'en', label: t('english') },
];