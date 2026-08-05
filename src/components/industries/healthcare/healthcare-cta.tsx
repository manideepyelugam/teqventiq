import React from 'react';
import { HEALTHCARE_CONTENT } from '@/core/constants';
import { Mail, MapPin, Globe, Phone, ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui';
import Link from 'next/link';

export default function HealthcareCTA() {
  const { cta } = HEALTHCARE_CONTENT;

  return (
    <section className="py-20 bg-transparent">
      <div className="mx-auto max-w-[1280px] px-5">
        
        <div className="bg-card border border-border/60 rounded-3xl p-8 sm:p-12 lg:p-16 relative overflow-hidden shadow-md backdrop-blur-md reveal">
          <div className="relative z-10 grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Contact Details */}
            <div className="lg:col-span-6">
              <span className="text-brand-blue font-bold tracking-wider uppercase text-xs mb-4 block">Get In Touch</span>
              <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6 font-serif tracking-tight">
                {cta.title}
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground mb-8 leading-relaxed">
                {cta.subtitle}
              </p>

              <div className="flex flex-col gap-6">
                <div className="flex gap-4 items-start">
                  <MapPin className="w-5 h-5 text-brand-blue mt-1 flex-shrink-0" />
                  <div>
                    <span className="text-xs font-bold text-muted-foreground uppercase block mb-1">Office Address</span>
                    <span className="text-sm font-medium text-foreground">{cta.address}</span>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <Globe className="w-5 h-5 text-brand-lime mt-1 flex-shrink-0" />
                  <div>
                    <span className="text-xs font-bold text-muted-foreground uppercase block mb-1">Website</span>
                    <a href={`https://${cta.website}`} target="_blank" rel="noreferrer" className="text-sm font-medium text-foreground hover:text-brand-lime transition-colors">
                      {cta.website}
                    </a>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <Phone className="w-5 h-5 text-brand-lime mt-1 flex-shrink-0" />
                  <div>
                    <span className="text-xs font-bold text-muted-foreground uppercase block mb-1">Call Us</span>
                    <a href={`tel:${cta.phone.replace(/\s+/g, '')}`} className="text-sm font-medium text-foreground hover:text-brand-lime transition-colors">
                      {cta.phone}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Steps / Process */}
            <div className="lg:col-span-6 flex flex-col gap-8">
              <h3 className="font-bold text-foreground text-sm tracking-wide uppercase mb-2">Our Engagement Process</h3>
              <div className="flex flex-col gap-8 relative pl-6 border-l border-border">
                {cta.steps.map((step, i) => (
                  <div key={i} className="relative">
                    {/* Bullet marker */}
                    <div className="absolute -left-[35px] top-1.5 w-4.5 h-4.5 rounded-full bg-brand-lime flex items-center justify-center border-4 border-muted">
                      <span className="w-1.5 h-1.5 rounded-full bg-background"></span>
                    </div>
                    <span className="text-[10px] font-bold text-brand-lime uppercase tracking-widest block mb-2">Step {step.number}</span>
                    <h4 className="text-lg font-bold text-foreground mb-2 leading-snug">{step.title}</h4>
                    <p className="text-xs text-muted-foreground leading-relaxed">{step.description}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <Button asChild className="btn-primary text-base h-auto px-10 py-5 rounded-full group">
                  <Link href="/contact">
                    Talk to our Healthcare Team
                    <ArrowUpRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </Link>
                </Button>
              </div>
            </div>

          </div>

          {/* Background decorative blobs */}
          <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-brand-lime opacity-10 rounded-full blur-3xl"></div>
          <div className="absolute -top-20 -left-20 w-60 h-60 bg-brand-blue opacity-5 rounded-full blur-3xl"></div>
        </div>

      </div>
    </section>
  );
}
