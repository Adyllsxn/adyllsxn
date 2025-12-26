// utils/iconHelpers.ts (opcional, pode ser no mesmo arquivo)
import { Icons } from './icons.utils';

export const getIconComponent = (iconName: string, size?: number) => {
  const IconComponent = Icons[iconName as keyof typeof Icons];
  
  if (!IconComponent) {
    console.warn(`Ícone "${iconName}" não encontrado`);
    return Icons.Home; // fallback
  }
  
  return IconComponent;
};