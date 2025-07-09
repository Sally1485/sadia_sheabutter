import Home from './Pages/Home';
import About from "./Pages/About";
import Notfound from "./Pages/NotFound";
import { createBrowserRouter, RouterProvider } from "react-router";


const SalesRouter = createBrowserRouter([
  {path:'/', element:<Home />},
  {path:'/about', element:<About />},
  {path:'*', element:<Notfound />},
])
function App() {
  
  return (
    <>
     <RouterProvider router={SalesRouter} />
    </>
  )
}

export default App
