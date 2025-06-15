import { useEffect, useState } from 'react';

const STORAGE_KEY = 'site-color-settings';

export function useColorSettings() {
  const [hue, setHue] = useState(120);
  const [lightness, setLightness] = useState(21);

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
      console.error('Failed to parse color settings:', e);
    }
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const hsl = `hsl(${hue}, 31%, ${lightness}%)`;
    document.documentElement.style.setProperty('--c-primary', hsl);
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ hue, lightness }));
  }, [hue, lightness]);

  return { hue, setHue, lightness, setLightness };
}
