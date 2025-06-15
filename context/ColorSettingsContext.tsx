'use client';

import { createContext, useContext, useEffect, useState, ReactNode } from 'react';

type ColorSettingsContextType = {
  hue: number;
  setHue: (value: number) => void;
  lightness: number;
  setLightness: (value: number) => void;
};

const ColorSettingsContext = createContext<ColorSettingsContextType | null>(null);

const STORAGE_KEY = 'site-color-settings';

export function ColorSettingsProvider({ children }: { children: ReactNode }) {
  const [hue, setHue] = useState(120);
  const [lightness, setLightness] = useState(21);

  // Чтение localStorage при первой загрузке
  useEffect(() => {
    if (typeof window === 'undefined') return;
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        if (typeof parsed.hue === 'number') setHue(parsed.hue);
        if (typeof parsed.lightness === 'number') setLightness(parsed.lightness);
      }
    } catch (e) {
      console.error('Failed to parse color settings from localStorage:', e);
    }
  }, []);

  // Применение и сохранение при изменениях
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const hsl = `hsl(${hue}, 31%, ${lightness}%)`;
    document.documentElement.style.setProperty('--c-primary', hsl);
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ hue, lightness }));
  }, [hue, lightness]);

  return (
    <ColorSettingsContext.Provider value={{ hue, setHue, lightness, setLightness }}>
      {children}
    </ColorSettingsContext.Provider>
  );
}

export function useColorSettings() {
  const context = useContext(ColorSettingsContext);
  if (!context) throw new Error('useColorSettings must be used within ColorSettingsProvider');
  return context;
}
