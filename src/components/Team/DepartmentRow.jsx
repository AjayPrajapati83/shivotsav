import { User } from 'lucide-react';

export function DepartmentRow({ department }) {
  return (
    <div className="w-full" style={{ marginBottom: '80px' }}>
      {/* Department Title */}
      <h3 
        className="text-3xl md:text-4xl font-bold text-center gradient-text" 
        style={{ 
          marginBottom: '48px',
          textShadow: '0 0 40px rgba(255, 87, 34, 0.6), 0 0 80px rgba(212, 168, 67, 0.4)',
          background: 'linear-gradient(135deg, #FF5722 0%, #D4A843 50%, #FF5722 100%)',
          backgroundSize: '200% auto',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          animation: 'shimmer 3s ease-in-out infinite',
          letterSpacing: '0.05em',
          textTransform: 'uppercase'
        }}
      >
        {department.department}
      </h3>

      {/* Members Grid - Centered */}
      <div className="flex justify-center w-full">
        <div className={`flex flex-wrap justify-center gap-8 ${
          department.members.length === 4 
            ? 'max-w-7xl' 
            : department.members.length === 3 
            ? 'max-w-5xl' 
            : department.members.length === 2 
            ? 'max-w-4xl'
            : 'max-w-3xl'
        }`}>
          {department.members.map((member, i) => {
            // Convert member name to image filename format
            const imageName = member.name.toLowerCase().replace(/\s+/g, '_');
            const imagePath = `/team/${imageName}.jpg`;

            return (
              <div
                key={i}
                className="group flex flex-col items-center hover:-translate-y-2 transition-transform duration-300"
              >
                {/* Image Card */}
                <div className="glass-effect-strong rounded-2xl p-8 border-2 border-white/20 hover:border-fire-500/60 transition-colors duration-300 relative overflow-hidden" style={{ marginBottom: '8px' }}>
                  {/* Team Member Image */}
                  <div className="w-56 h-56 rounded-xl bg-gradient-to-br from-fire-500/30 to-water-500/30 flex items-center justify-center relative overflow-hidden">
                    <img
                      src={imagePath}
                      alt={member.name}
                      className="w-full h-full object-cover rounded-xl"
                      loading="lazy"
                      onError={(e) => {
                        // Fallback to placeholder if image doesn't exist
                        e.target.style.display = 'none';
                      }}
                    />
                    {/* Placeholder Icon */}
                    <User className="w-28 h-28 text-white/40 absolute" />

                    {/* Static Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-fire-500/20 to-transparent opacity-40 pointer-events-none" />
                  </div>
                </div>

                {/* Member Name */}
                <p className="text-lg font-semibold text-white text-center">
                  {member.name}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default DepartmentRow;
