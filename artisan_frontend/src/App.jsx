//libraries
import React from 'react';
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom";

//components
import Navbar from './components/Navbar';
import Hero from './components/customerPage/Hero';
import ProductsSection from './components/customerPage/productPage/ProductSection';
import ArtisansSection from './components/customerPage/artisansPage/ArtisansSection';
import Footer from './components/Footer';
import ProductDetail from './components/customerPage/productPage/ProductDetail';
import ArtisanPage from './pages/ArtisanPage';
import Values from './components/Values';
import PaymentForm from './components/customerPage/PaymentForm';
import CustomerInfo from './components/customer/pages/CustomerPage';
import Cart from './components/customer/pages/Cart';
import Register from './components/customer/pages/auth/Register';
import Shop from './components/customer/pages/Shop';
import Login from './components/customer/pages/auth/Login';
import Favourites from './components/customer/pages/Favoutites';
import Dashboard from './components/admin/pages/Dashboard';
import Orders from './components/admin/pages/Orders';

function App() {

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
  const [orders, setOrders] = React.useState([])
  const [customers, setCustomers] = React.useState([])
  const [cartItems, setCart] = React.useState(JSON.parse(cart))
  const [user, setUser] = React.useState(JSON.parse(activeUser))
  const api = `${process.env.REACT_APP_API}`
  const subtotal = cartItems.reduce((a, b)=>a+parseInt(b?.total), 0)
  const tax = Math.floor(0.16*subtotal)
  const shipping = 500
  const total = Math.floor(subtotal+tax+shipping)

  React.useEffect(()=>{
    fetch(`${api}/artisans`)
    .then(res=>res.json())
    .then(data=>setArtisans(data))
  },[])

  React.useEffect(()=>{
    fetch(`${api}/products`)
    .then(res=>res.json())
    .then(data=>setProducts(data))
  },[])

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={
          <div className='h-full container-fluid p-0'>
            <Hero />
            <ProductsSection products={products} artisans={artisans}/>
            <ArtisansSection artisans={artisans}/>
            <Values />
            <Footer/>
          </div>
        } />
        <Route path='/shop' element={<Shop artisans={artisans} products={products}/>} />
        <Route path="/cart" element={<Cart cart={cart} cartItems={cartItems} setCart={setCart} total={total} subtotal={subtotal} tax={tax} shipping={shipping}/>} />
        <Route path="/customerinfo" element={<CustomerInfo/>} />
        <Route path="/checkout" element={<PaymentForm total={total} subtotal={subtotal} tax={tax} shipping={shipping}/>} />
        <Route path="/products/:id" element={<ProductDetail api={api} setCart={setCart} cartItems={cartItems} artisans={artisans} products={products}/>} />
        <Route path="/artisans/:id" element={<ArtisanPage api={api} products={products} artisans={artisans}/>} />
        <Route path='/favourites' element={<Favourites />} />
        <Route path='/register' element={<Register api={api}/>} />
        <Route path='/login' element={<Login api={api} artisans={artisans} setUser={setUser}/>} />
        
        {/* Admin */}
        <Route path='/admin' element={<Dashboard orders={orders} customers={customers}/>} />
        <Route path='/admin/orders' element={<Orders orders={orders} customers={customers}/>} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
