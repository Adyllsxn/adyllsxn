// utils/hero.utils.ts
export interface HeroData {
  name: string;
  title: {
    pt: string;
    en: string;
  };
  photoUrl: string;
  photoAlt: string;
  description: {
    pt: string;
    en: string;
  };
  cta: {
    primary: {
      pt: string;
      en: string;
    };
    secondary: {
      pt: string;
      en: string;
    };
  };
}

export const heroData: HeroData = {
  name: 'Domingos Nascimento',
  
  title: {
    pt: 'DESENVOLVEDOR & DESIGNER',
    en: 'DEVELOPER & DESIGNER'
  },
  
  photoUrl: 'https://github.com/Adyllsxn.png',
  photoAlt: 'Domingos Nascimento',
  
  description: {
    pt: 'Desenvolvo soluções web e mobile focadas em resultados, com designs que convertem e códigos que performam.',
    en: 'I develop web and mobile solutions focused on results, with converting designs and performant code.'
  },
  
  cta: {
    primary: {
      pt: 'Vamos conversar',
      en: 'Let\'s talk' 
    },
    secondary: {
      pt: 'Ver resultados',
      en: 'See results'
    }
  }
};

export const getHeroData = (language: 'pt' | 'en') => ({
  ...heroData,
  title: heroData.title[language],
  description: heroData.description[language],
  cta: {
    primary: heroData.cta.primary[language],
    secondary: heroData.cta.secondary[language]
  }
});