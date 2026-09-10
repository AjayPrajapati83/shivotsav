import { useState } from 'react';
import { getEventsByTier } from '../../data/events';
import SectionHeading from '../ui/SectionHeading';
import EventFilters from './EventFilters';
import EventCard from './EventCard';
import EventModal from './EventModal';
import useScrollReveal from '../../hooks/useScrollReveal';

export function Events() {
  const [activeTier, setActiveTier] = useState('flagship');
  const [selectedEvent, setSelectedEvent] = useState(null);
  const sectionRef = useScrollReveal();

  const filteredEvents = getEventsByTier(activeTier);

  return (
    <section
      id="events"
      ref={sectionRef}
      className="section-padding relative overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, var(--color-navy-900) 0%, rgba(17,24,39,0.95) 30%, var(--color-navy-900) 100%)',
      }}
    >
      {/* Ambient glows */}
      <div
        className="absolute top-20 right-10 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(232,25,26,0.06), transparent)', filter: 'blur(100px)' }}
      />
      <div
        className="absolute bottom-20 left-10 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(212,168,67,0.06), transparent)', filter: 'blur(100px)' }}
      />

      <div className="w-full flex flex-col items-center justify-center relative z-10 px-4 sm:px-6">
        <div className="w-full max-w-7xl flex flex-col items-center">
          <div data-reveal className="w-full">
            <SectionHeading subtitle="37 legendary competitions">
              The Pantheon of Events
            </SectionHeading>
          </div>

          <div data-reveal className="w-full" style={{ marginTop: '6rem', marginBottom: '8rem' }}>
            <EventFilters activeTier={activeTier} onTierChange={setActiveTier} />
          </div>

          {/* Event grid — proper centering and even gaps */}
          <div
            className="w-full grid gap-6 lg:gap-8"
            style={{
              gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 340px), 1fr))',
            }}
          >
            {filteredEvents.map((event) => (
              <div key={event.id} data-reveal>
                <EventCard event={event} onRegister={setSelectedEvent} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {selectedEvent && (
        <EventModal
          event={selectedEvent}
          onClose={() => setSelectedEvent(null)}
        />
      )}
    </section>
  );
}

export default Events;
