import { Icon } from "@iconify/react/dist/iconify.js"
import React, { ReactNode } from "react";

interface ButtonProps {
    text?: string;
    icon?: string; // теперь icon не обязателен
    className?: string;
    children?: ReactNode;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

function Button({ text, icon, className, children, onClick }: ButtonProps) {
    return (
        <button
            onClick={onClick}
            className={`${className} pl-2 pr-2 p-1 bg-[var(--c-secondary)] rounded-full border border-[#ffffff0b] hover:bg-[var(--c-secondary-hover)] flex items-center cursor-pointer`}
        >
            {icon && <Icon icon={icon} />}
            {text && <p className={icon ? "ml-1" : ""}>{text}</p>}
            {children}
        </button>
    );
}

export default Button;
