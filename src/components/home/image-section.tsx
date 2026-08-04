'use client';

import { cn } from "@/core/lib/utils";

export default function ImageSection() {
  const steps = [
    { title: 'Advisory', text: 'Strategic consulting and digital roadmap development', pos: 'top-[226px] left-[223px] max-w-[162px]' },
    { title: 'Design', text: 'Architecting secure and scalable IT ecosystems', pos: 'top-[143px] left-[410px] max-w-[162px]' },
    { title: 'Deploy', text: 'Professional implementation and seamless integration', pos: 'top-[35px] left-1/2 -translate-x-[56%] max-w-[178px] text-center items-center' },
    { title: 'Manage', text: '24/7 managed services and proactive IT support', pos: 'top-[143px] right-[410px] max-w-[162px]' },
    { title: 'Optimize', text: 'Continuous automation and performance improvement', pos: 'top-[256px] right-[245px] max-w-[162px]' }
  ];

  return (
    <section className="py-12 lg:py-20 relative overflow-visible transition-colors duration-500">
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--color-brand-blue)_0%,_transparent_100%)] opacity-5 pointer-events-none"></div>
      {/* Dot field texture */}
      <div className="dot-grid-overlay" />
      
      <div className="mx-auto max-w-[1248px] px-5 mb-20 text-center relative z-10">
        <span className="text-brand-lime font-bold tracking-widest uppercase text-xs mb-4 block">Our Process</span>
        <h3 className="text-4xl lg:text-5xl font-bold font-serif text-foreground mb-6">How We Work</h3>
      </div>

      {/* Desktop Diagram View */}
      <div className="hidden lg:block max-w-[1440px] mx-auto relative h-[442px] z-10">
        <svg xmlns="http://www.w3.org/2000/svg" width="1440" height="442" viewBox="0 0 1440 442" fill="none" className="w-full h-full">
          {/* SVG Content remains same, but we could adjust fillOpacity if needed */}
          <g clipPath="url(#clip0_2001_6127)">
            <path d="M804.802 307.765L787.221 295.956C780.798 291.642 780.791 284.649 787.248 280.345L833.468 249.531C839.905 245.24 839.936 238.247 833.494 233.92L787.305 202.897C780.882 198.584 780.875 191.59 787.332 187.286L833.628 156.422C840.065 152.13 850.497 152.148 856.92 156.462L1036.64 277.169C1045.47 283.098 1045.45 292.668 1036.6 298.568L993.078 327.583C986.603 331.9 977.817 334.309 968.675 334.294L863.709 333.986C850.849 333.964 838.545 330.529 829.47 324.434L804.708 307.803L804.783 307.752L804.802 307.765Z" fill="url(#paint0_linear_2001_6127)"></path>
            <path d="M606.808 307.765L624.39 295.956C630.812 291.642 630.819 284.649 624.363 280.345L578.143 249.531C571.705 245.24 571.674 238.247 578.116 233.92L624.306 202.897C630.728 198.584 630.735 191.59 624.279 187.286L577.983 156.422C571.545 152.13 561.113 152.148 554.691 156.462L374.972 277.169C366.143 283.098 366.159 292.668 375.008 298.568L418.532 327.583C425.007 331.9 433.793 334.309 442.936 334.294L547.902 333.986C560.762 333.964 573.066 330.529 582.141 324.434L606.903 307.803L606.827 307.752L606.808 307.765Z" fill="url(#paint1_linear_2001_6127)"></path>
            <path d="M392.622 458.129L437.719 427.84C454.192 416.776 454.21 398.838 437.65 387.797L319.096 308.762C302.584 297.754 302.505 279.816 319.027 268.719L437.503 189.146C453.977 178.081 453.995 160.143 437.434 149.103L318.686 69.9373C302.174 58.9294 275.416 58.9754 258.942 70.0399L-202.034 379.651C-224.68 394.86 -224.637 419.407 -201.94 434.539L-90.3026 508.963C-73.6934 520.036 -51.1572 526.216 -27.7072 526.175L241.529 525.387C274.514 525.33 306.074 516.519 329.351 500.885L392.865 458.226L392.671 458.096L392.622 458.129Z" fill="url(#paint2_linear_2001_6127)" fillOpacity="0.1"></path>
            <path d="M1010.43 458.129L965.329 427.84C948.855 416.776 948.837 398.838 965.398 387.797L1083.95 308.762C1100.46 297.754 1100.54 279.816 1084.02 268.719L965.545 189.146C949.071 178.081 949.053 160.143 965.613 149.103L1084.36 69.9373C1100.87 58.9294 1127.63 58.9754 1144.11 70.0399L1605.08 379.651C1627.73 394.86 1627.68 419.407 1604.99 434.539L1493.35 508.963C1476.74 520.036 1454.2 526.216 1430.75 526.175L1161.52 525.387C1128.53 525.33 1096.97 516.519 1073.7 500.885L1010.18 458.226L1010.38 458.096L1010.43 458.129Z" fill="url(#paint3_linear_2001_6127)" fillOpacity="0.1"></path>
            <path d="M762.16 277.384C762.16 277.384 762.046 277.308 761.97 277.257L724.333 252.166C715.522 246.292 715.525 236.76 724.296 230.869L761.904 205.61C761.904 205.61 761.998 205.547 762.036 205.521C762.055 205.508 762.093 205.483 762.093 205.483C770.884 199.579 770.849 190.047 762.057 184.186L724.306 159.018C715.495 153.144 701.25 153.181 692.478 159.073L654.814 184.37C646.023 190.274 646.059 199.806 654.851 205.667L654.889 205.693C654.889 205.693 655.041 205.794 655.117 205.844L692.754 230.936C701.565 236.81 701.562 246.342 692.79 252.233L655.183 277.492C654.993 277.619 654.804 277.721 654.614 277.848C646.317 283.751 646.447 293.042 655.068 298.789L692.762 323.919C701.573 329.793 715.817 329.755 724.589 323.864L762.139 298.643C770.911 292.752 770.914 283.245 762.179 277.371L762.16 277.384Z" fill="url(#paint4_linear_2001_6127)"></path>
            <defs>
              <linearGradient id="paint0_linear_2001_6127" x1="846.5" y1="149" x2="846.5" y2="339" gradientUnits="userSpaceOnUse">
                <stop stopColor="currentColor" stopOpacity="0.1"></stop>
                <stop offset="1" stopColor="currentColor" stopOpacity="0"></stop>
              </linearGradient>
              <linearGradient id="paint1_linear_2001_6127" x1="565.11" y1="149" x2="565.11" y2="339" gradientUnits="userSpaceOnUse">
                <stop stopColor="currentColor" stopOpacity="0.1"></stop>
                <stop offset="1" stopColor="currentColor" stopOpacity="0"></stop>
              </linearGradient>
              <linearGradient id="paint2_linear_2001_6127" x1="285.668" y1="50.8996" x2="285.668" y2="538.246" gradientUnits="userSpaceOnUse">
                <stop stopColor="currentColor" stopOpacity="0.1"></stop>
                <stop offset="1" stopColor="currentColor" stopOpacity="0"></stop>
              </linearGradient>
              <linearGradient id="paint3_linear_2001_6127" x1="1117.38" y1="50.8996" x2="1117.38" y2="538.246" gradientUnits="userSpaceOnUse">
                <stop stopColor="currentColor" stopOpacity="0.1"></stop>
                <stop offset="1" stopColor="currentColor" stopOpacity="0"></stop>
              </linearGradient>
              <linearGradient id="paint4_linear_2001_6127" x1="709" y1="148" x2="709" y2="335" gradientUnits="userSpaceOnUse">
                <stop stopColor="#D7E866"></stop>
                <stop offset="1" stopColor="currentColor" stopOpacity="0.2"></stop>
              </linearGradient>
              <clipPath id="clip0_2001_6127">
                <rect width="1440" height="442" fill="white"></rect>
              </clipPath>
            </defs>
          </g>
        </svg>

        <div className="absolute inset-0">
          {steps.map((step, index) => (
            <div key={index} className={cn("absolute flex flex-col gap-3 group transition-all duration-300 hover:-translate-y-1", step.pos)}>
              <div className="flex items-center gap-3">
                <span className="w-10 h-10 bg-brand-blue text-white font-bold text-xl rounded-2xl flex items-center justify-center shadow-lg shadow-brand-blue/20 group-hover:bg-brand-lime group-hover:text-brand-dark transition-colors"> {index + 1} </span>
                <strong className="text-foreground text-xl font-bold tracking-tight">{step.title}</strong>
              </div>
              <p className="text-muted-foreground text-[15px] leading-relaxed max-w-[200px]">{step.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile Step List View */}
      <div className="lg:hidden flex flex-col gap-4 sm:gap-6 px-5 relative z-10 mx-auto">
        {steps.map((step, index) => (
          <div key={index} className="flex gap-4 items-start bg-card p-5 sm:p-6 rounded-[24px] border border-border/50 shadow-sm transition-all duration-300 hover:shadow-md">
            <span className="w-10 h-10 sm:w-12 sm:h-12 shrink-0 bg-brand-blue text-white font-bold text-lg sm:text-xl rounded-xl flex items-center justify-center shadow-lg shadow-brand-blue/20">
              {index + 1}
            </span>
            <div className="flex flex-col gap-1 sm:gap-2">
              <strong className="text-foreground text-lg sm:text-xl font-bold tracking-tight">{step.title}</strong>
              <p className="text-muted-foreground text-sm sm:text-[15px] leading-relaxed">{step.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
