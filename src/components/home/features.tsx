"use client";

import { useRef } from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGsap } from '@/core/hooks/use-gsap';
import { INDUSTRIES } from "@/core/constants";
import { Card, CardContent } from "@/components/ui";
import { cn } from "@/core/lib/utils";

gsap.registerPlugin(ScrollTrigger);

const FeatureCard = ({
  title,
  description,
  image,
  slug,
  className,
}: {
  title: string;
  description: string;
  image: string;
  slug: string;
  className?: string;
}) => (
  <Link href={`/industries/${slug}`} className={cn("feature-card block group", className)}>
    <Card
      className={cn(
        "relative rounded-[2rem] overflow-hidden border-border/10 bg-background p-0 transition-all duration-700 hover:border-brand-lime/50 hover:shadow-[0_20px_50px_rgba(100,200,50,0.08)] ring-0 shadow-sm h-full"
      )}
    >
      <CardContent className="p-8 lg:p-10 relative z-10 flex flex-col h-full justify-between">
        {/* Animated Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-brand-lime/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

        <div className="relative z-10 flex flex-col h-full justify-between">
          <div className="mb-12">
            <div className="w-12 h-1.5 bg-brand-lime mb-8 rounded-full"></div>
            <h5 className="text-2xl lg:text-3xl font-bold font-serif text-foreground mb-6 leading-tight tracking-tight">
              {title.split(' — ')[0]}
            </h5>
            <p className="text-muted-foreground text-lg leading-relaxed group-hover:text-foreground transition-colors">
              {description}
            </p>
          </div>

          <div className="relative h-48 lg:h-56 mt-4 rounded-2xl overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700">
            <img
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              src={image}
              alt={title}
            />
            {/* Subtle Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
          </div>
        </div>

        {/* Arrow indicator */}
        <div className="absolute top-8 right-8 w-9 h-9 rounded-full border border-border flex items-center justify-center text-muted-foreground group-hover:border-brand-lime group-hover:text-brand-lime transition-all duration-500">
          <ArrowUpRight className="w-4 h-4" />
        </div>
      </CardContent>
    </Card>
  </Link>
);

export default function Features() {
  const containerRef = useRef<HTMLElement>(null);
  const educationIndustry = INDUSTRIES.find((ind) => ind.slug === "education");
  const otherIndustries = INDUSTRIES.filter((ind) => ind.slug !== "education");
  const orderedIndustries = educationIndustry ? [educationIndustry, ...otherIndustries] : INDUSTRIES;

  useGsap(() => {
    if (!containerRef.current) return;

    // Header fadeInUp on scroll
    gsap.fromTo(
      containerRef.current.querySelector('.impact-header'),
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: containerRef.current.querySelector('.impact-header'),
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        },
      }
    );

    // Feature Cards fadeInUp stagger on scroll
    const cards = containerRef.current.querySelectorAll('.feature-card');
    cards.forEach((card, i) => {
      gsap.fromTo(
        card,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          delay: (i % 3) * 0.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 88%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    });
  }, containerRef);

  return (
    <section ref={containerRef} className="py-16 lg:py-24 transition-colors duration-500 relative overflow-visible" id="features">
      {/* Dot field texture */}
      <div className="dot-grid-overlay" />
      <div className="mx-auto max-w-[1248px] px-5 relative z-10">
        <div className="impact-header flex flex-col lg:flex-row lg:items-end justify-between mb-24 gap-12">
          <div className="max-w-[800px]">
            <span className="text-brand-lime font-bold tracking-[0.3em] uppercase text-xs mb-6 block">Our Impact</span>
            <h3 className="text-4xl lg:text-7xl font-bold font-serif text-foreground leading-[1.1] tracking-tight">
              Industries We Drive <br />
              With <span className="text-brand-lime">Innovation</span>
            </h3>
          </div>
          <div className="lg:pb-4 flex flex-col gap-6 border-l border-border/10 pl-8">
            <p className="text-xl text-muted-foreground max-w-[380px] leading-relaxed">
              We support diverse industries with tailored IT and cybersecurity solutions that address regulatory frameworks, operational demands, and digital transformation goals.
            </p>
            <Link
              href="/industries"
              className="inline-flex items-center gap-2 text-brand-lime font-bold uppercase tracking-widest text-xs group w-fit"
            >
              <span className="border-b border-brand-lime/0 group-hover:border-brand-lime/100 pb-1 transition-all">
                View All Industries
              </span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {orderedIndustries.map((industry, index) => (
            <FeatureCard
              key={industry.slug}
              title={industry.title}
              description={industry.description}
              image={industry.image}
              slug={industry.slug}
              className={cn(
                index === 0 && "lg:col-span-2"
              )}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

