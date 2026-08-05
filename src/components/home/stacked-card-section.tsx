'use client';

import React, { useRef, useEffect, useLayoutEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { cn } from '@/core/lib/utils';
import { StackedCard } from '@/core/types';
import {
  Target, Heart, Shield, Zap, Flag, Eye, ArrowRight,
  Compass, PenTool, Rocket, Settings, TrendingUp,
  Cloud, Database, Monitor, Cpu, Network, Tv
} from 'lucide-react';
import { Button } from '@/components/ui';
import Link from 'next/link';

gsap.registerPlugin(ScrollTrigger);

const HEADER_HEIGHT = 100;



const IconMap: Record<string, React.ReactNode> = {
  Target: <Target className="w-6 h-6 lg:w-7 lg:h-7" />,
  Heart: <Heart className="w-6 h-6 lg:w-7 lg:h-7" />,
  Shield: <Shield className="w-6 h-6 lg:w-7 lg:h-7" />,
  Zap: <Zap className="w-6 h-6 lg:w-7 lg:h-7" />,
  Flag: <Flag className="w-6 h-6 lg:w-7 lg:h-7" />,
  Eye: <Eye className="w-6 h-6 lg:w-7 lg:h-7" />,
  Compass: <Compass className="w-6 h-6 lg:w-7 lg:h-7" />,
  PenTool: <PenTool className="w-6 h-6 lg:w-7 lg:h-7" />,
  Rocket: <Rocket className="w-6 h-6 lg:w-7 lg:h-7" />,
  Settings: <Settings className="w-6 h-6 lg:w-7 lg:h-7" />,
  TrendingUp: <TrendingUp className="w-6 h-6 lg:w-7 lg:h-7" />,
  Cloud: <Cloud className="w-6 h-6 lg:w-7 lg:h-7" />,
  Database: <Database className="w-6 h-6 lg:w-7 lg:h-7" />,
  Monitor: <Monitor className="w-6 h-6 lg:w-7 lg:h-7" />,
  Cpu: <Cpu className="w-6 h-6 lg:w-7 lg:h-7" />,
  Network: <Network className="w-6 h-6 lg:w-7 lg:h-7" />,
  Tv: <Tv className="w-6 h-6 lg:w-7 lg:h-7" />,
};

function CardContent({ card, index, total }: { card: StackedCard; index: number; total: number }) {
  return (
    <div className="flex flex-col md:flex-row w-full h-full items-stretch overflow-hidden p-4 sm:p-6 md:p-8 lg:p-10">
      {/* Content Side */}
      <div className="w-full md:w-[48%] flex flex-col justify-center items-start md:pr-6 lg:pr-8 relative z-10">
        {/* Icon */}
        <div className="mb-2 sm:mb-3 md:mb-4 p-2 sm:p-2.5 md:p-3 bg-brand-blue/5 rounded-xl sm:rounded-2xl text-brand-lime dark:bg-brand-lime/10 dark:text-brand-lime shrink-0">
          {IconMap[card.icon]}
        </div>

        {/* Title */}
        <h5 className="text-lg sm:text-2xl md:text-[28px] lg:text-[36px] font-bold font-sans text-foreground mb-1.5 sm:mb-2 md:mb-3 tracking-tight leading-[1.1] sm:leading-tight">
          {card.title}
        </h5>

        {/* Description */}
        <p className="text-xs sm:text-sm md:text-[14px] lg:text-[16px] text-muted-foreground leading-relaxed max-w-[480px] mb-3 sm:mb-4">
          {card.text}
        </p>

        {/* Features */}
        {card.features && card.features.length > 0 && (
          <div className="flex flex-col gap-2 mb-4 sm:mb-5 md:mb-6">
            {card.features.map((feature, idx) => (
              <div key={idx} className="flex items-center gap-2.5">
                <div className="w-1.5 h-1.5 rounded-full bg-brand-blue dark:bg-brand-lime shrink-0" />
                <span className="text-xs sm:text-sm text-foreground/90 font-medium leading-none">{feature}</span>
              </div>
            ))}
          </div>
        )}

        {/* Action Button */}
        <Button asChild className="btn-primary h-auto group px-3.5 sm:px-5 md:px-6 py-2 sm:py-2.5 text-xs sm:text-sm font-semibold rounded-full shrink-0">
          <Link href={card.link || "#contact-section"}>
            {card.button}
            <ArrowRight className="ml-1.5 sm:ml-2 w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </Button>
      </div>

      {/* Image Side (Inset) */}
      <div className="w-full md:w-[52%] relative h-[140px] xs:h-[180px] sm:h-[240px] md:h-auto md:min-h-[220px] overflow-hidden mt-4 md:mt-0 rounded-[1rem] sm:rounded-[1.25rem] md:rounded-[1.5rem] lg:rounded-[2rem] shadow-sm shrink-0">
        <img
          loading="lazy"
          className="w-full h-full object-cover"
          src={card.img}
          alt={card.title}
        />
      </div>
    </div>
  );
}

interface StackedCardSectionProps {
  id: string;
  cards: StackedCard[];
  header: React.ReactNode;
}

export default function StackedCardSection({ id, cards, header }: StackedCardSectionProps) {
  const [isMobile, setIsMobile] = useState<boolean | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // Viewport detection
  useLayoutEffect(() => {
    const mql = window.matchMedia('(max-width:1023px)');
    const handleChange = () => setIsMobile(mql.matches);
    handleChange();
    mql.addEventListener('change', handleChange);
    return () => mql.removeEventListener('change', handleChange);
  }, []);

  // GSAP stacked card animation — desktop only
  useEffect(() => {
    if (isMobile === null || isMobile) return;
    if (!sectionRef.current) return;

    const container = sectionRef.current.querySelector('.stacked-container') as HTMLElement;
    if (!container) return;

    const cardEls = Array.from(container.querySelectorAll('.stacked-card')) as HTMLElement[];
    if (!cardEls.length) return;

    const cardHeight = 460; // Increased to 460px to prevent text and button cutoff
    const STACK_OFFSET = 24; // Stacking vertical gap
    const containerHeight = cardHeight + (cardEls.length - 1) * STACK_OFFSET + 80;

    container.style.height = `${containerHeight}px`;

    // Position all cards absolutely stacked
    cardEls.forEach((card, i) => {
      card.style.height = `${cardHeight}px`;
      card.style.position = 'absolute';
      card.style.top = '0';
      card.style.left = '0';
      card.style.width = '100%';
      card.style.zIndex = String(i + 1);
      card.style.transformOrigin = 'top center'; // Crucial for top edge alignment
      
      if (i > 0) {
        gsap.set(card, { y: containerHeight });
      } else {
        gsap.set(card, { y: 0 });
      }
    });

    // Set scroll distance (totalScroll) to 600px (instead of 1380px) to prevent extra whitespace under the footer
    const totalScroll = 600;

    const st = ScrollTrigger.create({
      trigger: container,
      start: `top ${HEADER_HEIGHT}px`,
      end: () => `+=${totalScroll}`,
      pin: true,
      pinSpacing: true,
      scrub: 0.5,
      snap: {
        snapTo: 1 / (cardEls.length - 1),
        duration: { min: 0.2, max: 0.5 },
        delay: 0.1,
        ease: "power1.inOut"
      },
      onUpdate: (self) => {
        const progress = self.progress;
        const currentIdx = Math.round(progress * (cardEls.length - 1));
        setActiveIndex(currentIdx);

        cardEls.forEach((card, i) => {
          // 1. Slide In Progress
          // For card i, it slides in when global progress goes from (i-1)/(N-1) to i/(N-1)
          const slideProgress = Math.max(0, Math.min(1, progress * (cardEls.length - 1) - (i - 1)));
          
          if (i > 0) {
            const targetY = i * STACK_OFFSET;
            const currentY = containerHeight - (containerHeight - targetY) * slideProgress;
            gsap.set(card, { y: currentY });
          }

          // 2. Stack (Dim & Blur) Progress
          // How many cards have been stacked ON TOP of this card i?
          const stackProgress = Math.max(0, progress * (cardEls.length - 1) - i);
          
          if (slideProgress > 0) { // Only dim/blur/scale if it's already on screen
            gsap.set(card, {
              transformOrigin: "50% 0%",
              scale: 1 - stackProgress * 0.025, // Staggered scale down for depth
              filter: `brightness(${1 - stackProgress * 0.1}) blur(${stackProgress * 1.5}px)`,
            });
          }
        });
      },
    });

    const handleResize = () => {
      st.refresh();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      st.kill(true);
      // Clean up inline styles
      container.style.height = '';
      cardEls.forEach((card) => {
        card.style.height = '';
        card.style.position = '';
        card.style.top = '';
        card.style.left = '';
        card.style.width = '';
        card.style.zIndex = '';
        card.style.transformOrigin = '';
        gsap.set(card, { clearProps: 'all' });
      });
    };
  }, [isMobile, cards.length]);

  return (
    <div className="py-8 sm:py-12 lg:py-16 transition-colors duration-500 relative overflow-visible" id={id}>
      {/* Ambient gradient mesh */}
      <div className="gradient-mesh-section">
        <div className="blob-a" />
        <div className="blob-b" />
        <div className="blob-c" />
      </div>
      <div className="dot-grid-overlay" />
      <div className="mx-auto max-w-[1248px] px-5 relative z-[1]">
        {/* Section Header */}
        {header}

        {/* Cards */}
        <div ref={sectionRef} className="w-full">
          {isMobile === null ? null : isMobile ? (
            /* Mobile/Tablet/Responsive/Fold: CSS Sticky Stack matching Marssys */
            <div className="flex flex-col gap-4 sm:gap-6 md:gap-8 w-full pb-12">
              {cards.map((card, i) => {
                const stickyTop = 64 + i * 24; // Ultra-compact tab offset step for screen-height safety
                return (
                  <div
                    key={card.title}
                    style={{
                      position: 'sticky',
                      top: `${stickyTop}px`,
                      zIndex: i + 10,
                    }}
                    className="w-full overflow-hidden rounded-3xl bg-card/90 backdrop-blur-md border border-border/60 shadow-md transition-all duration-300 hover:scale-[1.005] hover:border-brand-blue/40 active:scale-[0.995]"
                  >
                    <CardContent card={card} index={i} total={cards.length} />
                  </div>
                );
              })}
            </div>
          ) : (
            /* Desktop: GSAP Stacked Card Animation */
            <div className="stacked-container relative overflow-hidden rounded-3xl">
              {cards.map((card, i) => (
                <div
                  key={card.title}
                  className="stacked-card w-full overflow-hidden rounded-3xl bg-card border border-border/60 shadow-lg backdrop-blur-md"
                >
                  <CardContent card={card} index={i} total={cards.length} />
                </div>
              ))}
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
