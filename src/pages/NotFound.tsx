import NavigateButton from "../components/UI/NavigateButton"

function NotFound() {
    return(
        <div className="flex flex-col justify-center w-screen h-screen items-center">
            <div className="flex flex-col justify-center items-center text-center">            
                <h1 className="">Ошибка 404</h1>
                <h1 className="">Этой страницы не существует</h1>
                <NavigateButton to="/" text="Вернутся на главную" className="m-2" icon=""/>
            </div>            
        </div>
    ) 
}

export default NotFound