export interface ServiceItem {
  id: string;
  name: string;
  tagline: string;
  description: string;
  details: string[];
  turnaround: string;
  startingPrice: string;
  priceUnit: string;
  recommendedFor: string;
  badge?: string;
  iconName: 'Sparkles' | 'Shirt' | 'Flame' | 'BedDouble' | 'Zap' | 'Building2';
}

export interface PricingTier {
  id: string;
  name: string;
  rate: string;
  numericRate: number;
  unit: string;
  description: string;
  features: string[];
  popular?: boolean;
}

export interface StepItem {
  step: string;
  title: string;
  description: string;
  detail: string;
}

export interface BenefitItem {
  title: string;
  description: string;
  iconName: 'Clock' | 'ShieldCheck' | 'Receipt' | 'Calendar' | 'CheckCircle2' | 'Headphones';
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  location: string;
  quote: string;
  rating: number;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface BookingFormData {
  fullName: string;
  phone: string;
  email: string;
  address: string;
  pickupDate: string;
  pickupTime: string;
  serviceType: string;
  estimatedWeight: string;
  notes: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}
