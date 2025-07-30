import Home from './Pages/Home';
import About from "./Pages/About";
import Notfound from "./Pages/NotFound";
import { createBrowserRouter, RouterProvider } from "react-router";
import ViewProduct from './Pages/ViewProduct';
import Shop from './Pages/Shop';
import Contact from './Pages/Contact';
import CartPage from './Pages/CartPage';
import Login from './Pages/Login';
import SignUp from './Pages/SignUp';



const SalesRouter = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/about', element: <About /> },
  { path: '*', element: <Notfound /> },
  { path: '/view-product', element: <ViewProduct /> },
  { path: '/shop', element: <Shop /> },
  { path: '/contact', element: <Contact /> },
  { path: '/cart-page', element: <CartPage /> },
  { path: '/login', element: <Login /> },
  {path: '/sign-up', element: <SignUp />}
])
function App() {

  return (
    <>
      <RouterProvider router={SalesRouter} />
    </>
  )
}

export default App
