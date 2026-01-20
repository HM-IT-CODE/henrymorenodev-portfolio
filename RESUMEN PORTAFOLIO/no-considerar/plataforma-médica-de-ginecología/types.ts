
export type View = 'Perfil' | 'Recursos' | 'Medical Tips' | 'Herramienta' | 'Contacto';

export interface Resource {
  title: string;
  category: string;
  type: 'PDF' | 'PowerPoint';
  fileUrl: string;
  embedUrl?: string;
}

export interface MedicalTip {
  title: string;
  content: string;
  category: string;
  imageUrl?: string;
}
