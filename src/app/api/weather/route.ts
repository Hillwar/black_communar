import { NextResponse } from 'next/server';
import { fetchWeather } from '@/lib/api';

export async function GET() {
  try {
    const data = await fetchWeather();
    return NextResponse.json(data);
  } catch (error) {
    console.error('Weather API Error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch weather data' },
      { status: 500 }
    );
  }
} 