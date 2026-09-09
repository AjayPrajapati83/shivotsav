import { useRef, useEffect, lazy, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import HeroVideo from './HeroVideo';
import HeroContent from './HeroContent';
import HeroParticles from './HeroParticles';
import useDeviceCapability from '../../hooks/useDeviceCapability';

gsap.registerPlugin(ScrollTrigger);

export function Hero() {
  const heroRef = useRef(null);
  const { tier, dpr, particleCount, isLowEnd, isMobile } = useDeviceCapability();

  // Hero scroll-out animation
  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      gsap.to(el, {
        opacity: 0,
        scale: 0.95,
        y: -60,
        ease: 'power2.inOut',
        scrollTrigger: {
          trigger: el,
          start: 'top top',
          end: 'bottom top',
          scrub: 1.5,
          pin: false,
        },
      });
    }, el);

    return () => ctx.revert();
  }, []);

  const showParticles = particleCount > 0 && tier !== 'low';

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative w-full min-h-screen overflow-hidden"
      style={{ willChange: 'transform, opacity' }}
    >
      {/* Layer 1: Background Video */}
      <HeroVideo isLowEnd={isLowEnd} />

      {/* Layer 2: 3D Particles (conditional) */}
      {showParticles && (
        <div className="absolute inset-0 z-[5] pointer-events-none">
          <Canvas
            dpr={dpr}
            camera={{ position: [0, 0, 5], fov: 60 }}
            style={{ background: 'transparent' }}
            gl={{ alpha: true, antialias: false, powerPreference: 'high-performance' }}
          >
            <Suspense fallback={null}>
              <HeroParticles count={particleCount} />
            </Suspense>
          </Canvas>
        </div>
      )}

      {/* Layer 3: Fog overlay (CSS only — lightweight) */}
      <div className="absolute inset-0 z-[6] pointer-events-none opacity-30">
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(90deg, transparent, rgba(212,168,67,0.05), transparent)',
            backgroundSize: '200% 100%',
            animation: 'fog-drift 20s ease-in-out infinite',
          }}
        />
      </div>

      {/* Layer 4: Content */}
      <HeroContent />
    </section>
  );
}

export default Hero;
