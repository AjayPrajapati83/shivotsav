import { useEffect, useRef } from 'react';
import { X, ExternalLink } from 'lucide-react';

export function SponsorDrawer({ sponsor, onClose }) {
  const overlayRef = useRef(null);
  const drawerRef = useRef(null);

  useEffect(() => {
    document.body.classList.add('modal-open');
    // Animate in
    requestAnimationFrame(() => {
      if (overlayRef.current) overlayRef.current.style.opacity = '1';
      if (drawerRef.current) {
        drawerRef.current.style.opacity = '1';
        drawerRef.current.style.transform = 'scale(1)';
      }
    });
    return () => document.body.classList.remove('modal-open');
  }, []);

  useEffect(() => {
    const handleKey = (e) => { if (e.key === 'Escape') handleClose(); };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, []);

  const handleClose = () => {
    if (overlayRef.current) overlayRef.current.style.opacity = '0';
    if (drawerRef.current) {
      drawerRef.current.style.opacity = '0';
      drawerRef.current.style.transform = 'scale(0.95)';
    }
    setTimeout(onClose, 250);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div
        ref={overlayRef}
        className="absolute inset-0 bg-navy-950/80 backdrop-blur-md transition-opacity duration-300"
        style={{ opacity: 0 }}
        onClick={handleClose}
      />

      <div
        ref={drawerRef}
        className="relative w-full max-w-md rounded-2xl p-6 sm:p-8 transition-all duration-300"
        style={{
          opacity: 0,
          transform: 'scale(0.95)',
          background: 'linear-gradient(145deg, rgba(17,24,39,0.97), rgba(10,14,26,0.98))',
          border: '1px solid rgba(212,168,67,0.2)',
        }}
      >
        <button
          onClick={handleClose}
          className="absolute top-3 right-3 w-8 h-8 rounded-full bg-navy-700 hover:bg-navy-600 flex items-center justify-center transition-colors cursor-pointer"
          aria-label="Close"
        >
          <X className="w-4 h-4 text-slate-300" />
        </button>

        <div className="text-center">
          {sponsor.logo && (
            <div className="bg-white/5 rounded-xl p-6 mb-6 backdrop-blur-sm">
              <img
                src={sponsor.logo}
                alt={sponsor.name}
                className="max-w-[240px] max-h-32 object-contain mx-auto"
              />
            </div>
          )}
          <h3 className="text-2xl font-bold text-white mb-3 font-[var(--font-heading)]">
            {sponsor.name}
          </h3>
          {sponsor.description && (
            <p className="text-sm text-slate-300 mb-6 leading-relaxed">
              {sponsor.description}
            </p>
          )}
          {sponsor.websiteUrl && (
            <a
              href={sponsor.websiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-cta inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-sm no-underline"
            >
              <ExternalLink className="w-4 h-4" />
              Visit Website
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default SponsorDrawer;
