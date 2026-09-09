import { getCategoryColor, getTierLabel } from '../../data/events';
import { Calendar, Users, Trophy } from 'lucide-react';

export function EventCard({ event, onRegister }) {
  const fallbackDesc = "Step into the mythic arena and showcase your extraordinary talents in this legendary competition.";
  
  return (
    <div
      className="flex flex-col h-full transition-all duration-300 hover:-translate-y-1"
      style={{ 
        backgroundColor: 'rgba(30, 41, 59, 0.4)', // Transparent/glass look
        backdropFilter: 'blur(12px)',
        borderRadius: '1.5rem',
        border: '1px solid rgba(255,255,255,0.08)',
        padding: '1.25rem', // Reduced padding to make button wider
      }}
    >
      {/* Top Header Row */}
      <div className="flex justify-between items-start mb-6">
        <div className="flex items-center gap-3">
          {/* Bare Icon */}
          <div className="text-3xl sm:text-4xl">
            {event.categoryIcon}
          </div>
          {/* Category Badge */}
          <div
            className="inline-flex items-center justify-center font-bold uppercase rounded-full"
            style={{ 
              fontSize: '0.65rem',
              letterSpacing: '0.05em',
              padding: '0.35rem 0.85rem',
              backgroundColor: 'rgba(249, 115, 22, 0.15)', 
              color: '#f97316' 
            }}
          >
            <span>{event.category.split(' ')[0]}</span>
          </div>
        </div>

        {/* Price (Only show if paid and has price) */}
        {event.isPaid && event.price && (
          <div 
            className="text-lg font-bold"
            style={{ color: '#f97316' }}
          >
            {event.price}
          </div>
        )}
      </div>

      {/* Event Title */}
      <h3
        className="text-2xl font-bold text-white mb-1 tracking-wide"
        style={{ fontFamily: 'var(--font-heading)' }}
      >
        {event.name}
      </h3>

      {/* Theme Subtitle */}
      <p className="text-[0.85rem] italic font-medium mb-5" style={{ color: '#f97316' }}>
        {event.themeName}
      </p>

      {/* Description */}
      <div style={{ marginBottom: '1.5rem' }}>
        <p className="text-[0.85rem] font-normal text-slate-300 leading-relaxed line-clamp-3">
          {event.description || fallbackDesc}
        </p>
      </div>

      {/* Meta Pills (Day, Tier) */}
      <div 
        className="flex flex-wrap gap-2.5" 
        style={{ marginTop: 'auto', marginBottom: '2rem' }}
      >
        <div 
          className="inline-flex items-center justify-center gap-1.5 font-medium rounded-full"
          style={{ 
            fontSize: '0.75rem',
            padding: '0.4rem 0.85rem',
            backgroundColor: 'rgba(51, 65, 85, 0.6)', 
            color: '#e2e8f0' 
          }}
        >
          <Calendar className="w-3.5 h-3.5 flex-shrink-0" />
          <span>{event.day ? `Day ${event.day}` : 'TBA'}</span>
        </div>
        <div 
          className="inline-flex items-center justify-center gap-1.5 font-medium rounded-full capitalize"
          style={{ 
            fontSize: '0.75rem',
            padding: '0.4rem 0.85rem',
            backgroundColor: 'rgba(51, 65, 85, 0.6)', 
            color: '#e2e8f0' 
          }}
        >
          <Trophy className="w-3.5 h-3.5 flex-shrink-0" />
          <span>{event.tier}</span>
        </div>
      </div>

      {/* Full-width CTA Button */}
      <button
        onClick={() => onRegister(event)}
        className="w-full py-6 rounded-2xl text-white font-extrabold text-xl tracking-wide hover:opacity-90 transition-opacity active:scale-[0.98]"
        style={{ backgroundColor: '#ea580c' }}
      >
        Register Now
      </button>
    </div>
  );
}

export default EventCard;
