import Home from './Pages/Home';
import About from "./Pages/About";
import Notfound from "./Pages/NotFound";
import { createBrowserRouter, RouterProvider } from "react-router";
import ViewProduct from './Pages/ViewProduct';
import Category from './Pages/Category';
import Contact from './Pages/Contact';



const SalesRouter = createBrowserRouter([
  {path:'/', element:<Home />},
  {path:'/about', element:<About />},
  {path:'*', element:<Notfound />},
  {path:'/view-product', element:<ViewProduct />},
  {path:'/category', element:<Category />},
  {path: '/contact', element:<Contact />}
])
function App() {
  
  return (
    <>
     <RouterProvider router={SalesRouter} />
    </>
  )
}

export default App
