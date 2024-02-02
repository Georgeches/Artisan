//libraries
import React from 'react';
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom";

//pages
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import ArtisanPage from './pages/ArtisanPage';
import PaymentPage from './pages/PaymentPage';
import CustomerPage from './pages/CustomerPage';
import CartPage from './pages/CartPage';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import FavouritesPage from './pages/FavoutitesPage';
import OrdersPage from './pages/OrdersPage';
import Dashboard from './pages/Dashboard';
import Shop from './pages/Shop';

export default function App() {
  const userDetails = sessionStorage.getItem("user_details");
  const cart =  localStorage.getItem("cart");
  const activeUser = localStorage.getItem("user");

  if(userDetails == null){
    sessionStorage.setItem('user_details', JSON.stringify([]));
  }

  if(cart == null){
    localStorage.setItem('cart', JSON.stringify([]));
  }

  if(activeUser == null){
    localStorage.setItem("user", JSON.stringify([]))
  }

  const [artisans, setArtisans] = React.useState([])
  const [products, setProducts] = React.useState([])
  const [orders] = React.useState([])
  const [customers] = React.useState([])
  const [cartItems, setCart] = React.useState(JSON.parse(cart))
  const [, setUser] = React.useState(JSON.parse(activeUser))

  const api = `${import.meta.env.REACT_APP_API}`
  const subtotal = cartItems.reduce((a, b)=>a+parseInt(b?.total), 0)
  const tax = Math.floor(0.16*subtotal)
  const shipping = 500
  const total = Math.floor(subtotal+tax+shipping)

  React.useEffect(()=>{
    fetch(`${api}/artisans`)
    .then(res=>res.json())
    .then(data=>setArtisans(data))
  },[api])

  React.useEffect(()=>{
    fetch(`${api}/products`)
    .then(res=>res.json())
    .then(data=>setProducts(data))
  },[api])

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/'>
        {/* / */}
        <Route path='' element={<HomePage products={products} artisans={artisans}/>}/>

        {/* /auth */}
        <Route path='auth'>
            <Route path='register' element={<RegisterPage api={api}/>}/>
            <Route path='login' element={<LoginPage api={api} artisans={artisans} setUser={setUser}/>}/>
        </Route>

        {/* /admin */}
        <Route path='admin'>
            <Route path='dashboard' element={<Dashboard orders={orders} customers={customers}/>} />
            <Route path='orders' element={<OrdersPage orders={orders} customers={customers}/>} />
        </Route>

        {/* /client */}
        <Route path='client'>
            <Route path='' element={<HomePage products={products} artisans={artisans}/>}/>
            <Route path='shop' element={<Shop artisans={artisans} products={products}/>}/>
            <Route path="artisans/:id" element={<ArtisanPage api={api} products={products} artisans={artisans}/>}/>
            <Route path='favourites' element={<FavouritesPage />}/>
            <Route path="customerinfo" element={<CustomerPage/>}/>

            <Route 
            path="cart" 
            
            element={<CartPage 
                cart={cart} 
                cartItems={cartItems} 
                setCart={setCart} 
                total={total} 
                subtotal={subtotal} 
                tax={tax} 
                shipping={shipping}
            />}
            />
            
            <Route 
            path="checkout" 
            element={<PaymentPage total={total} subtotal={subtotal} tax={tax} shipping={shipping}/>}
            />

            <Route 
            path="products/:id" 
            element={<ProductPage setCart={setCart} cartItems={cartItems} artisans={artisans} products={products}/>}
            />
        </Route>
      </Route>
    )
  )

  return <RouterProvider router={router}/>
}
