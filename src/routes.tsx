import { createBrowserRouter } from "react-router";
import MainPage from './pages/MainPage'
import NotFoundPage from "./pages/NotFoundPage";


const routes = createBrowserRouter([
  {
    path: "/",
    Component: MainPage,
  },
  {
    path: "/*",
    Component: NotFoundPage,
  }
]);

export default routes