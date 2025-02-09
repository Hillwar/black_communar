"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";

const tabs = [
  { name: "Главная", path: "/" },
  { name: "Дежурства", path: "/duties" },
  { name: "Службы", path: "/services" },
  { name: "Погода", path: "/weather" },
];

export function Tabs() {
  const pathname = usePathname();

  return (
    <div className="container-mobile py-2">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-bold">Черный Комунар</h1>
      </div>
      <div className="mt-2">
        <nav className="flex -mx-1 overflow-x-auto scrollbar-hide">
          {tabs.map((tab) => (
            <Link
              key={tab.path}
              href={tab.path}
              className={`tab-button shrink-0 ${
                pathname === tab.path ? 'active' : 'text-white/60'
              }`}
            >
              {tab.name}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
} 