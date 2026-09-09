import { getCategoryColor, getTierLabel } from '../../data/events';
import { Clock, MapPin } from 'lucide-react';

export function ScheduleRow({ event }) {
  const catColor = getCategoryColor(event.category);

  return (
    <div
      className="glass-card flex items-center gap-4 p-4 sm:p-6 group !rounded-xl"
      style={{ minHeight: '72px' }}
    >
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
          className="text-sm sm:text-base font-bold text-white truncate"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          {event.name}
        </h4>
        <p className="text-xs italic truncate" style={{ color: `${catColor}cc` }}>
          {event.themeName}
        </p>
      </div>

      {/* Time & Venue */}
      <div className="hidden sm:flex flex-col items-end gap-1.5 shrink-0">
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
        className="hidden sm:inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full shrink-0"
        style={{
          background: 'rgba(30, 30, 50, 0.8)',
          color: 'var(--color-gold-400)',
          border: '1px solid rgba(212,168,67,0.3)',
          backdropFilter: 'blur(8px)',
          marginRight: '0.5rem',
        }}
      >
        <span style={{ fontSize: '0.85rem' }}>⚡</span>
        {getTierLabel(event.tier)}
      </span>
    </div>
  );
}

export default ScheduleRow;
