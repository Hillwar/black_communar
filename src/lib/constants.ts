import { Events } from "@/types";

export const JULY_EVENTS: Events = [
  {
    date: "2025-07-02",
    events: [
      {
        id: "1",
        title: "Заезд",
        description: "Распределение по отрядам, расселение",
        time: "12:00",
        category: "CAMP",
        date: "2025-07-02"
      },
      {
        id: "2",
        title: "Вечер знакомств",
        description: "Игры на знакомство, представление служб",
        time: "19:00",
        category: "GAME",
        date: "2025-07-02"
      }
    ]
  },
  {
    date: "2025-07-03",
    events: [
      {
        id: "3",
        title: "Утренняя линейка",
        description: "Открытие смены",
        time: "09:00",
        category: "CAMP",
        date: "2025-07-03"
      },
      {
        id: "4",
        title: "Верёвочный курс",
        description: "Командообразование",
        time: "15:00",
        category: "GAME",
        date: "2025-07-03"
      }
    ]
  },
  {
    date: "2025-07-04",
    events: [
      {
        id: "5",
        title: "Спортивные игры",
        description: "Футбол, волейбол, эстафеты",
        time: "10:00",
        category: "SPORT",
        date: "2025-07-04"
      }
    ]
  },
  {
    date: "2025-07-05",
    events: [
      {
        id: "6",
        title: "Мастер-классы",
        description: "Творческие мастерские по интересам",
        time: "15:00",
        category: "WORKSHOP",
        date: "2025-07-05"
      }
    ]
  },
  {
    date: "2025-07-06",
    events: [
      {
        id: "7",
        title: "Вечер песни",
        description: "Песни у костра под гитару",
        time: "19:00",
        category: "BONFIRE",
        date: "2025-07-06"
      }
    ]
  },
  // Добавьте события для остальных дней...
  {
    date: "2025-07-22",
    events: [
      {
        id: "40",
        title: "Прощальный концерт",
        description: "Выступления отрядов",
        time: "19:00",
        category: "MUSIC",
        date: "2025-07-22"
      },
      {
        id: "41",
        title: "Отъезд",
        description: "Сбор вещей, прощание",
        time: "12:00",
        category: "CAMP",
        date: "2025-07-22"
      }
    ]
  }
] as const;

export const CATEGORIES = {
  CAMP: '🏕️ Лагерь',
  MUSIC: '🎵 Музыка',
  SPORT: '⚽ Спорт',
  GAME: '🎮 Игры',
  WORKSHOP: '🎨 Мастер-классы',
  BONFIRE: '🔥 Костёр'
} as const;

export const ROLES = {
  KITCHEN: 'Кухня',
  CLEANING: 'Уборка',
  SECURITY: 'Охрана',
  MEDICAL: 'Медпункт'
} as const;

export const WEATHER_CONDITIONS = {
  SUNNY: 'sunny',
  CLOUDY: 'cloudy',
  RAINY: 'rainy',
  SNOWY: 'snowy'
} as const;

export const CAMP_DATES = {
  START_DATE: new Date(2025, 6, 2), // Июль 2025
  END_DATE: new Date(2025, 6, 22)
} as const;

export function isDateInRange(date: Date): boolean {
  return date >= CAMP_DATES.START_DATE && date <= CAMP_DATES.END_DATE;
}

export function isDateSelectable(date: Date): boolean {
  const month = date.getMonth();
  const day = date.getDate();
  const year = date.getFullYear();

  // Разрешаем выбор только для июля 2025, с 2 по 22 число
  return (
    year === 2025 &&
    month === 6 && // Июль
    day >= 2 &&
    day <= 22
  );
}

export interface DaySchedule {
  date: string;
  title: string;
  dks?: string;
  do?: string;
  schedule: Array<{
    time: string;
    activity: string;
    details?: string;
    group?: "КБТ" | "не КБТ" | "общее";
    squad?: string;
    responsible?: string;
  }>;
}

export const DAILY_SCHEDULES: DaySchedule[] = [
  {
    date: "2025-07-02",
    title: "День заезда",
    dks: "Иванов Иван",
    do: "1 отряд",
    schedule: [
      { 
        time: "12:00", 
        activity: "Заезд", 
        details: "Распределение по отрядам, расселение", 
        group: "общее" 
      },
      { 
        time: "19:00", 
        activity: "Вечер знакомств", 
        details: "Игры на знакомство, представление служб", 
        group: "общее" 
      }
    ]
  },
  {
    date: "2025-07-03",
    title: "Верёвочный курс",
    dks: "Петрова Анна",
    do: "2 отряд",
    schedule: [
      { time: "7:45", activity: "Первый горн", group: "общее" },
      // Стандартное утреннее расписание
      { time: "10:00-13:00", activity: "Верёвочный курс", details: "Командообразование", group: "общее" },
      // ... остальное расписание дня
    ]
  },
  {
    date: "2025-07-04",
    title: "День спорта",
    dks: "Кузнецов Максим",
    do: "3 отряд",
    schedule: [
      // ... расписание дня спорта
    ]
  },
  {
    date: "2025-07-05",
    title: "Творческий день",
    dks: "Лебедева Ольга",
    do: "4 отряд",
    schedule: [
      // ... расписание творческого дня
    ]
  },
  {
    date: "2025-07-06",
    title: "День песни",
    dks: "Соколов Артем",
    do: "5 отряд",
    schedule: [
      // ... расписание дня песни
    ]
  },
  {
    date: "2025-07-19",
    title: "Конкурс бальных танцев",
    dks: "Валерия Хоменко",
    do: "Сборная (отв. Ира Жуматий)",
    schedule: [
      { time: "7:45", activity: "Первый горн", group: "общее" },
      { time: "8:00", activity: "Второй горн. Подъем. Утренний туалет", group: "общее" },
      { time: "08:20-08:40", activity: "Зарядка", group: "общее" },
      { time: "08:50-09:00", activity: "Утренняя линейка", group: "общее" },
      { time: "09:05-09:25", activity: "Завтрак", group: "общее" },
      // Для участников КБТ
      { time: "9:30-10:30", activity: "Баня (Д) - 1 заход/Приборка в кемпингах - Д - 2 заход,М - 1,2 заход", group: "КБТ" },
      { time: "10:40-11:40", activity: "Баня (Д) - 2 заход/Самостоятельная репетиция М - 1,2 заход, Д - 1", group: "КБТ" },
      { time: "11:50-12:50", activity: "Баня (М) - 1 заход/Приборка в кемпингах - Д - 1,2 заход, М - 2 заход", details: "Участвующие в КБТ", group: "КБТ" },
      { time: "13:00-14:00", activity: "Баня (М) - 2 заход/ПЧМ", group: "КБТ" },
      // Для не участников КБТ
      { time: "9:30", activity: "Развод на работу", group: "не КБТ" },
      { time: "9:30-13:00", activity: "Работа", group: "не КБТ" },
      { time: "13:00-14:00", activity: "Баня (М) - 2 заход/ПЧМ", group: "не КБТ" },
      // Общее расписание
      { time: "14:00-14:30", activity: "Обед", group: "общее" },
      { time: "14:30-15:30", activity: "Репетиция по уровням", details: "1+соло - дискозал, 2 - сушилка", group: "общее" },
      { time: "15:35-16:05", activity: "Организационное собрание - дискозал", group: "общее" },
      { time: "16:05-16:45", activity: "Репетиция парада пар - дискозал", group: "общее" },
      { time: "16:50-17:50", activity: "Общая репетиция", group: "общее" },
      { time: "17:50-18:30", activity: "Подготовка к КБТ участников", group: "общее" },
      { time: "18:30-18:50", activity: "Ужин", group: "общее" },
      { time: "19:00-19:40", activity: "Подготовка к КБТ по отрядам", group: "общее" },
      { time: "19:45-22:15", activity: "КБТ", details: "Конкурс бальных танцев", responsible: "Лера Архипова", group: "общее" },
      { time: "22:20-22:40", activity: "Вечерний чай", squad: "Дежурный отряд", group: "общее" },
      { time: "22:50-23:30", activity: "ИВО", group: "общее" },
      { time: "23:30", activity: "Орлятский круг. Глобус. Совет", group: "общее" },
      { time: "0:00", activity: "Отбой", group: "общее" },
      { time: "0:30", activity: "Полный отбой", group: "общее" }
    ]
  },
  {
    date: "2025-07-22",
    title: "День отъезда",
    dks: "Морозова Елена",
    do: "Сборная",
    schedule: [
      { time: "7:45", activity: "Первый горн", group: "общее" },
      { time: "8:00", activity: "Второй горн. Подъем. Утренний туалет", group: "общее" },
      { time: "08:20-08:40", activity: "Зарядка", group: "общее" },
      { time: "08:50-09:00", activity: "Утренняя линейка", group: "общее" },
      { time: "09:05-09:25", activity: "Завтрак", group: "общее" },
      { time: "09:30-11:00", activity: "Сбор вещей", group: "общее" },
      { time: "11:00-12:00", activity: "Прощальная линейка", group: "общее" },
      { time: "12:00-13:00", activity: "Отъезд", group: "общее" }
    ]
  }
];

// Функция для получения расписания по дате
export function getDaySchedule(date: Date): DaySchedule | null {
  const dateStr = date.toISOString().split('T')[0];
  return DAILY_SCHEDULES.find(schedule => schedule.date === dateStr) || null;
}

export interface CampStaffMember {
  id: string;
  name: string;
  role: string;
  squad?: string;
  telegram?: string;
  phone?: string;
}

export const CAMP_STAFF: CampStaffMember[] = [
  {
    id: "1",
    name: "Валерия Хоменко",
    role: "Дежурный командир смены",
    telegram: "@valeria_kh",
    phone: "+7 (999) 123-45-67"
  },
  {
    id: "2",
    name: "Ира Жуматий",
    role: "Руководитель сборного отряда",
    squad: "Сборный",
    telegram: "@ira_zh",
    phone: "+7 (999) 234-56-78"
  },
  {
    id: "3",
    name: "Лера Архипова",
    role: "Руководитель КБТ",
    squad: "КБТ",
    telegram: "@lera_a",
    phone: "+7 (999) 345-67-89"
  },
  {
    id: "4",
    name: "Иванов Иван",
    role: "Вожатый",
    squad: "1 отряд",
    telegram: "@ivan_i",
    phone: "+7 (999) 456-78-90"
  },
  {
    id: "5",
    name: "Петрова Анна",
    role: "Воспитатель",
    squad: "2 отряд",
    telegram: "@anna_p",
    phone: "+7 (999) 567-89-01"
  },
  {
    id: "6",
    name: "Кузнецов Максим",
    role: "Вожатый",
    squad: "3 отряд",
    telegram: "@max_k",
    phone: "+7 (999) 678-90-12"
  },
  {
    id: "7",
    name: "Лебедева Ольга",
    role: "Воспитатель",
    squad: "4 отряд",
    telegram: "@olga_l",
    phone: "+7 (999) 789-01-23"
  },
  {
    id: "8",
    name: "Соколов Артем",
    role: "Вожатый",
    squad: "5 отряд",
    telegram: "@artem_s",
    phone: "+7 (999) 890-12-34"
  },
  {
    id: "9",
    name: "Морозова Елена",
    role: "Руководитель службы питания",
    telegram: "@elena_m",
    phone: "+7 (999) 901-23-45"
  }
] as const; 