'use client';

import React, { useRef, useEffect, useLayoutEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import { cn } from '@/core/lib/utils';
import { WHY_CHOOSE_US, MISSION_VISION } from '@/core/constants';
import { Target, Heart, Shield, Zap, Flag, Eye, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui';
import 'swiper/css';
import 'swiper/css/pagination';

gsap.registerPlugin(ScrollTrigger);

const HEADER_HEIGHT = 100;



interface SlideData {
  title: string;
  text: string;
  button: string;
  img: string;
  icon: string;
}

const IconMap: Record<string, React.ReactNode> = {
  Target: <Target className="w-8 h-8 sm:w-10 sm:h-10 text-brand-blue" />,
  Heart: <Heart className="w-8 h-8 sm:w-10 sm:h-10 text-brand-blue" />,
  Shield: <Shield className="w-8 h-8 sm:w-10 sm:h-10 text-brand-blue" />,
  Zap: <Zap className="w-8 h-8 sm:w-10 sm:h-10 text-brand-blue" />,
  Flag: <Flag className="w-8 h-8 sm:w-10 sm:h-10 text-brand-blue" />,
  Eye: <Eye className="w-8 h-8 sm:w-10 sm:h-10 text-brand-blue" />,
};

function SlideContent({ slide, active }: { slide: SlideData, active: boolean }) {
  return (
    <div className="flex flex-col lg:flex-row w-full h-full items-stretch overflow-hidden">
      <div className="w-full lg:w-1/2 relative h-[250px] sm:h-[350px] lg:h-full overflow-hidden">
        <img 
          loading="lazy" 
          className={cn(
            "w-full h-full object-cover transition-all duration-1000 ease-out",
            active ? "scale-100 opacity-100" : "scale-110 opacity-80"
          )} 
          src={slide.img} 
          alt={slide.title} 
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>
      </div>
      <div className="w-full lg:w-1/2 p-6 sm:p-8 lg:p-20 flex flex-col justify-center items-start bg-card relative z-10 transition-colors duration-500">
        <div className={cn(
          "mb-4 sm:mb-6 p-3 sm:p-4 bg-brand-blue/5 rounded-2xl transition-all duration-700 delay-100",
          active ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        )}>
          {IconMap[slide.icon]}
        </div>
        <h5 className={cn(
          "text-2xl sm:text-3xl lg:text-5xl font-bold font-serif text-foreground mb-4 sm:mb-6 tracking-tighter transition-all duration-700 delay-200",
          active ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        )}>
          {slide.title}
        </h5>
        <p className={cn(
          "text-sm sm:text-base lg:text-lg text-muted-foreground leading-relaxed mb-6 sm:mb-10 max-w-full lg:max-w-[480px] transition-all duration-700 delay-300",
          active ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        )}>
          {slide.text}
        </p>
        <div className={cn(
          "transition-all duration-700 delay-400 pb-6 sm:pb-8 lg:pb-0",
          active ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        )}>
          <Button asChild className="btn-primary h-auto group">
            <a href="#contact-section">
              {slide.button}
              <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default function SchnellSection() {
  const [isMobile, setIsMobile] = useState<boolean | null>(null);
  const slider1Ref = useRef<HTMLDivElement>(null);
  const slider2Ref = useRef<HTMLDivElement>(null);
  const [activeSlide1, setActiveSlide1] = useState(0);
  const [activeSlide2, setActiveSlide2] = useState(0);

  const slides1 = WHY_CHOOSE_US;
  const slides2 = MISSION_VISION;

  // Detect mobile/desktop viewport (useLayoutEffect to run before paint)
  useLayoutEffect(() => {
    const mql = window.matchMedia('(max-width:1023px)');
    const handleChange = () => setIsMobile(mql.matches);
    handleChange();
    mql.addEventListener('change', handleChange);
    return () => mql.removeEventListener('change', handleChange);
  }, []);

  // Clean up any residual GSAP pin-spacer artifacts from containers
  const cleanupGsapResiduals = (sectionEl: HTMLElement | null) => {
    if (!sectionEl) return;
    const container = sectionEl.querySelector('.slider-container') as HTMLElement;
    const wrap = sectionEl.querySelector('.content-wrapper') as HTMLElement;
    if (container) {
      container.style.height = '';
      container.style.transform = '';
      container.style.top = '';
      container.style.left = '';
      container.style.width = '';
      container.style.position = '';
    }
    if (wrap) {
      wrap.style.transform = '';
      wrap.style.height = '';
      const slides = Array.from(wrap.children) as HTMLElement[];
      slides.forEach((sl) => {
        sl.style.height = '';
      });
    }
  };

  // GSAP pinned slider — only for desktop
  useEffect(() => {
    // Wait for viewport detection
    if (isMobile === null) return;

    // On mobile: kill all GSAP ScrollTriggers in this component & clean residuals
    if (isMobile) {
      ScrollTrigger.getAll().forEach(st => {
        const trigger = st.trigger;
        if (!trigger) return;
        if (
          (slider1Ref.current && slider1Ref.current.contains(trigger)) ||
          (slider2Ref.current && slider2Ref.current.contains(trigger))
        ) {
          st.kill(true);
        }
      });
      cleanupGsapResiduals(slider1Ref.current);
      cleanupGsapResiduals(slider2Ref.current);
      return;
    }

    function createPinnedSlider(sectionEl: HTMLElement, setActive: (i: number) => void) {
      const container = sectionEl.querySelector('.slider-container') as HTMLElement;
      const wrap = sectionEl.querySelector('.content-wrapper') as HTMLElement;
      if (!wrap || !container) return;
      const slides = Array.from(wrap.children) as HTMLElement[];
      if (!slides.length) return;

      let slideHeight = window.innerHeight - HEADER_HEIGHT; 
      slides.forEach((sl) => { sl.style.height = `${slideHeight}px`; });
      container.style.height = `${slideHeight}px`;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: `top ${HEADER_HEIGHT}px`,
          end: () => `+=${slideHeight * (slides.length - 1)}`,
          pin: true,
          pinSpacing: true,
          scrub: 1,
          snap: {
            snapTo: 1 / (slides.length - 1),
            duration: { min: 0.2, max: 0.5 },
            delay: 0.1,
            ease: "power1.inOut"
          },
          onUpdate: (self) => {
            setActive(Math.round(self.progress * (slides.length - 1)));
          },
        }
      });

      tl.to(wrap, {
        y: -(slideHeight * (slides.length - 1)),
        ease: 'none',
      });

      const handleResize = () => {
        slideHeight = window.innerHeight - HEADER_HEIGHT;
        slides.forEach((sl) => { sl.style.height = `${slideHeight}px`; });
        container.style.height = `${slideHeight}px`;
        ScrollTrigger.refresh();
      };

      window.addEventListener('resize', handleResize);
      return () => {
        window.removeEventListener('resize', handleResize);
        tl.kill();
        if (tl.scrollTrigger) tl.scrollTrigger.kill();
      };
    }

    const cleanups: (() => void)[] = [];
    if (slider1Ref.current) {
      const c = createPinnedSlider(slider1Ref.current, setActiveSlide1);
      if (c) cleanups.push(c);
    }
    if (slider2Ref.current) {
      const c = createPinnedSlider(slider2Ref.current, setActiveSlide2);
      if (c) cleanups.push(c);
    }

    return () => cleanups.forEach(c => c());
  }, [isMobile]);

  const renderSlides = (slides: SlideData[], activeIdx: number) => {
    if (isMobile !== false) {
      return (
        <div className="relative overflow-hidden rounded-[24px] sm:rounded-[32px] bg-card shadow-xl border border-border/50">
          <Swiper
            modules={[Pagination, Autoplay]}
            pagination={{ 
              clickable: true
            }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            autoHeight={true}
            spaceBetween={30}
            className="pb-14"
          >
            {slides.map((slide, i) => (
              <SwiperSlide key={i}>
                <SlideContent slide={slide} active={true} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      );
    }

    return (
      <div className="slider-container relative overflow-hidden bg-card border border-border/50 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.08)] rounded-[48px]">
        <div className="content-wrapper flex flex-col">
          {slides.map((slide, i) => (
            <div key={i} className="w-full h-full flex-shrink-0 overflow-hidden relative">
              <SlideContent slide={slide} active={activeIdx === i} />
            </div>
          ))}
        </div>
        
        {/* Modern Pagination Dots */}
        <div className="absolute left-10 bottom-10 flex items-center gap-3 z-30">
          {slides.map((_, i) => (
            <div 
              key={i} 
              className={cn(
                "h-1.5 rounded-full transition-all duration-500",
                activeIdx === i ? "bg-brand-blue w-12" : "bg-foreground/20 w-4"
              )}
            />
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="bg-background py-8 sm:py-12 lg:py-16 transition-colors duration-500">
      <div className="mx-auto max-w-[1248px] px-5 flex flex-col gap-16 sm:gap-24 lg:gap-32">
        {/* Why Choose Us */}
        <section ref={slider1Ref} className="w-full">
          <div className="mb-12 flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <div className="max-w-[700px]">
              {/* <span className="text-brand-lime font-bold tracking-widest uppercase text-xs mb-3 sm:mb-4 block">The MindLabs Advantage</span> */}
              <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold font-serif text-foreground leading-[1.1] tracking-tight">
                Why Choose <br />
                <span className="text-muted-foreground">MindLabs?</span>
              </h2>
            </div>
            <p className="text-base sm:text-lg text-muted-foreground max-w-[400px] leading-relaxed">
              Strategic innovation and secure-by-design architecture that scale seamlessly.
            </p>
          </div>

          {renderSlides(slides1, activeSlide1)}
        </section>

        {/* Mission & Vision */}
        <section ref={slider2Ref} className="w-full">
          <div className="mb-12 flex flex-col lg:flex-row lg:items-end justify-between gap-6 sm:gap-8 text-left lg:text-right">
            <p className="text-base sm:text-lg text-muted-foreground max-w-[400px] leading-relaxed order-2 lg:order-1 text-left">
              Equipping enterprises with resilient frameworks for sustainable global growth.
            </p>
            <div className="max-w-[700px] order-1 lg:order-2">
              <span className="text-brand-blue font-bold tracking-widest uppercase text-xs mb-3 sm:mb-4 block">Our Purpose</span>
              <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold font-serif text-foreground leading-[1.1] tracking-tight">
                Our Mission <br />
                <span className="text-muted-foreground">& Vision</span>
              </h2>
            </div>
          </div>
          {renderSlides(slides2, activeSlide2)}
        </section>
      </div>
    </div>
  );
}
