import { useEffect, useRef, useState } from 'react';
import useScrollReveal from '../hooks/useScrollReveal';
import SectionHeading from './ui/SectionHeading';
import { Trophy, Crown, Award, Sparkles } from 'lucide-react';

export function Podium() {
  const sectionRef = useScrollReveal();
  const [isVisible, setIsVisible] = useState(false);
  const counterRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  // Awards data
  const cashAwards = [
    {
      title: 'Overall Best College',
      amount: 10000,
      icon: Crown,
      rank: 1,
      gradient: 'from-yellow-400 via-amber-500 to-yellow-600',
      glowColor: 'rgba(251, 191, 36, 0.3)',
    },
    {
      title: 'Overall Best College',
      subtitle: '1st Runner Up',
      amount: 7500,
      icon: Trophy,
      rank: 2,
      gradient: 'from-slate-300 via-slate-400 to-slate-500',
      glowColor: 'rgba(203, 213, 225, 0.25)',
    },
    {
      title: 'Overall Best College',
      subtitle: '2nd Runner Up',
      amount: 5000,
      icon: Trophy,
      rank: 3,
      gradient: 'from-orange-400 via-amber-600 to-orange-700',
      glowColor: 'rgba(251, 146, 60, 0.25)',
    },
    {
      title: 'Best Contingent Leader',
      amount: 2000,
      icon: Award,
      gradient: 'from-purple-400 via-purple-500 to-purple-600',
      glowColor: 'rgba(192, 132, 252, 0.2)',
    },
    {
      title: 'Best PR',
      amount: 2000,
      icon: Award,
      gradient: 'from-pink-400 via-rose-500 to-pink-600',
      glowColor: 'rgba(244, 114, 182, 0.2)',
    },
  ];

  const trophyCategories = [
    {
      name: 'Performing Arts',
      icon: '🎭',
      color: 'var(--color-cat-performing)',
      description: 'Dance, Music, Drama',
    },
    {
      name: 'Fine Arts',
      icon: '🎨',
      color: 'var(--color-cat-finearts)',
      description: 'Painting, Sculpture, Design',
    },
    {
      name: 'Literary Arts',
      icon: '📚',
      color: 'var(--color-cat-literary)',
      description: 'Poetry, Debate, Writing',
    },
    {
      name: 'Informals',
      icon: '🎪',
      color: 'var(--color-cat-informals)',
      description: 'Fun Events & Activities',
    },
    {
      name: 'Sports & Gaming',
      icon: '🏆',
      color: 'var(--color-cat-gaming)',
      description: 'Athletics & E-Sports',
    },
  ];

  return (
    <section
      id="podium"
      ref={sectionRef}
      className="section-padding relative overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, var(--color-navy-900) 0%, #050812 50%, var(--color-navy-900) 100%)',
      }}
    >
      {/* Mythological Background Effects */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Divine radiance */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full opacity-10"
          style={{
            background: 'radial-gradient(circle, rgba(251,191,36,0.4), rgba(232,25,26,0.2), transparent)',
            filter: 'blur(120px)',
          }}
        />
        
        {/* Side glows */}
        <div
          className="absolute top-1/3 -left-40 w-[600px] h-[600px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(212,168,67,0.08), transparent)',
            filter: 'blur(100px)',
          }}
        />
        <div
          className="absolute bottom-1/4 -right-40 w-[600px] h-[600px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(232,25,26,0.06), transparent)',
            filter: 'blur(100px)',
          }}
        />

        {/* Floating particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-gold-400 rounded-full animate-float opacity-30"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${4 + Math.random() * 4}s`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="w-full flex flex-col items-center justify-center relative z-10 px-4 sm:px-6">
        <div className="w-full max-w-7xl flex flex-col items-center">
          
          {/* Section Heading */}
          <div style={{ marginBottom: '5px' }}>
            <SectionHeading subtitle="Where champions rise and legends are crowned">
              The Podium
            </SectionHeading>
          </div>

          {/* Prize Pool Banner */}
          <div
            ref={counterRef}
            data-reveal
            className="mt-16 sm:mt-20 relative group"
            style={{ paddingTop: '5px' }}
          >
            <div
              className="absolute inset-0 blur-2xl opacity-50 group-hover:opacity-70 transition-opacity duration-700"
              style={{
                background: 'linear-gradient(90deg, rgba(251,191,36,0.3), rgba(232,25,26,0.3), rgba(251,191,36,0.3))',
              }}
            />
            <div
              className="relative glass-card px-8 sm:px-16 py-8 sm:py-10 text-center overflow-hidden"
              style={{
                borderWidth: '2px',
                borderImage: 'linear-gradient(90deg, transparent, rgba(251,191,36,0.5), transparent) 1',
              }}
            >
              <Sparkles className="absolute top-4 left-4 w-6 h-6 text-gold-400 opacity-60 animate-pulse" />
              <Sparkles className="absolute bottom-4 right-4 w-6 h-6 text-gold-400 opacity-60 animate-pulse" style={{ animationDelay: '1s' }} />
              
              <p className="text-gold-400/70 text-sm sm:text-base tracking-[0.3em] uppercase font-bold mb-3 font-display">
                Total Prize Pool
              </p>
              <div className="font-display text-5xl sm:text-6xl md:text-7xl font-bold gradient-text-gold mb-2">
                {isVisible && (
                  <AnimatedNumber target={75000} prefix="₹" suffix="+" duration={2000} />
                )}
              </div>
              <p className="text-slate-400 text-xs sm:text-sm tracking-wider">
                In Cash Prizes & Trophies
              </p>
            </div>
          </div>

          {/* Cash Prize Cards */}
          <div className="mt-20 sm:mt-28 w-full">
            <h3
              data-reveal
              className="text-center font-heading text-2xl sm:text-3xl lg:text-4xl gradient-text-gold tracking-wide"
              style={{ paddingTop: '3px', paddingBottom: '3px' }}
            >
              Victory Rewards
            </h3>
            
            {/* Additional spacing before cards */}
            <div className="h-6 sm:h-8" />
            
            {/* Grid wrapper with proper clearing */}
            <div className="w-full clear-both">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 max-w-7xl mx-auto">
                {cashAwards.map((award, index) => (
                  <AwardCard key={index} award={award} index={index} />
                ))}
              </div>
            </div>
          </div>

          {/* Spacer to ensure proper separation */}
          <div className="w-full h-16 sm:h-24" />

          {/* Trophy Categories Section - Complete */}
          <div className="w-full clear-both" style={{ position: 'relative', zIndex: 1 }}>
            <h3
              data-reveal
              className="text-center font-heading text-2xl sm:text-3xl lg:text-4xl gradient-text-gold mb-6 tracking-wide"
            >
              Championship Trophies
            </h3>
            <div className="w-full flex justify-center mb-20 sm:mb-24">
              <p
                data-reveal
                className="text-center text-slate-400 text-sm sm:text-base px-4"
                style={{ maxWidth: '42rem' }}
              >
                Five legendary trophies await the most dominant departments
              </p>
            </div>

            {/* Trophy Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-8 max-w-7xl mx-auto">
              {trophyCategories.map((category, index) => (
                <TrophyCard key={index} category={category} index={index} />
              ))}
            </div>
          </div>

          {/* Spacing Between Sections */}
          <div style={{ height: '6rem' }} />

          {/* Bottom CTA Message - Separate Section */}
          <div
            data-reveal
            className="w-full flex justify-center"
            style={{ position: 'relative', zIndex: 2, paddingTop: '2rem' }}
          >
            <div className="max-w-3xl px-4 text-center">
              <p className="text-slate-300/80 text-base sm:text-lg leading-relaxed font-light text-center">
                Step into the arena, unleash your talent, and etch your name in the annals of glory.
                <span className="block mt-2 text-gold-400 font-heading font-semibold tracking-wide">
                  The legends await your awakening.
                </span>
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

// Animated Number Component
function AnimatedNumber({ target, prefix = '', suffix = '', duration = 2000 }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime;
    let animationFrame;

    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeOutQuart * target));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [target, duration]);

  return (
    <span>
      {prefix}{count.toLocaleString('en-IN')}{suffix}
    </span>
  );
}

// Award Card Component
function AwardCard({ award, index }) {
  const Icon = award.icon;
  
  return (
    <div
      data-reveal
      className="glass-card group relative overflow-hidden w-full flex flex-col"
      style={{
        padding: '2rem 1.75rem',
        background: 'linear-gradient(145deg, rgba(17,24,39,0.8), rgba(10,14,26,0.9))',
        minHeight: '320px',
      }}
    >
      {/* Rank Badge for Top 3 */}
      {award.rank && (
        <div
          className="absolute top-4 right-4 w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm border-2 z-10"
          style={{
            background: `linear-gradient(135deg, ${award.gradient.replace('from-', '').replace('via-', '').replace('to-', '').split(' ')[0]}, ${award.gradient.split(' ').pop()})`,
            borderColor: 'rgba(255,255,255,0.3)',
            boxShadow: `0 4px 20px ${award.glowColor}`,
          }}
        >
          #{award.rank}
        </div>
      )}

      {/* Icon */}
      <div
        className="w-16 h-16 rounded-xl flex items-center justify-center mb-5 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 flex-shrink-0"
        style={{
          background: `linear-gradient(135deg, ${award.gradient.replace('from-', '').replace('via-', '').replace('to-', '').split(' ')[0]}, transparent)`,
          border: '1px solid rgba(255,255,255,0.15)',
          boxShadow: `0 8px 32px ${award.glowColor}`,
        }}
      >
        <Icon className="w-8 h-8 text-white drop-shadow-lg" />
      </div>

      {/* Title - Fixed height container */}
      <div style={{ minHeight: '5rem' }} className="flex flex-col">
        <h4 className="font-heading text-lg sm:text-xl lg:text-2xl text-white mb-1 tracking-wide leading-tight">
          {award.title}
        </h4>
        <div className="h-6 flex items-start">
          {award.subtitle && (
            <p className="text-slate-400 text-xs sm:text-sm tracking-wide">
              {award.subtitle}
            </p>
          )}
        </div>
      </div>

      {/* Spacer to push prize amount to bottom */}
      <div className="flex-grow min-h-[2rem]" />

      {/* Prize Amount */}
      <div className="mt-auto pt-4 border-t border-white/10">
        <p className="text-gold-400/60 text-xs uppercase tracking-widest mb-1 font-bold">
          Prize Money
        </p>
        <p className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold gradient-text-gold">
          ₹{award.amount.toLocaleString('en-IN')}
        </p>
      </div>

      {/* Hover Glow Effect */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
        style={{
          background: `radial-gradient(circle at center, ${award.glowColor}, transparent)`,
        }}
      />
    </div>
  );
}

// Trophy Card Component
function TrophyCard({ category, index }) {
  return (
    <div
      data-reveal
      className="glass-card group relative overflow-hidden text-center flex flex-col justify-between w-full"
      style={{
        padding: '2rem 1.5rem',
        background: 'linear-gradient(145deg, rgba(17,24,39,0.6), rgba(10,14,26,0.8))',
        minHeight: '240px',
      }}
    >
      {/* Animated top border */}
      <div
        className="absolute top-0 left-0 w-full h-1 opacity-70 group-hover:opacity-100 transition-opacity duration-500"
        style={{ background: `linear-gradient(90deg, transparent, ${category.color}, transparent)` }}
      />

      {/* Top content */}
      <div className="flex flex-col items-center">
        {/* Icon */}
        <div
          className="text-5xl sm:text-6xl mb-5 transform group-hover:scale-125 group-hover:-rotate-12 transition-all duration-500"
          style={{
            filter: `drop-shadow(0 4px 20px ${category.color}80)`,
          }}
        >
          {category.icon}
        </div>

        {/* Name */}
        <h4
          className="font-heading text-base sm:text-lg lg:text-xl mb-3 tracking-wide font-bold px-2 leading-tight"
          style={{ color: category.color }}
        >
          {category.name}
        </h4>

        {/* Description */}
        <p className="text-slate-400 text-xs sm:text-sm leading-relaxed px-1 mb-4">
          {category.description}
        </p>
      </div>

      {/* Trophy Badge - pushed to bottom */}
      <div className="mt-auto pt-4 border-t border-white/5">
        <Trophy
          className="w-5 h-5 mx-auto opacity-60 group-hover:opacity-100 transition-opacity"
          style={{ color: category.color }}
        />
      </div>

      {/* Hover Glow */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
        style={{
          background: `radial-gradient(circle at center, ${category.color}15, transparent)`,
        }}
      />
    </div>
  );
}

export default Podium;
