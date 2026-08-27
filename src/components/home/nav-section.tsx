'use client';

import React, { useEffect, useState, useRef } from 'react';
import { cn } from '@/core/lib/utils';
import { SOLUTIONS_ECOSYSTEM_ITEMS } from '@/core/constants';

const TOP_OFFSET = 120;

export default function NavSection() {
  const [activeSection, setActiveSection] = useState('cybersecurity');
  const sidebarRef = useRef<HTMLDivElement>(null);
  const sidebarWrapperRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const flexRowRef = useRef<HTMLDivElement>(null);
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  const items = SOLUTIONS_ECOSYSTEM_ITEMS;

  // ── Active section tracker ─────────────────────────────────────
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-30% 0px -50% 0px',
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) setActiveSection(entry.target.id);
      });
    }, observerOptions);

    Object.values(sectionRefs.current).forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  // ── JS sticky sidebar ──────────────────────────────────────────
  // CSS position:sticky breaks when overflow-x:clip is set on <html>
  // (Chromium treats body as the scroll root in that case).
  // We replicate sticky with position:fixed + measured offsets.
  useEffect(() => {
    const handleSticky = () => {
      if (window.innerWidth < 1024) return; // desktop only

      const wrapper   = sidebarWrapperRef.current;
      const sidebar   = sidebarRef.current;
      const container = containerRef.current;
      const flexRow   = flexRowRef.current;
      if (!wrapper || !sidebar || !container || !flexRow) return;

      // Use the flex row rect for trigger — avoids overlapping the heading
      const flexRowRect   = flexRow.getBoundingClientRect();
      const containerRect = container.getBoundingClientRect();
      const wrapperRect   = wrapper.getBoundingClientRect();
      const sidebarH      = sidebar.offsetHeight;

      if (flexRowRect.top > TOP_OFFSET) {
        // Flex row hasn't reached threshold yet → normal flow
        sidebar.style.cssText = '';
      } else if (containerRect.bottom > sidebarH + TOP_OFFSET) {
        // In sticky zone → fix in place
        sidebar.style.cssText = `
          position: fixed;
          top: ${TOP_OFFSET}px;
          left: ${wrapperRect.left}px;
          width: ${wrapperRect.width}px;
          z-index: 30;
        `;
      } else {
        // Past section bottom → pin to bottom
        sidebar.style.cssText = `
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          z-index: 30;
        `;
      }
    };

    window.addEventListener('scroll', handleSticky, { passive: true });
    window.addEventListener('resize', handleSticky);

    // Run once after paint to capture initial positions
    const raf = requestAnimationFrame(handleSticky);

    return () => {
      window.removeEventListener('scroll', handleSticky);
      window.removeEventListener('resize', handleSticky);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section className="py-16 lg:py-24 overflow-visible relative transition-colors duration-500" id="nav-section">
      {/* Dot field texture */}
      <div className="dot-grid-overlay" />
      <div className="mx-auto max-w-[1248px] px-5 relative z-10" ref={containerRef}>
        <div className="mb-24 max-w-[800px]">
          <span className="text-brand-blue font-bold tracking-widest uppercase text-xs mb-6 block">End-to-End Solutions</span>
          <h2 className="text-4xl lg:text-7xl font-bold font-serif text-foreground leading-tight tracking-tight">
            Comprehensive <br />
            <span className="text-muted-foreground">Technology Ecosystems</span>
          </h2>
          <p className="text-xl text-muted-foreground mt-8 leading-relaxed max-w-[600px]">
            We bridge the gap between complex infrastructure and seamless operation with expert consulting and precision deployment.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-20 items-start" ref={flexRowRef}>

          {/* ── Sidebar wrapper (stays in flex flow as placeholder) ── */}
          <div
            ref={sidebarWrapperRef}
            className="hidden lg:block lg:w-[35%] relative"
          >
            {/* Inner div gets JS sticky styles applied */}
            <div ref={sidebarRef}>
              <nav className="flex flex-col gap-1 pr-8 relative">
                {/* Vertical progress line */}
                <div className="absolute left-0 top-0 w-[2px] h-full bg-border/30 -ml-[2px]" />

                {items.map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      const el = document.getElementById(item.id);
                      if (el) {
                        const top =
                          el.getBoundingClientRect().top +
                          window.scrollY -
                          TOP_OFFSET;
                        window.scrollTo({ top, behavior: 'smooth' });
                      }
                    }}
                    className={cn(
                      'pl-8 py-3 text-[11px] font-extrabold uppercase tracking-[0.25em] transition-all relative border-l-2 -ml-[2px] whitespace-normal block',
                      activeSection === item.id
                        ? 'text-brand-blue border-brand-blue'
                        : 'text-muted-foreground border-transparent hover:text-foreground hover:border-border'
                    )}
                  >
                    {item.title}
                  </a>
                ))}
              </nav>
            </div>
          </div>

          {/* ── Content column ── */}
          <div className="lg:w-3/4 flex flex-col gap-16 lg:gap-48">
            {items.map((item) => (
              <div
                key={item.id}
                id={item.id}
                ref={(el) => { sectionRefs.current[item.id] = el; }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20 items-center scroll-mt-[120px]"
              >
                <div className={cn(
                  'relative group transition-all duration-700',
                  item.reverse ? 'lg:order-last' : ''
                )}>
                  <div className="relative rounded-2xl sm:rounded-[40px] overflow-hidden shadow-2xl border border-border/50 bg-muted/30 aspect-[4/3] group-hover:shadow-brand-blue/10 transition-all duration-700">
                    <img
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                      src={item.img}
                      alt={item.title}
                    />
                  </div>
                  <div className="absolute -inset-2 sm:-inset-4 bg-brand-blue/5 rounded-3xl sm:rounded-[48px] -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                </div>

                <div className="flex flex-col gap-5 sm:gap-8">
                  <div>
                    <h5 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-serif text-foreground mb-3 sm:mb-4 leading-tight">
                      {item.title}
                    </h5>
                    <p className="text-brand-blue font-bold tracking-widest uppercase text-xs mb-4 sm:mb-6 px-3 py-1 bg-brand-blue/5 w-fit rounded-lg">
                      {item.subtitle}
                    </p>
                    <p className="text-base sm:text-lg text-muted-foreground leading-relaxed font-normal">
                      {item.description}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 gap-2.5 sm:gap-3">
                    {item.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-3 sm:gap-4 group/item">
                        <div className="w-1.5 h-1.5 rounded-full bg-brand-blue group-hover/item:scale-150 transition-transform duration-300 shrink-0" />
                        <p className="text-foreground/90 font-bold text-xs sm:text-sm tracking-tight">{feature}</p>
                      </div>
                    ))}
                  </div>

                  <div className="pt-3 md:pt-6 border-t border-border/10">
                    <a href="#contact-section" className="group text-brand-blue font-bold flex items-center gap-2 text-xs sm:text-sm uppercase tracking-widest transition-all">
                      <span className="border-b border-brand-blue/0 group-hover:border-brand-blue/100 pb-1">Get Technical Details</span>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-2">
                        <polyline points="9 18 15 12 9 6" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
