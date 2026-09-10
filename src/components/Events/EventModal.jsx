import { useEffect, useRef, useState } from 'react';
import { X } from 'lucide-react';

export function EventModal({ event, onClose }) {
  const modalRef = useRef(null);
  const scrollPositionRef = useRef(0);
  const contentRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

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
      
      // Trigger animation
      setTimeout(() => setIsVisible(true), 10);
      
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
      if (e.key === 'Escape') {
        handleClose();
      }
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [onClose]);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(() => onClose(), 200);
  };

  if (!event) return null;

  const formUrl = event.formUrl || '#';

  return (
    <div
      className="fixed inset-0 z-[9999]"
      style={{
        backgroundColor: `rgba(0, 0, 0, ${isVisible ? '0.85' : '0'})`,
        transition: 'background-color 0.3s ease',
      }}
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          handleClose();
        }
      }}
    >
      {/* Desktop: Centered Modal | Mobile: Bottom Sheet */}
      <div
        className="fixed md:inset-0 md:flex md:items-center md:justify-center md:p-4"
        style={{
          bottom: 0,
          left: 0,
          right: 0,
          top: 'auto',
        }}
      >
        <div
          ref={modalRef}
          className="relative w-full md:max-w-3xl md:my-6"
          style={{
            transform: isVisible 
              ? 'translateY(0)' 
              : 'translateY(100%)',
            transition: 'transform 0.3s cubic-bezier(0.32, 0.72, 0, 1)',
            maxHeight: '90vh',
          }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Modal Content */}
          <div
            ref={contentRef}
            className="rounded-t-3xl md:rounded-2xl overflow-hidden"
            style={{
              background: 'linear-gradient(180deg, rgb(30, 30, 55) 0%, rgb(20, 20, 40) 100%)',
              border: '2px solid rgba(249, 115, 22, 0.3)',
              borderBottom: 'none',
              boxShadow: '0 -10px 50px -12px rgba(0, 0, 0, 0.8)',
              maxHeight: '90vh',
              overflowY: 'auto',
              overflowX: 'hidden',
              scrollBehavior: 'smooth',
              WebkitOverflowScrolling: 'touch',
            }}
          >
            {/* Drag Handle (Mobile only) */}
            <div 
              className="md:hidden flex justify-center pt-3 pb-1"
              style={{
                background: 'linear-gradient(180deg, rgb(30, 30, 55) 0%, rgba(30, 30, 55, 0.95) 100%)',
              }}
            >
              <div 
                style={{
                  width: '40px',
                  height: '4px',
                  borderRadius: '2px',
                  backgroundColor: 'rgba(255, 255, 255, 0.3)',
                }}
              />
            </div>

            {/* Close Button (Desktop) */}
            <button
              onClick={handleClose}
              className="hidden md:flex absolute top-4 right-4 w-10 h-10 rounded-full items-center justify-center text-white hover:scale-110 transition-transform z-50 shadow-lg"
              style={{
                background: 'rgba(255, 68, 68, 0.9)',
                border: '2px solid rgba(255, 255, 255, 0.2)',
              }}
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" strokeWidth={3} />
            </button>

            {/* Header Section */}
            <div
              style={{
                background: 'linear-gradient(135deg, rgba(249, 115, 22, 0.08), rgba(249, 115, 22, 0.03))',
                borderBottom: '1px solid rgba(255, 255, 255, 0.06)',
                padding: '20px',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
                {/* Icon */}
                <div 
                  style={{ 
                    fontSize: '48px', 
                    lineHeight: 1, 
                    flexShrink: 0,
                    filter: 'drop-shadow(0 2px 8px rgba(249, 115, 22, 0.3))',
                  }}
                >
                  {event.categoryIcon}
                </div>
                
                {/* Title Content */}
                <div style={{ flex: 1, paddingRight: '8px' }}>
                  {/* Event Name */}
                  <h2 
                    style={{
                      fontSize: '22px',
                      fontWeight: 700,
                      color: '#ffffff',
                      marginBottom: '6px',
                      lineHeight: 1.3,
                      letterSpacing: '-0.01em',
                    }}
                  >
                    {event.name}
                  </h2>
                  
                  {/* Themed Name */}
                  <p 
                    style={{
                      fontSize: '14px',
                      fontWeight: 500,
                      fontStyle: 'italic',
                      color: '#fb923c',
                      marginBottom: '12px',
                      lineHeight: 1.4,
                    }}
                  >
                    {event.themeName}
                  </p>
                  
                  {/* Badges */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                    <span
                      style={{
                        fontSize: '10px',
                        fontWeight: 700,
                        padding: '6px 10px',
                        borderRadius: '6px',
                        backgroundColor: 'rgba(249, 115, 22, 0.15)',
                        border: '1px solid rgba(249, 115, 22, 0.3)',
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
                          fontSize: '10px',
                          fontWeight: 600,
                          padding: '6px 10px',
                          borderRadius: '6px',
                          backgroundColor: 'rgba(255, 255, 255, 0.05)',
                          border: '1px solid rgba(255, 255, 255, 0.1)',
                          color: 'rgba(255, 255, 255, 0.8)',
                        }}
                      >
                        📅 Day {event.day}
                      </span>
                    )}
                    <span 
                      style={{
                        fontSize: '10px',
                        fontWeight: 600,
                        padding: '6px 10px',
                        borderRadius: '6px',
                        backgroundColor: 'rgba(255, 255, 255, 0.05)',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        color: 'rgba(255, 255, 255, 0.8)',
                      }}
                    >
                      {event.tier}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Body Section */}
            <div style={{ padding: '20px 20px 24px' }}>
              {/* Registration Fee Card */}
              <div style={{ marginBottom: '16px' }}>
                <h3 
                  style={{
                    fontSize: '12px',
                    fontWeight: 700,
                    color: 'rgba(255, 255, 255, 0.6)',
                    marginBottom: '10px',
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                  }}
                >
                  💰 Registration Fee
                </h3>
                <div 
                  style={{
                    padding: '16px 18px',
                    borderRadius: '12px',
                    backgroundColor: 'rgba(249, 115, 22, 0.08)',
                    border: '1px solid rgba(249, 115, 22, 0.2)',
                  }}
                >
                  <p 
                    style={{
                      fontSize: '32px',
                      fontWeight: 700,
                      color: '#f97316',
                      margin: 0,
                      lineHeight: 1,
                    }}
                  >
                    {event.isPaid && event.price ? event.price : 'Free'}
                  </p>
                </div>
              </div>

              {/* Description Card */}
              <div style={{ marginBottom: '16px' }}>
                <h3 
                  style={{
                    fontSize: '12px',
                    fontWeight: 700,
                    color: 'rgba(255, 255, 255, 0.6)',
                    marginBottom: '10px',
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                  }}
                >
                  📝 Description
                </h3>
                <div 
                  style={{
                    padding: '16px 18px',
                    borderRadius: '12px',
                    backgroundColor: 'rgba(255, 255, 255, 0.03)',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                  }}
                >
                  <p 
                    style={{
                      fontSize: '14px',
                      color: 'rgba(255, 255, 255, 0.85)',
                      lineHeight: 1.7,
                      margin: 0,
                    }}
                  >
                    {event.description || 'Event details will be announced soon. Stay tuned!'}
                  </p>
                </div>
              </div>

              {/* Rules Section */}
              <div>
                <h3 
                  style={{
                    fontSize: '12px',
                    fontWeight: 700,
                    color: 'rgba(255, 255, 255, 0.6)',
                    marginBottom: '10px',
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                  }}
                >
                  📋 Rules & Guidelines
                </h3>
                <div 
                  style={{
                    padding: '16px 18px',
                    borderRadius: '12px',
                    backgroundColor: 'rgba(255, 255, 255, 0.03)',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                  }}
                >
                  {event.rules && event.rules.length > 0 ? (
                    <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                      {event.rules.map((rule, index) => (
                        <li 
                          key={index} 
                          style={{
                            fontSize: '13px',
                            color: 'rgba(255, 255, 255, 0.8)',
                            lineHeight: 1.6,
                            display: 'flex',
                            alignItems: 'flex-start',
                            gap: '10px',
                          }}
                        >
                          <span 
                            style={{ 
                              fontSize: '16px', 
                              fontWeight: 700, 
                              color: '#f97316', 
                              flexShrink: 0,
                              marginTop: '1px',
                            }}
                          >
                            •
                          </span>
                          <span style={{ flex: 1 }}>{rule}</span>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p style={{ fontSize: '13px', color: 'rgba(255, 255, 255, 0.4)', fontStyle: 'italic', margin: 0 }}>
                      Rules will be announced soon
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/* Footer - Registration Button */}
            <div 
              style={{
                padding: '16px 20px 20px',
                borderTop: '1px solid rgba(255, 255, 255, 0.06)',
                background: 'rgba(0, 0, 0, 0.15)',
              }}
            >
              {/* Close button for mobile */}
              <button
                onClick={handleClose}
                className="md:hidden w-full"
                style={{
                  padding: '13px 20px',
                  borderRadius: '10px',
                  fontWeight: 600,
                  fontSize: '15px',
                  textAlign: 'center',
                  color: 'rgba(255, 255, 255, 0.7)',
                  backgroundColor: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  marginBottom: '8px',
                }}
              >
                Close
              </button>
              
              {/* Register button */}
              <a
                href={formUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'block',
                  width: '100%',
                  padding: '15px 20px',
                  borderRadius: '10px',
                  fontWeight: 700,
                  fontSize: '15px',
                  textAlign: 'center',
                  color: '#ffffff',
                  textDecoration: 'none',
                  background: 'linear-gradient(135deg, #f97316, #ea580c)',
                  boxShadow: '0 4px 16px -2px rgba(249, 115, 22, 0.4)',
                  transition: 'all 0.2s ease',
                  cursor: 'pointer',
                }}
                onTouchStart={(e) => {
                  e.currentTarget.style.transform = 'scale(0.98)';
                }}
                onTouchEnd={(e) => {
                  e.currentTarget.style.transform = 'scale(1)';
                }}
              >
                🎮 Register Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventModal;
