export interface WhatsAppData {
  phone: string;
  messages: {
    pt: string;
    en: string;
  };
}

export const getWhatsAppData = (): WhatsAppData => ({
  phone: '+244935751955',
  messages: {
    pt: 'Olá! Gostaria de conversar sobre um projeto.',
    en: 'Hello! I would like to discuss a project.'
  }
});