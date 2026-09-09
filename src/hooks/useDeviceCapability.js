import { useState, useEffect, useMemo } from 'react';

/**
 * Detects device capability tier for adaptive rendering.
 * Returns { tier: 'high'|'medium'|'low', isMobile, reducedMotion, dpr, isLowEnd }
 */
export function useDeviceCapability() {
  const [state, setState] = useState(() => detect());

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const handler = () => setState(detect());
    mq.addEventListener('change', handler);
    window.addEventListener('resize', handler);
    return () => {
      mq.removeEventListener('change', handler);
      window.removeEventListener('resize', handler);
    };
  }, []);

  return state;
}

function detect() {
  const width = window.innerWidth;
  const isMobile = width < 768;
  const isTablet = width >= 768 && width < 1024;
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const cores = navigator.hardwareConcurrency || 4;
  const memory = navigator.deviceMemory || 4; // GB
  const connection = navigator.connection?.effectiveType || '4g';
  const slowConnection = connection === '2g' || connection === 'slow-2g';

  let tier = 'high';
  if (isMobile && (cores <= 4 || memory <= 2 || slowConnection)) {
    tier = 'low';
  } else if (isMobile || isTablet || cores <= 4 || memory <= 4) {
    tier = 'medium';
  }

  if (reducedMotion) tier = 'low';

  // Cap DPR for WebGL performance
  const rawDpr = window.devicePixelRatio || 1;
  let dpr;
  if (tier === 'low') dpr = 1;
  else if (tier === 'medium') dpr = Math.min(rawDpr, 1.5);
  else dpr = Math.min(rawDpr, 2);

  return {
    tier,
    isMobile,
    isTablet,
    reducedMotion,
    dpr,
    isLowEnd: tier === 'low',
    particleCount: tier === 'high' ? 800 : tier === 'medium' ? 200 : 0,
  };
}

export default useDeviceCapability;
