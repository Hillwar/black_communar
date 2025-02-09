interface ClothingAdvice {
  icon: string;
  text: string;
}

export function getClothingAdvice(temp: number, condition: string): ClothingAdvice[] {
  const advice: ClothingAdvice[] = [];

  // Базовые рекомендации по температуре
  if (temp < 0) {
    advice.push(
      { icon: "🧥", text: "Тёплая куртка или пуховик" },
      { icon: "🧣", text: "Шарф и шапка" },
      { icon: "🧤", text: "Тёплые перчатки" },
      { icon: "👢", text: "Утеплённая обувь" }
    );
  } else if (temp < 10) {
    advice.push(
      { icon: "🧥", text: "Лёгкая куртка или ветровка" },
      { icon: "🧣", text: "Лёгкий шарф" },
      { icon: "👟", text: "Закрытая обувь" }
    );
  } else if (temp < 20) {
    advice.push(
      { icon: "🧥", text: "Ветровка или толстовка" },
      { icon: "👕", text: "Футболка с длинным рукавом" },
      { icon: "👖", text: "Джинсы или брюки" }
    );
  } else {
    advice.push(
      { icon: "👕", text: "Лёгкая футболка" },
      { icon: "🩳", text: "Шорты или лёгкие брюки" },
      { icon: "🧢", text: "Кепка или панама" }
    );
  }

  // Дополнительные рекомендации в зависимости от погодных условий
  if (condition.toLowerCase().includes("rain")) {
    advice.push(
      { icon: "☔", text: "Дождевик или зонт" },
      { icon: "👢", text: "Водонепроницаемая обувь" }
    );
  }

  if (condition.toLowerCase().includes("snow")) {
    advice.push(
      { icon: "🥾", text: "Водонепроницаемые ботинки" },
      { icon: "🧤", text: "Тёплые перчатки" }
    );
  }

  if (condition.toLowerCase().includes("sun") && temp > 15) {
    advice.push(
      { icon: "🕶️", text: "Солнцезащитные очки" },
      { icon: "🧴", text: "Солнцезащитный крем" }
    );
  }

  if (condition.toLowerCase().includes("wind")) {
    advice.push({ icon: "🧥", text: "Ветрозащитная куртка" });
  }

  return advice;
} 