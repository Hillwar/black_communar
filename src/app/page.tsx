"use client"

import { Calendar } from "@/components/calendar/calendar";
import { JULY_EVENTS } from "@/lib/constants";

export default function HomePage() {
  return (
    <div className="page-container">
      <div className="content-container">
        <div className="text-center w-full mb-8">
          <h1 className="text-2xl lg:text-4xl font-bold mb-4">
            Расписание лагеря
          </h1>
          <p className="text-muted-foreground lg:text-lg">
            Календарь событий и мероприятий
          </p>
        </div>
        <div className="w-full max-w-7xl mx-auto">
          <Calendar events={JULY_EVENTS} />
        </div>
      </div>
    </div>
  );
} 