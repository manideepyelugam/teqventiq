'use client';

import { useRef } from 'react';
import { Check, ChevronRight, AlertTriangle, Shield, Cpu, Lightbulb, Users } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGsap } from '@/core/hooks/use-gsap';
import { Industry } from '@/core/types';

gsap.registerPlugin(ScrollTrigger);

interface IndustryDetailContentProps {
  industry: Industry;
}

const priorityColors: Record<string, string> = {
  Critical: 'bg-red-500/10 text-red-400 border-red-500/20',
  High: 'bg-orange-500/10 text-orange-400 border-orange-500/20',
  Medium: 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20',
};

export default function IndustryDetailContent({ industry }: IndustryDetailContentProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useGsap(() => {
    if (!containerRef.current) return;

    // Scroll-triggered entry reveal for sections
    const sections = containerRef.current.querySelectorAll('.detail-sec');
    sections.forEach((sec) => {
      gsap.fromTo(
        sec,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sec,
            start: 'top 82%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    });
  }, containerRef);

  return (
    <div ref={containerRef}>
      {/* ── About Us ── */}
      {industry.aboutText && (
        <section className="detail-sec py-24 lg:py-32 bg-transparent transition-colors duration-500">
          <div className="mx-auto max-w-[1248px] px-5">
            <div className="grid lg:grid-cols-2 gap-20 items-start">
              <div>
                <span className="text-brand-lime font-bold tracking-widest uppercase text-xs mb-6 block">About Us</span>
                <h2 className="text-4xl lg:text-5xl font-bold font-serif text-foreground leading-tight mb-10">
                  Your specialist technology partner for{' '}
                  <span className="text-brand-lime">{industry.title.split(' — ')[0]}</span>
                </h2>
                <div className="flex flex-col gap-6">
                  {industry.aboutText.map((para, i) => (
                    <p key={i} className="text-lg text-muted-foreground leading-relaxed">{para}</p>
                  ))}
                </div>
              </div>


              {/* What We Bring */}
              {industry.whatWeBring && (
                <div className="reveal">
                  <div className="  border border-border/50 bg-background hover:border-brand-lime/30 transition-all duration-300 hover:shadow-xl hover:shadow-brand-liime/5 rounded-[2rem] p-8 lg:p-10">
                    <h3 className="text-xl font-bold text-foreground mb-8">What We Bring to {industry.title.split(' — ')[0]} Clients</h3>
                    <div className="flex flex-col gap-5">
                      {industry.whatWeBring.map((item, i) => (
                        <div key={i} className="flex gap-4 items-start">
                          <div className="w-7 h-7 rounded-lg bg-brand-lime/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <Check className="w-3.5 h-3.5 text-brand-lime" />
                          </div>
                          <p className="text-foreground/80 text-sm leading-snug">{item}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* ── Badges ── */}
      {industry.badges && (
        <section className="py-6 bg-transparent  transition-colors duration-500">
          <div className="mx-auto max-w-[1248px] px-5">
            <div className="flex flex-wrap gap-4 justify-center">
              {industry.badges.map((badge, i) => (
                <div
                  key={i}
                  className="inline-flex items-center gap-2.5 bg-background border border-border px-5 py-3 rounded-full text-sm font-medium text-foreground/80"
                >
                  <span className="w-1.5 h-1.5 bg-brand-lime rounded-full flex-shrink-0"></span>
                  {badge}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── Why This Sector Needs a Specialist ── */}
      {industry.riskTable && (
        <section className="py-24 lg:py-32 bg-transparent transition-colors duration-500">
          <div className="mx-auto max-w-[1248px] px-5">
            <div className="mb-16 reveal">
              <span className="text-brand-lime font-bold tracking-widest uppercase text-xs mb-6 block">Risk & Compliance</span>
              <h2 className="text-3xl lg:text-5xl font-bold font-serif text-foreground leading-tight max-w-[700px] mb-6">
                {industry.whyNeedTitle ?? `Why ${industry.title} Needs a Specialist`}
              </h2>
              {industry.whyNeedIntro && (
                <p className="text-lg text-muted-foreground max-w-[650px]">{industry.whyNeedIntro}</p>
              )}
            </div>
            <div className="reveal overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-4 px-6 text-xs font-bold uppercase tracking-widest text-muted-foreground w-[35%]">Risk Driver</th>
                    <th className="text-left py-4 px-6 text-xs font-bold uppercase tracking-widest text-muted-foreground">Why It Matters</th>
                  </tr>
                </thead>
                <tbody>
                  {industry.riskTable.map((row, i) => (
                    <tr
                      key={i}
                      className="border-b border-border/50 hover:bg-muted/50 transition-colors group"
                    >
                      <td className="py-5 px-6 align-top">
                        <div className="flex items-start gap-3">
                          <AlertTriangle className="w-4 h-4 text-brand-lime mt-0.5 flex-shrink-0" />
                          <span className="font-bold text-foreground text-sm leading-snug">{row.driver}</span>
                        </div>
                      </td>
                      <td className="py-5 px-6 text-muted-foreground text-sm leading-relaxed align-top">{row.why}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      )}

      {/* ── Solutions & Services ── */}
      {industry.solutionsTable && (
        <section className="py-24 bg-transparent transition-colors duration-500">
          <div className="mx-auto max-w-[1248px] px-5">
            <div className="mb-16 reveal">
              <span className="text-brand-lime font-bold tracking-widest uppercase text-xs mb-6 block">Solutions & Services</span>
              <h2 className="text-3xl lg:text-5xl font-bold font-serif text-foreground leading-tight max-w-[700px] mb-6">
                Solutions & Services — Aligned to {industry.title.split(' — ')[0]} Priorities
              </h2>
              {industry.solutionsIntro && (
                <p className="text-lg text-muted-foreground max-w-[650px]">{industry.solutionsIntro}</p>
              )}
            </div>
            <div className="reveal overflow-x-auto">
              <table className="w-full border-collapse bg-background rounded-2xl overflow-hidden border border-border">
                <thead>
                  <tr className="bg-muted border-b border-border">
                    <th className="text-left py-4 px-6 text-xs font-bold uppercase tracking-widest text-muted-foreground">Category</th>
                    <th className="text-left py-4 px-6 text-xs font-bold uppercase tracking-widest text-muted-foreground">Use Case</th>
                    {/* <th className="text-left py-4 px-6 text-xs font-bold uppercase tracking-widest text-muted-foreground">Suggested Top Brands</th> */}
                  </tr>
                </thead>
                <tbody>
                  {industry.solutionsTable.map((row, i) => (
                    <tr
                      key={i}
                      className="border-b border-border/50 hover:bg-brand-lime/5 transition-colors"
                    >
                      <td className="py-4 px-6 align-top">
                        <span className="font-bold text-foreground text-sm">{row.category}</span>
                      </td>
                      <td className="py-4 px-6 text-muted-foreground text-sm leading-snug align-top">{row.useCase}</td>
                      {/* <td className="py-4 px-6 align-top">
                        <span className="text-brand-lime text-sm font-medium leading-snug">{row.brands}</span>
                      </td> */}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      )}

      {/* ── IT Hardware, Networking & Infrastructure ── */}
      {industry.infraSections && (
        <section className="py-24 lg:py-32 bg-transparent transition-colors duration-500">
          <div className="mx-auto max-w-[1248px] px-5">
            <div className="mb-16 reveal">
              <span className="text-brand-lime font-bold tracking-widest uppercase text-xs mb-6 block">Infrastructure</span>
              <h2 className="text-3xl lg:text-5xl font-bold font-serif text-foreground leading-tight max-w-[700px] mb-6">
                IT Hardware, Networking &amp; Infrastructure
              </h2>
              {industry.infraIntro && (
                <p className="text-lg text-muted-foreground max-w-[700px]">{industry.infraIntro}</p>
              )}
            </div>
            <div className="grid md:grid-cols-2 gap-8 reveal">
              {industry.infraSections.map((section, i) => (
                <div
                  key={i}
                  className="p-8 rounded-[2rem] border border-border bg-background hover:border-brand-lime/30 hover:bg-brand-lime/5 transition-all duration-300 group"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-9 h-9 rounded-xl bg-brand-lime/10 flex items-center justify-center group-hover:bg-brand-lime/20 transition-colors">
                      <Cpu className="w-4 h-4 text-brand-lime" />
                    </div>
                    <h3 className="font-bold text-foreground text-base leading-snug">{section.title}</h3>
                  </div>
                  <ul className="flex flex-col gap-3">
                    {section.items.map((item, j) => (
                      <li key={j} className="flex gap-3 items-start text-sm text-muted-foreground leading-snug">
                        <ChevronRight className="w-3.5 h-3.5 text-brand-lime mt-0.5 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── Managed Security Services ── */}
      {industry.managedSecurityTable && (
        <section className="py-24 bg-transparent transition-colors duration-500">
          <div className="mx-auto max-w-[1248px] px-5">
            <div className="mb-16 reveal">
              <span className="text-brand-lime font-bold tracking-widest uppercase text-xs mb-6 block">Managed Security</span>
              <h2 className="text-3xl lg:text-5xl font-bold font-serif text-foreground leading-tight max-w-[700px] mb-6">
                Managed Security Services
              </h2>
              {industry.managedSecurityIntro && (
                <p className="text-lg text-muted-foreground max-w-[700px]">{industry.managedSecurityIntro}</p>
              )}
            </div>
            <div className="reveal overflow-x-auto">
              <table className="w-full border-collapse bg-background rounded-2xl overflow-hidden border border-border">
                <thead>
                  <tr className="bg-muted border-b border-border">
                    <th className="text-left py-4 px-6 text-xs font-bold uppercase tracking-widest text-muted-foreground">Managed Service</th>
                    {/* <th className="text-left py-4 px-6 text-xs font-bold uppercase tracking-widest text-muted-foreground w-28">Priority</th> */}
                    <th className="text-left py-4 px-6 text-xs font-bold uppercase tracking-widest text-muted-foreground">Why It Matters Here</th>
                  </tr>
                </thead>
                <tbody>
                  {industry.managedSecurityTable.map((row, i) => (
                    <tr key={i} className="border-b border-border/50 hover:bg-brand-lime/5 transition-colors">
                      <td className="py-4 px-6 align-top">
                        <div className="flex items-start gap-3">
                          <Shield className="w-4 h-4 text-brand-lime mt-0.5 flex-shrink-0" />
                          <span className="font-bold text-foreground text-sm">{row.service}</span>
                        </div>
                      </td>
                      {/* <td className="py-4 px-6 align-top">
                        <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold border ${priorityColors[row.priority] ?? 'bg-muted text-muted-foreground border-border'}`}>
                          {row.priority}
                        </span>
                      </td> */}
                      <td className="py-4 px-6 text-muted-foreground text-sm leading-relaxed align-top">{row.why}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      )}

      {/* ── Our Recommended Approach (Phases) ── */}
      {industry.approach && (
        <section className="py-24 lg:py-32 bg-transparent transition-colors duration-500">
          <div className="mx-auto max-w-[1248px] px-5">
            <div className="mb-16 reveal">
              <span className="text-brand-lime font-bold tracking-widest uppercase text-xs mb-6 block">Our Approach</span>
              <h2 className="text-3xl lg:text-5xl font-bold font-serif text-foreground leading-tight max-w-[700px] mb-6">
                Our Recommended Approach
              </h2>
              {industry.approachIntro && (
                <p className="text-lg text-muted-foreground max-w-[700px]">{industry.approachIntro}</p>
              )}
            </div>
            <div className="grid md:grid-cols-3 gap-8 reveal">
              {industry.approach.map((phase, i) => (
                <div
                  key={i}
                  className="relative p-8 rounded-[2rem] border border-border bg-background hover:border-brand-lime/30 transition-all duration-300 group"
                >
                {/*   <div className="w-10 h-10 rounded-full border-2 border-brand-lime/30 flex items-center justify-center mb-6 group-hover:border-brand-lime transition-colors">
                    <span className="text-brand-lime font-bold text-sm">{String(i + 1).padStart(2, '0')}</span>
                  </div> */}
                  <h3 className="text-base font-bold text-foreground mb-6 leading-snug">{phase.phase}</h3>
                  <ul className="flex flex-col gap-3">
                    {phase.items.map((item, j) => (
                      <li key={j} className="flex gap-3 items-start text-sm text-muted-foreground leading-snug">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-lime mt-1.5 flex-shrink-0"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── Our Suggestions ── */}
      {industry.suggestions && (
        <section className="py-24 bg-transparent transition-colors duration-500">
          <div className="mx-auto max-w-[1248px] px-5">
            <div className="mb-16 reveal">
              <span className="text-brand-lime font-bold tracking-widest uppercase text-xs mb-6 block">Key Recommendations</span>
              <h2 className="text-3xl lg:text-5xl font-bold font-serif text-foreground leading-tight max-w-[700px]">
                Our Suggestions for This Sector
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6 reveal">
              {industry.suggestions.map((suggestion, i) => {
                const [bold, ...rest] = suggestion.split(':');
                return (
                  <div
                    key={i}
                    className="p-8 rounded-2xl border border-border bg-background hover:border-brand-lime/30 hover:bg-brand-lime/5 transition-all duration-300 group"
                  >
                    <div className="flex gap-4 items-start">
                      <div className="w-9 h-9 rounded-xl bg-brand-lime/10 flex items-center justify-center flex-shrink-0 group-hover:bg-brand-lime/20 transition-colors mt-0.5">
                        <Lightbulb className="w-4 h-4 text-brand-lime" />
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        <span className="font-bold text-foreground">{bold}:</span>
                        {rest.join(':')}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* ── Why Partner With Us ── */}
      {industry.whyPartner && (
        <section className="py-24 lg:py-32 bg-transparent transition-colors duration-500">
          <div className="mx-auto max-w-[1248px] px-5">
            <div className="mb-16 reveal">
              <span className="text-brand-lime font-bold tracking-widest uppercase text-xs mb-6 block">Why MindLabs</span>
              <h2 className="text-3xl lg:text-5xl font-bold font-serif text-foreground leading-tight max-w-[700px]">
                Why Partner With Us
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 gap-6 reveal">
              {industry.whyPartner.map((point, i) => (
                <div
                  key={i}
                  className="flex gap-4 items-start p-6 rounded-2xl border border-border bg-card hover:border-brand-lime/30 hover:bg-brand-lime/5 transition-all duration-300 group"
                >
                  <div className="w-9 h-9 rounded-xl bg-brand-lime/10 flex items-center justify-center flex-shrink-0 group-hover:bg-brand-lime/20 transition-colors mt-0.5">
                    <Users className="w-4 h-4 text-brand-lime" />
                  </div>
                  <p className="text-sm text-foreground/80 font-medium leading-snug">{point}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}

