import { DutySchedule } from "@/components/duties/duty-schedule";

export default function DutiesPage() {
  return (
    <div className="page-container">
      <div className="content-container">
        <div className="w-full lg:max-w-2xl">
          <DutySchedule />
        </div>
      </div>
    </div>
  );
} 