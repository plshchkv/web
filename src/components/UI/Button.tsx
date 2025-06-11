import { Icon } from "@iconify/react/dist/iconify.js"

interface ButtonProps {
    text?: string;
    icon?: string; // теперь icon не обязателен
    className?: string;
}

function Button({ text, icon, className }: ButtonProps) {
    return (
        <button
            className={`${className} pl-2 pr-2 p-1 bg-[var(--c-secondary)] rounded-full border border-[#ffffff0b] hover:bg-[var(--c-secondary-hover)] flex items-center cursor-pointer`}
        >
            {icon && <Icon icon={icon} />}
            {text && <p className={icon ? "ml-1" : ""}>{text}</p>}
        </button>
    );
}

export default Button;
