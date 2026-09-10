export function EventFilters({ activeTier, onTierChange }) {
  const tiers = [
    { id: 'flagship', label: 'Flagship', icon: '⚡', count: 15 },
    { id: 'large', label: 'Large', icon: '🔥', count: 13 },
    { id: 'small', label: 'Small', icon: '✦', count: 8 },
  ];

  return (
    <div className="flex justify-center mb-12 px-2">
      <div className="filter-scroll inline-flex gap-2 sm:gap-3 overflow-x-auto py-2 max-w-full">
        {tiers.map((tier) => {
          const isActive = activeTier === tier.id;
          return (
            <button
              key={tier.id}
              onClick={() => onTierChange(tier.id)}
              className="cursor-pointer transition-all duration-300 rounded-2xl whitespace-nowrap flex-shrink-0"
              style={{
                padding: '0.625rem 1.25rem',
                fontWeight: 700,
                fontSize: '0.8125rem',
                fontFamily: 'var(--font-heading)',
                letterSpacing: '0.03em',
                background: isActive
                  ? 'linear-gradient(135deg, var(--color-gold-500), var(--color-gold-700))'
                  : 'rgba(17, 24, 39, 0.6)',
                color: isActive ? 'var(--color-navy-950)' : '#94a3b8',
                border: isActive
                  ? '1px solid var(--color-gold-400)'
                  : '1px solid rgba(148,163,184,0.15)',
                boxShadow: isActive
                  ? '0 4px 20px rgba(212,168,67,0.3), inset 0 1px 0 rgba(255,255,255,0.2)'
                  : 'none',
                transform: isActive ? 'scale(1.05)' : 'scale(1)',
              }}
            >
              <span className="mr-1.5">{tier.icon}</span>
              {tier.label}
              <span
                className="ml-1.5 text-xs px-1.5 py-0.5 rounded-full"
                style={{
                  background: isActive ? 'rgba(6,9,18,0.25)' : 'rgba(255,255,255,0.08)',
                  fontSize: '0.65rem',
                  fontWeight: 800,
                }}
              >
                {tier.count}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default EventFilters;
