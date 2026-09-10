import { Mail, Phone, MapPin, Heart, ExternalLink } from 'lucide-react';

// Instagram icon
const InstagramIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const QUICK_LINKS = [
  { name: 'Home', href: '#hero' },
  { name: 'About', href: '#about' },
  { name: 'Events', href: '#events' },
  { name: 'Schedule', href: '#schedule' },
  { name: 'Team', href: '#team' },
  { name: 'Sponsors', href: '#sponsors' },
];

export function Footer() {
  const handleNavClick = (e, href) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="relative z-10 bg-gradient-to-b from-[#0a0e27] to-[#050713] border-t border-white/10">
      <div style={{ paddingTop: '50px' }} className="container mx-auto px-4 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <div className="flex flex-col items-center">
            <div className="text-left">
              <div className="flex items-center gap-3 mb-2">
                <img
                  src="/SHIVOTSAV_LOGO.png"
                  alt="Shivotsav Logo"
                  className="w-16 h-16 object-contain"
                />
                <div>
                  <h4 className="text-lg font-bold gradient-text-gold font-[var(--font-heading)]">SHIVOTSAV</h4>
                </div>
              </div>
              <p className="text-white/60 mb-4 text-sm">
                27th & 28th November · Sheth Vidya Mandir, Vasai (East)
              </p>
              <div style={{ marginTop: '8px' }} className="flex flex-col gap-3">
                <a
                  href="https://www.instagram.com/shivotsavsvm"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 group"
                >
                  <div className="w-10 h-10 rounded-full glass-effect flex items-center justify-center text-white/70 group-hover:text-pink-400 transition-colors group-hover:scale-110">
                    <InstagramIcon className="w-5 h-5" />
                  </div>
                  <span className="text-white/70 group-hover:text-pink-400 transition-colors text-sm">shivotsavsvm</span>
                </a>
                <a
                  href="https://www.instagram.com/esssqube_events"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 group"
                >
                  <div className="w-10 h-10 rounded-full glass-effect flex items-center justify-center text-white/70 group-hover:text-pink-400 transition-colors group-hover:scale-110">
                    <InstagramIcon className="w-5 h-5" />
                  </div>
                  <span className="text-white/70 group-hover:text-pink-400 transition-colors text-sm">esssqube_events</span>
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-start md:items-center">
            <h3 className="text-xl font-bold text-white mb-6">Quick Links</h3>
            <ul className="space-y-4 text-left">
              {QUICK_LINKS.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-white/60 hover:text-white transition-colors flex items-center gap-2"
                    onClick={(e) => handleNavClick(e, link.href)}
                  >
                    <span className="text-gold-400">→</span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="flex flex-col items-start md:items-center">
            <h3 style={{ marginBottom: '10px' }} className="text-xl font-bold text-white">Contact Us</h3>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '10px' }} className="text-left">
              <li className="flex items-start gap-3 text-white/60">
                <Mail className="w-5 h-5 text-gold-400 mt-1 shrink-0" />
                <div>
                  <p className="text-sm">svm.shivotsav26@gmail.com</p>
                </div>
              </li>
              <li className="flex items-start gap-3 text-white/60">
                <Phone className="w-5 h-5 text-gold-400 mt-1 shrink-0" />
                <div>
                  <p className="text-sm">+91 79724 24122 (Tirth)</p>
                  <p className="text-sm">+91 98202 33324 (Arther)</p>
                </div>
              </li>
              <li className="flex items-start gap-3 text-white/60">
                <MapPin className="w-5 h-5 text-gold-400 mt-1 shrink-0" />
                <p className="text-sm">Sheth Vidya Mandir<br />Vasant Nagri, Vasai (East)</p>
              </li>
            </ul>
          </div>

        </div>

        {/* Developer & Management Badges */}
        <div className="w-full flex flex-col items-center gap-5 px-6" style={{ marginTop: '48px', marginBottom: '48px' }}>
          {/* Managed by Badge */}
          <div className="glass-effect rounded-full border border-gold-400/30 hover:border-gold-400/60 transition-all hover:scale-105" style={{ width: '280px', padding: '14px 20px' }}>
            <a
              href="https://www.essqube.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 text-white/90 hover:text-gold-400 transition-colors"
            >
              <span className="text-white/70 text-xs font-medium whitespace-nowrap">Managed by</span>
              <div className="w-7 h-7 rounded-full bg-white/10 p-1 flex items-center justify-center shrink-0">
                <img
                  src="/ESSQUBE_LOGO.png"
                  alt="Esssqube Logo"
                  className="w-full h-full object-contain rounded-full"
                />
              </div>
              <span className="gradient-text-gold font-bold text-sm whitespace-nowrap">ESSSQUBE EVENTS</span>
            </a>
          </div>

          {/* Developed by Badge */}
          <div className="glass-effect rounded-full border border-red-400/30 hover:border-red-400/60 transition-all hover:scale-105" style={{ width: '280px', padding: '14px 20px' }}>
            <a
              href="https://www.linkedin.com/in/ajayprajapatii"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-1.5 text-white/90 hover:text-red-400 transition-colors"
            >
              <span className="text-white/70 text-xs font-medium whitespace-nowrap">Developed with</span>
              <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500 animate-pulse shrink-0" />
              <span className="text-white/70 text-xs font-medium whitespace-nowrap">by</span>
              <span className="font-bold text-sm bg-gradient-to-r from-red-400 to-pink-400 bg-clip-text text-transparent whitespace-nowrap">Ajay Prajapati</span>
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10" style={{ paddingTop: '32px', paddingBottom: '32px', marginTop: '16px' }}>
          <div className="flex items-center justify-center text-white/50 text-sm">
            <p>© 2026 All rights reserved to Ajay Prajapati.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
