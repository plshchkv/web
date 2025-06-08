import { Icon } from "@iconify/react/dist/iconify.js"

interface ButtonProps {
    text: string,
    icon: string
}

function Button({text, icon}: ButtonProps) {
    return(
        <button className="pl-2 pr-2 p-1 bg-[var(--c-secondary)] rounded-full border border-[#ffffff0b] hover:bg-[var(--c-secondary-hover)] flex items-center cursor-pointer">
            <Icon className="mr-1" icon={icon}/>
            <p className="">{text}</p>
        </button>
    )
}
export default Button