import { MapPin, Calendar, ChevronDown } from 'lucide-react';

/**
 * Hero text content — logo, wordmark, theme, dates, venue, ESSSQUBE credit.
 */
export function HeroContent() {
  const scrollToEvents = (e) => {
    e.preventDefault();
    document.querySelector('#events')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToAbout = (e) => {
    e.preventDefault();
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 text-center">
      {/* Fest Logo */}
      <img
        src="/SHIVOTSAV_LOGO.png"
        alt="Shivotsav Logo — Nataraja mark with performing arts and sports icons"
        className="w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 object-contain mb-6 animate-float drop-shadow-[0_0_30px_rgba(212,168,67,0.3)]"
      />

      {/* Wordmark Image (NOT a font) */}
      <img
        src="/SHIVOTSAV_WORDMARK.png"
        alt="Shivotsav'26 Wordmark"
        className="w-64 sm:w-80 md:w-96 lg:w-[28rem] h-auto object-contain mb-4 drop-shadow-[0_0_40px_rgba(212,168,67,0.25)]"
      />

      {/* Theme Name & Tagline */}
      <div className="flex flex-col items-center mb-8">
        <h1 className="font-display text-xl sm:text-2xl md:text-3xl lg:text-4xl text-gold-400 tracking-[0.2em] uppercase whitespace-nowrap">
          Mythos: The Legends Awaken
        </h1>
        <p className="font-display text-[10px] sm:text-xs md:text-sm text-gold-400 mt-3 tracking-[0.3em] uppercase font-bold opacity-90 drop-shadow-sm">
          The Realm Awaits Its Heroes
        </p>
      </div>

      {/* Date & Venue pills */}
      <div style={{ marginTop: '5px', marginBottom: '20px' }} className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4 sm:gap-6 w-full px-4">
        <div 
          className="flex flex-shrink-0 items-center justify-center gap-3 rounded-full text-slate-100 shadow-lg backdrop-blur-md bg-white/5 border border-gold-500/30 w-max max-w-full transition-colors hover:bg-white/10"
          style={{ padding: '1rem 2.5rem' }}
        >
          <Calendar className="w-5 h-5 text-gold-400 flex-shrink-0 drop-shadow-md" />
          <span className="font-bold tracking-widest text-xs sm:text-sm uppercase whitespace-nowrap relative top-[1px] drop-shadow-md">
            27th & 28th November
          </span>
        </div>
        <div 
          className="flex flex-shrink-0 items-center justify-center gap-3 rounded-full text-slate-100 shadow-lg backdrop-blur-md bg-white/5 border border-gold-500/30 w-max max-w-full transition-colors hover:bg-white/10"
          style={{ padding: '1rem 2.5rem' }}
        >
          <MapPin className="w-5 h-5 text-gold-400 flex-shrink-0 drop-shadow-md" />
          <span className="font-bold tracking-widest text-xs sm:text-sm uppercase whitespace-nowrap relative top-[1px] drop-shadow-md">
            Sheth Vidya Mandir, Vasai (East)
          </span>
        </div>
      </div>

      {/* Managed by ESSSQUBE EVENTS */}
      <p className="text-sm sm:text-base text-slate-400 mb-24 tracking-wider" style={{ marginTop: '20px' }}>
        Managed by{' '}
        <a
          href="https://www.essqube.in/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gold-400 font-bold hover:text-gold-300 transition-colors drop-shadow-sm font-display text-lg sm:text-xl tracking-[0.15em]"
        >
          ESSSQUBE EVENTS
        </a>
      </p>

      {/* Scroll indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-60">
        <ChevronDown className="w-5 h-5 text-gold-400 animate-bounce" />
      </div>
    </div>
  );
}

export default HeroContent;
