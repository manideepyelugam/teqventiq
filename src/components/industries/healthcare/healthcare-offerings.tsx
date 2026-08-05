import React from 'react';
import { HEALTHCARE_CONTENT } from '@/core/constants';
import * as Icons from 'lucide-react';
import { Card, CardContent } from '@/components/ui';

export default function HealthcareOfferings() {
  const { offeringsTitle, offeringsIntro, offerings, offeringsFooter } = HEALTHCARE_CONTENT;

  return (
    <section className="py-24 lg:py-32 bg-transparent transition-colors duration-500">
      <div className="mx-auto max-w-[1248px] px-5">
        
        <div className="mb-14 max-w-[800px] reveal">
          <span className="text-brand-blue font-bold tracking-wider uppercase text-xs mb-3 block">Capabilities</span>
          <h2 className="text-3xl lg:text-5xl font-bold font-serif text-foreground leading-tight mb-6 tracking-tight">
            {offeringsTitle}
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
            {offeringsIntro}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-16 reveal">
          {offerings.map((offering, i) => {
            const IconComponent = (Icons as any)[offering.icon] || Icons.HelpCircle;

            return (
              <Card
                key={i}
                className="rounded-2xl border border-border/60 bg-card/80 backdrop-blur-md p-6 sm:p-8 hover:border-brand-blue/40 transition-all duration-300 shadow-sm hover:shadow-md group flex flex-col justify-between"
              >
                <CardContent className="p-0">
                  <div className="w-12 h-12 rounded-xl bg-brand-blue/10 flex items-center justify-center mb-6 group-hover:bg-brand-blue/20 transition-colors">
                    <IconComponent className="w-6 h-6 text-brand-blue" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3 leading-snug group-hover:text-brand-blue transition-colors">
                    {offering.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {offering.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Accountability Footer Quote */}
        <div className="reveal">
          <div className="bg-card border border-border/60 rounded-2xl p-8 sm:p-10 shadow-sm text-center backdrop-blur-md">
            <p className="text-base sm:text-lg text-foreground font-serif leading-relaxed italic">
              &ldquo;{offeringsFooter}&rdquo;
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
