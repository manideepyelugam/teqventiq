'use client';

import { CheckCircle2, Shield, Users, Network, Star, Target } from 'lucide-react';

const CORE_VALUES = [
    {
    title: 'Stewardship',
    description: 'Building a heritage for future generations, acting with an owner mentality, developing people everywhere we are, and meeting our commitments to all internal and external stakeholders.',
    icon: Shield,
  },
  {
    title: 'Best People',
    description: 'Attracting and developing the best talent for our business, stretching our people and developing a "can do" attitude.',
    icon: Users,
  },
  {
    title: 'Client Value Creation',
    description: 'Improving our clients\' business performance, creating long-term, win-win relationships and focusing on execution excellence.',
    icon: Target,
  },
  {
    title: 'One Global Network',
    description: 'Mobilizing the power of teaming to deliver consistently exceptional service to our clients anywhere in the world.',
    icon: Network,
  },
  {
    title: 'Respect for the Individual',
    description: 'Valuing diversity, ensuring an interesting and inclusive environment, and treating people as we would like to be treated ourselves.',
    icon: Star,
  },
  {
    title: 'Integrity',
    description: 'Inspiring trust by taking responsibility, acting ethically, and encouraging honest and open debate.',
    icon: CheckCircle2,
  },
];

const STRENGTHS = [
  'Extensive industry expertise',
  'Wide-ranging and evolving service offerings',
  'Expertise in business transformation outsourcing',
  'History of technology innovation and implementation',
  'Proven and experienced management team'
];

export default function AboutContent() {
  return (
    <div className=" bg-transparent pb-10">
      <div className="mx-auto max-w-[1248px] px-5">
        
        {/* Intro & Strategy Section */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start mb-32">
          <div>
           
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                <span className="text-brand-lime">Savvtek Services Pvt. Ltd.</span> is a technology management, consulting, intelligence, and solutions company. Combining deep industry experience, comprehensive capabilities across technology and business functions, <span className="text-brand-lime">Savvtek Services Pvt. Ltd.</span> collaborates with clients to help them become high-performance organizations. With a strong team coupled with expertise across various verticals, <span className="text-brand-lime">Savvtek Services Pvt. Ltd.</span> delivers secure, scalable, and future-ready technology solutions.
              </p>
              <p>
                Our <span className="text-brand-lime">"high performance business" </span>strategy builds on our expertise in consulting, technology and outsourcing to help clients perform at the highest levels so they can create sustainable value for their customers and shareholders. Using our industry knowledge, service-offering expertise and technology capabilities, we identify new business and technology trends and develop solutions to help clients around the region:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-4 text-foreground/80 font-medium">
                <li>Enter new markets</li>
                <li>Increase revenues in existing markets</li>
                <li>Improve operational performance</li>
                <li>Deliver their products and services more effectively and efficiently</li>
              </ul>
            </div>
          </div>
          
          <div id="strengths" className="group p-8 rounded-[24px] border-border/10 bg-background transition-all duration-700 hover:border-brand-lime/50 hover:shadow-[0_20px_50px_rgba(100,200,50,0.08)] ring-0 shadow-sm">
            <h3 className="text-2xl font-bold font-serif mb-6">Our Strengths</h3>
            <p className="text-muted-foreground mb-8">
              We have extensive relationships with the world's leading companies and governments and work with organizations of all sizes. Our commitment to client satisfaction strengthens and extends our relationships.
              <br/><br/>
              Some of the major strengths that distinguish us in the market are our:
            </p>
            <ul className="space-y-4">
              {STRENGTHS.map((strength, index) => (
                <li key={index} className="flex items-start gap-4">
                  <div className="mt-1 w-6 h-6 rounded-full bg-brand-lime/10 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-4 h-4 text-brand-lime" />
                  </div>
                  <span className="text-foreground/90 font-medium leading-relaxed">{strength}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Core Values Section */}
        <div id="core-values" className="mb-20 text-center max-w-[800px] mx-auto">
          <span className="text-brand-lime font-bold tracking-[0.2em] uppercase text-xs mb-4 block">Our DNA</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif text-foreground tracking-tight mb-6">
            Core Values
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Our Core Values have shaped the culture and defined the character of our company, guiding how we behave and make decisions:
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {CORE_VALUES.map((value, index) => (
            <div 
              key={index}
              className="group p-8 rounded-[24px]  bg-background  border border-border/50 hover:border-brand-lime/30 transition-all duration-300 hover:shadow-xl hover:shadow-brand-lime/5"
            >
              <div className="w-14 h-14 rounded-2xl bg-brand-lime/10 flex items-center justify-center mb-6 group-hover:-translate-y-1 transition-transform duration-300 ">
                <value.icon className="w-7 h-7 text-brand-lime" />
              </div>
              <h3 className="text-xl font-bold font-serif mb-4 group-hover:text-brand-lime  transition-colors">{value.title}</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">
                {value.description}
              </p>
            </div>
          ))}
        </div>

        {/* Conclusion Banner */}
        <div className="mt-24 p-12 lg:p-16 rounded-[32px] bg-brand-blue text-white relative overflow-hidden  text-justify md:text-center ">
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-white/10 blur-[100px] rounded-full pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-white/10 blur-[100px] rounded-full pointer-events-none"></div>
          <p className="text-lg lg:text-xl font-serif font-medium leading-relaxed relative z-10  mx-auto space-y-4 ">
            <span className="block">"By enhancing our consulting and outsourcing expertise with alliances and other capabilities, we help move clients forward in every part of their businesses, from strategic planning to day-to-day operations.</span>
            <span className="block">With deep industry and business process expertise, broad resources and a proven track record, Savvtek Services Pvt. Ltd. mobilizes technology and business intelligence to help clients improve performance and drive growth."</span>
          </p>
        </div>

      </div>
    </div>
  );
}
