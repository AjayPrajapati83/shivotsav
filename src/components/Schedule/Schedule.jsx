import { useState } from 'react';
import { days, getScheduleForDay, getEventCountForDay } from '../../data/schedule';
import SectionHeading from '../ui/SectionHeading';
import ScheduleRow from './ScheduleRow';
import useScrollReveal from '../../hooks/useScrollReveal';

export function Schedule() {
  const [activeDay, setActiveDay] = useState(1);
  const sectionRef = useScrollReveal();
  const scheduleEvents = getScheduleForDay(activeDay);

  return (
    <section
      id="schedule"
      ref={sectionRef}
      className="section-padding relative overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, var(--color-navy-900) 0%, rgba(17,24,39,0.95) 50%, var(--color-navy-900) 100%)',
      }}
    >
      <div className="w-full flex flex-col items-center justify-center relative z-10 px-4 sm:px-6">
        <div className="w-full max-w-4xl flex flex-col items-center">
          <div data-reveal className="w-full">
            <SectionHeading subtitle="Two days of mythic competitions and legendary performances">
              The Grand Chronicle
            </SectionHeading>
          </div>

          {/* Day tabs — bigger, bolder */}
          <div data-reveal className="flex justify-center gap-4 w-full" style={{ marginTop: '3rem', marginBottom: '3rem' }}>
            {days.map((day) => {
              const isActive = activeDay === day.id;
              return (
                <button
                  key={day.id}
                  onClick={() => setActiveDay(day.id)}
                  className="cursor-pointer transition-all duration-300 rounded-2xl text-center"
                  style={{
                    padding: '1rem 2.5rem',
                    fontFamily: 'var(--font-heading)',
                    background: isActive
                      ? 'linear-gradient(135deg, var(--color-gold-500), var(--color-gold-700))'
                      : 'rgba(17, 24, 39, 0.6)',
                    color: isActive ? 'var(--color-navy-950)' : '#94a3b8',
                    border: isActive
                      ? '1px solid var(--color-gold-400)'
                      : '1px solid rgba(148,163,184,0.15)',
                    boxShadow: isActive
                      ? '0 4px 25px rgba(212,168,67,0.3)'
                      : 'none',
                    transform: isActive ? 'scale(1.05)' : 'scale(1)',
                  }}
                >
                  <span className="block text-lg font-bold">{day.label}</span>
                  <span className="block text-xs mt-1" style={{ opacity: 0.7 }}>
                    {day.date} · {getEventCountForDay(day.id)} Events
                  </span>
                </button>
              );
            })}
          </div>

          {/* Schedule list */}
          <div className="w-full" style={{ marginTop: '4rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {scheduleEvents.map((event) => (
              <div key={event.id} data-reveal>
                <ScheduleRow event={event} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Schedule;
