"use client";

import { useRef } from "react";
import { ONE_PROMISE, SERVICES } from "@/core/constants";
import { CheckCircle2 } from "lucide-react";
import { useGsap } from "@/core/hooks/use-gsap";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import StackedCardSection from "./stacked-card-section";

gsap.registerPlugin(ScrollTrigger);

export default function FivePillarsSection() {
  const containerRef = useRef<HTMLElement>(null);

  const serviceCards = SERVICES.map((item) => ({
    title: item.title,
    text: item.description,
    button: 'Learn More',
    img: item.image,
    icon: item.icon,
    features: item.features.slice(0, 4),
    link: `/services/${item.slug}`
  }));

  useGsap(() => {
    if (!containerRef.current) return;

    // Header animation
    gsap.fromTo(
      containerRef.current.querySelector(".pillars-header"),
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current.querySelector(".pillars-header"),
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // One promise block animation
    gsap.fromTo(
      containerRef.current.querySelector(".one-promise-block"),
      { scale: 0.95, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current.querySelector(".one-promise-block"),
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, containerRef);

  return (
    <section
      ref={containerRef}
      id="five-pillars"
      className="py-12 lg:py-20 transition-colors duration-500 relative overflow-hidden"
    >
      <div className="mx-auto max-w-[1280px] px-5 relative z-10">
        
        {/* Stacked Cards replacing static grid */}
        <StackedCardSection
          id="five-pillars-stacked"
          cards={serviceCards}
          header={
            <div className="pillars-header text-center mb-12 lg:mb-16">
              <span className="text-brand-blue font-bold tracking-wider uppercase text-xs mb-3 block">
                What We Do
              </span>
              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold font-serif text-foreground tracking-tight mb-6">
                Five Pillars. <span className="bg-gradient-to-r from-brand-blue to-blue-600 bg-clip-text text-transparent">One Standard.</span>
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground max-w-[720px] mx-auto leading-relaxed">
                Every engagement — however small or complex — is built on the same five capabilities and delivered against the same standard: <strong className="text-foreground">reliable technology, honestly advised.</strong>
              </p>
            </div>
          }
        />

        {/* One Promise Block */}
        <div className="one-promise-block mt-12 rounded-3xl bg-card border border-border/60 p-8 sm:p-12 lg:p-14 relative overflow-hidden shadow-md backdrop-blur-md">
          <div className="absolute -right-20 -top-20 w-80 h-80 bg-brand-blue/5 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10 grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-blue/10 border border-brand-blue/30 text-brand-blue text-xs font-bold uppercase tracking-widest mb-6">
                <CheckCircle2 className="w-4 h-4" />
                {ONE_PROMISE.title}
              </span>
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif text-foreground leading-tight tracking-tight">
                {ONE_PROMISE.headline}
              </h3>
            </div>
            <div className="lg:col-span-7 border-t lg:border-t-0 lg:border-l border-border/40 pt-6 lg:pt-0 lg:pl-10 space-y-4">
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed whitespace-pre-line">
                {ONE_PROMISE.body}
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
