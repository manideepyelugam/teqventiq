"use client";

import { useRef } from "react";
import Link from "next/link";
import { FIVE_PILLARS, ONE_PROMISE } from "@/core/constants";
import { Card, CardContent } from "@/components/ui";
import { Shield, Network, Cpu, Server, Headphones, ArrowRight, CheckCircle2 } from "lucide-react";
import { useGsap } from "@/core/hooks/use-gsap";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/core/lib/utils";

gsap.registerPlugin(ScrollTrigger);

const getPillarIcon = (id: string) => {
  switch (id) {
    case "networking":
      return Network;
    case "cybersecurity":
      return Shield;
    case "data-ai":
      return Cpu;
    case "datacentre":
      return Server;
    case "managed-support":
      return Headphones;
    default:
      return Network;
  }
};

export default function FivePillarsSection() {
  const containerRef = useRef<HTMLElement>(null);

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

    // Cards animation
    const cards = containerRef.current.querySelectorAll(".pillar-card");
    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          delay: index * 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: card,
            start: "top 88%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

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
      className="py-16 lg:py-24 transition-colors duration-500 relative overflow-hidden"
    >
      <div className="dot-grid-overlay" />
      <div className="mx-auto max-w-[1248px] px-5 relative z-10">
        
        {/* Header */}
        <div className="pillars-header text-center mb-16 lg:mb-20">
          <span className="text-brand-lime font-bold tracking-[0.3em] uppercase text-xs mb-4 block">
            What We Do
          </span>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold font-serif text-foreground tracking-tight mb-6">
            Five Pillars. <span className="text-brand-lime">One Standard.</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-[720px] mx-auto leading-relaxed">
            Every engagement — however small or complex — is built on the same five capabilities and delivered against the same standard: <strong className="text-foreground">reliable technology, honestly advised.</strong>
          </p>
        </div>

        {/* Five Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {FIVE_PILLARS.map((pillar, idx) => {
            const IconComponent = getPillarIcon(pillar.id);
            return (
              <Link
                key={pillar.id}
                href={`/services/${pillar.id}`}
                className={cn(
                  "pillar-card block group",
                  idx === 4 && "md:col-span-2 lg:col-span-1"
                )}
              >
                <Card className="h-full rounded-[2rem] border-border/20 bg-card/60 backdrop-blur-md p-8 transition-all duration-500 hover:border-brand-lime/50 hover:shadow-[0_20px_40px_rgba(190,250,79,0.06)] hover:-translate-y-1.5 group">
                  <CardContent className="p-0 flex flex-col justify-between h-full">
                    <div>
                      <div className="flex items-center justify-between mb-6">
                        <div className="w-12 h-12 rounded-xl bg-brand-lime/10 flex items-center justify-center text-brand-lime group-hover:bg-brand-lime group-hover:text-black transition-colors duration-500">
                          <IconComponent className="w-6 h-6" />
                        </div>
                        <span className="text-xs font-mono text-muted-foreground font-bold tracking-widest">
                          0{idx + 1}
                        </span>
                      </div>

                      <h3 className="text-xl font-bold font-serif text-foreground mb-3 group-hover:text-brand-lime transition-colors">
                        {pillar.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                        {pillar.description}
                      </p>
                    </div>

                    <div>
                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 pt-4 border-t border-border/30 mb-4">
                        {pillar.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-3 py-1 rounded-full text-[11px] font-medium bg-muted text-muted-foreground group-hover:bg-brand-lime/10 group-hover:text-foreground transition-colors"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-lime group-hover:translate-x-1 transition-transform">
                        <span>Explore Capability</span>
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>

        {/* One Promise Block */}
        <div className="one-promise-block rounded-[2.5rem] bg-gradient-to-br from-card via-card/90 to-background border border-brand-lime/30 p-8 sm:p-12 lg:p-16 relative overflow-hidden shadow-2xl">
          <div className="absolute -right-20 -top-20 w-80 h-80 bg-brand-lime/10 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10 grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-lime/10 border border-brand-lime/30 text-brand-lime text-xs font-bold uppercase tracking-widest mb-6">
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
