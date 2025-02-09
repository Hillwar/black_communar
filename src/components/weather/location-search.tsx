"use client"

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

interface LocationSearchProps {
  onSearch: (location: string) => void;
}

export function LocationSearch({ onSearch }: LocationSearchProps) {
  const [query, setQuery] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch(query);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="relative mb-6">
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-4 w-4" />
      <Input
        type="text"
        placeholder="Поиск местоположения..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="pl-9"
      />
    </form>
  );
} 