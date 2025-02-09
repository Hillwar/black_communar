"use client"

import { useState, useEffect } from 'react';
import { WeatherData } from '@/types';

const KOPACHEVO_COORDS = {
  lat: 62.1257,
  lon: 42.7634
};

export function useWeather() {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchWeather() {
      try {
        const response = await fetch(`/api/weather?lat=${KOPACHEVO_COORDS.lat}&lon=${KOPACHEVO_COORDS.lon}`);
        const data = await response.json();
        setWeather(data);
      } catch (err) {
        setError('Failed to fetch weather data');
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    fetchWeather();
  }, []);

  return { weather, loading, error };
} 