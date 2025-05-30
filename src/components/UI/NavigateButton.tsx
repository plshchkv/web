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
        <button onClick={handleClick} className={`nav-button flex items-center ${className}`}>
            <Icon icon={icon} className="mr-1" /> {text}
        </button>
    );
}

export default NavigateButton;