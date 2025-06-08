import React from 'react';

interface Props {
  hue: number;
  setHue: (hue: number) => void;
}

const HueAdjuster: React.FC<Props> = ({ hue, setHue }) => {
  return (
    <div className='flex w-full justify-center'>
      <input
        type="range"
        min={0}
        max={359}
        value={hue}
        onChange={(e) => setHue(Number(e.target.value))}
        style={{ accentColor: 'var(--c-secondary)' }}
      />
    </div>
  );
};

export default HueAdjuster;
