import { 
  Hero, 
  Features, 
  AboutSection, 
  StackedCardSection,
  PartnersSection,
  ClientsSection
} from "@/components/home";
import { SERVICES } from "@/core/constants";

export default function Home() {
  const serviceCards = SERVICES.map((item) => ({
    title: item.title,
    text: item.description,
    button: 'Learn More',
    img: item.image,
    icon: item.icon,
    features: item.features.slice(0, 4),
    link: `/services/${item.slug}`
  }));

  return (
    <div className="bg-muted transition-colors duration-500 min-h-full">
      <Hero />
      <ClientsSection />
      <Features />
      <PartnersSection />
      <AboutSection />

      {/* Core Services — Stacked Card Flip */}
      <StackedCardSection
        id="core-services"
        cards={serviceCards}
        header={
          <div key="core-services-header" className="mb-12 flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <div className="max-w-[700px]">
              <span className="text-brand-lime font-bold tracking-widest uppercase text-xs mb-3 sm:mb-4 block">Our Services</span>
              <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold font-serif text-foreground leading-[1.1] tracking-tight">
                Future-Proof <br />
                <span className="text-muted-foreground">IT Ecosystems</span>
              </h2>
            </div>
            <p className="text-base sm:text-lg text-muted-foreground max-w-[500px] leading-relaxed">
              We design, build, and manage complex technology environments that empower modern enterprises to scale with confidence.
            </p>
          </div>
        }
      />
    </div>
  );
}
