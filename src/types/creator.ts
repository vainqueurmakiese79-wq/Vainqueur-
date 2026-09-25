export type NavTab = 
  | 'home' 
  | 'strategies' 
  | 'ideas' 
  | 'creation' 
  | 'platforms' 
  | 'mindset' 
  | 'tips' 
  | 'challenge' 
  | 'ai' 
  | 'progress' 
  | 'resources' 
  | 'about';

export type IdeaCategory = 
  | 'Motivation'
  | 'Éducation'
  | 'Humour'
  | 'Storytelling'
  | 'Business'
  | 'Lifestyle'
  | 'Actualité'
  | 'Sport'
  | 'Technologie';

export interface ContentIdea {
  id: string;
  category: IdeaCategory;
  title: string;
  concept: string;
  hook: string;
  structure: string;
  cta: string;
  difficulty: 'Facile' | 'Intermédiaire' | 'Avancé';
  estimatedDuration: string;
  isSaved?: boolean;
}

export interface StrategyModule {
  id: string;
  title: string;
  subtitle: string;
  summary: string;
  readTime: string;
  iconName: string;
  keyTakeaway: string;
  steps: {
    number: string;
    title: string;
    description: string;
    tip: string;
  }[];
  checklist: string[];
}

export interface VideoCreationGuide {
  id: string;
  title: string;
  shortDesc: string;
  principle: string;
  bestPractices: string[];
  mistakesToAvoid: string[];
  actionFormula: string;
}

export interface SocialPlatformData {
  id: string;
  name: string;
  tagline: string;
  bestFormats: string;
  recommendedFrequency: string;
  retentionRules: string[];
  communityRules: string[];
  analyticsKeys: string[];
  realisticTruth: string;
}

export interface MindsetLesson {
  id: string;
  title: string;
  coreDilemma: string;
  reframing: string;
  actionableHabit: string;
  quote: string;
}

export interface QuickTip {
  id: string;
  category: 'hook' | 'title' | 'thumbnail' | 'interaction' | 'structure' | 'errors' | 'series';
  categoryLabel: string;
  title: string;
  formula: string;
  beforeExample: string;
  afterExample: string;
  whyItWorks: string;
}

export interface ChallengeDay {
  day: number;
  phase: string;
  title: string;
  mission: string;
  objective: string;
  timeEstimate: string;
  actionChecklist: string[];
  isCompleted?: boolean;
  completedAt?: string;
}

export interface PersonalGoal {
  id: string;
  text: string;
  completed: boolean;
  targetDate?: string;
  createdAt: string;
}

export interface CreatedContentLog {
  id: string;
  title: string;
  platform: 'TikTok' | 'Instagram' | 'YouTube' | 'Facebook';
  date: string;
  notes?: string;
}

export interface ResourceItem {
  id: string;
  category: 'guide' | 'checklist' | 'script' | 'structure' | 'advice';
  categoryLabel: string;
  title: string;
  description: string;
  content: string;
  templateSnippet?: string;
  downloadLabel?: string;
}

export interface AiGeneratedOutput {
  ideas: {
    title: string;
    concept: string;
    hook: string;
    structure: string;
    cta: string;
  }[];
  hooks: string[];
  titles: string[];
  shortScript?: {
    title: string;
    hook: string;
    body: string;
    twist: string;
    cta: string;
  };
  seriesIdea?: {
    name: string;
    pitch: string;
    episodes: string[];
  };
  advice: string;
}
