import useScrollReveal from '../hooks/useScrollReveal';
import SectionHeading from './ui/SectionHeading';

export function About() {
  const sectionRef = useScrollReveal();

  return (
    <section
      id="about"
      ref={sectionRef}
      className="section-padding relative overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, var(--color-navy-900) 0%, rgba(17,24,39,0.95) 50%, var(--color-navy-900) 100%)',
      }}
    >
      {/* Ambient gold glow */}
      <div
        className="absolute top-1/3 left-1/4 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(212,168,67,0.06), transparent)', filter: 'blur(100px)' }}
      />

      {/* Bulletproof Centering Wrapper */}
      <div className="w-full flex flex-col items-center justify-center relative z-10 px-4 sm:px-6">
        
        {/* Inner Constraints */}
        <div className="w-full max-w-5xl flex flex-col items-center">
          <SectionHeading subtitle="Where legends gather and talents ignite">
            The Saga Begins
          </SectionHeading>

          <div 
            className="w-full grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-14 mt-16 sm:mt-24"
            style={{ marginTop: '4rem' }}
          >
            {/* About the College */}
            <div data-reveal className="glass-card overflow-hidden w-full group relative flex flex-col h-full">
              {/* Animated top accent */}
              <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-transparent via-gold-500 to-transparent opacity-70 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Subtle background glow */}
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gold-900/10 via-navy-950/20 to-transparent pointer-events-none opacity-50 group-hover:opacity-100 transition-opacity duration-700" />

              <div className="flex flex-col flex-grow relative z-10 box-border" style={{ padding: '3rem' }}>
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 mb-8">
                  <div className="w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg transform group-hover:scale-105 transition-transform duration-500 flex-shrink-0"
                    style={{ background: 'linear-gradient(135deg, rgba(212,168,67,0.15), rgba(212,168,67,0.05))', border: '1px solid rgba(212,168,67,0.25)' }}
                  >
                    <img
                      src="/SVM_COLLEGE_LOGO.png"
                      alt="Sheth Vidya Mandir Crest"
                      className="w-10 h-10 object-contain drop-shadow-md"
                      loading="lazy"
                    />
                  </div>
                  <div>
                    <h3 className="font-display text-2xl sm:text-3xl gradient-text-gold font-bold tracking-wide mb-1">
                      The College
                    </h3>
                    <p className="text-gold-400/60 text-xs tracking-[0.2em] uppercase font-bold">
                      Sheth Vidya Mandir
                    </p>
                  </div>
                </div>
                <p className="text-slate-300/90 leading-[1.8] text-[0.95rem] sm:text-base text-justify font-light flex-grow">
                  Education plays a pivotal role in the progress of society, with the right educational
                  institution nurturing the potential of future generations. In pursuit of this goal,
                  Sheth Vasantben Natwarlal Charitable Trust founded Sheth Vidya Mandir in 1997 at
                  Vasant Nagri, Vasai (East). Accredited by the CBSE, New Delhi and by the Maharashtra 
                  State Secondary and Higher Secondary Board, Pune. Our English-medium school is 
                  committed to delivering top-notch education. Our emphasis lies in comprehensive growth, 
                  ensuring contentment for both students and parents as we strive to enhance our community.
                </p>
              </div>
            </div>

            {/* About Shivotsav */}
            <div data-reveal className="glass-card overflow-hidden w-full group relative flex flex-col h-full">
              {/* Animated top accent */}
              <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-transparent via-red-cta to-transparent opacity-70 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Subtle background glow */}
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-red-cta/10 via-navy-950/20 to-transparent pointer-events-none opacity-50 group-hover:opacity-100 transition-opacity duration-700" />

              <div className="flex flex-col flex-grow relative z-10 box-border" style={{ padding: '3rem' }}>
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 mb-8">
                  <div className="w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg transform group-hover:scale-105 transition-transform duration-500 flex-shrink-0"
                    style={{ background: 'linear-gradient(135deg, rgba(232,25,26,0.15), rgba(232,25,26,0.05))', border: '1px solid rgba(232,25,26,0.25)' }}
                  >
                    <img
                      src="/SHIVOTSAV_LOGO.png"
                      alt="Shivotsav Logo"
                      className="w-10 h-10 object-contain drop-shadow-md"
                      loading="lazy"
                    />
                  </div>
                  <div>
                    <h3 className="font-display text-2xl sm:text-3xl gradient-text-gold font-bold tracking-wide mb-1">
                      The Festival
                    </h3>
                    <p className="text-red-cta/80 text-xs tracking-[0.2em] uppercase font-bold">
                      Shivotsav '26
                    </p>
                  </div>
                </div>
                <p className="text-slate-300/90 leading-[1.8] text-[0.95rem] sm:text-base text-justify font-light flex-grow">
                  Sheth Vidya Mandir buzzes with a vibrant talent festival, showcasing a diverse range
                  of activities. From performing arts and fine arts to sports, e-sports, informal
                  gatherings, and literature, the campus is alive with creativity and energy. Students
                  captivate audiences with dramatic performances and musical displays.
                  The fine arts exhibitions reveal their artistic visions, while athletic fields pulsate 
                  with competitive spirit. Gamers exhibit strategic prowess in esports contests, and 
                  literary events honor the influence of words and ideas. This dynamic event showcases 
                  the diverse talents of our students, promoting community spirit and artistic exploration.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
