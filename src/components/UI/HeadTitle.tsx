import NavigateButton from "./NavigateButton"

interface HeadTitleProps {
    title: string
    buttonto: string
    buttontext: string
}

function HeadTitle({ title, buttonto, buttontext }: HeadTitleProps) {
    return (
        <div className='flex items-center h-min w-full mb-4'>
            <NavigateButton icon="" to={buttonto} text={buttontext} className=""/>
            <h2 className="w-full ml-2">{title}</h2>
        </div>
    )
}
export default HeadTitle