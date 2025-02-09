"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useWeather } from "@/hooks/use-weather";
import { FadeIn } from "@/components/ui/fade-in";

export function WeatherForecast() {
  const { weather, loading, error } = useWeather();

  if (loading) {
    return (
      <Card className="glass-card">
        <CardHeader className="px-4 py-3">
          <CardTitle>Загрузка прогноза...</CardTitle>
        </CardHeader>
      </Card>
    );
  }

  if (error || !weather) {
    return (
      <Card className="glass-card">
        <CardHeader className="px-4 py-3">
          <CardTitle>Не удалось загрузить прогноз</CardTitle>
        </CardHeader>
      </Card>
    );
  }

  return (
    <FadeIn>
      <Card className="weather-card">
        <CardHeader className="px-4 py-3">
          <CardTitle className="text-lg">Прогноз на 3 дня</CardTitle>
        </CardHeader>
        <CardContent className="px-4 py-2">
          <div className="space-y-3">
            {weather.forecast.forecastday.map((day) => (
              <div
                key={day.date}
                className="flex items-center justify-between p-2 rounded-lg bg-white/5"
              >
                <div className="flex items-center gap-2">
                  <img
                    src={day.day.condition.icon}
                    alt={day.day.condition.text}
                    className="w-8 h-8"
                  />
                  <div>
                    <p className="text-sm font-medium">
                      {new Date(day.date).toLocaleDateString('ru-RU', {
                        weekday: 'long',
                        day: 'numeric',
                        month: 'long'
                      })}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {day.day.condition.text}
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium">{Math.round(day.day.maxtemp_c)}°C</p>
                  <p className="text-xs text-muted-foreground">
                    {Math.round(day.day.mintemp_c)}°C
                  </p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </FadeIn>
  );
} 