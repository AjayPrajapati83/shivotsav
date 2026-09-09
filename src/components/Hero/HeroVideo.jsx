import { useRef, useEffect } from 'react';

/**
 * Hero background video with dark vignette overlay.
 * Falls back to a static poster on low-end devices.
 */
export function HeroVideo({ isLowEnd = false }) {
  const videoRef = useRef(null);

  useEffect(() => {
    // Attempt to play video (may fail on some mobile browsers without interaction)
    if (videoRef.current && !isLowEnd) {
      videoRef.current.play().catch(() => {
        // Silent fail — poster frame will show instead
      });
    }
  }, [isLowEnd]);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Video or poster fallback */}
      {!isLowEnd ? (
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover"
          src="/shivotsav-hero-bg-muted.mp4"
          muted
          autoPlay
          loop
          playsInline
          preload="auto"
          poster="/SHIVOTSAV_LOGO.png"
        />
      ) : (
        <div
          className="absolute inset-0 bg-navy-950"
          style={{
            backgroundImage: 'url(/SHIVOTSAV_LOGO.png)',
            backgroundSize: '30%',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            opacity: 0.15,
          }}
        />
      )}

      {/* Dark vignette overlay — ensures text readability */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            linear-gradient(180deg, 
              rgba(6,9,18,0.7) 0%, 
              rgba(6,9,18,0.3) 30%, 
              rgba(6,9,18,0.2) 50%, 
              rgba(6,9,18,0.4) 70%,
              rgba(6,9,18,0.95) 100%
            )
          `,
        }}
      />

      {/* Side vignette for extra depth */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse at center, 
              transparent 40%, 
              rgba(6,9,18,0.6) 100%
            )
          `,
        }}
      />
    </div>
  );
}

export default HeroVideo;
