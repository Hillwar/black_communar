"use client"

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Search } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { CAMP_STAFF } from "@/lib/constants";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface Person {
  id: string;
  name: string;
  role: string;
  squad?: string;
  telegram?: string;
  phone?: string;
}

export function PeopleSearch() {
  const [query, setQuery] = useState("");
  const [activeTab, setActiveTab] = useState<string>("all");

  const filteredPeople = CAMP_STAFF.filter(person => {
    const matchesSearch = 
      person.name.toLowerCase().includes(query.toLowerCase()) ||
      person.role.toLowerCase().includes(query.toLowerCase()) ||
      person.squad?.toLowerCase().includes(query.toLowerCase());

    if (activeTab === "all") return matchesSearch;
    if (activeTab === "staff") return matchesSearch && !person.squad;
    if (activeTab === "squads") return matchesSearch && person.squad;

    return matchesSearch;
  });

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="relative mb-6">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-4 w-4" />
        <Input
          type="text"
          placeholder="Поиск по имени, должности или отряду..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="pl-9"
          autoFocus
        />
      </div>

      <Tabs defaultValue="all" onValueChange={setActiveTab} className="mb-6">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="all">Все</TabsTrigger>
          <TabsTrigger value="staff">Руководство</TabsTrigger>
          <TabsTrigger value="squads">Отряды</TabsTrigger>
        </TabsList>
      </Tabs>

      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="space-y-3"
        >
          {filteredPeople.map((person) => (
            <Card key={person.id} className="glass-card">
              <CardContent className="p-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-medium">{person.name}</h3>
                    <p className="text-sm text-muted-foreground">{person.role}</p>
                    {person.squad && (
                      <p className="text-sm text-muted-foreground">Отряд: {person.squad}</p>
                    )}
                  </div>
                  <div className="text-sm text-right">
                    {person.telegram && (
                      <a 
                        href={`https://t.me/${person.telegram.replace('@', '')}`} 
                        className="text-primary hover:underline block"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {person.telegram}
                      </a>
                    )}
                    {person.phone && <p className="text-muted-foreground">{person.phone}</p>}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
          {filteredPeople.length === 0 && (
            <div className="text-center text-muted-foreground py-8">
              Ничего не найдено
            </div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
} 