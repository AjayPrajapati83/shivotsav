export function SectionHeading({ children, subtitle, className = '' }) {
  return (
    <div className={`text-center mb-16 relative ${className}`}>
      {/* Decorative top accent */}
      <div className="flex items-center justify-center gap-4 mb-4">
        <div className="w-12 h-px bg-gradient-to-r from-transparent to-gold-500/50" />
        <span className="text-gold-500/60 text-xs tracking-[0.3em] uppercase font-semibold" style={{ fontFamily: 'var(--font-heading)' }}>
          ✦
        </span>
        <div className="w-12 h-px bg-gradient-to-l from-transparent to-gold-500/50" />
      </div>

      <h2
        className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold gradient-text-gold mb-5 tracking-wide leading-tight"
      >
        {children}
      </h2>

      {subtitle && (
        <p 
          className="w-full text-base sm:text-lg text-gold-200 italic font-medium leading-relaxed text-center tracking-wide px-4"
          style={{ textShadow: '0 0 12px rgba(212, 168, 67, 0.6), 0 0 24px rgba(212, 168, 67, 0.3)' }}
        >
          {subtitle}
        </p>
      )}

      {/* Bottom decorative line */}
      <div className="mt-10 mb-8 mx-auto flex items-center justify-center gap-3">
        <div className="w-16 h-px bg-gradient-to-r from-transparent to-gold-500/40" />
        <div className="w-2 h-2 rounded-full bg-gold-500/30" />
        <div className="w-16 h-px bg-gradient-to-l from-transparent to-gold-500/40" />
      </div>
    </div>
  );
}

export default SectionHeading;
