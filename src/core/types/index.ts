export interface ServiceValueProp {
  title: string;
  description: string;
}

export interface ServiceCapability {
  category: string;
  description: string;
  items?: string[];
}

export interface ServiceDeliveryStep {
  step: string;
  title?: string;
  description: string;
}

export interface Service {
  slug: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
  image: string;
  detailedContent?: string;
  footerText?: string;
  solutionsTitle?: string;
  solutions?: string[];
  servicesTitle?: string;
  services?: string[];
  // Expanded structure for rich rendering:
  heroHeadline?: string;
  heroSubhead?: string;
  openingContext?: string;
  valueProps?: ServiceValueProp[];
  capabilities?: ServiceCapability[];
  deliverySteps?: ServiceDeliveryStep[];
  outcomes?: string[];
  ctaText?: string;
  platformPartner?: string;
}

export interface IndustryRiskRow { driver: string; why: string; }
export interface IndustrySolutionRow { category: string; useCase: string; brands: string; }
export interface IndustryManagedServiceRow { service: string; priority: string; why: string; }
export interface IndustryInfraSection { title: string; items: string[]; }
export interface IndustryApproachPhase { phase: string; items: string[]; }

export interface IndustryChallenge {
  title: string;
  description: string;
}

export interface Industry {
  slug: string;
  title: string;
  description: string;
  image: string;
  icon?: string;
  // Card-level data
  details: string;
  features: string[];
  // Expanded fields from narrative specifications
  headline?: string;
  subhead?: string;
  context?: string;
  challenges?: IndustryChallenge[];
  howWeHelp?: string;
  outcomes?: string[];
  // Legacy detail page data
  tagline?: string;
  badges?: string[];
  aboutText?: string[];
  whatWeBring?: string[];
  whyNeedTitle?: string;
  whyNeedIntro?: string;
  riskTable?: IndustryRiskRow[];
  solutionsIntro?: string;
  solutionsTable?: IndustrySolutionRow[];
  infraIntro?: string;
  infraSections?: IndustryInfraSection[];
  managedSecurityIntro?: string;
  managedSecurityTable?: IndustryManagedServiceRow[];
  approachIntro?: string;
  approach?: IndustryApproachPhase[];
  suggestions?: string[];
  whyPartner?: string[];
  ctaText?: string;
}

export interface FivePillarItem {
  id: string;
  title: string;
  description: string;
  tags: string[];
}

export interface CategorizedPartner {
  category: string;
  partners: { id: number; name: string; domain: string; image?: string }[];
}

export interface Testimonial {
  id: number;
  quote: string;
  author: string;
  role: string;
  company: string;
  image: string;
}

export interface Partner {
  id: number;
  name: string;
  domain: string;
  logo?: string;
  image?: string;
}

export interface Client {
  name: string;
  domain: string;
  logo?: string;
}

export interface StackedCard {
  title: string;
  text: string;
  button: string;
  img: string;
  icon: string;
  features?: string[];
  link?: string;
}

export interface HealthcareOffering {
  title: string;
  description: string;
  icon: string;
}

export interface HealthcareDetailSection {
  id: string;
  title: string;
  description: string;
  items: string[];
  footer?: string;
  stats?: { value: string; label: string }[];
}

export interface HealthcareFocusArea {
  name: string;
  icon: string;
}

export interface HealthcareEcosystemGroup {
  category: string;
  brands: string[];
}

export interface HealthcareClientGroup {
  category: string;
  clients: string[];
}

export interface HealthcareContent {
  slug: string;
  title: string;
  subtitle: string;
  tagline: string;
  badges: string[];
  whoWeAre: {
    title: string;
    text: string[];
    stats: { value: string; label: string }[];
    mission: string;
    vision: string;
  };
  whatThisMeans: {
    title: string;
    description: string;
    icon: string;
  }[];
  offeringsTitle: string;
  offeringsIntro: string;
  offerings: HealthcareOffering[];
  offeringsFooter: string;
  details: HealthcareDetailSection[];
  focusTitle: string;
  focusIntro: string;
  focusAreas: HealthcareFocusArea[];
  focusFooter: string;
  whyChooseUs: {
    title: string;
    description: string;
  }[];
  ecosystemTitle?: string;
  ecosystemIntro?: string;
  ecosystem?: HealthcareEcosystemGroup[];
  trackRecordTitle?: string;
  trackRecordIntro?: string;
  trackRecord?: HealthcareClientGroup[];
  trackRecordFooter?: string;
  cta: {
    title: string;
    subtitle: string;
    company: string;
    address: string;
    website: string;
    phone: string;
    steps: { number: string; title: string; description: string }[];
  };
}

export interface SolutionsEcosystemItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  img: string;
  reverse: boolean;
}

export interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  topic: string;
  message: string;
  formType?: string;
  turnstileToken?: string;
}

export interface FormSubmissionResponse {
  success: boolean;
  message?: string;
  data?: {
    id?: string;
    status?: string;
    [key: string]: unknown;
  };
  error?: string;
}



