"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FadeIn } from "@/components/ui/fade-in";

interface ScheduleItem {
  time: string;
  activity: string;
  details?: string;
}

interface ScheduleGroup {
  title: string;
  items: ScheduleItem[];
}

const schedule: ScheduleGroup[] = [
  {
    title: "Утро",
    items: [
      { time: "7:45", activity: "Первый горн" },
      { time: "8:00", activity: "Второй горн. Подъем. Утренний туалет" },
      { time: "8:20-8:40", activity: "Зарядка" },
      { time: "8:50-9:00", activity: "Утренняя линейка" },
      { time: "9:05-9:25", activity: "Завтрак" },
    ]
  },
  {
    title: "День",
    items: [
      { time: "9:30-13:00", activity: "Работа" },
      { time: "13:00-14:00", activity: "Обед" },
      { time: "14:00-15:00", activity: "Тихий час" },
    ]
  },
  {
    title: "Вечер",
    items: [
      { time: "18:30-18:50", activity: "Ужин" },
      { time: "19:45-22:15", activity: "КБТ", details: "отв. Лера Архипова" },
      { time: "22:20-22:40", activity: "Вечерний чай" },
      { time: "22:50-23:30", activity: "ИВО" },
      { time: "23:30", activity: "Орлятский круг. Глобус. Совет" },
      { time: "0:00", activity: "Отбой" },
      { time: "0:30", activity: "Полный отбой" },
    ]
  }
];

export function DailySchedule() {
  return (
    <div className="space-y-6">
      {schedule.map((group, index) => (
        <FadeIn key={index} delay={index * 0.1}>
          <Card className="glass-card">
            <CardHeader className="px-4 py-3">
              <CardTitle className="text-lg">{group.title}</CardTitle>
            </CardHeader>
            <CardContent className="px-4 py-2">
              <div className="space-y-2">
                {group.items.map((item, i) => (
                  <div key={i} className="schedule-item">
                    <div className="flex-1">
                      <div className="schedule-time">{item.time}</div>
                      <div className="schedule-description">{item.activity}</div>
                      {item.details && (
                        <div className="text-xs text-white/40 mt-1">{item.details}</div>
                      )}
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