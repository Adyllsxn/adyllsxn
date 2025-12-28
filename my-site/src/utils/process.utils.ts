export interface ProcessStep {
  id: string;
  number: number;
  title: { pt: string; en: string };
  description: { pt: string; en: string };
  icon: string;
}

export const getProcessSteps = (): ProcessStep[] => [
  {
    id: 'discovery',
    number: 1,
    title: {
      pt: 'Descoberta & Planejamento',
      en: 'Discovery & Planning'
    },
    description: {
      pt: 'Entendo suas necessidades, objetivos e público-alvo para criar uma estratégia clara.',
      en: 'I understand your needs, goals and target audience to create a clear strategy.'
    },
    icon: 'Discovery'
  },
  {
    id: 'design',
    number: 2,
    title: {
      pt: 'Design & Prototipação',
      en: 'Design & Prototyping'
    },
    description: {
      pt: 'Crio interfaces visuais e protótipos interativos para validação antes do desenvolvimento.',
      en: 'I create visual interfaces and interactive prototypes for validation before development.'
    },
    icon: 'Design'
  },
  {
    id: 'development',
    number: 3,
    title: {
      pt: 'Desenvolvimento',
      en: 'Development'
    },
    description: {
      pt: 'Transformo o design em código funcional, desenvolvendo frontend, backend e integrações.',
      en: 'I transform design into functional code, developing frontend, backend and integrations.'
    },
    icon: 'Development'
  },
  {
    id: 'delivery',
    number: 4,
    title: {
      pt: 'Entrega & Suporte',
      en: 'Delivery & Support'
    },
    description: {
      pt: 'Implanto o projeto, realizo testes e ofereço suporte contínuo para garantir o sucesso.',
      en: 'I deploy the project, conduct testing and offer ongoing support to ensure success.'
    },
    icon: 'Delivery'
  }
];