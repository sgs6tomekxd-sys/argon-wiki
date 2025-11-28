
export interface Rank {
  id: string;
  name: string;
  color: string;
  borderColor?: string;
  shadowColor?: string;
  price?: string;
  features: string[];
  icon: string;
  kitImage?: string;
}

export interface Command {
  command: string;
  description: string;
  category: 'Ogólne' | 'Teleportacja' | 'Ekonomia' | 'Gildie' | 'Inne' | 'Rangi' | 'VIP' | 'MVP' | 'PRO';
  permission?: string;
}

export interface Mechanic {
  id: string;
  title: string;
  description: string;
  details: string[];
  imagePlaceholder: string;
}

export interface Dungeon {
  name: string;
  difficulty: 'Łatwy' | 'Średni' | 'Trudny';
  color: string;
  description: string;
  rewards: string[];
  requirement: string;
}