import { memo } from 'react';
import { User } from 'lucide-react';

export const DepartmentRow = memo(function DepartmentRow({ department }) {
  return (
    <div className="w-full">
      {/* Department Title */}
      <h3 
        className="text-2xl md:text-3xl font-bold text-center"
        style={{ 
          marginBottom: '48px',
          background: 'linear-gradient(135deg, #FF5722 0%, #D4A843 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          letterSpacing: '0.05em',
          textTransform: 'uppercase'
        }}
      >
        {department.department}
      </h3>

      {/* Members Grid - Centered */}
      <div className="flex justify-center w-full" style={{ marginBottom: '48px' }}>
        <div className={`flex flex-wrap justify-center gap-6 md:gap-8 ${
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
                key={`${department.department}-${i}`}
                className="group flex flex-col items-center"
                style={{
                  willChange: 'transform',
                  transition: 'transform 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                {/* Image Card */}
                <div 
                  className="rounded-2xl p-6 md:p-8 border-2 border-white/20 mb-3 relative overflow-hidden"
                  style={{
                    background: 'rgba(17, 24, 39, 0.6)',
                    backdropFilter: 'blur(10px)',
                    transition: 'border-color 0.3s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(255, 87, 34, 0.6)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.2)';
                  }}
                >
                  {/* Team Member Image */}
                  <div className="w-48 h-48 md:w-56 md:h-56 rounded-xl bg-gradient-to-br from-fire-500/20 to-water-500/20 flex items-center justify-center relative overflow-hidden">
                    <img
                      src={imagePath}
                      alt={member.name}
                      className="w-full h-full object-cover rounded-xl absolute inset-0"
                      loading="lazy"
                      decoding="async"
                      onError={(e) => {
                        e.target.style.display = 'none';
                      }}
                    />
                    {/* Placeholder Icon */}
                    <User className="w-20 h-20 md:w-28 md:h-28 text-white/30" style={{ zIndex: 1 }} />
                  </div>
                </div>

                {/* Member Name */}
                <p className="text-base md:text-lg font-semibold text-white text-center">
                  {member.name}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
});

export default DepartmentRow;
