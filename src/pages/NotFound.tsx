import Container from "../components/UI/Container"
import Header from "../components/Header"


function NotFound() {
    return(
    <div className="w-screen h-screen flex items-center justify-center">
        <Header/>
        <Container className="flex flex-col items-center justify-center w-auto h-auto">
          <h1 className="text-4xl">404</h1>
          <p>Страница не найдена</p>
        </Container>
      </div>
    ) 
}

export default NotFound