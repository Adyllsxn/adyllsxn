// utils/supabase/projects.utils.ts
import { supabase } from '@/lib/supabase';

// Interface que reflete o banco de dados REAL
interface ProjectFromDB {
  id: string;
  title_pt: string;
  title_en: string;
  description_pt: string;
  description_en: string;
  image_url: string;
  technologies: string[];
  features_pt: string[];
  features_en: string[];
  github_url?: string;
  live_url?: string;
  figma_url?: string;
  behance_url?: string;
  status: 'published' | 'draft';
  created_at: string;
  category: {
    id: string;
    name: string;
    slug: string;
  };
}

// Interface compatível com seu código atual
export interface Project {
  id: string;
  title: { pt: string; en: string };
  category: 'web' | 'mobile' | 'designer';
  description: { pt: string; en: string };
  image: string;
  technologies: string[];
  features: { pt: string[]; en: string[] };
  links: {
    live?: string;
    github?: string;
    behance?: string;
    figma?: string;
  };
  status: 'published' | 'draft';
}

// Converter do formato DB para formato do seu app
const transformProject = (project: ProjectFromDB): Project => ({
  id: project.id,
  title: {
    pt: project.title_pt,
    en: project.title_en
  },
  category: project.category.slug as 'web' | 'mobile' | 'designer',
  description: {
    pt: project.description_pt,
    en: project.description_en
  },
  image: project.image_url,
  technologies: project.technologies || [],
  features: {
    pt: project.features_pt || [],
    en: project.features_en || []
  },
  links: {
    live: project.live_url,
    github: project.github_url,
    behance: project.behance_url,
    figma: project.figma_url
  },
  status: project.status
});

// Buscar projetos do Supabase
export const getProjects = async (): Promise<Project[]> => {
  try {
    console.log('🔄 Buscando projetos do Supabase...');
    
    const { data, error } = await supabase
      .from('projects')
      .select(`
        *,
        category:categories (id, name, slug)
      `)
      .eq('status', 'published')
      .order('created_at', { ascending: false });

    if (error) {
      console.error('❌ Erro ao buscar projetos:', error);
      return [];
    }

    console.log(`✅ ${data?.length || 0} projetos encontrados`);
    return (data as ProjectFromDB[]).map(transformProject);
  } catch (error) {
    console.error('❌ Erro de conexão com Supabase:', error);
    return [];
  }
};

// Buscar categorias com contagem dinâmica
export const getCategories = async (language: 'pt' | 'en') => {
  try {
    console.log('🔄 Buscando categorias do Supabase...');
    
    // Buscar categorias
    const { data: categoriesData, error: categoriesError } = await supabase
      .from('categories')
      .select('id, name, slug');

    if (categoriesError) {
      console.error('❌ Erro ao buscar categorias:', categoriesError);
      throw categoriesError;
    }

    // Buscar projetos publicados
    const { data: projectsData, error: projectsError } = await supabase
      .from('projects')
      .select('category_id, status')
      .eq('status', 'published');

    if (projectsError) {
      console.error('❌ Erro ao contar projetos:', projectsError);
      throw projectsError;
    }

    // Calcular contagens
    const categoryCounts: Record<string, number> = {};
    projectsData?.forEach(item => {
      if (item.category_id) {
        categoryCounts[item.category_id] = (categoryCounts[item.category_id] || 0) + 1;
      }
    });

    // Contar total de projetos
    const totalCount = projectsData?.length || 0;

    // Transformar para formato esperado
    const categories = categoriesData?.map(cat => ({
      key: cat.slug,
      label: cat.name,
      count: categoryCounts[cat.id] || 0
    })) || [];

    // Adicionar opção "Todos"
    const result = [
      { key: 'all', label: language === 'pt' ? 'Todos' : 'All', count: totalCount },
      ...categories
    ];

    console.log('✅ Categorias carregadas:', result);
    return result;
    
  } catch (error) {
    console.error('❌ Erro ao buscar categorias:', error);
    // Fallback
    return [
      { key: 'all', label: language === 'pt' ? 'Todos' : 'All', count: 0 },
      { key: 'web', label: 'Web', count: 0 },
      { key: 'mobile', label: 'Mobile', count: 0 },
      { key: 'designer', label: language === 'pt' ? 'Designer' : 'Designer', count: 0 }
    ];
  }
};