import { NextResponse } from 'next/server';
import { Event } from '@/types';

// Временные данные для примера
const mockEvents: Event[] = [
  {
    id: '1',
    title: 'Вечер песни у костра',
    description: 'Традиционный вечер песен под гитару',
    category: 'MUSIC',
    date: '2024-02-10',
    time: '19:00'
  },
  {
    id: '2',
    title: 'Утренняя зарядка',
    description: 'Общая зарядка для всех участников лагеря',
    category: 'SPORT',
    date: '2024-02-11',
    time: '08:00'
  }
];

export async function GET() {
  try {
    // В будущем здесь будет запрос к базе данных
    return NextResponse.json(mockEvents);
  } catch (error) {
    console.error('Events API Error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch events' },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const event = await request.json();
    // В будущем здесь будет сохранение в базу данных
    return NextResponse.json(event);
  } catch (error) {
    console.error('Create Event Error:', error);
    return NextResponse.json(
      { error: 'Failed to create event' },
      { status: 500 }
    );
  }
} 