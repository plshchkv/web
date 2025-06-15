import Container from "../components/UI/Container"
import Header from "../components/Header"
import Navigate from "../components/UI/Navigate";
import Button from "../components/UI/Button";

function NotFound() {
    return(
    <div className="w-screen h-screen flex items-center justify-center">
        <Header/>
        <Container className="flex flex-col items-center justify-center w-auto h-auto">
          <h1 className="text-4xl">404</h1>
          <p className="mb-2">Ниче нету</p>
          <Navigate to="/" trigger={<Button icon="" text='Назад'/>}/>
        </Container>
      </div>
    ) 
}

export default NotFound