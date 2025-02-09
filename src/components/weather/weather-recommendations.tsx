"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useWeather } from "@/hooks/use-weather";
import { FadeIn } from "@/components/ui/fade-in";
import { Umbrella, Sun, Wind, LucideIcon } from "lucide-react";

interface WeatherData {
  current: {
    condition: {
      text: string;
    };
    wind_kph: number;
  };
}

interface Recommendation {
  icon: LucideIcon;
  text: string;
}

export function WeatherRecommendations() {
  const { weather, loading, error } = useWeather();

  if (loading || error || !weather) return null;

  const recommendations = getClothingRecommendations(weather);

  if (recommendations.length === 0) return null;

  return (
    <FadeIn delay={0.3}>
      <Card className="glass-card mx-2 mt-4">
        <CardHeader className="px-3 py-4">
          <CardTitle className="text-lg">Рекомендации</CardTitle>
        </CardHeader>
        <CardContent className="px-3 py-2">
          <div className="space-y-3">
            {recommendations.map((rec, index) => (
              <div key={index} className="flex items-center gap-2">
                <rec.icon className="w-4 h-4 text-primary" />
                <p className="text-sm">{rec.text}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </FadeIn>
  );
}

function getClothingRecommendations(weather: WeatherData): Recommendation[] {
  const recommendations: Recommendation[] = [];
  
  if (weather.current.condition.text.toLowerCase().includes("дождь")) {
    recommendations.push({
      icon: Umbrella,
      text: "Возьмите резиновые сапоги и дождевик"
    });
  }
  
  if (weather.current.condition.text.toLowerCase().includes("солнечно")) {
    recommendations.push({
      icon: Sun,
      text: "Не забудьте головной убор и солнцезащитный крем"
    });
  }
  
  if (weather.current.wind_kph > 15) {
    recommendations.push({
      icon: Wind,
      text: "Рекомендуется ветровка"
    });
  }
  
  return recommendations;
} 