import React from 'react';
import { HEALTHCARE_CONTENT } from '@/core/constants';
import { Network, ShieldCheck, Cpu, Laptop, Users, Zap, HelpCircle } from 'lucide-react';

const categoryIcons: Record<string, any> = {
  "Cybersecurity": ShieldCheck,
  "Infrastructure, Cloud & Data Center": Cpu,
  "Networking": Network,
  "Healthcare Mobility & End-User Computing": Laptop,
  "Collaboration & Audio-Visual": Users,
  "AI, Automation & Physical Security": Zap,
};

export default function HealthcareEcosystem() {
  const { ecosystemTitle, ecosystemIntro, ecosystem } = HEALTHCARE_CONTENT;

  if (!ecosystem) return null;

  return (
    <section className="py-24 bg-transparent transition-colors duration-500">
      <div className="mx-auto max-w-[1248px] px-5">
        
        <div className="mb-14 max-w-[800px] reveal">
          <span className="text-brand-blue font-bold tracking-wider uppercase text-xs mb-3 block">Ecosystem</span>
          <h2 className="text-3xl lg:text-5xl font-bold font-serif text-foreground leading-tight mb-6 tracking-tight">
            {ecosystemTitle}
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
            {ecosystemIntro}
          </p>
        </div>

        <div className="flex flex-col gap-8 reveal">
          {ecosystem?.map((group, idx) => {
            const IconComponent = categoryIcons[group.category] || HelpCircle;

            return (
              <div
                key={idx}
                className="p-6 sm:p-8 rounded-2xl border border-border/60 bg-card/80 backdrop-blur-md shadow-sm hover:border-brand-blue/40 transition-all duration-300 group"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-9 h-9 rounded-xl bg-brand-blue/10 flex items-center justify-center group-hover:bg-brand-blue/20 transition-colors">
                    <IconComponent className="w-5 h-5 text-brand-blue" />
                  </div>
                  <h3 className="font-bold text-foreground text-base tracking-wide uppercase">{group.category}</h3>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3.5">
                  {group.brands.map((brand, i) => (
                    <div
                      key={i}
                      className="p-3.5 rounded-xl border border-border/50 bg-muted/40 text-center hover:bg-brand-blue/5 hover:border-brand-blue/40 transition-all"
                    >
                      <span className="text-sm font-semibold text-foreground/90">{brand}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
