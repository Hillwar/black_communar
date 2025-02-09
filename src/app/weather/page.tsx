"use client"

import { WeatherCard } from "@/components/weather/weather-card";

export default function WeatherPage() {
  return (
    <div className="page-container">
      <div className="content-container">
        <div className="text-center w-full mb-8">
          <h1 className="text-2xl lg:text-4xl font-bold mb-4">
            Погода в лагере
          </h1>
          <p className="text-muted-foreground lg:text-lg">
            Прогноз погоды и рекомендации по одежде
          </p>
        </div>
        <div className="w-full max-w-md mx-auto">
          <WeatherCard />
        </div>
      </div>
    </div>
  );
} 