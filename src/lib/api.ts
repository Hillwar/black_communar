const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || '';
const WEATHER_API_KEY = process.env.WEATHER_API_KEY;

export async function fetchApi<T>(endpoint: string, options?: RequestInit): Promise<T> {
  const response = await fetch(`${API_BASE_URL}${endpoint}`, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...options?.headers,
    },
  });

  if (!response.ok) {
    throw new Error(`API Error: ${response.statusText}`);
  }

  return response.json();
}

export async function fetchWeather(city: string = 'Moscow') {
  const url = `http://api.weatherapi.com/v1/forecast.json?key=${WEATHER_API_KEY}&q=${city}&days=3&aqi=no`;
  const response = await fetch(url);
  return response.json();
} 