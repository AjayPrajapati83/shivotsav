import { events } from './events';

// Schedule is derived from events data.
// When events have day/time/venue populated, this auto-generates the schedule.
// Until then, all events appear as "TBA".

export const days = [
  { id: 1, label: 'Day 1', date: '27th November' },
  { id: 2, label: 'Day 2', date: '28th November' },
];

export const getScheduleForDay = (dayNumber) => {
  const scheduled = events.filter((e) => e.day === dayNumber);
  if (scheduled.length > 0) {
    return scheduled.sort((a, b) => {
      if (!a.time) return 1;
      if (!b.time) return -1;
      return a.time.localeCompare(b.time);
    });
  }

  // If no events have day assigned, distribute evenly for placeholder display
  const half = Math.ceil(events.length / 2);
  if (dayNumber === 1) return events.slice(0, half);
  return events.slice(half);
};

export const getEventCountForDay = (dayNumber) => {
  return getScheduleForDay(dayNumber).length;
};

export default { days, getScheduleForDay, getEventCountForDay };
