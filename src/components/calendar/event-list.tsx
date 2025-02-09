"use client"

import { Event } from "@/types";
import { Card, CardContent } from "@/components/ui/card";
import { CATEGORIES } from "@/lib/constants";
import { motion } from "framer-motion";
import { getDaySchedule } from "@/lib/constants";

interface EventListProps {
  events: Event[];
  selectedDate: Date | null;
}

export function EventList({ selectedDate }: EventListProps) {
  if (!selectedDate) return null;

  const schedule = getDaySchedule(selectedDate);
  if (!schedule) return null;

  return (
    <div className="mt-4 space-y-4">
      {/* Показываем заголовок дня */}
      <h3 className="text-lg font-semibold">{schedule.title}</h3>
      
      {/* Показываем ДКС и Д/О если есть */}
      {(schedule.dks || schedule.do) && (
        <div className="text-sm text-muted-foreground space-y-1">
          {schedule.dks && <div>ДКС: {schedule.dks}</div>}
          {schedule.do && <div>Д/О: {schedule.do}</div>}
        </div>
      )}

      {/* Группируем расписание */}
      {["КБТ", "не КБТ", "общее"].map(group => {
        const groupSchedule = schedule.schedule.filter(item => item.group === group);
        if (groupSchedule.length === 0) return null;

        return (
          <motion.div
            key={group}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-2"
          >
            {group !== "общее" && (
              <h4 className="font-medium text-sm text-primary">Для {group}</h4>
            )}
            {groupSchedule.map((item, index) => (
              <Card key={index} className="glass-card">
                <CardContent className="p-3">
                  <div className="flex items-start gap-3">
                    <div className="w-24 flex-shrink-0 text-sm text-muted-foreground">
                      {item.time}
                    </div>
                    <div className="flex-1">
                      <div className="font-medium">{item.activity}</div>
                      {(item.details || item.responsible || item.squad) && (
                        <div className="text-sm text-muted-foreground space-y-0.5">
                          {item.details && <div>{item.details}</div>}
                          {item.squad && <div>Отряд: {item.squad}</div>}
                          {item.responsible && <div>Отв: {item.responsible}</div>}
                        </div>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </motion.div>
        );
      })}
    </div>
  );
} 