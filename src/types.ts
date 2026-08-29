export type Currency = 'USD' | 'NGN' | 'EUR' | 'GBP';

export interface ServiceItem {
  id: string;
  title: string;
  category: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  turnaround: string;
  deliverables: string[];
  startingPriceUsd: number;
  startingPriceNgn: number;
  featured?: boolean;
}

export interface ProjectCaseStudy {
  id: string;
  title: string;
  client: string;
  category: string;
  image: string;
  summary: string;
  description: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  metrics: {
    label: string;
    value: string;
  }[];
  challenge: string;
  solution: string;
  features: string[];
}

export interface PricingPlan {
  id: string;
  name: string;
  tagline: string;
  priceUsd: number;
  priceNgn: number;
  isCustom?: boolean;
  featured?: boolean;
  badge?: string;
  features: string[];
  supportDuration: string;
  targetAudience: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  rating: number;
  comment: string;
  projectDelivered: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: 'timeline' | 'pricing' | 'process' | 'ownership' | 'technical';
}

export interface AutomationWorkflow {
  id: string;
  title: string;
  trigger: string;
  action: string;
  outcome: string;
  icon: string;
  badge: string;
  tech: string[];
}

export interface AiArchitectureResult {
  summary: string;
  recommendedStack: {
    name: string;
    category: string;
    reason: string;
  }[];
  suggestedArchitecture: string;
  keyFeatures: string[];
  estimatedTimeline: string;
  recommendedTier: string;
  estimatedBudgetRange: string;
  automatedWorkflows: {
    title: string;
    description: string;
    tools: string;
  }[];
  suggestedMilestones: {
    phase: string;
    duration: string;
    deliverable: string;
  }[];
  proTips: string[];
}

export interface LeadSubmissionResponse {
  success: boolean;
  refId: string;
  timestamp: string;
  leadSummary: {
    clientName: string;
    email: string;
    phone: string;
    services: string[];
    estimatedResponseTime: string;
    assignedEngineer: string;
  };
  whatsappUrl: string;
  mailtoUrl: string;
}
