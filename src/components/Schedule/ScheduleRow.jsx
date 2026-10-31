import { getCategoryColor, getTierLabel } from '../../data/events';
import { Clock, MapPin } from 'lucide-react';
import { memo } from 'react';

// Memoized tier styles to prevent recalculation
const TIER_STYLES = {
  flagship: {
    bg: 'linear-gradient(135deg, rgba(234, 179, 8, 0.15), rgba(202, 138, 4, 0.1))',
    border: '1px solid rgba(234, 179, 8, 0.4)',
    color: '#fbbf24',
    icon: '⚡'
  },
  large: {
    bg: 'linear-gradient(135deg, rgba(249, 115, 22, 0.15), rgba(234, 88, 12, 0.1))',
    border: '1px solid rgba(249, 115, 22, 0.4)',
    color: '#fb923c',
    icon: '🔥'
  },
  small: {
    bg: 'linear-gradient(135deg, rgba(139, 92, 246, 0.15), rgba(124, 58, 237, 0.1))',
    border: '1px solid rgba(139, 92, 246, 0.4)',
    color: '#a78bfa',
    icon: '✨'
  }
};

function ScheduleRowComponent({ event }) {
  const catColor = getCategoryColor(event.category);
  const tierStyle = TIER_STYLES[event.tier] || {
    bg: 'rgba(51, 65, 85, 0.3)',
    border: '1px solid rgba(148, 163, 184, 0.3)',
    color: '#cbd5e1',
    icon: '🎯'
  };

  return (
    <div className="glass-card group !rounded-xl">
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

      {/* Mobile Layout - Fixed spacing and text overflow */}
      <div className="sm:hidden" style={{ padding: '20px' }}>
        {/* Header Row */}
        <div className="flex items-start gap-3 mb-4">
          {/* Event Name - Allow wrapping, no truncation */}
          <div style={{ flex: '1', minWidth: '0' }}>
            <h4
              className="font-bold text-white mb-2"
              style={{ 
                fontFamily: 'var(--font-heading)',
                fontSize: '15px',
                lineHeight: '1.4',
                wordBreak: 'break-word'
              }}
            >
              {event.name}
            </h4>
            <p 
              className="italic" 
              style={{ 
                color: `${catColor}cc`,
                fontSize: '13px',
                lineHeight: '1.3',
                wordBreak: 'break-word'
              }}
            >
              {event.themeName}
            </p>
          </div>
          
          {/* Tier Badge - Fixed size */}
          <span
            className="font-bold uppercase shrink-0"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '4px',
              padding: '6px 10px',
              borderRadius: '8px',
              background: tierStyle.bg,
              color: tierStyle.color,
              border: tierStyle.border,
              fontSize: '10px',
              letterSpacing: '0.5px',
              whiteSpace: 'nowrap',
            }}
          >
            <span style={{ fontSize: '12px' }}>{tierStyle.icon}</span>
            <span>{getTierLabel(event.tier)}</span>
          </span>
        </div>
        
        {/* Time & Venue Row - Better spacing */}
        <div 
          style={{ 
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '16px',
            paddingTop: '16px',
            marginTop: '16px',
            borderTop: '1px solid rgba(148, 163, 184, 0.15)'
          }}
        >
          {/* Time */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Clock 
              className="shrink-0" 
              style={{ 
                width: '16px', 
                height: '16px',
                color: '#fbbf24' 
              }} 
            />
            <span 
              className="font-medium text-slate-300"
              style={{ 
                fontSize: '13px',
                lineHeight: '1.2',
                wordBreak: 'break-word'
              }}
            >
              {event.time || 'TBA'}
            </span>
          </div>
          
          {/* Venue */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <MapPin 
              className="shrink-0" 
              style={{ 
                width: '16px', 
                height: '16px',
                color: '#fb923c' 
              }} 
            />
            <span 
              className="font-medium text-slate-300"
              style={{ 
                fontSize: '13px',
                lineHeight: '1.2',
                wordBreak: 'break-word',
                overflow: 'hidden',
                textOverflow: 'ellipsis'
              }}
            >
              {event.venue || 'TBA'}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

// Memoize component to prevent unnecessary re-renders
export const ScheduleRow = memo(ScheduleRowComponent);
export default ScheduleRow;

export default ScheduleRow;
