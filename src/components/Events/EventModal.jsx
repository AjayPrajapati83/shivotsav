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
        className="relative w-full max-w-3xl my-4 sm:my-6"
        style={{
          maxHeight: 'calc(100vh - 32px)',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute -top-3 -right-3 w-10 h-10 sm:w-11 sm:h-11 rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform z-50 shadow-2xl"
          style={{
            background: 'linear-gradient(135deg, #ff4444, #cc0000)',
            border: '2px solid rgba(255, 255, 255, 0.3)',
          }}
          aria-label="Close dialog"
        >
          <X className="w-5 h-5 sm:w-6 sm:h-6" strokeWidth={3} />
        </button>

        {/* Modal Content */}
        <div
          ref={contentRef}
          className="rounded-2xl overflow-hidden"
          style={{
            background: 'linear-gradient(180deg, rgb(30, 30, 55) 0%, rgb(20, 20, 40) 100%)',
            border: '2px solid rgba(249, 115, 22, 0.3)',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.8)',
            maxHeight: 'calc(100vh - 32px)',
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
              padding: 'clamp(16px, 4vw, 24px)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: 'clamp(10px, 2.5vw, 16px)' }}>
              {/* Icon */}
              <div style={{ fontSize: 'clamp(40px, 8vw, 52px)', lineHeight: 1, flexShrink: 0 }}>
                {event.categoryIcon}
              </div>
              
              {/* Title Content */}
              <div style={{ flex: 1, paddingRight: 'clamp(28px, 6vw, 40px)' }}>
                {/* Event Name */}
                <h2 
                  style={{
                    fontSize: 'clamp(20px, 4vw, 28px)',
                    fontWeight: 700,
                    color: '#ffffff',
                    marginBottom: '8px',
                    lineHeight: 1.2,
                    letterSpacing: '-0.02em',
                  }}
                >
                  {event.name}
                </h2>
                
                {/* Themed Name */}
                <p 
                  style={{
                    fontSize: 'clamp(13px, 2.5vw, 16px)',
                    fontWeight: 500,
                    fontStyle: 'italic',
                    color: '#f97316',
                    marginBottom: '12px',
                  }}
                >
                  {event.themeName}
                </p>
                
                {/* Badges */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  <span
                    style={{
                      fontSize: '11px',
                      fontWeight: 700,
                      padding: '5px 12px',
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
                        fontSize: '11px',
                        fontWeight: 500,
                        padding: '5px 12px',
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
                      fontSize: '11px',
                      fontWeight: 500,
                      padding: '5px 12px',
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
          <div style={{ padding: 'clamp(20px, 4vw, 28px)' }}>
            {/* Two Column Layout */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px', marginBottom: '24px' }}>
              {/* Registration Fee */}
              <div>
                <h3 
                  style={{
                    fontSize: '14px',
                    fontWeight: 700,
                    color: '#ffffff',
                    marginBottom: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                  }}
                >
                  💰 Registration Fee
                </h3>
                <div 
                  style={{
                    padding: '18px',
                    borderRadius: '10px',
                    backgroundColor: 'rgba(40, 40, 70, 0.5)',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                  }}
                >
                  <p 
                    style={{
                      fontSize: '28px',
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
                    fontSize: '14px',
                    fontWeight: 700,
                    color: '#ffffff',
                    marginBottom: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                  }}
                >
                  📝 Description
                </h3>
                <div 
                  style={{
                    padding: '18px',
                    borderRadius: '10px',
                    backgroundColor: 'rgba(40, 40, 70, 0.5)',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                  }}
                >
                  <p 
                    style={{
                      fontSize: '14px',
                      color: 'rgba(255, 255, 255, 0.85)',
                      lineHeight: 1.6,
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
                  fontSize: '14px',
                  fontWeight: 700,
                  color: '#ffffff',
                  marginBottom: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                }}
              >
                📋 Rules & Guidelines
              </h3>
              <div 
                style={{
                  padding: '18px',
                  borderRadius: '10px',
                  backgroundColor: 'rgba(40, 40, 70, 0.5)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                }}
              >
                {event.rules && event.rules.length > 0 ? (
                  <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    {event.rules.map((rule, index) => (
                      <li 
                        key={index} 
                        style={{
                          fontSize: '14px',
                          color: 'rgba(255, 255, 255, 0.85)',
                          lineHeight: 1.6,
                          display: 'flex',
                          alignItems: 'flex-start',
                          gap: '10px',
                        }}
                      >
                        <span style={{ fontSize: '18px', fontWeight: 700, color: '#f97316', flexShrink: 0, marginTop: '1px' }}>
                          •
                        </span>
                        <span style={{ flex: 1 }}>{rule}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p style={{ fontSize: '14px', color: 'rgba(255, 255, 255, 0.5)', fontStyle: 'italic', margin: 0 }}>
                    Coming Soon
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* Footer - Registration Button */}
          <div 
            style={{
              padding: 'clamp(16px, 3vw, 20px) clamp(20px, 4vw, 28px)',
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
                padding: '14px 20px',
                borderRadius: '10px',
                fontWeight: 700,
                fontSize: '16px',
                textAlign: 'center',
                color: '#ffffff',
                textDecoration: 'none',
                background: 'linear-gradient(135deg, #f97316, #ea580c)',
                boxShadow: '0 8px 20px -5px rgba(249, 115, 22, 0.5)',
                transition: 'all 0.2s ease',
                cursor: 'pointer',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 12px 28px -5px rgba(249, 115, 22, 0.6)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 8px 20px -5px rgba(249, 115, 22, 0.5)';
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
