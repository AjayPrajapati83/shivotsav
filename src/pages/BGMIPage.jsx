import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Calendar, MapPin, Users, Trophy, Shield, Clock, Zap, Target, Award, Phone, Smartphone, TabletSmartphone, Gamepad2, Monitor } from 'lucide-react';
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
      {/* Fixed Header */}
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

      {/* Main Content */}
      <main style={{ paddingTop: '80px' }}>
        <div style={{ 
          maxWidth: '1200px', 
          margin: '0 auto',
          padding: '60px 24px'
        }}>
          
          {/* Hero Section */}
          <section style={{ 
            textAlign: 'center',
            marginBottom: '60px'
          }}>
            {/* Icon */}
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              marginBottom: '24px'
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
                <span style={{ fontSize: '56px' }}>🎮</span>
              </div>
            </div>

            {/* Title */}
            <h1 style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(32px, 8vw, 72px)',
              fontWeight: 700,
              color: '#ffffff',
              marginBottom: '12px',
              letterSpacing: '-0.02em',
              lineHeight: 1.2,
              padding: '0 16px'
            }}>
              BGMI Tournament
            </h1>

            <p style={{
              fontSize: 'clamp(18px, 4vw, 32px)',
              fontStyle: 'italic',
              fontWeight: 500,
              color: '#d4a843',
              marginBottom: '12px',
              textShadow: '0 2px 10px rgba(212,168,67,0.3)',
              lineHeight: 1.3,
              padding: '0 16px'
            }}>
              Battle of Valhalla
            </p>

            {/* Managed by badge */}
            <p style={{
              fontSize: 'clamp(13px, 2vw, 14px)',
              color: '#94a3b8',
              marginBottom: '20px',
              lineHeight: 1.5,
              padding: '0 16px'
            }}>
              Managed by <span style={{ color: '#d4a843', fontWeight: 600 }}>ESSQUBE Events</span>
            </p>

            {/* Description */}
            <p style={{
              fontSize: 'clamp(15px, 2.5vw, 20px)',
              color: '#cbd5e1',
              maxWidth: '700px',
              margin: '0 auto 28px auto',
              lineHeight: 1.6,
              padding: '0 20px'
            }}>
              Drop in, loot up, and survive the ultimate battle royale to claim your chicken dinner! 🍗
            </p>

            {/* CTA Button - Mobile optimized with 48px min height */}
            <a
              href={bgmiEvent.formUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '10px',
                padding: '16px 32px',
                minHeight: '48px',
                minWidth: '200px',
                borderRadius: '12px',
                fontSize: 'clamp(14px, 2.5vw, 18px)',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                color: '#ffffff',
                background: 'linear-gradient(135deg, #f97316, #ea580c)',
                border: 'none',
                boxShadow: '0 8px 32px rgba(249, 115, 22, 0.4)',
                cursor: 'pointer',
                textDecoration: 'none',
                transition: 'all 0.3s ease',
                margin: '0 16px'
              }}
            >
              <Shield style={{ width: '20px', height: '20px', flexShrink: 0 }} />
              <span style={{ whiteSpace: 'nowrap' }}>Register Your Squad</span>
            </a>
          </section>

          {/* Prize Pool Section - NEW */}
          <section style={{ marginBottom: '60px' }}>
            <div style={{
              background: 'linear-gradient(135deg, rgba(249, 115, 22, 0.15), rgba(34, 197, 94, 0.1))',
              border: '2px solid rgba(249, 115, 22, 0.4)',
              borderRadius: '24px',
              padding: 'clamp(32px, 5vw, 48px)',
              textAlign: 'center'
            }}>
              <h2 style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(22px, 5vw, 42px)',
                fontWeight: 700,
                color: '#ffffff',
                marginBottom: '12px',
                textTransform: 'uppercase',
                letterSpacing: '0.02em',
                lineHeight: 1.3,
                padding: '0 16px'
              }}>
                💰 Prize Pool: ₹15,000/- 💰
              </h2>
              
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: '24px',
                marginTop: '32px',
                maxWidth: '800px',
                margin: '32px auto 0 auto'
              }}>
                {/* 1st Place */}
                <div style={{
                  background: 'rgba(255, 215, 0, 0.1)',
                  border: '2px solid rgba(255, 215, 0, 0.4)',
                  borderRadius: '16px',
                  padding: '20px 16px',
                  textAlign: 'center',
                  minHeight: '140px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center'
                }}>
                  <div style={{ fontSize: 'clamp(40px, 8vw, 48px)', marginBottom: '8px', lineHeight: 1 }}>🥇</div>
                  <p style={{ fontSize: 'clamp(12px, 2vw, 14px)', color: '#fbbf24', fontWeight: 600, marginBottom: '8px', letterSpacing: '0.05em' }}>1ST PLACE</p>
                  <p style={{ fontSize: 'clamp(26px, 5vw, 32px)', color: '#ffffff', fontWeight: 700, margin: 0, lineHeight: 1 }}>₹8,000</p>
                </div>

                {/* 2nd Place */}
                <div style={{
                  background: 'rgba(192, 192, 192, 0.1)',
                  border: '2px solid rgba(192, 192, 192, 0.4)',
                  borderRadius: '16px',
                  padding: '20px 16px',
                  textAlign: 'center',
                  minHeight: '140px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center'
                }}>
                  <div style={{ fontSize: 'clamp(40px, 8vw, 48px)', marginBottom: '8px', lineHeight: 1 }}>🥈</div>
                  <p style={{ fontSize: 'clamp(12px, 2vw, 14px)', color: '#cbd5e1', fontWeight: 600, marginBottom: '8px', letterSpacing: '0.05em' }}>2ND PLACE</p>
                  <p style={{ fontSize: 'clamp(26px, 5vw, 32px)', color: '#ffffff', fontWeight: 700, margin: 0, lineHeight: 1 }}>₹5,000</p>
                </div>

                {/* 3rd Place */}
                <div style={{
                  background: 'rgba(205, 127, 50, 0.1)',
                  border: '2px solid rgba(205, 127, 50, 0.4)',
                  borderRadius: '16px',
                  padding: '20px 16px',
                  textAlign: 'center',
                  minHeight: '140px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center'
                }}>
                  <div style={{ fontSize: 'clamp(40px, 8vw, 48px)', marginBottom: '8px', lineHeight: 1 }}>🥉</div>
                  <p style={{ fontSize: 'clamp(12px, 2vw, 14px)', color: '#fb923c', fontWeight: 600, marginBottom: '8px', letterSpacing: '0.05em' }}>3RD PLACE</p>
                  <p style={{ fontSize: 'clamp(26px, 5vw, 32px)', color: '#ffffff', fontWeight: 700, margin: 0, lineHeight: 1 }}>₹2,000</p>
                </div>
              </div>
            </div>
          </section>

          {/* Why Join Section - NEW */}
          <section style={{ marginBottom: '60px' }}>
            <div style={{
              background: 'rgba(255, 255, 255, 0.02)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              borderRadius: '24px',
              padding: 'clamp(32px, 5vw, 48px)',
              maxWidth: '900px',
              margin: '0 auto'
            }}>
              <h2 style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(22px, 4vw, 36px)',
                fontWeight: 700,
                color: '#ffffff',
                marginBottom: '24px',
                textAlign: 'center',
                lineHeight: 1.3,
                padding: '0 16px'
              }}>
                Why Should You Join?
              </h2>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div style={{
                  display: 'flex',
                  gap: '14px',
                  alignItems: 'flex-start',
                  padding: '18px 16px',
                  background: 'rgba(249, 115, 22, 0.08)',
                  borderRadius: '12px',
                  border: '1px solid rgba(249, 115, 22, 0.2)',
                  minHeight: '56px'
                }}>
                  <span style={{ fontSize: 'clamp(28px, 6vw, 32px)', flexShrink: 0, lineHeight: 1 }}>💰</span>
                  <p style={{
                    fontSize: 'clamp(14px, 2.5vw, 16px)',
                    color: '#cbd5e1',
                    margin: '2px 0 0 0',
                    flex: 1,
                    lineHeight: 1.6
                  }}>
                    <strong style={{ color: '#f97316' }}>Entry only ₹300/squad</strong> (4 Players = Full Squad)
                  </p>
                </div>

                <div style={{
                  display: 'flex',
                  gap: '14px',
                  alignItems: 'flex-start',
                  padding: '18px 16px',
                  background: 'rgba(34, 197, 94, 0.08)',
                  borderRadius: '12px',
                  border: '1px solid rgba(34, 197, 94, 0.2)',
                  minHeight: '56px'
                }}>
                  <Smartphone style={{ width: 'clamp(28px, 6vw, 32px)', height: 'clamp(28px, 6vw, 32px)', color: '#22c55e', flexShrink: 0 }} />
                  <p style={{
                    fontSize: 'clamp(14px, 2.5vw, 16px)',
                    color: '#cbd5e1',
                    margin: '2px 0 0 0',
                    flex: 1,
                    lineHeight: 1.6
                  }}>
                    <strong style={{ color: '#22c55e' }}>Mobile Only</strong> | No iPad, No PC Players
                  </p>
                </div>

                <div style={{
                  display: 'flex',
                  gap: '14px',
                  alignItems: 'flex-start',
                  padding: '18px 16px',
                  background: 'rgba(139, 92, 246, 0.08)',
                  borderRadius: '12px',
                  border: '1px solid rgba(139, 92, 246, 0.2)',
                  minHeight: '56px'
                }}>
                  <span style={{ fontSize: 'clamp(28px, 6vw, 32px)', flexShrink: 0, lineHeight: 1 }}>🔥</span>
                  <p style={{
                    fontSize: 'clamp(14px, 2.5vw, 16px)',
                    color: '#cbd5e1',
                    margin: '2px 0 0 0',
                    flex: 1,
                    lineHeight: 1.6
                  }}>
                    <strong style={{ color: '#8b5cf6' }}>LAN Finals</strong> - Real Esports Experience at SVM College!
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Tournament Format Section - NEW */}
          <section style={{ marginBottom: '60px' }}>
            <div style={{
              background: 'rgba(255, 255, 255, 0.02)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              borderRadius: '24px',
              padding: 'clamp(32px, 5vw, 48px)',
              maxWidth: '900px',
              margin: '0 auto'
            }}>
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
                  <Trophy style={{ width: '28px', height: '28px', color: '#ffffff' }} />
                </div>
                <h2 style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: 'clamp(24px, 4vw, 36px)',
                  fontWeight: 700,
                  color: '#ffffff',
                  margin: 0
                }}>
                  Tournament Format
                </h2>
              </div>

              {/* Round 1 */}
              <div style={{
                marginBottom: '32px',
                padding: '24px',
                background: 'rgba(249, 115, 22, 0.05)',
                borderLeft: '4px solid #f97316',
                borderRadius: '12px'
              }}>
                <h3 style={{
                  fontSize: 'clamp(18px, 3vw, 24px)',
                  color: '#f97316',
                  fontWeight: 700,
                  marginBottom: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px'
                }}>
                  <span style={{
                    width: '32px',
                    height: '32px',
                    background: '#f97316',
                    color: '#ffffff',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '16px',
                    fontWeight: 700,
                    flexShrink: 0
                  }}>1</span>
                  ROUND 1 - ONLINE QUALIFIERS
                </h3>
                <p style={{ fontSize: '14px', color: '#94a3b8', marginBottom: '12px' }}>From 22nd November</p>
                <ul style={{ margin: 0, paddingLeft: '20px', color: '#cbd5e1', fontSize: 'clamp(14px, 2vw, 16px)', lineHeight: 1.7 }}>
                  <li>Total 8 Groups will be formed</li>
                  <li>Each group will have max 20 squads (depending on registrations)</li>
                  <li><strong style={{ color: '#f97316' }}>Top 4 Teams from each group will qualify</strong></li>
                </ul>
              </div>

              {/* Round 2 */}
              <div style={{
                marginBottom: '32px',
                padding: '24px',
                background: 'rgba(139, 92, 246, 0.05)',
                borderLeft: '4px solid #8b5cf6',
                borderRadius: '12px'
              }}>
                <h3 style={{
                  fontSize: 'clamp(18px, 3vw, 24px)',
                  color: '#8b5cf6',
                  fontWeight: 700,
                  marginBottom: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px'
                }}>
                  <span style={{
                    width: '32px',
                    height: '32px',
                    background: '#8b5cf6',
                    color: '#ffffff',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '16px',
                    fontWeight: 700,
                    flexShrink: 0
                  }}>2</span>
                  ROUND 2 - ONLINE SEMI-FINALS
                </h3>
                <ul style={{ margin: 0, paddingLeft: '20px', color: '#cbd5e1', fontSize: 'clamp(14px, 2vw, 16px)', lineHeight: 1.7 }}>
                  <li>32 Qualified Teams divided into 2 Groups (16 Teams each)</li>
                  <li>Each group will play 3 Matches</li>
                  <li><strong style={{ color: '#8b5cf6' }}>Top 8 Teams from each group will qualify for Finals</strong></li>
                </ul>
              </div>

              {/* Round 3 - Grand Finale */}
              <div style={{
                padding: '24px',
                background: 'linear-gradient(135deg, rgba(255, 215, 0, 0.1), rgba(249, 115, 22, 0.1))',
                border: '2px solid rgba(255, 215, 0, 0.4)',
                borderRadius: '12px'
              }}>
                <h3 style={{
                  fontSize: 'clamp(18px, 3vw, 24px)',
                  color: '#fbbf24',
                  fontWeight: 700,
                  marginBottom: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px'
                }}>
                  <span style={{
                    width: '32px',
                    height: '32px',
                    background: 'linear-gradient(135deg, #fbbf24, #f59e0b)',
                    color: '#0a0e1a',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '16px',
                    fontWeight: 700,
                    flexShrink: 0
                  }}>3</span>
                  ROUND 3 - GRAND FINALE 🏆
                </h3>
                <p style={{ fontSize: '14px', color: '#fbbf24', fontWeight: 600, marginBottom: '12px' }}>
                  📅 27th November @ SVM College, Vasai
                </p>
                <ul style={{ margin: 0, paddingLeft: '20px', color: '#cbd5e1', fontSize: 'clamp(14px, 2vw, 16px)', lineHeight: 1.7 }}>
                  <li><strong style={{ color: '#fbbf24' }}>Top 16 Teams battle in 6 Finale Matches - OFFLINE!</strong></li>
                  <li>Real LAN esports experience</li>
                  <li>Live audience and commentary</li>
                  <li>Winners crowned on stage! 🎉</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Who Can Participate - NEW */}
          <section style={{ marginBottom: '60px' }}>
            <div style={{
              background: 'rgba(255, 255, 255, 0.02)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              borderRadius: '24px',
              padding: 'clamp(32px, 5vw, 48px)',
              maxWidth: '900px',
              margin: '0 auto'
            }}>
              <h2 style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(24px, 4vw, 36px)',
                fontWeight: 700,
                color: '#ffffff',
                marginBottom: '32px',
                textAlign: 'center'
              }}>
                👥 Who Can Participate?
              </h2>

              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                gap: '24px'
              }}>
                {/* College Contingent */}
                <div style={{
                  padding: '24px',
                  background: 'rgba(34, 197, 94, 0.08)',
                  border: '1px solid rgba(34, 197, 94, 0.2)',
                  borderRadius: '16px',
                  textAlign: 'center'
                }}>
                  <div style={{ fontSize: '48px', marginBottom: '16px' }}>🎓</div>
                  <h3 style={{
                    fontSize: '20px',
                    color: '#22c55e',
                    fontWeight: 700,
                    marginBottom: '12px'
                  }}>
                    College Contingent
                  </h3>
                  <p style={{
                    fontSize: '14px',
                    color: '#cbd5e1',
                    lineHeight: 1.6,
                    margin: 0
                  }}>
                    All 4 players must be from the same college
                  </p>
                </div>

                {/* NCP (Mixed Team) */}
                <div style={{
                  padding: '24px',
                  background: 'rgba(249, 115, 22, 0.08)',
                  border: '1px solid rgba(249, 115, 22, 0.2)',
                  borderRadius: '16px',
                  textAlign: 'center'
                }}>
                  <div style={{ fontSize: '48px', marginBottom: '16px' }}>🤝</div>
                  <h3 style={{
                    fontSize: '20px',
                    color: '#f97316',
                    fontWeight: 700,
                    marginBottom: '12px'
                  }}>
                    NCP (Mixed Team)
                  </h3>
                  <p style={{
                    fontSize: '14px',
                    color: '#cbd5e1',
                    lineHeight: 1.6,
                    margin: 0
                  }}>
                    Friends from different colleges allowed!
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Rules Section */}
          <section style={{ marginBottom: '60px' }}>
            <div style={{
              background: 'rgba(255, 255, 255, 0.02)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              borderRadius: '24px',
              padding: 'clamp(32px, 5vw, 48px)',
              maxWidth: '900px',
              margin: '0 auto'
            }}>
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

          {/* Contact Section - NEW */}
          <section style={{ marginBottom: '60px' }}>
            <div style={{
              background: 'linear-gradient(135deg, rgba(249, 115, 22, 0.1), rgba(139, 92, 246, 0.1))',
              border: '1px solid rgba(249, 115, 22, 0.3)',
              borderRadius: '24px',
              padding: 'clamp(32px, 5vw, 48px)',
              maxWidth: '700px',
              margin: '0 auto',
              textAlign: 'center'
            }}>
              <h2 style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(24px, 4vw, 32px)',
                fontWeight: 700,
                color: '#ffffff',
                marginBottom: '24px'
              }}>
                📞 Have Questions?
              </h2>
              
              <p style={{
                fontSize: '16px',
                color: '#cbd5e1',
                marginBottom: '24px'
              }}>
                Contact our tournament coordinators:
              </p>

              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: '16px',
                marginBottom: '24px'
              }}>
                <a 
                  href="tel:8369564372"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '10px',
                    padding: '16px',
                    minHeight: '48px',
                    background: 'rgba(34, 197, 94, 0.1)',
                    border: '2px solid rgba(34, 197, 94, 0.3)',
                    borderRadius: '12px',
                    color: '#22c55e',
                    textDecoration: 'none',
                    fontSize: 'clamp(14px, 2.5vw, 16px)',
                    fontWeight: 600,
                    transition: 'all 0.3s ease',
                    touchAction: 'manipulation'
                  }}
                >
                  <Phone style={{ width: '20px', height: '20px', flexShrink: 0 }} />
                  <span>Ajay: 8369564372</span>
                </a>
                
                <a 
                  href="tel:9321882776"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '10px',
                    padding: '16px',
                    minHeight: '48px',
                    background: 'rgba(34, 197, 94, 0.1)',
                    border: '2px solid rgba(34, 197, 94, 0.3)',
                    borderRadius: '12px',
                    color: '#22c55e',
                    textDecoration: 'none',
                    fontSize: 'clamp(14px, 2.5vw, 16px)',
                    fontWeight: 600,
                    transition: 'all 0.3s ease',
                    touchAction: 'manipulation'
                  }}
                >
                  <Phone style={{ width: '20px', height: '20px', flexShrink: 0 }} />
                  <span>Pratham: 9321882776</span>
                </a>
              </div>
            </div>
          </section>

          {/* Final CTA */}
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
                Loot is waiting. Will you be the one to claim it? 🍗🏆
              </h3>
              
              <p style={{
                fontSize: 'clamp(14px, 2vw, 18px)',
                color: '#cbd5e1',
                marginBottom: '32px',
                maxWidth: '600px',
                margin: '0 auto 32px auto',
                lineHeight: 1.6
              }}>
                Join the ultimate Battle Royale tournament. Prove your skills, dominate the battlefield, and claim your prize!
              </p>
              
              <a
                href={bgmiEvent.formUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '10px',
                  padding: '16px 32px',
                  minHeight: '48px',
                  minWidth: '200px',
                  borderRadius: '12px',
                  fontSize: 'clamp(14px, 2.5vw, 18px)',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                  color: '#ffffff',
                  background: 'linear-gradient(135deg, #f97316, #ea580c)',
                  border: 'none',
                  boxShadow: '0 8px 32px rgba(249, 115, 22, 0.5)',
                  cursor: 'pointer',
                  textDecoration: 'none',
                  transition: 'all 0.3s ease',
                  touchAction: 'manipulation'
                }}
              >
                <Shield style={{ width: '20px', height: '20px', flexShrink: 0 }} />
                <span style={{ whiteSpace: 'nowrap' }}>Register Your Squad</span>
              </a>
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
