export interface WeatherData {
  current: {
    temp_c: number;
    feelslike_c: number;
    humidity: number;
    wind_kph: number;
    condition: {
      text: string;
      icon: string;
    };
  };
  forecast: {
    forecastday: Array<{
      date: string;
      day: {
        maxtemp_c: number;
        mintemp_c: number;
        condition: {
          text: string;
          icon: string;
        };
      };
      hour: Array<{
        time: string;
        temp_c: number;
        wind_kph: number;
        chance_of_rain: number;
        condition: {
          text: string;
          icon: string;
        };
      }>;
    }>;
  };
}

export interface Event {
  readonly id: string;
  readonly title: string;
  readonly description: string;
  readonly date: string;
  readonly time: string;
  readonly category: string;
}

export interface DayEvents {
  readonly date: string;
  readonly events: readonly Event[];
}

export type Events = readonly DayEvents[];

export interface DutyShift {
  id: string;
  date: string;
  role: string;
  person: string;
}

export interface DailySchedule {
  time: string;
  activity: string;
}

export const CAMP_SCHEDULE: DailySchedule[] = [
  { time: "08:00-08:20", activity: "Подъём" },
  { time: "08:20-09:00", activity: "Завтрак" },
  { time: "09:00-09:30", activity: "Уборка комнат" },
  { time: "09:30-11:00", activity: "Отрядное время" },
  { time: "11:00-13:00", activity: "Общелагерное мероприятие" },
  { time: "13:00-14:00", activity: "Обед" },
  { time: "14:00-16:00", activity: "Тихий час" },
  { time: "16:00-16:30", activity: "Полдник" },
  { time: "16:30-19:00", activity: "Отрядное время / Кружки" },
  { time: "19:00-20:00", activity: "Ужин" },
  { time: "20:00-21:30", activity: "Вечернее мероприятие" },
  { time: "21:30-22:00", activity: "Второй ужин" },
  { time: "22:00-22:30", activity: "Подготовка ко сну" },
  { time: "22:30", activity: "Отбой" }
];

export interface CampService {
  id: string;
  name: string;
  description: string;
  head: string;
  phone: string;
  telegramUsername?: string;
}

export const CAMP_SERVICES: CampService[] = [
  {
    id: "1",
    name: "Комендантская служба",
    description: "Контроль чистоты в корпусах, организация быта, выдача инвентаря, решение хозяйственных вопросов",
    head: "Иванов Иван",
    phone: "+7 (999) 111-11-11",
    telegramUsername: "@camp_house"
  },
  {
    id: "2",
    name: "Песенная служба",
    description: "Проведение спевок, обучение песням, подготовка к выступлениям, организация музыкальных мероприятий",
    head: "Петрова Анна",
    phone: "+7 (999) 222-22-22",
    telegramUsername: "@camp_music"
  },
  {
    id: "3",
    name: "Служба питания",
    description: "Контроль работы столовой, составление меню, организация питьевого режима, проверка качества продуктов",
    head: "Сидорова Мария",
    phone: "+7 (999) 333-33-33",
    telegramUsername: "@camp_food"
  },
  {
    id: "4",
    name: "Музыкально-техническая служба",
    description: "Звуковое и световое оформление мероприятий, настройка аппаратуры, техническая поддержка",
    head: "Козлов Дмитрий",
    phone: "+7 (999) 444-44-44",
    telegramUsername: "@camp_tech"
  },
  {
    id: "5",
    name: "Санитарная служба",
    description: "Контроль здоровья участников, оказание первой помощи, проведение медосмотров, профилактика заболеваний",
    head: "Морозова Елена",
    phone: "+7 (999) 555-55-55",
    telegramUsername: "@camp_med"
  },
  {
    id: "6",
    name: "Танцевальная служба",
    description: "Проведение танцевальных мастер-классов, постановка номеров, организация дискотек и флешмобов",
    head: "Волкова Алиса",
    phone: "+7 (999) 666-66-66",
    telegramUsername: "@camp_dance"
  },
  {
    id: "7",
    name: "Пресс-центр",
    description: "Освещение событий лагеря, фото и видеосъемка, ведение соцсетей, выпуск газеты и дневника смены",
    head: "Соколов Артем",
    phone: "+7 (999) 777-77-77",
    telegramUsername: "@camp_press"
  },
  {
    id: "8",
    name: "Служба атрибутики",
    description: "Разработка и хранение символики лагеря, создание отрядных уголков, оформление значков и наград",
    head: "Лебедева Ольга",
    phone: "+7 (999) 888-88-88",
    telegramUsername: "@camp_style"
  },
  {
    id: "9",
    name: "Спортивная служба",
    description: "Проведение зарядки, организация спортивных соревнований и игр, контроль спортивного инвентаря",
    head: "Кузнецов Максим",
    phone: "+7 (999) 999-99-99",
    telegramUsername: "@camp_sport"
  },
  {
    id: "10",
    name: "Радиослужба",
    description: "Проведение радиоэфиров, музыкальное сопровождение подъема и отбоя, радиогазета",
    head: "Попов Андрей",
    phone: "+7 (999) 000-00-00",
    telegramUsername: "@camp_radio"
  },
  {
    id: "11",
    name: "Служба оформления",
    description: "Художественное оформление мероприятий, создание декораций, оформление территории лагеря",
    head: "Новикова Дарья",
    phone: "+7 (999) 111-00-00",
    telegramUsername: "@camp_design"
  }
]; 