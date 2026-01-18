
export interface Project {
  id: string;
  title: string;
  description: string;
  features: string[];
  technologies: string[];
  imageUrl: string;
  resources: {
    label: string;
    url: string;
  }[];
}

export interface Service {
  title: string;
  description: string;
  icon: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}
