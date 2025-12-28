export interface AboutData {
  title: { pt: string; en: string };
  subtitle: { pt: string; en: string };
  paragraphs: {
    pt: string[];
    en: string[];
  };
  cta: {
    cv: { pt: string; en: string };
    whatsapp: string;
    email: string;
  };
  keySkills: {
    category: string;
    skills: string[];
  }[];
  contact: {
    phone: string;
    email: string;
  };
}

export const getAboutData = (): AboutData => ({
  title: {
    pt: 'Sobre Mim',
    en: 'About Me'
  },
  subtitle: {
    pt: 'Desenvolvedor Full Stack & Mobile',
    en: 'Full Stack & Mobile Developer'
  },
  paragraphs: {
    pt: [
      'Desenvolvo soluções completas para web e mobile, focando em performance, experiência do usuário e resultados de negócio.',
      'Minha abordagem combina design intuitivo com código eficiente, criando produtos que não apenas funcionam bem, mas também convertem e escalam.',
      'Trabalho com tecnologias modernas como React, React Native e ASP.NET para entregar projetos robustos e de alta qualidade.'
    ],
    en: [
      'I develop complete solutions for web and mobile, focusing on performance, user experience, and business results.',
      'My approach combines intuitive design with efficient code, creating products that not only work well but also convert and scale.',
      'I work with modern technologies like React, React Native, and ASP.NET to deliver robust, high-quality projects.'
    ]
  },
  cta: {
    cv: {
      pt: 'Baixar CV',
      en: 'Download CV'
    },
    whatsapp: 'WhatsApp',
    email: 'Email'
  },
  keySkills: [
    {
      category: 'Frontend',
      skills: ['React', 'TypeScript', 'Tailwind CSS']
    },
    {
      category: 'Mobile', 
      skills: ['React Native', 'iOS/Android', 'Expo']
    },
    {
      category: 'Backend',
      skills: ['ASP.NET Core', 'APIs REST', 'PostgreSQL', 'EF Core']
    },
    {
      category: 'Tools',
      skills: ['Git', 'Figma', 'Docker', 'CI/CD']
    }
  ],
  contact: {
    phone: '+244935751955',
    email: 'domingos.nxscimento@gmail.com'
  }
});

// Funções de contato
export const handleDownloadCV = (language: 'pt' | 'en') => {
  const cvFile = language === 'pt' ? 'cv-pt.pdf' : 'cv-en.pdf';
  const cvPath = `/cv/${cvFile}`;
  
  const link = document.createElement('a');
  link.href = cvPath;
  link.download = cvFile;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

export const handleWhatsApp = (language: 'pt' | 'en', phone: string) => {
  const message = language === 'pt' 
    ? 'Olá! Gostaria de conversar sobre um projeto.'
    : 'Hello! I would like to discuss a project.';
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  window.open(url, '_blank');
};

export const handleEmail = (email: string) => {
  window.location.href = `mailto:${email}`;
};