'use client';

import { forwardRef } from 'react';
import { Turnstile, type TurnstileInstance } from '@marsidev/react-turnstile';
import { useTheme } from 'next-themes';
import { cn } from '@/core/lib/utils';

// Cloudflare official always-passing dummy sitekey for local development/preview fallback
const CLOUDFLARE_TEST_SITE_KEY = '1x00000000000000000000AA';

export interface TurnstileCaptchaProps {
  onSuccess: (token: string) => void;
  onError?: (error?: string | Error) => void;
  onExpire?: () => void;
  className?: string;
  size?: 'normal' | 'compact' | 'flexible';
}

const TurnstileCaptcha = forwardRef<TurnstileInstance, TurnstileCaptchaProps>(
  ({ onSuccess, onError, onExpire, className, size = 'flexible' }, ref) => {
    const { resolvedTheme } = useTheme();
    const siteKey =
      process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || CLOUDFLARE_TEST_SITE_KEY;
    const theme = resolvedTheme === 'dark' ? 'dark' : 'light';

    return (
      <div className={cn('w-full flex items-center justify-start my-2 min-h-[65px] [&>div]:w-full [&_iframe]:w-full', className)}>
        <Turnstile
          ref={ref}
          siteKey={siteKey}
          onSuccess={onSuccess}
          onError={onError}
          onExpire={onExpire}
          className="w-full"
          options={{
            theme,
            size,
            refreshExpired: 'auto',
          }}
        />
      </div>
    );
  }
);

TurnstileCaptcha.displayName = 'TurnstileCaptcha';

export default TurnstileCaptcha;
export type { TurnstileInstance };
