import { getCategoryColor, getTierLabel } from '../../data/events';
import { Clock, MapPin } from 'lucide-react';

export function ScheduleRow({ event }) {
  const catColor = getCategoryColor(event.category);
  
  // Get tier styling
  const getTierStyle = (tier) => {
    switch(tier) {
      case 'flagship':
        return {
          bg: 'linear-gradient(135deg, rgba(234, 179, 8, 0.15), rgba(202, 138, 4, 0.1))',
          border: '1px solid rgba(234, 179, 8, 0.4)',
          color: '#fbbf24',
          icon: '⚡'
        };
      case 'large':
        return {
          bg: 'linear-gradient(135deg, rgba(249, 115, 22, 0.15), rgba(234, 88, 12, 0.1))',
          border: '1px solid rgba(249, 115, 22, 0.4)',
          color: '#fb923c',
          icon: '🔥'
        };
      case 'small':
        return {
          bg: 'linear-gradient(135deg, rgba(139, 92, 246, 0.15), rgba(124, 58, 237, 0.1))',
          border: '1px solid rgba(139, 92, 246, 0.4)',
          color: '#a78bfa',
          icon: '✨'
        };
      default:
        return {
          bg: 'rgba(51, 65, 85, 0.3)',
          border: '1px solid rgba(148, 163, 184, 0.3)',
          color: '#cbd5e1',
          icon: '🎯'
        };
    }
  };

  const tierStyle = getTierStyle(event.tier);

  return (
    <div
      className="glass-card group !rounded-xl"
    >
      {/* Desktop Layout */}
      <div className="hidden sm:flex items-center gap-4 p-6" style={{ minHeight: '72px' }}>
        {/* Category icon */}
        <span
          className="w-11 h-11 rounded-xl flex items-center justify-center text-lg shrink-0"
          style={{ backgroundColor: `${catColor}15`, border: `1px solid ${catColor}25` }}
        >
          {event.categoryIcon}
        </span>

        {/* Event info */}
        <div className="flex-grow min-w-0">
          <h4
            className="text-base font-bold text-white truncate"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            {event.name}
          </h4>
          <p className="text-xs italic truncate" style={{ color: `${catColor}cc` }}>
            {event.themeName}
          </p>
        </div>

        {/* Time & Venue */}
        <div className="flex flex-col items-end gap-1.5 shrink-0">
          <span className="flex items-center gap-1.5 text-xs text-slate-400">
            <Clock className="w-3 h-3 text-gold-500/60" />
            {event.time || 'TBA'}
          </span>
          <span className="flex items-center gap-1.5 text-xs text-slate-500">
            <MapPin className="w-3 h-3 text-gold-500/40" />
            {event.venue || 'TBA'}
          </span>
        </div>

        {/* Tier badge */}
        <span
          className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full shrink-0"
          style={{
            background: tierStyle.bg,
            color: tierStyle.color,
            border: tierStyle.border,
            backdropFilter: 'blur(8px)',
            marginRight: '0.5rem',
          }}
        >
          <span style={{ fontSize: '0.85rem' }}>{tierStyle.icon}</span>
          {getTierLabel(event.tier)}
        </span>
      </div>

      {/* Mobile Layout */}
      <div className="sm:hidden p-5">
        {/* Header: Event Name and Tier Badge */}
        <div className="flex items-start justify-between gap-3 mb-3">
          <div className="flex-grow min-w-0">
            <h4
              className="text-base font-bold text-white leading-tight mb-1.5"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              {event.name}
            </h4>
            <p className="text-xs italic leading-tight" style={{ color: `${catColor}cc` }}>
              {event.themeName}
            </p>
          </div>
          
          {/* Tier Badge */}
          <span
            className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider px-2.5 py-1.5 rounded-lg shrink-0"
            style={{
              background: tierStyle.bg,
              color: tierStyle.color,
              border: tierStyle.border,
              backdropFilter: 'blur(8px)',
            }}
          >
            <span style={{ fontSize: '0.75rem' }}>{tierStyle.icon}</span>
            <span style={{ fontSize: '0.65rem' }}>{getTierLabel(event.tier)}</span>
          </span>
        </div>
        
        {/* Time & Venue Section */}
        <div className="flex items-center gap-4 pt-3 mt-3" style={{ borderTop: '1px solid rgba(148, 163, 184, 0.15)' }}>
          <div className="flex items-center gap-2 flex-1">
            <Clock className="w-4 h-4 shrink-0" style={{ color: '#fbbf24' }} />
            <span className="text-sm font-medium text-slate-300">
              {event.time || 'TBA'}
            </span>
          </div>
          
          <div className="flex items-center gap-2 flex-1">
            <MapPin className="w-4 h-4 shrink-0" style={{ color: '#fb923c' }} />
            <span className="text-sm font-medium text-slate-300">
              {event.venue || 'TBA'}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ScheduleRow;
