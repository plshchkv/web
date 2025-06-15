'use client';
import { useColorSettings } from '@/context/ColorSettingsContext';

export default function LightnessColorChanger() {
  const { lightness, setLightness } = useColorSettings();

  return (
    <div>
      <div className="flex items-center">
        <input
          id="lightness-range"
          type="range"
          min="5"
          max="30"
          value={lightness}
          onChange={(e) => setLightness(Number(e.target.value))}
          className="w-32"
        />
      </div>
    </div>
  );
}
