"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getDaySchedule } from "@/lib/constants";
import { FadeIn } from "@/components/ui/fade-in";

interface DayScheduleProps {
  date: Date | null;
}

export function DaySchedule({ date }: DayScheduleProps) {
  if (!date) return null;

  const schedule = getDaySchedule(date);
  if (!schedule) return null;

  return (
    <FadeIn>
      <Card className="glass-card">
        <CardHeader className="px-4 py-3">
          <CardTitle className="text-lg">{schedule.title}</CardTitle>
          {(schedule.dks || schedule.do) && (
            <div className="text-sm text-muted-foreground space-y-1">
              {schedule.dks && <div>ДКС: {schedule.dks}</div>}
              {schedule.do && <div>Д/О: {schedule.do}</div>}
            </div>
          )}
        </CardHeader>
        <CardContent className="px-4 py-2">
          <div className="space-y-4">
            {["КБТ", "не КБТ"].map(group => {
              const groupSchedule = schedule.schedule.filter(item => item.group === group);
              if (groupSchedule.length === 0) return null;

              return (
                <div key={group} className="space-y-2">
                  <h3 className="font-medium text-sm text-primary">Для {group}</h3>
                  {groupSchedule.map((item, index) => (
                    <div key={index} className="flex gap-3 text-sm">
                      <div className="w-20 flex-shrink-0 text-muted-foreground">
                        {item.time}
                      </div>
                      <div>
                        <div>{item.activity}</div>
                        {item.details && (
                          <div className="text-xs text-muted-foreground">
                            {item.details}
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              );
            })}

            <div className="space-y-2">
              {schedule.schedule
                .filter(item => !item.group)
                .map((item, index) => (
                  <div key={index} className="flex gap-3 text-sm">
                    <div className="w-20 flex-shrink-0 text-muted-foreground">
                      {item.time}
                    </div>
                    <div>
                      <div>{item.activity}</div>
                      {item.details && (
                        <div className="text-xs text-muted-foreground">
                          {item.details}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </FadeIn>
  );
} 