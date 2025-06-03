import React, { useState, ReactNode } from 'react';
import { Icon } from '@iconify/react/dist/iconify.js';
interface ToggleButtonProps {
  children: ReactNode;
  icon: string;
}

const ToggleButton: React.FC<ToggleButtonProps> = ({
  children,
  icon,
}) => {
  const [visible, setVisible] = useState(false);

  return (
    <div>
      <button onClick={() => setVisible((prev) => !prev)} className="text-2xl hover:bg-(--c-secondary-hover) backdrop-blur-sm bg-(--c-secondary) nav-button flex items-center cursor-pointer justify-center font-medium border border-[#ffffff0b] min-w-min rounded-4xl p-2">
        {<Icon icon={icon}/>}
      </button>
      {visible && <div className="">{children}</div>}
    </div>
  );
};

export default ToggleButton;
