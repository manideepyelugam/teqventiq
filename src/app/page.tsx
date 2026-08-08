import { 
  Hero, 
  FivePillarsSection,
  Features, 
  PartnersSection,
  AboutSection 
} from "@/components/home";

export default function Home() {
  return (
    <div className="bg-background transition-colors duration-500 min-h-full">
      <Hero />
      <FivePillarsSection />
      <Features />
      <PartnersSection />
      <AboutSection />
    </div>
  );
}
