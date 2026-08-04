'use client';

import { useRef } from 'react';
import { gsap } from 'gsap';
import { useGsap } from '@/core/hooks/use-gsap';
import { Button } from '@/components/ui';
import { ArrowRight, ChevronDown } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

// ─── Industry Definitions ─────────────────────────────────────────────────────

const INDUSTRIES = [
  {
    id: 'education',
    label: 'Education',
    slug: 'education',
    color: '#34d399',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="20" height="20">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
        <path d="M6 12v5c3 3 9 3 12 0v-5" />
      </svg>
    ),
  },
  {
    id: 'healthcare',
    label: 'Healthcare',
    slug: 'healthcare',
    color: '#22d3ee',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="20" height="20">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    ),
  },
  {
    id: 'bfsi',
    label: 'BFSI',
    slug: 'bfsi',
    color: '#818cf8',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="20" height="20">
        <line x1="3" y1="22" x2="21" y2="22" />
        <line x1="6" y1="18" x2="6" y2="11" />
        <line x1="10" y1="18" x2="10" y2="11" />
        <line x1="14" y1="18" x2="14" y2="11" />
        <line x1="18" y1="18" x2="18" y2="11" />
        <polygon points="12 2 20 7 4 7" />
      </svg>
    ),
  },
  {
    id: 'oil-gas',
    label: 'Oil & Gas',
    slug: 'oil-gas',
    color: '#fb923c',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="20" height="20">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
  },
  {
    id: 'aviation',
    label: 'Aviation',
    slug: 'aviation-airlines',
    color: '#f472b6',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="20" height="20">
        <path d="M21 16v-2l-8-5V3.5a1.5 1.5 0 0 0-3 0V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" />
      </svg>
    ),
  },
];

// ─── Orbit Ring Config ────────────────────────────────────────────────────────

const RINGS = [
  { radius: 110, duration: 18, clockwise: true,  nodes: [1, 2] },      // inner: Healthcare, BFSI
  { radius: 220, duration: 32, clockwise: false, nodes: [0, 3, 4] },   // outer: Education, Oil&Gas, Aviation
];

// ─── Component ────────────────────────────────────────────────────────────────

export default function Hero() {
  const containerRef  = useRef<HTMLDivElement>(null);
  // One ref per planet node (indexed by INDUSTRIES order)
  const nodeRefs = useRef<(HTMLDivElement | null)[]>(Array(INDUSTRIES.length).fill(null));

  useGsap(() => {
    // ── Text entrance ─────────────────────────────────────────
    gsap.from('.hero-enter', {
      opacity: 0,
      y: 40,
      duration: 1,
      ease: 'power3.out',
      stagger: 0.14,
    });

    // ── Center logo: radial pulse ─────────────────────────────
    gsap.to('.solar-pulse', {
      scale: 2,
      opacity: 0,
      duration: 2.6,
      repeat: -1,
      ease: 'power2.out',
      transformOrigin: '50% 50%',
    });

    // ── Center: float entire center group together ──────────────
    gsap.to('.solar-center', {
      y: -10,
      duration: 3.6,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
    });

    // ── Planet node glows: staggered pulse ───────────────────
    gsap.to('.planet-glow', {
      opacity: 0.6,
      scale: 1.3,
      duration: 1.8,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
      stagger: { each: 0.4, from: 'random' },
    });

    // ── Orbit animation: direct x/y positioning per frame ─────
    RINGS.forEach((ring) => {
      const count = ring.nodes.length;
      const progress = { angle: 0 };

      // Set initial positions immediately (before first GSAP tick)
      ring.nodes.forEach((indIdx, posIdx) => {
        const startAngle = (posIdx / count) * Math.PI * 2;
        const x = Math.cos(startAngle) * ring.radius;
        const y = Math.sin(startAngle) * ring.radius;
        const el = nodeRefs.current[indIdx];
        if (el) gsap.set(el, { x, y });
      });

      // Continuously update positions as angle progresses
      gsap.to(progress, {
        angle: ring.clockwise ? Math.PI * 2 : -Math.PI * 2,
        duration: ring.duration,
        repeat: -1,
        ease: 'none',
        onUpdate() {
          ring.nodes.forEach((indIdx, posIdx) => {
            const offsetAngle = (posIdx / count) * Math.PI * 2;
            const totalAngle  = progress.angle + offsetAngle;
            const x = Math.cos(totalAngle) * ring.radius;
            const y = Math.sin(totalAngle) * ring.radius;
            const el = nodeRefs.current[indIdx];
            if (el) gsap.set(el, { x, y });
          });
        },
      });
    });
  }, containerRef);

  // Orbital container size (px) — the square that holds the orrery
  const ORBIT_SIZE = 520;
  const CENTER = ORBIT_SIZE / 2;

  return (
    <section
      id="hero-section"
      ref={containerRef}
      className="relative overflow-visible min-h-screen flex items-center pt-28 pb-16 lg:pt-28 lg:pb-16 text-foreground transition-colors duration-500"
    >
      {/* Ambient gradient mesh — multi-tone blobs for a vibrant backdrop */}
      <div className="gradient-mesh-hero">
        <div className="blob-1" />
        <div className="blob-2" />
        <div className="blob-3" />
        <div className="blob-4" />
      </div>
      {/* Subtle dot grid texture */}
      <div className="dot-grid-overlay" />

      <div className="w-full mx-auto max-w-[1248px] px-5 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-6 items-center">

          {/* ── LEFT: Text ─────────────────────────────────────── */}
          <div>
            <div className="hero-enter inline-flex items-center gap-3 bg-white/80 dark:bg-card/80 backdrop-blur-xl border border-brand-lime/20 px-5 py-2.5 rounded-full mb-10 shadow-md">
              <span className="w-2 h-2 bg-brand-lime rounded-full animate-pulse" />
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-lime">
                Savvtek Services
              </span>
            </div>

            <h1 className="hero-enter text-4xl lg:text-6xl  font-bold font-serif leading-[1.05] tracking-tight text-foreground mb-8">
              Where Technology <br />
              <span className="text-brand-lime">Meets Business Intelligence</span>
            </h1>

            <p className="hero-enter text-lg text-muted-foreground font-sans max-w-[500px] mb-10 leading-relaxed">
              Empowering organizations with secure, scalable, and modern technology solutions.
            </p>

            <div className="hero-enter flex flex-wrap gap-6">
              <Button asChild className="btn-lime h-auto group">
                <a href="#contact-section">
                  <span>Start Your Project</span>
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1.5" />
                </a>
              </Button>

              <Button
                asChild
                variant="outline"
                className="btn-outline h-auto group !text-foreground border-border/50 hover:bg-muted"
              >
                <a href="#features">
                  Our Impact
                  <ChevronDown className="w-5 h-5 opacity-60 group-hover:opacity-100 transition-opacity" />
                </a>
              </Button>
            </div>
          </div>

          {/* ── RIGHT: Solar System ─────────────────────────────── */}
          <div className="hero-enter flex flex-col items-center lg:items-end gap-6 w-full overflow-visible">

            {/* Orrery Wrapper for Responsive Scaling */}
            <div className="relative w-full h-[280px] [@media(min-width:360px)]:h-[308px] [@media(min-width:390px)]:h-[352px] [@media(min-width:480px)]:h-[425px] sm:h-[476px] lg:h-[420px] xl:h-[504px] 2xl:h-[560px] lg:flex lg:justify-end overflow-visible select-none">
              <style>{`
                .orbit-scale-wrapper {
                  position: absolute;
                  left: 50%;
                  top: 50%;
                  transform: translate(-50%, -50%) scale(0.5);
                  transform-origin: center center;
                  flex-shrink: 0;
                }
                @media (min-width: 360px) {
                  .orbit-scale-wrapper {
                    transform: translate(-50%, -50%) scale(0.55);
                  }
                }
                @media (min-width: 390px) {
                  .orbit-scale-wrapper {
                    transform: translate(-50%, -50%) scale(0.63);
                  }
                }
                @media (min-width: 480px) {
                  .orbit-scale-wrapper {
                    transform: translate(-50%, -50%) scale(0.76);
                  }
                }
                @media (min-width: 640px) {
                  .orbit-scale-wrapper {
                    transform: translate(-50%, -50%) scale(0.85);
                  }
                }
                @media (min-width: 1024px) {
                  .orbit-scale-wrapper {
                    position: absolute;
                    right: 0;
                    left: auto;
                    top: 50%;
                    transform: translate(0, -50%) scale(0.75);
                    transform-origin: right center;
                  }
                }
                @media (min-width: 1280px) {
                  .orbit-scale-wrapper {
                    transform: translate(0, -50%) scale(0.9);
                  }
                }
                @media (min-width: 1536px) {
                  .orbit-scale-wrapper {
                    transform: translate(0, -50%) scale(1);
                  }
                }
              `}</style>
              <div
                className="orbit-scale-wrapper relative"
                style={{
                  width: ORBIT_SIZE,
                  height: 560,
                }}
              >
                {/* Subtle radial halo behind rings — works on both themes */}
                <div
                  style={{
                    position: 'absolute',
                    top: CENTER - (RINGS[1].radius + 40),
                    left: CENTER - (RINGS[1].radius + 40),
                    width: (RINGS[1].radius + 40) * 2,
                    height: (RINGS[1].radius + 40) * 2,
                    borderRadius: '50%',
                    background: 'radial-gradient(circle, rgba(37,103,232,0.06) 0%, transparent 70%)',
                    pointerEvents: 'none',
                  }}
                />

                {/* ── Dashed orbit rings (blue-tinted, visible on both themes) ── */}
                {RINGS.map((ring, i) => (
                  <div
                    key={`ring-${i}`}
                    style={{
                      position: 'absolute',
                      top: CENTER - ring.radius,
                      left: CENTER - ring.radius,
                      width: ring.radius * 2,
                      height: ring.radius * 2,
                      borderRadius: '50%',
                      border: '1.5px dashed rgba(37,103,232,0.2)',
                      boxShadow: `0 0 ${i === 0 ? 16 : 24}px rgba(37,103,232,0.04) inset`,
                    }}
                  />
                ))}

                {/* ── Planet nodes — anchored to center, moved by GSAP ── */}
                {INDUSTRIES.map((ind, i) => (
                  <Link
                    key={ind.id}
                    href={`/industries/${ind.slug}`}
                    ref={(el) => { nodeRefs.current[i] = el as unknown as HTMLDivElement; }}
                    style={{
                      position: 'absolute',
                      top: CENTER - 26,
                      left: CENTER - 26,
                      width: 52,
                      height: 52,
                      cursor: 'pointer',
                      zIndex: 20,
                    }}
                  >
                    {/* Outer glow halo */}
                    <div
                      className="planet-glow"
                      style={{
                        position: 'absolute',
                        inset: -10,
                        borderRadius: '50%',
                        background: `radial-gradient(circle, ${ind.color}40 0%, ${ind.color}00 70%)`,
                        opacity: 0.35,
                      }}
                    />
                    {/* Planet disc — dark bg intentional (like a colored LED badge) */}
                    <div
                      style={{
                        position: 'relative',
                        width: 52,
                        height: 52,
                        borderRadius: '50%',
                        background: `linear-gradient(135deg, ${ind.color}18 0%, ${ind.color}08 100%)`,
                        border: `1.5px solid ${ind.color}`,
                        boxShadow: `0 0 18px ${ind.color}55, 0 4px 12px rgba(0,0,0,0.15)`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: ind.color,
                        backdropFilter: 'blur(4px)',
                      }}
                    >
                      {ind.icon}
                    </div>
                    {/* Label below node */}
                    <div
                      style={{
                        position: 'absolute',
                        top: 58,
                        left: '50%',
                        transform: 'translateX(-50%)',
                        fontSize: 9,
                        fontWeight: 700,
                        letterSpacing: '0.12em',
                        textTransform: 'uppercase',
                        color: ind.color,
                        whiteSpace: 'nowrap',
                        opacity: 0.9,
                        pointerEvents: 'none',
                      }}
                    >
                      {ind.label}
                    </div>
                  </Link>
                ))}

                {/* ── Center group — all elements float together ── */}
                <div
                  className="solar-center"
                  style={{
                    position: 'absolute',
                    /* Exact center of orrery container */
                    top: CENTER,
                    left: CENTER,
                    width: 0,
                    height: 0,
                    /* Children use negative margins to center on this point */
                  }}
                >
                  {/* Expanding pulse ring */}
                  <div
                    className="solar-pulse"
                    style={{
                      position: 'absolute',
                      width: 110,
                      height: 110,
                      borderRadius: '50%',
                      background: 'radial-gradient(circle, rgba(37,103,232,0.4) 0%, transparent 70%)',
                      top: -55,
                      left: -55,
                    }}
                  />
                  {/* Static glow ring */}
                  <div
                    style={{
                      position: 'absolute',
                      width: 90,
                      height: 90,
                      borderRadius: '50%',
                      background: 'rgba(37,103,232,0.1)',
                      border: '1.5px solid rgba(37,103,232,0.45)',
                      boxShadow: '0 0 32px rgba(37,103,232,0.3)',
                      top: -45,
                      left: -45,
                    }}
                  />
                  {/* Center logo disc */}
                  <div
                    style={{
                      position: 'absolute',
                      width: 72,
                      height: 72,
                      borderRadius: '50%',
                      background: 'linear-gradient(135deg, #1a1a3e 0%, #0d0d24 100%)',
                      border: '2px solid rgba(37,103,232,0.7)',
                      boxShadow: '0 0 40px rgba(37,103,232,0.5), inset 0 0 20px rgba(37,103,232,0.12)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      top: -36,
                      left: -36,
                    }}
                  >
                    <Image
                      src="/logo.png"
                      alt="Savvtek"
                      width={46}
                      height={46}
                      style={{ width: 46, height: 46, objectFit: 'contain' }}
                      className="brightness-0 invert"
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
