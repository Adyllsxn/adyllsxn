'use client';
import { useState, useEffect } from 'react';

interface FormData {
  name: string;
  email: string;
  message: string;
}

export const useContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  useEffect(() => {
    if (submitStatus === 'success') {
      const timer = setTimeout(() => {
        setSubmitStatus('idle');
      }, 6000);
      return () => clearTimeout(timer);
    }
  }, [submitStatus]);

  const formatName = (value: string): string => {
    const cleaned = value.replace(/[^a-zA-ZÀ-ÿ\s]/g, '');
    const truncated = cleaned.slice(0, 50);
    
    return truncated
      .toLowerCase()
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ')
      .trim();
  };

  const formatEmail = (value: string): string => {
    return value.toLowerCase().trim();
  };

  const handleChange = (name: string, value: string) => {
    let formattedValue = value;
    
    if (name === 'name') {
      formattedValue = formatName(value);
    } else if (name === 'email') {
      formattedValue = formatEmail(value);
    }
    
    setFormData(prev => ({
      ...prev,
      [name]: formattedValue
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    
    try {
      const formattedData = {
        ...formData,
        name: formatName(formData.name),
        email: formatEmail(formData.email)
      };

      console.log('📤 Enviando para FormSubmit...', formattedData);

      // FormSubmit - SIMPLES E FUNCIONAL
      const response = await fetch('https://formsubmit.co/ajax/domingos.nxscimento@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formattedData.name,
          email: formattedData.email,
          message: formattedData.message,
          _subject: `Portfolio Contact from ${formattedData.name}`,
          _captcha: 'false'
        })
      });

      const data = await response.json();

      if (data.success) {
        console.log('✅ Email enviado com sucesso!');
        setSubmitStatus('success');
        
        // Reset form
        setFormData({
          name: '',
          email: '',
          message: ''
        });
      } else {
        throw new Error('FormSubmit returned error');
      }

    } catch (error) {
      console.error('❌ Erro ao enviar:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setFormData({
      name: '',
      email: '',
      message: ''
    });
    setSubmitStatus('idle');
  };

  return {
    formData,
    isSubmitting,
    submitStatus,
    handleChange,
    handleSubmit,
    resetForm
  };
};