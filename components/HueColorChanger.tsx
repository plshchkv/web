'use client';
import { useColorSettings } from '@/context/ColorSettingsContext';

export default function HueColorChanger() {
  const { hue, setHue } = useColorSettings();

  return (
    <div>
      <div className="flex items-center">
        <input
          id="hue-range"
          type="range"
          min="0"
          max="360"
          value={hue}
          onChange={(e) => setHue(Number(e.target.value))}
          className="w-32"
        />
      </div>
    </div>
  );
}
