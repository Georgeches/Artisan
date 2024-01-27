//assets
import './App.css';

//libraries
import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

//components
import Navbar from './components/customer/partials/Navbar';
import Hero from './components/customer/homepage/Hero';
import ProductsSection from './components/customer/homepage/ProductSection';
import ArtisansSection from './components/customer/homepage/ArtisansSection';
import Footer from './components/customer/partials/Footer';
import ProductDetail from './components/customer/pages/ProductDetail';
import ArtisanPage from './components/customer/pages/ArtisanPage';
import Values from './components/customer/partials/Values';
import PaymentForm from './components/customer/pages/PaymentForm';
import CustomerInfo from './components/customer/pages/CustomerPage';
import Cart from './components/customer/pages/Cart';
import Register from './components/customer/pages/auth/Register';
import Shop from './components/customer/pages/Shop';
import Login from './components/customer/pages/auth/Login';
import Favourites from './components/customer/pages/Favoutites';

function App() {

  const userDetails = sessionStorage.getItem("user_details");
  const cart = sessionStorage.getItem("cart");
  const activeUser = localStorage.getItem("user");
  if(userDetails == null){
    sessionStorage.setItem('user_details', JSON.stringify([]));
  }
  if(cart == null){
    sessionStorage.setItem('cart', JSON.stringify([]));
  }
  if(activeUser == null){
    localStorage.setItem("user", JSON.stringify([]))
  }

  const [artisans, setArtisans] = useState([])
  const [cartItems, setCart] = useState(JSON.parse(cart))
  const [user, setUser] = useState(JSON.parse(activeUser))
  const api = `${process.env.REACT_APP_API}`
  const subtotal = cartItems.reduce((a, b)=>a+b?.price, 0)
  const tax = 0.16*subtotal
  const shipping = 500
  const total = subtotal+tax+shipping

  useEffect(()=>{
    fetch(`${api}/artisans`)
    .then(res=>res.json())
    .then(data=>setArtisans(data))
  },[])

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={
          <div className='App container-fluid p-0'>
            <Hero />
            <ProductsSection/>
            <ArtisansSection artisans={artisans}/>
            <Values />
            <Footer/>
          </div>
        } />
        <Route path='/shop' element={<Shop artisans={artisans} />} />
        <Route path="/cart" element={<Cart cartItems={cartItems} setCart={setCart} total={total} subtotal={subtotal} tax={tax} shipping={shipping}/>} />
        <Route path="/customerinfo" element={<CustomerInfo/>} />
        <Route path="/checkout" element={<PaymentForm total={total} subtotal={subtotal} tax={tax} shipping={shipping}/>} />
        <Route path="/products/:id" element={<ProductDetail api={api} setCart={setCart} cartItems={cartItems}/>} />
        <Route path="/artisans/:id" element={<ArtisanPage api={api}/>} />
        <Route path='/favourites' element={<Favourites />} />
        <Route path='/register' element={<Register api={api}/>} />
        <Route path='/login' element={<Login api={api} artisans={artisans} setUser={setUser}/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
