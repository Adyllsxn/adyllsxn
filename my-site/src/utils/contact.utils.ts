export interface ContactData {
  title: { pt: string; en: string };
  subtitle: { pt: string; en: string };
  form: {
    name: { pt: string; en: string };
    email: { pt: string; en: string };
    message: { pt: string; en: string };
    submit: { pt: string; en: string };
    sending: { pt: string; en: string };
  };
  alerts: {
    success: { pt: string; en: string };
    error: { pt: string; en: string };
  };
  contactInfo: {
    email: string;
    whatsapp: string;
    location: { pt: string; en: string };
  };
}

export const getContactData = (): ContactData => ({
  title: {
    pt: 'Contato',
    en: 'Contact'
  },
  subtitle: {
    pt: 'Vamos conversar sobre seu projeto',
    en: "Let's talk about your project"
  },
  form: {
    name: {
      pt: 'Nome',
      en: 'Name'
    },
    email: {
      pt: 'Email',
      en: 'Email'
    },
    message: {
      pt: 'Mensagem',
      en: 'Message'
    },
    submit: {
      pt: 'Enviar mensagem',
      en: 'Send message'
    },
    sending: {
      pt: 'Enviando...',
      en: 'Sending...'
    }
  },
  alerts: {
    success: {
      pt: 'Mensagem enviada com sucesso! Entrarei em contato em breve.',
      en: 'Message sent successfully! I will contact you soon.'
    },
    error: {
      pt: 'Erro ao enviar mensagem. Tente novamente.',
      en: 'Error sending message. Please try again.'
    }
  },
  contactInfo: {
    email: 'domingos.nxscimento@gmail.com',
    whatsapp: '+244935751955',
    location: {
      pt: 'Luanda, Angola',
      en: 'Luanda, Angola'
    }
  }
});