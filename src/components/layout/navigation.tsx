"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Search } from "lucide-react";
import { cn } from "@/lib/utils";

const navigation = [
  { name: "Главная", href: "/" },
  { name: "Дежурства", href: "/duties" },
  { name: "Службы", href: "/services" },
  { name: "Погода", href: "/weather" }
];

export function Navigation() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-black/50 backdrop-blur-lg border-b border-white/10">
      <div className="container px-4">
        {/* Верхняя строка с названием и поиском */}
        <div className="flex h-14 items-center justify-between">
          <span className="font-bold text-lg">Черный Комунар</span>
          <Link href="/search">
            <Search className="h-5 w-5" />
          </Link>
        </div>

        {/* Навигация в виде табов */}
        <div className="flex overflow-x-auto pb-3 -mb-px">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex-none px-4 py-2 text-sm transition-colors border-b-2",
                pathname === item.href
                  ? "border-white text-white"
                  : "border-transparent text-gray-400 hover:text-gray-300"
              )}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
} 