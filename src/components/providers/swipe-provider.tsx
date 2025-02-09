"use client"

import { useSwipeNavigation } from "@/hooks/use-swipe-navigation";

export function SwipeProvider({ children }: { children: React.ReactNode }) {
  useSwipeNavigation();
  return <>{children}</>;
} 