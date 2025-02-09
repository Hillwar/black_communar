"use client"

import { PeopleSearch } from "@/components/search/people-search";

export default function SearchPage() {
  return (
    <div className="page-container pt-8">
      <div className="content-container">
        <div className="text-center w-full mb-8">
          <h1 className="text-2xl lg:text-4xl font-bold mb-4">
            Поиск участников
          </h1>
          <p className="text-muted-foreground lg:text-lg">
            Найдите информацию о любом участнике сбора
          </p>
        </div>
        <PeopleSearch />
      </div>
    </div>
  );
} 