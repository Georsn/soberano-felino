export interface Motivo {
  id: string;
  title: string;
  description: string;
  category: 'casa' | 'rotina' | 'psicologico' | 'todos';
  icon: string; // The name of the Lucide icon to render
  quote: string; // A funny, sarcastic sub-quote
  gravityIndex: number; // Humor scale of seriousness: 1 to 5 stars
  catTip: string; // "Cat's perspective" or tip to survive
}

export interface QuizQuestion {
  id: number;
  question: string;
  yesDescription: string;
  noDescription: string;
  catComment: string;
}

export interface Testimonial {
  id: string;
  author: string;
  role: string;
  content: string;
  avatarUrl?: string;
  rating: number; // out of 5
}
