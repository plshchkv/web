import React, { useState, useEffect } from 'react';

const HueAdjuster: React.FC = () => {
  const [hue, setHue] = useState<number>(120);

  useEffect(() => {
    const root = document.documentElement;
    const currentHSL = getComputedStyle(root)
      .getPropertyValue('--c-primary')
      .trim();

    const match = currentHSL.match(/\d+(\.\d+)?/g);
    if (match && match.length >= 3) {
      const h = parseFloat(match[0]);
      setHue(h);
    }
  }, []);

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
  }, [hue]);

  return (
    <div className='flex w-full justify-center'>
        <input
          className="accent-(--c-secondary)"
          type="range"
          min={0}
          max={359}
          value={hue}
          onChange={(e) => setHue(Number(e.target.value))}
        />
    </div>
  );
};

export default HueAdjuster;
