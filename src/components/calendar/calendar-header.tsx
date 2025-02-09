"use client"

import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface CalendarHeaderProps {
  currentMonth: Date;
  onPrevMonth: () => void;
  onNextMonth: () => void;
}

export function CalendarHeader({ currentMonth, onPrevMonth, onNextMonth }: CalendarHeaderProps) {
  const monthYear = currentMonth.toLocaleString('ru-RU', {
    month: 'long',
    year: 'numeric'
  });

  return (
    <div className="flex items-center justify-between mb-6">
      <motion.h2 
        className="text-2xl font-bold"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        {monthYear}
      </motion.h2>
      <div className="flex gap-2">
        <button
          onClick={onPrevMonth}
          className="p-2 hover:bg-accent rounded-full transition-colors"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={onNextMonth}
          className="p-2 hover:bg-accent rounded-full transition-colors"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
} 