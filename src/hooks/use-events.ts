"use client"

import { useState, useEffect } from 'react';
import { Event } from '@/types';
import { JULY_EVENTS } from '@/lib/constants';

export function useEvents() {
  const [loading, setLoading] = useState(true);
  const [events, setEvents] = useState<Event[]>([]);

  useEffect(() => {
    // Преобразуем формат данных из JULY_EVENTS в массив событий
    const allEvents = JULY_EVENTS.flatMap(day => 
      day.events.map(event => ({
        ...event,
        date: day.date
      }))
    );

    setEvents(allEvents);
    setLoading(false);
  }, []);

  const createEvent = async (event: Omit<Event, 'id'>) => {
    try {
      const response = await fetch('/api/events', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(event),
      });
      const newEvent = await response.json();
      setEvents(prev => [...prev, newEvent]);
      return newEvent;
    } catch (err) {
      console.error('Failed to create event');
      throw err;
    }
  };

  return { events, loading, createEvent };
} 