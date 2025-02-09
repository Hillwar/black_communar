"use client"

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FadeIn } from "@/components/ui/fade-in";
import { DutyShift } from "@/types";

const mockDuties: DutyShift[] = [
  {
    id: "1",
    date: "2024-02-10",
    role: "Дежурный по лагерю",
    person: "Иван Иванов"
  },
  {
    id: "2",
    date: "2024-02-10",
    role: "Дежурный по столовой",
    person: "Петр Петров"
  },
  {
    id: "3",
    date: "2024-02-11",
    role: "Дежурный по лагерю",
    person: "Анна Сидорова"
  }
];

export function DutySchedule() {
  const [duties] = useState<DutyShift[]>(mockDuties);

  const groupedDuties = duties.reduce((acc, duty) => {
    const date = new Date(duty.date).toLocaleDateString('ru-RU', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
    
    if (!acc[date]) {
      acc[date] = [];
    }
    acc[date].push(duty);
    return acc;
  }, {} as Record<string, DutyShift[]>);

  return (
    <div className="space-y-4 p-4">
      {Object.entries(groupedDuties).map(([date, duties]) => (
        <FadeIn key={date}>
          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="text-lg capitalize">{date}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {duties.map((duty) => (
                  <div
                    key={duty.id}
                    className="flex items-center justify-between p-2 rounded-md bg-accent/10"
                  >
                    <div>
                      <p className="font-medium">{duty.role}</p>
                      <p className="text-sm text-muted-foreground">
                        {duty.person}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </FadeIn>
      ))}
    </div>
  );
} 