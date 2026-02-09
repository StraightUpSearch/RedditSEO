export interface ServicePackage {
  name: string;
  slug: string;
  hook: string;
  priceOneTime: number;
  priceMonthly?: number;
  idealClient: string;
  deliverables: string[];
  executionTime: string;
  reportingFormat: string;
  riskLevel: string;
  upsells: { name: string; price: number }[];
}

export interface AlaCarteItem {
  name: string;
  description: string;
  pricePerUnit: number;
  unit: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  title: string;
  company: string;
}

export interface ProcessStep {
  number: number;
  title: string;
  description: string;
}
