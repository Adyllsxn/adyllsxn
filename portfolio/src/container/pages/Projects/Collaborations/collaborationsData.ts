import comj from '@/assets/collaborations/condominio-osvaldo-mj.png';

export interface CollaborationData {
  id: number;
  title: string;
  description: string;
  role: string;
  image: string;
  demo?: string;
  view: string;
  status: 'completed' | 'in-progress' | 'planned';
}

export const collaborationsData: CollaborationData[] = [
  { 
    id: 1, 
    title: 'Condominio Osvaldo MJ', 
    description: 'House/Residence Application System', 
    role: 'Frontend',
    image: comj, 
    view: 'https://comj-frontend.onrender.com/',
    status: 'in-progress'
  },
];