export interface FooterData {
  copyright: { pt: string; en: string };
  subtitle: { pt: string; en: string };
}

export const getFooterData = (): FooterData => ({
  copyright: {
    pt: `© ${new Date().getFullYear()} adyllsxn • Domingos Nascimento`,
    en: `© ${new Date().getFullYear()} adyllsxn • Domingos Nascimento`
  },
  subtitle: {
    pt: 'Desenvolvedor & Designer',
    en: 'Developer & Designer'
  }
});