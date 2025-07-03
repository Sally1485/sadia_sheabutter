import Home from "./assets/Pages/Home";
import About from "./assets/Pages/About";
import Notfound from "./assets/Pages/NotFound";
import { createBrowserRouter, RouterProvider } from "react-router";


const SalesRouter = createBrowserRouter([
  {path:'/', element:<Home />},
  {path:'/about', element:<About />},
  {path:'*', element:<Notfound />}
])
function App() {
   

  return (
    <>
     <RouterProvider router={SalesRouter} />
    </>
  )
}

export default App
