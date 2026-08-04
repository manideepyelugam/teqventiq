"use client";

import { useEffect } from 'react';
import { gsap } from 'gsap';

export function useGsap(callback: gsap.ContextFunc, scope?: React.RefObject<any>) {
  useEffect(() => {
    const ctx = gsap.context(callback, scope);
    return () => ctx.revert();
  }, [callback, scope]);
}
