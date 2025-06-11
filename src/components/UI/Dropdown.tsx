import React, { useState, ReactNode, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface DropdownProps {
  trigger: ReactNode;
  children: ReactNode;
  dropdownClassName?: string;
  align?: 'start' | 'end' | 'center';
  position?: 'left' | 'right' | 'top' | 'bottom';
  triggerEvent?: 'click' | 'hover';
}

const Dropdown: React.FC<DropdownProps> = ({
  trigger,
  children,
  dropdownClassName = '',
  align = 'center',
  position = 'bottom',
  triggerEvent = 'click',
}) => {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setVisible(false);
      }
    };
    if (triggerEvent === 'click') {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [triggerEvent]);

  const handleMouseEnter = () => triggerEvent === 'hover' && setVisible(true);
  const handleMouseLeave = () => triggerEvent === 'hover' && setVisible(false);
  const handleClick = () => triggerEvent === 'click' && setVisible((prev) => !prev);

  return (
    <div
      className="relative inline-block"
      ref={ref}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div onClick={handleClick} className="cursor-pointer">
        {trigger}
      </div>

      <AnimatePresence>
        {visible && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.1 }}
            className={`absolute z-10 ${getPositionClass(position)} ${getAlignmentClass(align, position)}`}
          >
            <div
              className={`flex justify-center w-full p-2 bg-[var(--c-secondary)] backdrop-blur-md rounded-xl border-[#ffffff0b] ${dropdownClassName}`}
            >
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

function getAlignmentClass(
  align: 'start' | 'end' | 'center',
  position: 'left' | 'right' | 'top' | 'bottom'
) {
  if (position === 'top' || position === 'bottom') {
    switch (align) {
      case 'start':
        return 'left-0';
      case 'end':
        return 'right-0';
      default:
        return 'left-1/2 -translate-x-1/2';
    }
  } else {
    switch (align) {
      case 'start':
        return 'top-0';
      case 'end':
        return 'bottom-0';
      default:
        return 'top-1/2 -translate-y-1/2';
    }
  }
}

function getPositionClass(position: 'left' | 'right' | 'top' | 'bottom') {
  switch (position) {
    case 'top':
      return 'bottom-full mb-2';
    case 'left':
      return 'right-full mr-2';
    case 'right':
      return 'left-full ml-2';
    default:
      return 'top-full mt-2';
  }
}

export default Dropdown;
