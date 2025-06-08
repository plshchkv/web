import React, { useState, ReactNode, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface DropdownProps {
  trigger: ReactNode;     // любой JSX — кнопка, иконка, div и т.п.
  children: ReactNode;    // содержимое выпадающего блока
  dropdownClassName?: string;
  align?: 'left' | 'right' | 'center';
}

const Dropdown: React.FC<DropdownProps> = ({
  trigger,
  children,
  dropdownClassName = '',
  align = 'center',
}) => {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setVisible(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative inline-block" ref={ref}>
      <div onClick={() => setVisible((prev) => !prev)} className="cursor-pointer">
        {trigger}
      </div>

      <AnimatePresence>
        {visible && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.1 }}
            className={`absolute top-full mt-2 z-10 ${getAlignmentClass(align)}`}
          >
            <div
              className={`flex justify-center w-full p-2 bg-[var(--c-secondary)] rounded-xl shadow-cian-500/50 border-[#ffffff0b] ${dropdownClassName}`}
            >
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

function getAlignmentClass(align: 'left' | 'right' | 'center') {
  switch (align) {
    case 'left':
      return 'left-0';
    case 'right':
      return 'right-0';
    default:
      return 'left-1/2 -translate-x-1/2';
  }
}

export default Dropdown;
