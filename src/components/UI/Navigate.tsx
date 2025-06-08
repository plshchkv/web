import { ReactNode } from 'react';
import { useNavigate } from "react-router";

interface NavigateProps {
    trigger: ReactNode,
    to?: string,
    open?: string,
}

function Navigate({ trigger, to, open }: NavigateProps) {
    const navigate = useNavigate();
    function handleClick() {
        if (to) {
            navigate(to);
        } 
        else if (open) {
            window.open(open, "_blank");
        }
    }
    return(
        <div onClick={handleClick} className=''>
            {trigger}
        </div>
    )
}
export default Navigate