import { sponsors } from '../../data/sponsors';
import SectionHeading from '../ui/SectionHeading';
import useScrollReveal from '../../hooks/useScrollReveal';
import { Sparkles } from 'lucide-react';

export function Sponsors() {
  const sectionRef = useScrollReveal();

  return (
    <section
      id="sponsors"
      ref={sectionRef}
      className="section-padding relative overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, var(--color-navy-900) 0%, var(--color-navy-800) 50%, var(--color-navy-900) 100%)',
      }}
    >
      <div className="w-full flex flex-col items-center justify-center relative z-10 px-4 sm:px-6">
        <div className="w-full max-w-5xl flex flex-col items-center">
          <div data-reveal className="w-full">
            <SectionHeading subtitle="Divine allies powering the legends">
              Our Patrons
            </SectionHeading>
          </div>

          {sponsors.length > 0 ? (
            /* Optimized Static Logo Grid - No interactions for performance */
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 sm:gap-8 w-full mt-4">
              {sponsors.map((sponsor) => (
                <div
                  key={sponsor.id}
                  data-reveal
                  className="glass-card flex items-center justify-center p-6 aspect-square"
                  style={{
                    background: 'linear-gradient(145deg, rgba(30,41,59,0.4), rgba(15,23,42,0.6))',
                  }}
                >
                  {/* Logo Container - Optimized for performance */}
                  <div className="w-full h-full flex items-center justify-center">
                    <img
                      src={sponsor.logo}
                      alt={sponsor.name}
                      className="w-full h-full object-contain opacity-90"
                      loading="lazy"
                      decoding="async"
                      style={{
                        maxWidth: '100%',
                        maxHeight: '100%',
                        willChange: 'auto',
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          ) : (
            /* Coming Soon state */
            <div data-reveal className="text-center py-16 w-full flex justify-center">
              <div className="glass-card inline-flex flex-col items-center gap-4 px-12 py-10 animate-pulse-glow">
                <Sparkles className="w-12 h-12 text-gold-400 opacity-60" />
                <p className="text-lg text-slate-300 font-semibold">
                  Sponsors & Collaborators
                </p>
                <p className="text-sm text-slate-500 max-w-xs text-center">
                  Our divine patrons will be revealed soon. Stay tuned for legendary partnerships!
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default Sponsors;
