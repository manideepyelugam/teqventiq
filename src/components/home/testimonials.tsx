'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import { TESTIMONIALS } from '@/core/constants';
import { Card, Button } from '@/components/ui';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import 'swiper/css';
import 'swiper/css/navigation';

const getInitials = (company: string) => {
  if (company.includes("World Trade")) return "DW";
  if (company.includes("Danube")) return "DG";
  if (company.includes("Kitopi")) return "KI";
  return company.substring(0, 2).toUpperCase();
};

const getCompanyLogo = (company: string) => {
  if (company.includes("World Trade")) {
    return {
      src: "/logos/dwtc.com.png",
      className: "object-contain p-1 bg-white",
    };
  }
  if (company.includes("Danube")) {
    return {
      src: "/logos/aldanube.com.png",
      className: "object-contain p-2.5 bg-white",
    };
  }
  if (company.includes("Kitopi")) {
    return {
      src: "/logos/kitopi.com.png",
      className: "object-cover p-0 bg-transparent",
    };
  }
  return null;
};

const getGradient = (id: number) => {
  switch (id) {
    case 1:
      return "from-brand-blue to-indigo-600 text-white";
    case 2:
      return "from-emerald-500 to-brand-lime text-white";
    case 3:
      return "from-violet-600 to-pink-500 text-white";
    default:
      return "from-brand-blue to-brand-lime text-white";
  }
};

export default function Testimonials() {
  return (
    <section className="pt-16 lg:pt-24 pb-8 overflow-visible relative transition-colors duration-500" id="testimonials">
      {/* Decorative Glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-blue/5 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-blue/5 blur-[120px] rounded-full"></div>
      {/* Dot field texture */}
      <div className="dot-grid-overlay" />

      <div className="mx-auto max-w-[1248px] px-5 relative z-10">
        <div className="mb-16">
          <span className="text-brand-lime font-bold tracking-[0.3em] uppercase text-xs mb-4 block">Client Success</span>
          <h3 className="text-4xl lg:text-6xl font-bold font-serif text-foreground tracking-tight">Trust from the Leaders</h3>
        </div>

        <Swiper
          modules={[Navigation, Autoplay]}
          navigation={{
            prevEl: '.test-prev',
            nextEl: '.test-next',
          }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          spaceBetween={32}
          breakpoints={{
            320: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          className="!overflow-visible"
        >
          {TESTIMONIALS.map((item) => (
            <SwiperSlide key={item.id} className="py-4 !h-auto flex flex-col">
              <Card
                className="relative flex-1 flex flex-col justify-between bg-card/80 backdrop-blur-md border border-border/60 rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-md hover:border-brand-blue/40 transition-all duration-300 hover:-translate-y-1 group w-full"
              >
                {/* Inner card glow blobs */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-brand-blue/5 blur-[60px] rounded-full -z-10 transition-all duration-500 group-hover:bg-brand-blue/10"></div>

                <div>
                  {/* Quote Mark Icon */}
                  <div className="text-brand-blue mb-6 opacity-30 group-hover:opacity-60 transition-opacity duration-300 w-fit">
                    <svg width="40" height="30" viewBox="0 0 64 48" fill="none" className="fill-current">
                      <path d="M18.6667 0C8.35533 0 0 8.35533 0 18.6667V48H26.6667V21.3333H10.6667C10.6667 16.9152 14.2485 13.3333 18.6667 13.3333V0ZM56 0C45.6887 0 37.3333 8.35533 37.3333 18.6667V48H64V21.3333H48C48 16.9152 51.5818 13.3333 56 13.3333V0Z" />
                    </svg>
                  </div>

                  {/* Testimonial Quote */}
                  <p className="text-lg md:text-xl font-medium leading-relaxed font-serif text-foreground/90 italic mb-10">
                    "{item.quote}"
                  </p>
                </div>

                {/* Card Footer Divider and Metadata */}
                <div className="pt-8 border-t border-border/30 flex items-center gap-4">
                  {/* Profile Avatar / Company Logo */}
                  {(() => {
                    const logo = getCompanyLogo(item.company);
                    if (logo) {
                      return (
                        <div className={`w-12 h-12 rounded-full overflow-hidden border border-border flex items-center justify-center shadow-md flex-shrink-0 transition-transform duration-300 group-hover:scale-105 ${logo.className.includes("bg-white") ? "bg-white" : ""}`}>
                          <img 
                            src={logo.src} 
                            alt={item.company} 
                            className={`w-full h-full ${logo.className}`}
                          />
                        </div>
                      );
                    }
                    return (
                      <div className={`w-full h-full rounded-full bg-gradient-to-tr ${getGradient(item.id)} flex items-center justify-center font-bold text-sm tracking-wider`}>
                        {getInitials(item.company)}
                      </div>
                    );
                  })()}
                  <div>
                    <p className="text-base font-bold text-foreground mb-0.5">{item.author}</p>
                    <p className="text-xs text-muted-foreground font-semibold uppercase tracking-wider">
                      {item.company} 
                    </p>
                    <p className="text-xs text-muted-foreground font-semibold uppercase tracking-wider">
                       {item.role}
                    </p>
                  </div>
                </div>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="flex justify-center gap-6 mt-12">
          <Button
            variant="outline"
            className="test-prev w-14 h-14 rounded-full border border-border flex items-center justify-center text-foreground hover:bg-brand-blue hover:text-white hover:border-brand-blue transition-all group active:scale-95 disabled:opacity-20 bg-transparent ring-0"
          >
            <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
          </Button>
          <Button
            variant="outline"
            className="test-next w-14 h-14 rounded-full border border-border flex items-center justify-center text-foreground hover:bg-brand-blue hover:text-white hover:border-brand-blue transition-all group active:scale-95 disabled:opacity-20 bg-transparent ring-0"
          >
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </section>
  );
}


