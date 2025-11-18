// hooks/useCurrencyConverter.ts
import { useState, useEffect } from 'react';

export interface ExchangeRates {
  USD: number;
  EUR: number;
  BRL: number;
  KZT: number; // Kwanza
}

export interface PriceTier {
  baseCurrency: 'USD' | 'EUR' | 'BRL' | 'KZT';
  baseAmount: number;
}

export const useCurrencyConverter = (basePrice: PriceTier) => {
  const [rates, setRates] = useState<ExchangeRates>({
    USD: 1,
    EUR: 0.85,
    BRL: 5.2,
    KZT: 830 // 1 USD = 830 Kz (taxa aproximada)
  });

  const [loading, setLoading] = useState(true);

  // Em produção, você pode integrar com uma API de câmbio
  useEffect(() => {
    const fetchRates = async () => {
      try {
        // Para demo, vamos usar taxas fixas
        // Em produção, use: await fetch('https://api.exchangerate-api.com/v4/latest/USD')
        setRates({
          USD: 1,
          EUR: 0.93, // Taxa atualizada
          BRL: 5.45,  // Taxa atualizada  
          KZT: 850    // Taxa atualizada
        });
        setLoading(false);
      } catch (error) {
        console.error('Erro ao buscar taxas:', error);
        setLoading(false);
      }
    };

    fetchRates();
  }, []);

  const convertPrice = (amount: number, from: string, to: string): number => {
    if (from === to) return amount;
    
    const rateFrom = rates[from as keyof ExchangeRates] || 1;
    const rateTo = rates[to as keyof ExchangeRates] || 1;
    
    // Converter para USD primeiro, depois para a moeda destino
    const amountInUSD = amount / rateFrom;
    return Math.round(amountInUSD * rateTo);
  };

  const getPrices = (baseAmount: number, baseCurrency: string) => {
    const currencies = ['KZT', 'USD', 'EUR', 'BRL'] as const;
    const prices: Record<string, string> = {};

    currencies.forEach(currency => {
      const converted = convertPrice(baseAmount, baseCurrency, currency);
      
      switch (currency) {
        case 'KZT':
          prices.kz = `${converted.toLocaleString('pt-AO')} Kz`;
          break;
        case 'USD':
          prices.usd = `$${converted}`;
          break;
        case 'EUR':
          prices.eur = `€${converted}`;
          break;
        case 'BRL':
          prices.brl = `R$ ${converted}`;
          break;
      }
    });

    return prices;
  };

  return {
    rates,
    loading,
    convertPrice,
    getPrices
  };
};