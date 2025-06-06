import { useNavigate } from "react-router";
import { Icon } from "@iconify/react";

interface NavigateButtonProps {
    to?: string;
    text: string;
    className: string;
    icon: string;
    open?: string;
}

function NavigateButton({ to, text, className, icon, open }: NavigateButtonProps) {
    const navigate = useNavigate();

    function handleClick() {
        if (to) {
            navigate(to);
        } 
        else if (open) {
            window.open(open, "_blank");
        }
    }

    return (
        <button onClick={handleClick} className={`hover:bg-(--c-secondary-hover) self-start backdrop-blur-sm bg-(--c-secondary) nav-button flex items-center cursor-pointer justify-center text-base font-medium border border-[#ffffff0b] min-w-min rounded-4xl p-2  ${className}`}>
            <Icon icon={icon} className="mr-1" /> {text}
        </button>
    );
}

export default NavigateButton;