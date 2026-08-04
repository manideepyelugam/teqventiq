import React from 'react';
import { HEALTHCARE_CONTENT } from '@/core/constants';
import * as Icons from 'lucide-react';
import { Card, CardContent } from '@/components/ui';

export default function HealthcareOfferings() {
  const { offeringsTitle, offeringsIntro, offerings, offeringsFooter } = HEALTHCARE_CONTENT;

  return (
    <section className="py-24 lg:py-32 bg-transparent transition-colors duration-500">
      <div className="mx-auto max-w-[1248px] px-5">
        
        <div className="mb-20 max-w-[800px] reveal">
          <span className="text-brand-lime font-bold tracking-widest uppercase text-xs mb-6 block">Capabilities</span>
          <h2 className="text-3xl lg:text-5xl font-bold font-serif text-foreground leading-tight mb-8">
            {offeringsTitle}
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            {offeringsIntro}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20 reveal">
          {offerings.map((offering, i) => {
            const IconComponent = (Icons as any)[offering.icon] || Icons.HelpCircle;

            return (
              <Card
                key={i}
                className="rounded-[2rem] border border-border bg-background p-8 hover:border-brand-lime/30 transition-all duration-300 group flex flex-col justify-between"
              >
                <CardContent className="p-0">
                  <div className="w-12 h-12 rounded-xl bg-brand-lime/10 flex items-center justify-center mb-8 group-hover:bg-brand-lime/20 transition-colors">
                    <IconComponent className="w-6 h-6 text-brand-lime" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-4 leading-snug group-hover:text-brand-lime transition-colors">
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
          <div className="bg-gradient-to-r from-brand-lime/15 to-muted rounded-[2rem] p-10 border border-border/80 shadow-inner text-center">
            <p className="text-lg lg:text-xl text-foreground font-serif leading-relaxed italic">
              &ldquo;{offeringsFooter}&rdquo;
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
