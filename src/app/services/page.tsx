import { ServicesList } from "@/components/services/services-list";

export default function ServicesPage() {
  return (
    <div className="page-container">
      <div className="content-container">
        <div className="w-full lg:max-w-2xl">
          <ServicesList />
        </div>
      </div>
    </div>
  );
} 