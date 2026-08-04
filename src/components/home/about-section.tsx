import { STATS } from '@/core/constants';
import { Button } from '@/components/ui';
import { ArrowRight } from 'lucide-react';

export default function AboutSection() {
  return (
    <section className="py-16 lg:py-24 transition-colors duration-500 overflow-visible relative z-[5]" id="about-section">
      {/* Ambient gradient mesh */}
      <div className="gradient-mesh-section">
        <div className="blob-a" />
        <div className="blob-b" />
        <div className="blob-c" />
      </div>
      {/* Dot field texture */}
      <div className="dot-grid-overlay" />
      <div className="mx-auto max-w-[1248px] px-5 relative z-[1]">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div className="relative order-2 lg:order-1">
             <div className="relative rounded-[2rem] overflow-hidden shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] z-[2] border border-border/50">
              <img 
                src="/images/mission_vision_us_1777468862412.jpeg" 
                alt="MindLabs Corporate" 
                className="w-full h-[500px] lg:h-[700px] object-cover transition-transform duration-1000 hover:scale-105"
              />
            </div>
            
            {/* Decorative Floating Element */}
            <div className="absolute -bottom-10 -right-10 bg-brand-blue text-white p-10 rounded-[2rem] shadow-2xl z-[3] hidden md:block animate-float">
               <div className="text-4xl font-serif font-bold mb-1">100%</div>
               <div className="text-xs font-bold uppercase tracking-widest opacity-80">Security Focused</div>
            </div>

            <div className="absolute top-[-40px] left-[-40px] z-[1] opacity-20">
               <svg width="270" height="272" viewBox="0 0 270 272" fill="none">
                  <path d="M249.304 169.875H205.777C194.362 169.875 185.081 160.614 185.081 149.172V105.629C185.081 94.2101 175.824 84.926 164.385 84.926H120.858C109.443 84.926 100.162 75.6652 100.162 64.2225V20.7035C100.162 9.28407 90.9049 0 79.4664 0H0V0.742725C8.7935 3.13337 15.29 11.1409 15.29 20.7035V64.2458C15.29 75.6652 24.5476 84.9492 35.9861 84.9492H79.5128C90.9281 84.9492 100.209 94.2101 100.209 105.653V149.195C100.209 160.614 109.466 169.898 120.905 169.898H164.432C175.847 169.898 185.128 179.159 185.128 190.602V234.144C185.128 245.564 194.385 254.848 205.824 254.848H249.35C259.582 254.848 268.051 262.275 269.722 272.046H270.046V190.625C270.046 179.206 260.789 169.922 249.35 169.922L249.304 169.875Z" fill="#2567E8"></path>
               </svg>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <span className="text-brand-lime font-bold tracking-[0.2em] uppercase text-sm mb-6 block">Who We Are</span>
            <h2 className="text-4xl lg:text-6xl font-bold font-serif leading-[1.1] tracking-tight mb-8 text-foreground">
              MindLabs <br />
              <span className="text-muted-foreground font-medium">Technologies</span>
            </h2>
            <p className="text-lg lg:text-xl leading-relaxed mb-8 text-muted-foreground font-normal max-w-[550px]">
              At MindLabs, we design and deliver secure, scalable, and high-performance IT ecosystems for organizations to operate smarter, safer, and more efficiently. We specialize in cybersecurity, IT infrastructure, cloud ecosystems, AI, and enterprise applications.
            </p>
          
            
            <div className="grid grid-cols-2 gap-6 mt-12">
              {STATS.map((stat, index) => (
                <div key={index} className="group p-8 bg-background rounded-[2rem] transition-all duration-500 hover:bg-card hover:shadow-2xl hover:shadow-brand-lime/5 border border-transparent hover:border-border/50">
                  <div className="font-serif text-4xl lg:text-5xl font-extrabold text-foreground mb-2 group-hover:text-brand-lime transition-colors">{stat.value}</div>
                  <div className="font-sans text-xs font-bold text-muted-foreground uppercase tracking-widest leading-relaxed">{stat.label}</div>
                </div>
              ))}
            </div>
            
            <div className="mt-14">
              <Button asChild className="btn-primary h-auto group">
                <a href="/contact">
                  <span>Work With Us</span>
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
