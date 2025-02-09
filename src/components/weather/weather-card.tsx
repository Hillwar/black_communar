"use client"

import { Card, CardContent } from "@/components/ui/card";
import { useWeather } from "@/hooks/use-weather";
import { FadeIn } from "@/components/ui/fade-in";
import { getClothingAdvice } from "@/lib/weather-utils";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion, AnimatePresence } from "framer-motion";
import { WeatherData } from "@/types";

// Моковые данные для прогноза на 3 дня
const FORECAST_DATA = [
  {
    date: "воскресенье, 9 февраля",
    temp_max: -2,
    temp_min: -6,
    condition: "Sunny",
    icon: "//cdn.weatherapi.com/weather/64x64/day/113.png"
  },
  {
    date: "понедельник, 10 февраля",
    temp_max: -1,
    temp_min: -5,
    condition: "Sunny",
    icon: "//cdn.weatherapi.com/weather/64x64/day/113.png"
  },
  {
    date: "вторник, 11 февраля",
    temp_max: -1,
    temp_min: -5,
    condition: "Sunny",
    icon: "//cdn.weatherapi.com/weather/64x64/day/113.png"
  }
];

export function WeatherCard() {
  const { weather, loading, error } = useWeather();

  if (loading) {
    return (
      <Card className="glass-card w-full">
        <CardContent className="p-4">
          <div className="text-center">Загрузка погоды...</div>
        </CardContent>
      </Card>
    );
  }

  if (error || !weather || !weather.current) {
    return (
      <Card className="glass-card w-full">
        <CardContent className="p-4">
          <div className="text-center">Не удалось загрузить погоду</div>
        </CardContent>
      </Card>
    );
  }

  const currentWeather = weather.current;
  const hourlyForecast = weather.forecast?.forecastday[0]?.hour || [];

  // Проверяем наличие необходимых данных перед использованием
  if (!currentWeather.temp_c || !currentWeather.condition) {
    return (
      <Card className="glass-card w-full">
        <CardContent className="p-4">
          <div className="text-center">Данные о погоде недоступны</div>
        </CardContent>
      </Card>
    );
  }

  const advice = getClothingAdvice(currentWeather.temp_c, currentWeather.condition.text);

  // Используем прогноз на 3 дня из API
  const forecastData = weather?.forecast.forecastday.slice(0, 3).map(day => ({
    date: new Date(day.date).toLocaleDateString('ru-RU', { weekday: 'long', day: 'numeric', month: 'long' }),
    temp_max: day.day.maxtemp_c,
    temp_min: day.day.mintemp_c,
    condition: day.day.condition.text,
    icon: day.day.condition.icon
  })) || FORECAST_DATA;

  return (
    <FadeIn>
      <Card className="glass-card w-full mb-6">
        <CardContent className="p-4 space-y-4">
          <div className="text-lg font-medium">
            Копачево, Архангельская область
          </div>
          <Tabs defaultValue="current">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="current">Сейчас</TabsTrigger>
              <TabsTrigger value="hourly">По часам</TabsTrigger>
            </TabsList>
            
            <AnimatePresence mode="wait">
              <TabsContent value="current" asChild>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.2 }}
                  className="space-y-4"
                >
                  <div className="flex items-center gap-2">
                    <img 
                      src={currentWeather.condition.icon} 
                      alt={currentWeather.condition.text}
                      className="w-8 h-8"
                    />
                    <span className="text-xl font-semibold">{currentWeather.temp_c}°C</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <p className="text-sm text-muted-foreground">
                      Ощущается как {currentWeather.feelslike_c}°C
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Влажность: {currentWeather.humidity}%
                    </p>
                    <p className="text-sm text-muted-foreground col-span-2">
                      Ветер: {currentWeather.wind_kph} км/ч
                    </p>
                  </div>
                  <div className="pt-2 border-t border-border">
                    <h4 className="text-sm font-medium mb-2">Рекомендации по одежде:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      {advice.map((item, index) => (
                        <li key={index} className="flex items-center gap-2">
                          <span className="text-lg">{item.icon}</span>
                          <span>{item.text}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </TabsContent>

              <TabsContent value="hourly" asChild>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="space-y-2">
                    {hourlyForecast.map((hour, index) => {
                      const time = new Date(hour.time).getHours();
                      const isNow = new Date().getHours() === time; // Используем текущий час
                      return (
                        <div 
                          key={index}
                          className={`flex items-center justify-between p-2 rounded-lg ${
                            isNow ? 'bg-primary/10' : ''
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            <span className="text-sm w-8">{time}:00</span>
                            <img 
                              src={hour.condition.icon} 
                              alt={hour.condition.text}
                              className="w-6 h-6"
                            />
                            <span className="text-sm font-medium">{Math.round(hour.temp_c)}°C</span>
                          </div>
                          <div className="flex items-center gap-4 text-sm text-muted-foreground">
                            <span>{Math.round(hour.wind_kph)} км/ч</span>
                            <span>{hour.chance_of_rain}%</span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </motion.div>
              </TabsContent>
            </AnimatePresence>
          </Tabs>
        </CardContent>
      </Card>

      <Card className="glass-card w-full">
        <CardContent className="p-4">
          <h2 className="text-lg font-medium mb-2">Прогноз на 3 дня</h2>
          <div className="space-y-4">
            {forecastData.map((day, index) => (
              <div key={index} className="flex items-center justify-between p-2 rounded-lg bg-muted/5">
                <div className="flex items-center gap-3">
                  <img 
                    src={day.icon} 
                    alt={day.condition}
                    className="w-8 h-8"
                  />
                  <div>
                    <div className="font-medium">{day.date}</div>
                    <div className="text-sm text-muted-foreground">{day.condition}</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-medium">{day.temp_max}°C</div>
                  <div className="text-sm text-muted-foreground">{day.temp_min}°C</div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </FadeIn>
  );
} 