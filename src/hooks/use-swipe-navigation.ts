"use client"

import { useCallback, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';

const SWIPE_THRESHOLD = 50;

const routes = ['/', '/duties', '/services', '/weather'];

export function useSwipeNavigation() {
  const router = useRouter();
  const pathname = usePathname();

  const handleTouchStart = useCallback((e: TouchEvent) => {
    const touch = e.touches[0];
    const startX = touch.clientX;
    let hasSwiped = false;

    const handleTouchMove = (e: TouchEvent) => {
      if (hasSwiped) return;
      
      const touch = e.touches[0];
      const diff = startX - touch.clientX;
      const currentIndex = routes.indexOf(pathname);

      if (Math.abs(diff) > SWIPE_THRESHOLD) {
        hasSwiped = true;
        if (diff > 0 && currentIndex < routes.length - 1) {
          // Свайп влево - следующая страница
          router.push(routes[currentIndex + 1]);
        } else if (diff < 0 && currentIndex > 0) {
          // Свайп вправо - предыдущая страница
          router.push(routes[currentIndex - 1]);
        }
      }
    };

    document.addEventListener('touchmove', handleTouchMove);
    document.addEventListener('touchend', () => {
      document.removeEventListener('touchmove', handleTouchMove);
    }, { once: true });
  }, [pathname, router]);

  useEffect(() => {
    document.addEventListener('touchstart', handleTouchStart);
    return () => {
      document.removeEventListener('touchstart', handleTouchStart);
    };
  }, [handleTouchStart]);
} 