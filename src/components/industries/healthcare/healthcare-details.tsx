import React from 'react';
import { HEALTHCARE_CONTENT } from '@/core/constants';
import { Check, Cpu, ShieldAlert, Eye, Cloud, Wrench, ShieldCheck, HelpCircle } from 'lucide-react';

const sectionIcons: Record<string, any> = {
  mobility: ShieldCheck,
  infra: Cpu,
  cyber: ShieldAlert,
  soc: Eye,
  cloud: Cloud,
  managed: Wrench,
};

export default function HealthcareDetails() {
  const { details } = HEALTHCARE_CONTENT;

  return (
    <section className="py-24 lg:py-32 bg-transparent transition-colors duration-500">
      <div className="mx-auto max-w-[1248px] px-5 flex flex-col gap-28">
        {details.map((section, idx) => {
          const IconComponent = sectionIcons[section.id] || HelpCircle;
          const isEven = idx % 2 === 0;

          return (
            <div key={section.id} className="grid lg:grid-cols-2 gap-16 items-start reveal">
              {/* Text Area */}
              <div className={isEven ? 'lg:order-1' : 'lg:order-2'}>
                <div className="inline-flex items-center gap-3 bg-background/55 backdrop-blur border border-border px-4 py-2 rounded-xl mb-6">
                  <IconComponent className="w-4 h-4 text-brand-lime" />
                  <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-foreground">
                    {section.title.split(' & ')[0]}
                  </span>
                </div>
                <h3 className="text-2xl lg:text-4xl font-bold font-serif text-foreground mb-6 leading-tight">
                  {section.title}
                </h3>
                <p className="text-base text-muted-foreground leading-relaxed mb-6">
                  {section.description}
                </p>

                {/* Footer Highlight */}
                {section.footer && (
                  <div className="border-l-2 border-brand-lime pl-4 py-1 mt-6 text-sm text-foreground/80 font-serif italic">
                    {section.footer}
                  </div>
                )}
              </div>

              {/* Checklist & Stats Area */}
              <div className={`flex flex-col  gap-6 w-full ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                {/* Checklist Card */}
                <div className="bg-background rounded-[2rem] p-8 lg:p-10 border border-border hover:border-brand-lime/30 transition-all duration-300 group">
                  <h4 className="text-sm font-bold text-foreground mb-6 uppercase tracking-wider">
                    Key Scope &amp; Focus Areas
                  </h4>
                  <div className="flex flex-col gap-4">
                    {section.items.map((item, i) => (
                      <div key={i} className="flex gap-4 items-start">
                        <div className="w-7 h-7 rounded-lg bg-brand-lime/10 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-brand-lime/20 transition-colors">
                          <Check className="w-3.5 h-3.5 text-brand-lime" />
                        </div>
                        <span className="text-sm text-foreground/80 leading-snug">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Stats underneath if exists */}
                {section.stats && (
                  <div className="grid grid-cols-3 gap-4 w-full text-center mt-2">
                    {section.stats.map((stat, i) => (
                      <div key={i} className="flex flex-col gap-2 p-5 rounded-2xl bg-background border border-border hover:border-brand-lime/30 transition-all duration-300">
                        <span className="text-xl lg:text-2xl font-bold text-brand-lime font-serif leading-none">{stat.value}</span>
                        <span className="text-[9px] font-bold uppercase tracking-wider text-muted-foreground leading-tight">{stat.label}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
