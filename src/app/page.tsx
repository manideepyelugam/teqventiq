import { 
  Hero, 
  Features, 
  AboutSection, 
  PartnersSection,
  ClientsSection,
  FivePillarsSection
} from "@/components/home";

export default function Home() {
  return (
    <div className="bg-muted transition-colors duration-500 min-h-full">
      <Hero />
      <ClientsSection />
      <FivePillarsSection />
      <Features />
      <PartnersSection />
      <AboutSection />
    </div>
  );
}
