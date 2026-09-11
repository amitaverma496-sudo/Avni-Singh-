export interface MemoryItem {
  id: string;
  category: 'food' | 'crafts' | 'curiosity' | 'vibe' | 'animals' | 'school';
  title: string;
  detail: string;
  quoteOrNote?: string;
  iconName: string;
}

export interface PersonalityTrait {
  id: string;
  trait: string;
  reason: string;
  subtitle: string;
  accentColor: string;
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export interface TimelineMoment {
  id: string;
  title: string;
  tag: string;
  description: string;
  note?: string;
}

export interface FloatingPhrase {
  id: string;
  text: string;
  context: string;
  speed: number;
  initialX?: number;
  initialY?: number;
}
