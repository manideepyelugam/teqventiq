'use client';

import * as React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { Button } from '@/components/ui';
import { cn } from '@/core/lib/utils';

export function ThemeToggle({ className }: { className?: string }) {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <Button
        variant="ghost"
        size="icon"
        className={cn("rounded-full w-10 h-10 flex items-center justify-center text-foreground/80 hover:text-foreground", className)}
        disabled
      >
        <Moon className="h-[1.25rem] w-[1.25rem] shrink-0 opacity-50" />
        <span className="sr-only">Toggle theme</span>
      </Button>
    );
  }

  const isDark = resolvedTheme === 'dark';

  return (
    <Button
      variant="ghost"
      size="icon"
      className={cn("rounded-full w-10 h-10 flex items-center justify-center text-foreground/80 hover:text-foreground transition-colors duration-200", className)}
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
    >
      {isDark ? (
        <Sun className="h-[1.25rem] w-[1.25rem] shrink-0 text-brand-lime transition-transform duration-300 hover:rotate-45" />
      ) : (
        <Moon className="h-[1.25rem] w-[1.25rem] shrink-0 text-brand-blue transition-transform duration-300 hover:-rotate-12" />
      )}
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
