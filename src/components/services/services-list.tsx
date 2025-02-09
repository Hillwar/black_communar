"use client"

import * as React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FadeIn } from "@/components/ui/fade-in";
import { CAMP_SERVICES } from "@/types";
import { 
  Phone, 
  MessageCircle,
  Utensils, 
  Shield,
  Music,
  Wrench,
  Heart,
  Music2,
  Camera,
  Palette,
  Trophy,
  Radio,
  PaintBucket
} from "lucide-react";

const icons = {
  "Комендантская служба": Shield,
  "Песенная служба": Music,
  "Служба питания": Utensils,
  "Музыкально-техническая служба": Wrench,
  "Санитарная служба": Heart,
  "Танцевальная служба": Music2,
  "Пресс-центр": Camera,
  "Служба атрибутики": Palette,
  "Спортивная служба": Trophy,
  "Радиослужба": Radio,
  "Служба оформления": PaintBucket
};

export function ServicesList() {
  return (
    <div className="space-y-4 p-4">
      {CAMP_SERVICES.map((service) => (
        <FadeIn key={service.id}>
          <Card className="glass-card">
            <CardHeader className="px-3 py-4">
              <div className="flex items-center gap-3">
                {React.createElement(icons[service.name as keyof typeof icons] || Shield, {
                  className: "w-5 h-5 text-primary"
                })}
                <CardTitle className="text-lg">{service.name}</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="px-3 py-2">
              <p className="text-sm text-muted-foreground mb-4">
                {service.description}
              </p>
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2 text-sm">
                  <Phone className="w-4 h-4 text-primary" />
                  <span>{service.head}</span>
                  <span className="text-muted-foreground">{service.phone}</span>
                </div>
                {service.telegramUsername && (
                  <div className="flex items-center gap-2 text-sm">
                    <MessageCircle className="w-4 h-4 text-primary" />
                    <span>{service.telegramUsername}</span>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </FadeIn>
      ))}
    </div>
  );
} 