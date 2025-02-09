"use client"

import { motion } from "framer-motion";
import { Event } from "@/types";
import { isDateSelectable } from "@/lib/constants";
import { cn } from "@/lib/utils";

interface CalendarGridProps {
  events: readonly Event[];
  onSelectDate: (date: Date) => void;
  selectedDate?: Date | null;
}

const WEEKDAYS = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];

export function CalendarGrid({ 
  events, 
  onSelectDate,
  selectedDate 
}: CalendarGridProps) {
  const startDate = new Date(2025, 6, 1); // 1 июля 2025
  const endDate = new Date(2025, 6, 31); // 31 июля 2025
  
  const startDay = startDate.getDay();
  const daysInMonth = endDate.getDate();

  const days = Array.from({ length: daysInMonth }, (_, index) => index + 1);
  const padding = Array.from({ length: (startDay + 6) % 7 }, () => null);
  const allDays = [...padding, ...days];

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="grid grid-cols-7 gap-1 text-center mb-2">
        {WEEKDAYS.map((day) => (
          <div key={day} className="text-sm text-muted-foreground">
            {day}
          </div>
        ))}
      </div>
      <div className="grid grid-cols-7 gap-1">
        {allDays.map((day, index) => {
          if (day === null) {
            return <div key={`empty-${index}`} />;
          }

          const date = new Date(2025, 6, day);
          const dayEvents = events.filter(event => 
            new Date(event.date).toDateString() === date.toDateString()
          );

          const isSelected = selectedDate && 
            date.toDateString() === selectedDate.toDateString();
          const isDisabled = !isDateSelectable(date);
          
          return (
            <motion.button
              key={date.toISOString()}
              onClick={() => !isDisabled && onSelectDate(date)}
              disabled={isDisabled}
              className={cn(
                "relative w-full pt-[100%]",
                "group hover:bg-white/5 rounded-xl transition-colors",
                isDisabled && "opacity-50 cursor-not-allowed",
                dayEvents.length > 0 && !isSelected && "bg-white/5",
              )}
              whileTap={{ scale: 0.95 }}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <div className={cn(
                  "relative flex items-center justify-center w-8 h-8 rounded-lg text-sm transition-all",
                  isSelected && "bg-primary text-primary-foreground",
                  !isDisabled && "group-hover:scale-110 active:scale-95",
                  "transform transition-all duration-150"
                )}>
                  {day}
                </div>
              </div>
            </motion.button>
          );
        })}
      </div>
    </div>
  );
} 