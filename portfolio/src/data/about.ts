// data/about.ts
export interface AboutText {
  title: string;
  paragraph1: string;
  paragraph2: string;
}

export const aboutTexts = {
  pt: {
    title: 'Transformando Ideias em Realidade Digital',
    paragraph1: `Olá! Sou Domingos Nascimento, também conhecido como Adyllsxn, Desenvolvedor Fullstack especializado em transformar problemas complexos em soluções digitais escaláveis. Minha missão é criar sistemas que não apenas funcionam, mas se destacam pela performance excepcional e experiência de usuário memorável.`,
    paragraph2: `Minha expertise está em desenvolver aplicações de ponta a ponta, desde a concepção de backends otimizados até a construção de interfaces modernas. Foco em entregar valor real através de código bem estruturado, APIs eficientes e integrações seguras que efetivamente impulsionam resultados de negócio.`
  },
  en: {
    title: 'Transforming Ideas into Digital Reality',
    paragraph1: `Hello! I'm Domingos Nascimento, also known as Adyllsxn, a Fullstack Developer specialized in transforming complex problems into scalable digital solutions. My mission is to create systems that not only work, but stand out through exceptional performance and memorable user experience.`,
    paragraph2: `My expertise lies in developing end-to-end applications, from designing optimized backends to building modern interfaces. I focus on delivering real value through well-structured code, efficient APIs and secure integrations that effectively drive business results.`
  }
} as const;