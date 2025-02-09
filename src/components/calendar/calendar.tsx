"use client"

import { useState } from "react";
import { CalendarGrid } from "./calendar-grid";
import { EventList } from "./event-list";
import { Events } from "@/types";
import { motion } from "framer-motion";

interface CalendarProps {
  events: Events;
}

export function Calendar({ events }: CalendarProps) {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  return (
    <div className="w-full max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="w-full"
        >
          <h2 className="text-lg font-semibold mb-4 text-center">Июль 2025 г.</h2>
          <CalendarGrid
            events={events.flatMap(day => day.events)}
            onSelectDate={setSelectedDate}
            selectedDate={selectedDate}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
          className="w-full"
        >
          <EventList 
            events={events.flatMap(day => day.events)}
            selectedDate={selectedDate}
          />
        </motion.div>
      </div>
    </div>
  );
} 