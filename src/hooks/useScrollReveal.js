import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * Scroll-reveal animation hook. Fades and slides children in on scroll.
 * @param {Object} opts - { y, duration, stagger, start }
 */
export function useScrollReveal(opts = {}) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const children = el.querySelectorAll('[data-reveal]');
    const targets = children.length > 0 ? children : [el];

    const ctx = gsap.context(() => {
      gsap.from(targets, {
        y: opts.y ?? 60,
        opacity: 0,
        duration: opts.duration ?? 0.8,
        stagger: opts.stagger ?? 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: el,
          start: opts.start ?? 'top 85%',
          toggleActions: 'play none none none',
        },
      });
    }, el);

    return () => ctx.revert();
  }, []);

  return ref;
}

export default useScrollReveal;
