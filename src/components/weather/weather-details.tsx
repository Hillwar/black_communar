"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useWeather } from "@/hooks/use-weather";
import { FadeIn } from "@/components/ui/fade-in";
import { Wind, Droplets, Thermometer } from "lucide-react";

export function WeatherDetails() {
  const { weather, loading, error } = useWeather();

  if (loading || error || !weather) return null;

  return (
    <FadeIn delay={0.2}>
      <Card className="weather-card">
        <CardHeader className="px-4 py-3">
          <CardTitle className="text-lg">Подробности</CardTitle>
        </CardHeader>
        <CardContent className="px-4 py-2">
          <div className="grid grid-cols-2 gap-3">
            <div className="flex items-center gap-2 p-2 rounded-lg bg-white/5">
              <Thermometer className="w-4 h-4 text-primary" />
              <div>
                <p className="text-xs font-medium">Ощущается как</p>
                <p className="text-sm">
                  {weather.current.feelslike_c}°C
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2 p-2 rounded-lg bg-white/5">
              <Wind className="w-4 h-4 text-primary" />
              <div>
                <p className="text-xs font-medium">Ветер</p>
                <p className="text-sm">
                  {weather.current.wind_kph} км/ч
                </p>
              </div>
            </div>
            <div className="col-span-2 flex items-center gap-2 p-2 rounded-lg bg-white/5">
              <Droplets className="w-4 h-4 text-primary" />
              <div>
                <p className="text-xs font-medium">Влажность</p>
                <p className="text-sm">
                  {weather.current.humidity}%
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </FadeIn>
  );
} 