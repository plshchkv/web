import React, { useState, ReactNode } from 'react';
import { Icon } from '@iconify/react';
import { motion, AnimatePresence } from 'framer-motion';

interface ToggleButtonProps {
  children: ReactNode;
  icon: string;
  text: string;
}

const ToggleButton: React.FC<ToggleButtonProps> = ({
  children,
  icon,
  text,
}) => {
  const [visible, setVisible] = useState(false);

  return (
    <div className="relative flex flex-col items-center">
      <button
        onClick={() => setVisible((prev) => !prev)}
        className="cursor-pointer hover:bg-[var(--c-secondary-hover)] backdrop-blur-sm bg-[var(--c-secondary)] nav-button flex items-center justify-center font-medium border border-[#ffffff0b] min-w-min rounded-4xl p-2"
      >
        <Icon icon={icon} />
        <p>{text}</p>
      </button>

      <AnimatePresence>
        {visible && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.1 }}
            className="absolute top-full mt-2 w-max z-10 overflow-hidden"
          >
            <div className="flex justify-center w-full p-2 bg-[var(--c-secondary)] rounded-xl shadow-cian-500/50 border-[#ffffff0b]">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ToggleButton;
