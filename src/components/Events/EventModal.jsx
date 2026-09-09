import { useEffect, useRef } from 'react';
import { X } from 'lucide-react';

export function EventModal({ event, onClose }) {
  const modalRef = useRef(null);
  const scrollPositionRef = useRef(0);
  const contentRef = useRef(null);

  // Body scroll lock
  useEffect(() => {
    if (event) {
      scrollPositionRef.current = window.pageYOffset || document.documentElement.scrollTop;
      
      const scrollY = scrollPositionRef.current;
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.left = '0';
      document.body.style.right = '0';
      document.body.style.overflow = 'hidden';
      document.body.style.width = '100%';
      
      return () => {
        document.body.style.position = '';
        document.body.style.top = '';
        document.body.style.left = '';
        document.body.style.right = '';
        document.body.style.overflow = '';
        document.body.style.width = '';
        window.scrollTo(0, scrollPositionRef.current);
      };
    }
  }, [event]);

  // Enable wheel scrolling on modal content
  useEffect(() => {
    const contentElement = contentRef.current;
    if (!contentElement) return;

    const handleWheel = (e) => {
      e.stopPropagation();
      // Allow default wheel behavior on the content
    };

    contentElement.addEventListener('wheel', handleWheel, { passive: true });
    
    return () => {
      contentElement.removeEventListener('wheel', handleWheel);
    };
  }, [event]);

  // Close on Escape
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [onClose]);

  if (!event) return null;

  const formUrl = event.formUrl || '#';

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
      style={{
        backgroundColor: 'rgba(0, 0, 0, 0.85)',
        overflowY: 'auto',
        WebkitOverflowScrolling: 'touch',
      }}
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
    >
      <div
        ref={modalRef}
        className="relative w-full max-w-4xl my-8"
        style={{
          maxHeight: 'calc(100vh - 64px)',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute -top-4 -right-4 w-12 h-12 rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform z-50 shadow-2xl"
          style={{
            background: 'linear-gradient(135deg, #ff4444, #cc0000)',
            border: '3px solid rgba(255, 255, 255, 0.3)',
          }}
          aria-label="Close dialog"
        >
          <X className="w-7 h-7" strokeWidth={3} />
        </button>

        {/* Modal Content */}
        <div
          ref={contentRef}
          className="rounded-2xl overflow-hidden"
          style={{
            background: 'linear-gradient(180deg, rgb(30, 30, 55) 0%, rgb(20, 20, 40) 100%)',
            border: '2px solid rgba(249, 115, 22, 0.3)',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.8)',
            maxHeight: 'calc(100vh - 64px)',
            overflowY: 'auto',
            overflowX: 'hidden',
            scrollBehavior: 'smooth',
          }}
        >
          {/* Header Section */}
          <div
            style={{
              background: 'linear-gradient(135deg, rgba(249, 115, 22, 0.12), rgba(249, 115, 22, 0.05))',
              borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
              padding: 'clamp(20px, 5vw, 32px)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: 'clamp(12px, 3vw, 20px)' }}>
              {/* Icon */}
              <div style={{ fontSize: 'clamp(48px, 10vw, 64px)', lineHeight: 1, flexShrink: 0 }}>
                {event.categoryIcon}
              </div>
              
              {/* Title Content */}
              <div style={{ flex: 1, paddingRight: 'clamp(32px, 8vw, 48px)' }}>
                {/* Event Name */}
                <h2 
                  style={{
                    fontSize: 'clamp(24px, 5vw, 32px)',
                    fontWeight: 700,
                    color: '#ffffff',
                    marginBottom: '12px',
                    lineHeight: 1.2,
                    letterSpacing: '-0.02em',
                  }}
                >
                  {event.name}
                </h2>
                
                {/* Themed Name */}
                <p 
                  style={{
                    fontSize: 'clamp(14px, 3vw, 18px)',
                    fontWeight: 500,
                    fontStyle: 'italic',
                    color: '#f97316',
                    marginBottom: '16px',
                  }}
                >
                  {event.themeName}
                </p>
                
                {/* Badges */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  <span
                    style={{
                      fontSize: '12px',
                      fontWeight: 700,
                      padding: '6px 14px',
                      borderRadius: '6px',
                      backgroundColor: 'rgba(249, 115, 22, 0.2)',
                      color: '#f97316',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                    }}
                  >
                    {event.category.split(' ')[0]}
                  </span>
                  {event.day && (
                    <span 
                      style={{
                        fontSize: '12px',
                        fontWeight: 500,
                        padding: '6px 14px',
                        borderRadius: '6px',
                        backgroundColor: 'rgba(255, 255, 255, 0.06)',
                        color: 'rgba(255, 255, 255, 0.85)',
                      }}
                    >
                      📅 Day {event.day}
                    </span>
                  )}
                  <span 
                    style={{
                      fontSize: '12px',
                      fontWeight: 500,
                      padding: '6px 14px',
                      borderRadius: '6px',
                      backgroundColor: 'rgba(255, 255, 255, 0.06)',
                      color: 'rgba(255, 255, 255, 0.85)',
                    }}
                  >
                    {event.tier}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Body Section */}
          <div style={{ padding: 'clamp(24px, 5vw, 32px)' }}>
            {/* Two Column Layout */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px', marginBottom: '32px' }}>
              {/* Registration Fee */}
              <div>
                <h3 
                  style={{
                    fontSize: '16px',
                    fontWeight: 700,
                    color: '#ffffff',
                    marginBottom: '16px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                  }}
                >
                  💰 Registration Fee
                </h3>
                <div 
                  style={{
                    padding: '24px',
                    borderRadius: '12px',
                    backgroundColor: 'rgba(40, 40, 70, 0.5)',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                  }}
                >
                  <p 
                    style={{
                      fontSize: '32px',
                      fontWeight: 700,
                      color: '#f97316',
                      margin: 0,
                    }}
                  >
                    {event.isPaid && event.price ? event.price : 'Free'}
                  </p>
                </div>
              </div>

              {/* Description */}
              <div>
                <h3 
                  style={{
                    fontSize: '16px',
                    fontWeight: 700,
                    color: '#ffffff',
                    marginBottom: '16px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                  }}
                >
                  📝 Description
                </h3>
                <div 
                  style={{
                    padding: '24px',
                    borderRadius: '12px',
                    backgroundColor: 'rgba(40, 40, 70, 0.5)',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                  }}
                >
                  <p 
                    style={{
                      fontSize: '15px',
                      color: 'rgba(255, 255, 255, 0.85)',
                      lineHeight: 1.7,
                      margin: 0,
                    }}
                  >
                    {event.description || 'Event details will be announced soon. Stay tuned!'}
                  </p>
                </div>
              </div>
            </div>

            {/* Rules Section - Full Width */}
            <div>
              <h3 
                style={{
                  fontSize: '16px',
                  fontWeight: 700,
                  color: '#ffffff',
                  marginBottom: '16px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                }}
              >
                📋 Rules & Guidelines
              </h3>
              <div 
                style={{
                  padding: '24px',
                  borderRadius: '12px',
                  backgroundColor: 'rgba(40, 40, 70, 0.5)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                }}
              >
                {event.rules && event.rules.length > 0 ? (
                  <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    {event.rules.map((rule, index) => (
                      <li 
                        key={index} 
                        style={{
                          fontSize: '15px',
                          color: 'rgba(255, 255, 255, 0.85)',
                          lineHeight: 1.7,
                          display: 'flex',
                          alignItems: 'flex-start',
                          gap: '12px',
                        }}
                      >
                        <span style={{ fontSize: '20px', fontWeight: 700, color: '#f97316', flexShrink: 0, marginTop: '2px' }}>
                          •
                        </span>
                        <span style={{ flex: 1 }}>{rule}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p style={{ fontSize: '15px', color: 'rgba(255, 255, 255, 0.5)', fontStyle: 'italic', margin: 0 }}>
                    Coming Soon
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* Footer - Registration Button */}
          <div 
            style={{
              padding: 'clamp(20px, 4vw, 24px) clamp(24px, 5vw, 32px) clamp(24px, 5vw, 32px)',
              borderTop: '1px solid rgba(255, 255, 255, 0.08)',
              background: 'rgba(0, 0, 0, 0.2)',
            }}
          >
            <a
              href={formUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'block',
                width: '100%',
                padding: '16px 24px',
                borderRadius: '12px',
                fontWeight: 700,
                fontSize: '18px',
                textAlign: 'center',
                color: '#ffffff',
                textDecoration: 'none',
                background: 'linear-gradient(135deg, #f97316, #ea580c)',
                boxShadow: '0 10px 25px -5px rgba(249, 115, 22, 0.5)',
                transition: 'all 0.2s ease',
                cursor: 'pointer',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 15px 35px -5px rgba(249, 115, 22, 0.6)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 10px 25px -5px rgba(249, 115, 22, 0.5)';
              }}
            >
              🎮 Register for {event.name}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventModal;
