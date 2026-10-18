import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Calendar, MapPin, Users, Trophy, Shield, Clock, Zap, Target, Award } from 'lucide-react';
import { events } from '../data/events';

export function BGMIPage() {
  const bgmiEvent = events.find(e => e.id === 'bgmi');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!bgmiEvent) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ background: '#0a0e1a' }}>
        <p style={{ color: '#ffffff' }}>Event not found</p>
      </div>
    );
  }

  return (
    <div 
      style={{ 
        minHeight: '100vh',
        background: 'linear-gradient(180deg, #0a0e1a 0%, #111827 50%, #0a0e1a 100%)',
      }}
    >
      {/* Fixed Header - Centered with proper padding */}
      <header 
        style={{ 
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          background: 'rgba(10, 14, 26, 0.98)', 
          backdropFilter: 'blur(16px)', 
          borderBottom: '1px solid rgba(212,168,67,0.15)',
          boxShadow: '0 4px 20px rgba(0,0,0,0.3)'
        }}
      >
        {/* Header Container - Centered with max-width */}
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
          <div style={{ 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'space-between',
            height: '80px'
          }}>
            <Link 
              to="/"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                color: '#94a3b8',
                textDecoration: 'none',
                transition: 'all 0.3s ease'
              }}
            >
              <ArrowLeft style={{ width: '20px', height: '20px' }} />
              <span style={{ fontSize: '14px', fontWeight: 500 }}>Back to Home</span>
            </Link>
            <img 
              src="/SHIVOTSAV_LOGO.png" 
              alt="Shivotsav" 
              style={{ height: '48px' }}
            />
          </div>
        </div>
      </header>

      {/* Main Content - Centered Container */}
      <main style={{ paddingTop: '80px' }}>
        {/* All content wrapped in centered container */}
        <div style={{ 
          maxWidth: '1200px', 
          margin: '0 auto',
          padding: '60px 24px'
        }}>
          
          {/* Hero Section - Centered Text */}
          <section style={{ 
            textAlign: 'center',
            marginBottom: '80px'
          }}>
            {/* Icon Container - Centered */}
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              marginBottom: '32px'
            }}>
              <div style={{
                width: '96px',
                height: '96px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '20px',
                background: 'linear-gradient(135deg, rgba(249, 115, 22, 0.15), rgba(249, 115, 22, 0.05))',
                border: '2px solid rgba(249, 115, 22, 0.3)'
              }}>
                <span style={{ fontSize: '56px' }}>{bgmiEvent.categoryIcon}</span>
              </div>
            </div>

            {/* Title - Centered */}
            <h1 style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(40px, 6vw, 72px)',
              fontWeight: 700,
              color: '#ffffff',
              marginBottom: '16px',
              letterSpacing: '-0.02em',
              lineHeight: 1.1
            }}>
              {bgmiEvent.name}
            </h1>

            {/* Theme Name - Centered */}
            <p style={{
              fontSize: 'clamp(20px, 3vw, 32px)',
              fontStyle: 'italic',
              fontWeight: 500,
              color: '#d4a843',
              marginBottom: '24px',
              textShadow: '0 2px 10px rgba(212,168,67,0.3)'
            }}>
              {bgmiEvent.themeName}
            </p>

            {/* Description - Centered with max-width */}
            <p style={{
              fontSize: 'clamp(16px, 2vw, 20px)',
              color: '#cbd5e1',
              maxWidth: '700px',
              margin: '0 auto 40px auto',
              lineHeight: 1.7
            }}>
              {bgmiEvent.description}
            </p>

            {/* Primary CTA - Centered */}
            <div style={{ 
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '16px'
            }}>
              <a
                href={bgmiEvent.formUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '12px',
                  padding: '20px 48px',
                  borderRadius: '16px',
                  fontSize: '18px',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                  color: '#ffffff',
                  background: 'linear-gradient(135deg, #f97316, #ea580c)',
                  border: 'none',
                  boxShadow: '0 10px 40px rgba(249, 115, 22, 0.4)',
                  cursor: 'pointer',
                  textDecoration: 'none',
                  transition: 'all 0.3s ease'
                }}
              >
                <Shield style={{ width: '24px', height: '24px' }} />
                Register Now
              </a>
              
              <p style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                fontSize: '14px',
                color: '#94a3b8',
                margin: 0
              }}>
                <Zap style={{ width: '16px', height: '16px' }} />
                Limited slots • First come, first served
              </p>
            </div>
          </section>

          {/* Info Cards Grid - Centered with proper gaps */}
          <section style={{ marginBottom: '80px' }}>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: '24px',
              maxWidth: '1000px',
              margin: '0 auto'
            }}>
              {/* Date & Time Card */}
              {bgmiEvent.day && bgmiEvent.time && (
                <div style={{
                  background: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  borderRadius: '16px',
                  padding: '32px 24px',
                  textAlign: 'center',
                  transition: 'all 0.3s ease'
                }}>
                  <Calendar style={{ 
                    width: '40px', 
                    height: '40px', 
                    color: '#d4a843', 
                    margin: '0 auto 16px auto',
                    display: 'block'
                  }} />
                  <p style={{ 
                    fontSize: '11px', 
                    color: '#64748b', 
                    textTransform: 'uppercase', 
                    letterSpacing: '0.1em',
                    fontWeight: 600,
                    marginBottom: '8px'
                  }}>
                    Date & Time
                  </p>
                  <p style={{ 
                    fontSize: '16px', 
                    color: '#ffffff', 
                    fontWeight: 700,
                    marginBottom: '4px'
                  }}>
                    Day {bgmiEvent.day}
                  </p>
                  <p style={{ 
                    fontSize: '14px', 
                    color: '#cbd5e1',
                    margin: 0
                  }}>
                    {bgmiEvent.time}
                  </p>
                </div>
              )}

              {/* Venue Card */}
              {bgmiEvent.venue && (
                <div style={{
                  background: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  borderRadius: '16px',
                  padding: '32px 24px',
                  textAlign: 'center',
                  transition: 'all 0.3s ease'
                }}>
                  <MapPin style={{ 
                    width: '40px', 
                    height: '40px', 
                    color: '#d4a843', 
                    margin: '0 auto 16px auto',
                    display: 'block'
                  }} />
                  <p style={{ 
                    fontSize: '11px', 
                    color: '#64748b', 
                    textTransform: 'uppercase', 
                    letterSpacing: '0.1em',
                    fontWeight: 600,
                    marginBottom: '8px'
                  }}>
                    Venue
                  </p>
                  <p style={{ 
                    fontSize: '16px', 
                    color: '#ffffff', 
                    fontWeight: 700,
                    margin: 0
                  }}>
                    {bgmiEvent.venue}
                  </p>
                </div>
              )}

              {/* Team Size Card */}
              <div style={{
                background: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: '16px',
                padding: '32px 24px',
                textAlign: 'center',
                transition: 'all 0.3s ease'
              }}>
                <Users style={{ 
                  width: '40px', 
                  height: '40px', 
                  color: '#d4a843', 
                  margin: '0 auto 16px auto',
                  display: 'block'
                }} />
                <p style={{ 
                  fontSize: '11px', 
                  color: '#64748b', 
                  textTransform: 'uppercase', 
                  letterSpacing: '0.1em',
                  fontWeight: 600,
                  marginBottom: '8px'
                }}>
                  Team Size
                </p>
                <p style={{ 
                  fontSize: '16px', 
                  color: '#ffffff', 
                  fontWeight: 700,
                  margin: 0
                }}>
                  4 Members
                </p>
              </div>

              {/* Entry Fee Card */}
              <div style={{
                background: 'rgba(249, 115, 22, 0.08)',
                border: '1px solid rgba(249, 115, 22, 0.3)',
                borderRadius: '16px',
                padding: '32px 24px',
                textAlign: 'center',
                transition: 'all 0.3s ease'
              }}>
                <Trophy style={{ 
                  width: '40px', 
                  height: '40px', 
                  color: '#f97316', 
                  margin: '0 auto 16px auto',
                  display: 'block'
                }} />
                <p style={{ 
                  fontSize: '11px', 
                  color: '#fb923c', 
                  textTransform: 'uppercase', 
                  letterSpacing: '0.1em',
                  fontWeight: 600,
                  marginBottom: '8px'
                }}>
                  Entry Fee
                </p>
                <p style={{ 
                  fontSize: '24px', 
                  color: '#ffffff', 
                  fontWeight: 700,
                  margin: 0
                }}>
                  ₹{bgmiEvent.price}
                </p>
              </div>
            </div>
          </section>

          {/* Rules Section - Centered with proper spacing */}
          <section style={{ marginBottom: '60px' }}>
            <div style={{
              background: 'rgba(255, 255, 255, 0.02)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              borderRadius: '24px',
              padding: 'clamp(32px, 5vw, 48px)',
              maxWidth: '900px',
              margin: '0 auto'
            }}>
              {/* Section Header - Centered */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '16px',
                marginBottom: '40px',
                flexWrap: 'wrap'
              }}>
                <div style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: 'linear-gradient(135deg, #f97316, #ea580c)',
                  flexShrink: 0
                }}>
                  <Clock style={{ width: '28px', height: '28px', color: '#ffffff' }} />
                </div>
                <h2 style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: 'clamp(24px, 4vw, 36px)',
                  fontWeight: 700,
                  color: '#ffffff',
                  margin: 0
                }}>
                  Rules & Guidelines
                </h2>
              </div>

              {/* Rules List - Proper spacing */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                {bgmiEvent.rules.map((rule, index) => (
                  <div key={index} style={{
                    display: 'flex',
                    gap: '16px',
                    alignItems: 'flex-start'
                  }}>
                    <span style={{
                      width: '32px',
                      height: '32px',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      fontSize: '14px',
                      fontWeight: 700,
                      background: 'linear-gradient(135deg, rgba(249, 115, 22, 0.2), rgba(249, 115, 22, 0.1))',
                      color: '#f97316',
                      border: '1.5px solid rgba(249, 115, 22, 0.4)'
                    }}>
                      {index + 1}
                    </span>
                    <p style={{
                      fontSize: 'clamp(14px, 2vw, 16px)',
                      color: '#cbd5e1',
                      lineHeight: 1.7,
                      margin: '6px 0 0 0',
                      flex: 1
                    }}>
                      {rule}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Pro Tips Section - Centered with proper spacing */}
          <section style={{ marginBottom: '60px' }}>
            <div style={{
              background: 'linear-gradient(135deg, rgba(249, 115, 22, 0.08), rgba(249, 115, 22, 0.03))',
              border: '1px solid rgba(249, 115, 22, 0.25)',
              borderRadius: '24px',
              padding: 'clamp(32px, 5vw, 48px)',
              maxWidth: '900px',
              margin: '0 auto'
            }}>
              {/* Section Header - Centered */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '16px',
                marginBottom: '32px',
                flexWrap: 'wrap'
              }}>
                <div style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: 'linear-gradient(135deg, #fbbf24, #f59e0b)',
                  flexShrink: 0
                }}>
                  <Target style={{ width: '28px', height: '28px', color: '#0a0e1a' }} />
                </div>
                <h3 style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: 'clamp(20px, 3.5vw, 28px)',
                  fontWeight: 700,
                  color: '#fb923c',
                  margin: 0
                }}>
                  Pro Tips for Victory
                </h3>
              </div>

              {/* Tips Grid - Centered */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                gap: '20px'
              }}>
                {[
                  { icon: '🎯', text: 'Communication is key - Use voice chat effectively' },
                  { icon: '🪂', text: 'Land smartly - Choose drop locations wisely' },
                  { icon: '⚡', text: 'Loot fast - Time management is crucial' },
                  { icon: '🎮', text: 'Play zone - Always be aware of the circle' }
                ].map((tip, index) => (
                  <div key={index} style={{
                    display: 'flex',
                    gap: '12px',
                    alignItems: 'flex-start',
                    padding: '20px',
                    borderRadius: '12px',
                    background: 'rgba(255, 255, 255, 0.03)',
                    border: '1px solid rgba(249, 115, 22, 0.15)'
                  }}>
                    <span style={{ fontSize: '24px', flexShrink: 0 }}>{tip.icon}</span>
                    <p style={{
                      fontSize: '14px',
                      color: '#cbd5e1',
                      lineHeight: 1.6,
                      margin: '2px 0 0 0'
                    }}>
                      {tip.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Final CTA Section - Centered */}
          <section>
            <div style={{
              background: 'linear-gradient(135deg, rgba(249, 115, 22, 0.15), rgba(249, 115, 22, 0.05))',
              border: '1px solid rgba(249, 115, 22, 0.3)',
              borderRadius: '24px',
              padding: 'clamp(40px, 6vw, 60px)',
              textAlign: 'center',
              maxWidth: '800px',
              margin: '0 auto'
            }}>
              <Award style={{ 
                width: '64px', 
                height: '64px', 
                color: '#f97316', 
                margin: '0 auto 24px auto',
                display: 'block'
              }} />
              
              <h3 style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(24px, 4vw, 32px)',
                fontWeight: 700,
                color: '#ffffff',
                marginBottom: '16px'
              }}>
                Ready to Claim Victory?
              </h3>
              
              <p style={{
                fontSize: 'clamp(14px, 2vw, 18px)',
                color: '#cbd5e1',
                marginBottom: '32px',
                maxWidth: '600px',
                margin: '0 auto 32px auto',
                lineHeight: 1.6
              }}>
                Join the ultimate Battle Royale tournament. Prove your skills, dominate the battlefield, and claim your chicken dinner!
              </p>
              
              <a
                href={bgmiEvent.formUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '12px',
                  padding: '20px 48px',
                  borderRadius: '16px',
                  fontSize: '18px',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                  color: '#ffffff',
                  background: 'linear-gradient(135deg, #f97316, #ea580c)',
                  border: 'none',
                  boxShadow: '0 12px 48px rgba(249, 115, 22, 0.5)',
                  cursor: 'pointer',
                  textDecoration: 'none',
                  transition: 'all 0.3s ease'
                }}
              >
                <Shield style={{ width: '24px', height: '24px' }} />
                Register Your Squad Now
              </a>
              
              <p style={{
                fontSize: '13px',
                color: '#94a3b8',
                marginTop: '24px',
                margin: '24px 0 0 0'
              }}>
                Questions? Contact Gaming & Sports Department or visit the Registration Desk
              </p>
            </div>
          </section>
        </div>
      </main>

      {/* Footer Spacing */}
      <div style={{ height: '60px' }}></div>
    </div>
  );
}

export default BGMIPage;
