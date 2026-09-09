export function Badge({ children, color, variant = 'filled', className = '' }) {
  const baseClasses = 'inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold whitespace-nowrap';

  if (variant === 'outline') {
    return (
      <span
        className={`${baseClasses} border ${className}`}
        style={{
          borderColor: `${color}66`,
          color: color,
          background: `${color}15`,
        }}
      >
        {children}
      </span>
    );
  }

  return (
    <span
      className={`${baseClasses} ${className}`}
      style={{
        backgroundColor: `${color}25`,
        color: color,
      }}
    >
      {children}
    </span>
  );
}

export default Badge;
