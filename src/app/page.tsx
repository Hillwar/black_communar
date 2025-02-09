import { Calendar } from "@/components/calendar/calendar";

export default function HomePage() {
  return (
    <div className="page-container">
      <div className="content-container">
        <div className="text-center w-full mb-8 lg:mb-12">
          <h1 className="text-2xl lg:text-4xl font-bold mb-4">
            Добро пожаловать в Черный Комунар
          </h1>
          <p className="text-muted-foreground lg:text-lg">
            Здесь вы найдете всю необходимую информацию о жизни лагеря
          </p>
        </div>
        <div className="w-full max-w-md mx-auto">
          <Calendar />
        </div>
      </div>
    </div>
  );
} 