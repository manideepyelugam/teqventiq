'use client';

import { useState, useEffect } from 'react';
import { cn } from '@/core/lib/utils';

export interface CompanyLogoProps {
  domain: string;
  name: string;
  className?: string;
  alt?: string;
  src?: string;
}


export default function CompanyLogo({
  domain,
  name,
  className,
  alt,
  src
}: CompanyLogoProps) {
  const [hasError, setHasError] = useState(false);

  // Generate a distinct premium color scheme gradient for the fallback monogram card
  const getGradientClass = (companyName: string) => {
    const hash = companyName.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
    const gradients = [
      'from-brand-blue/10 to-brand-blue/20 text-brand-blue border-brand-blue/15 dark:from-brand-blue/20 dark:to-brand-blue/30',
      'from-brand-lime/10 to-brand-lime/20 text-brand-lime border-brand-lime/15 dark:from-brand-lime/20 dark:to-brand-lime/30',
      'from-blue-500/10 to-indigo-600/20 text-indigo-400 border-indigo-500/15 dark:from-blue-500/20 dark:to-indigo-600/30',
      'from-emerald-500/10 to-teal-500/20 text-emerald-400 border-emerald-500/15 dark:from-emerald-500/20 dark:to-teal-500/30',
      'from-purple-500/10 to-pink-500/20 text-purple-400 border-purple-500/15 dark:from-purple-500/20 dark:to-pink-500/30',
    ];
    return gradients[hash % gradients.length];
  };

  const getInitials = (companyName: string) => {
    if (!companyName) return '';
    const parts = companyName.split(/\s+/).filter(Boolean);
    if (parts.length >= 2) {
      return (parts[0][0] + parts[1][0]).toUpperCase();
    }
    return companyName.slice(0, 2).toUpperCase();
  };

  if (hasError) {
    return (
      <div
        className={cn(
          "flex items-center justify-center rounded-xl bg-gradient-to-br border font-medium select-none shadow-sm transition-all duration-300 w-full h-full px-2 py-1",
          getGradientClass(name),
          className
        )}
      >
        <span className="text-[10px] md:text-[11px] font-bold tracking-wider font-sans leading-none text-center truncate max-w-full">
          {getInitials(name)}
        </span>
      </div>
    );
  }

  // Load the pre-downloaded PNG logo served directly from the public folder
  const logoUrl = `/logos/${domain}.png`;

  return (
    <img
      src={src||logoUrl}
      alt={alt || `${name} Logo`}
      onError={() => setHasError(true)}
      loading="lazy"
      decoding="async"
      className={cn(
        "w-full h-full object-contain transition-all duration-500 select-none pointer-events-none",
        className
      )}
    />
  );
}
