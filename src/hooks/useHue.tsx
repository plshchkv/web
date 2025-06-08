import { useEffect, useState } from 'react';

const LOCAL_STORAGE_KEY = 'user-hue';

export const useHue = () => {
  const [hue, setHue] = useState<number>(() => {
    const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
    return saved !== null ? Number(saved) : 120;
  });

  useEffect(() => {
    const root = document.documentElement;
    const currentHSL = getComputedStyle(root)
      .getPropertyValue('--c-primary')
      .trim();

    const match = currentHSL.match(/\d+(\.\d+)?/g);
    if (match && match.length >= 3) {
      const s = parseFloat(match[1]);
      const l = parseFloat(match[2]);
      const newColor = `hsl(${hue}, ${s}%, ${l}%)`;
      root.style.setProperty('--c-primary', newColor);
    }

    localStorage.setItem(LOCAL_STORAGE_KEY, hue.toString());
  }, [hue]);

  return [hue, setHue] as const;
};
