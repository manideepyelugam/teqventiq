"use client";

import { useGSAP, useGSAPConfig } from '@gsap/react';
import { RefObject } from 'react';

export function useGsap(
  callback: Parameters<typeof useGSAP>[0],
  scopeOrConfig?: RefObject<any> | useGSAPConfig | any[]
) {
  const config: useGSAPConfig | any[] | undefined =
    scopeOrConfig && typeof scopeOrConfig === 'object' && 'current' in scopeOrConfig
      ? { scope: scopeOrConfig }
      : (scopeOrConfig as useGSAPConfig | any[] | undefined);

  useGSAP(callback, config);
}
