import React from 'react';
import { HEALTHCARE_CONTENT } from '@/core/constants';
import { GraduationCap, HeartPulse, Building2, Landmark, Store, HelpCircle } from 'lucide-react';

const categoryIcons: Record<string, any> = {
  "Healthcare": HeartPulse,
  "Education": GraduationCap,
  "Government & Public Sector": Landmark,
  "Real Estate": Building2,
  "FoodTech": Store,
  "Retail & eCommerce": Store,
};

export default function HealthcareClients() {
  const { trackRecordTitle, trackRecordIntro, trackRecord, trackRecordFooter } = HEALTHCARE_CONTENT;

  if (!trackRecord) return null;

  return (
    <section className="py-24 bg-transparent transition-colors duration-500">
      <div className="mx-auto max-w-[1248px] px-5">
        
        <div className="mb-20 max-w-[800px] reveal">
          <span className="text-brand-lime font-bold tracking-widest uppercase text-xs mb-6 block">Track Record</span>
          <h2 className="text-3xl lg:text-5xl font-bold font-serif text-foreground leading-tight mb-8">
            {trackRecordTitle}
          </h2>
          <p className="text-lg text-muted-foreground">
            {trackRecordIntro}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 reveal">
          {trackRecord?.map((group, idx) => {
            const IconComponent = categoryIcons[group.category] || HelpCircle;

            return (
              <div
                key={idx}
                className="p-8 rounded-[2rem] border border-border bg-background hover:border-brand-lime/30 transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  <div className="w-9 h-9 rounded-xl bg-brand-lime/10 flex items-center justify-center mb-8 group-hover:bg-brand-lime/20 transition-colors">
                    <IconComponent className="w-5 h-5 text-brand-lime" />
                  </div>
                  <h3 className="font-bold text-foreground text-sm tracking-wide uppercase mb-6 group-hover:text-brand-lime ">{group.category}</h3>
                  <ul className="flex flex-col gap-3">
                    {group.clients.map((client, i) => (
                      <li key={i} className="text-sm text-muted-foreground leading-snug flex gap-2.5 items-start">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-lime mt-1.5 flex-shrink-0"></span>
                        {client}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        <p className="text-sm text-muted-foreground text-center border-t border-border/40 pt-8 italic font-serif">
          {trackRecordFooter}
        </p>

      </div>
    </section>
  );
}
