export interface ServiceItem {
  id: string;
  icon: string;
  title: { pt: string; en: string };
  description: { pt: string; en: string };
}

export const getServices = (): ServiceItem[] => [
  {
    id: 'design',
    icon: 'Design', 
    title: {
      pt: 'Design & Prototipação',
      en: 'Design & Prototyping'
    },
    description: {
      pt: 'Crio interfaces intuitivas que convertem visitantes em clientes, com protótipos interativos que validamos juntos.',
      en: 'I create intuitive interfaces that convert visitors into customers, with interactive prototypes we validate together.'
    }
  },
  {
    id: 'web',
    icon: 'Web', 
    title: {
      pt: 'Aplicações Web',
      en: 'Web Applications'
    },
    description: {
      pt: 'Desenvolvo sistemas web completos, rápidos e seguros que escalam conforme sua empresa cresce.',
      en: 'I develop complete, fast and secure web systems that scale as your business grows.'
    }
  },
  {
    id: 'mobile',
    icon: 'Mobile',
    title: {
      pt: 'Apps Mobile',
      en: 'Mobile Apps'
    },
    description: {
      pt: 'Construo aplicativos nativos para iOS e Android que oferecem experiência premium aos seus usuários.',
      en: 'I build native apps for iOS and Android that deliver premium experience to your users.'
    }
  }
];