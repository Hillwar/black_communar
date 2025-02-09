"use client"

import { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { useEvents } from "@/hooks/use-events";
import { FadeIn } from "@/components/ui/fade-in";
import { CalendarGrid } from "./calendar-grid";
import { EventList } from "./event-list";

export function Calendar() {
  const { events, loading } = useEvents();
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date(2025, 6, 20));
  const currentMonth = new Date(2025, 6); // Фиксированный июль 2025

  if (loading) {
    return (
      <Card className="glass-card">
        <CardContent className="p-4">
          <div className="text-center">Загрузка календаря...</div>
        </CardContent>
      </Card>
    );
  }

  return (
    <FadeIn>
      <div className="calendar-container">
        <h2 className="text-lg font-semibold mb-4 text-center">Июль 2025 г.</h2>
        <CalendarGrid
          currentMonth={currentMonth}
          events={events}
          onSelectDate={setSelectedDate}
          selectedDate={selectedDate}
        />
      </div>
      <EventList
        events={events}
        selectedDate={selectedDate}
      />
    </FadeIn>
  );
} 