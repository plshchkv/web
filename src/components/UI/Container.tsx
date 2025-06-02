type ContainerProps = {
    children: React.ReactNode;
    className?: string;
}

function Container({ children, className }: ContainerProps) {
    return(
        <div className={`min-h-24 rounded-3xl p-4 flex flex-wrap border border-[#ffffff0b] container ${className ? ` ${className}` : ''}`}>
            {children}
        </div>
    )
}

export default Container