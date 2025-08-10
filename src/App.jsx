import { useState } from 'react';
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


function App() {
  
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (product) => {
    setCartItems((prevItems) => {
      const exist = prevItems.find((item) => item.id === product.id);
      if (exist) {
        return prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + product.quantity }
            : item
        );
      } else {
        return [...prevItems, { ...product }];
      }
    });
  };

  const updateQuantity = (id, newQuantity) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, parseInt(newQuantity) || 1) }
          : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const SalesRouter = createBrowserRouter([
    { path: '/', element: <Home /> },
    { path: '/about', element: <About /> },
    { path: '*', element: <Notfound /> },
    { path: '/view-product', element: <ViewProduct handleAddToCart={handleAddToCart} /> },
    { path: '/shop', element: <Shop /> },
    { path: '/contact', element: <Contact /> },
    { path: '/cart-page', element: <CartPage cartItems={cartItems} updateQuantity={updateQuantity} removeItem={removeItem} /> },
    { path: '/login', element: <Login /> },
    { path: '/sign-up', element: <SignUp /> },
  ]);



  return <RouterProvider router={SalesRouter} />;
  
}

export default App;
