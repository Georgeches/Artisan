//assets
import './App.css';

//libraries
import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

//components
import Navbar from './components/partials/Navbar';
import Hero from './components/homepage/Hero';
import ProductsSection from './components/homepage/ProductsSection';
import ArtisansSection from './components/homepage/ArtisansSection';
import Footer from './components/partials/Footer';
import ProductDetail from './components/pages/ProductDetail';
import ArtisanPage from './components/pages/ArtisanPage';
import Values from './components/partials/Values';
import PaymentForm from './components/pages/PaymentForm';
import CustomerInfo from './components/pages/CustomerPage';
import Cart from './components/pages/Cart';
import Register from './components/pages/auth/Register';
import Shop from './components/pages/Shop';
import Login from './components/pages/auth/Login';
import Favourites from './components/pages/auth/Favoutites';

function App() {

  const userDetails = sessionStorage.getItem("user_details");
  const cart = sessionStorage.getItem("cart");
  if(userDetails == null){
    sessionStorage.setItem('user_details', JSON.stringify([]));
  }
  if(cart == null){
    sessionStorage.setItem('cart', JSON.stringify([]));
  }
  
  const api = `${process.env.REACT_APP_API}`
  const [artisans, setArtisans] = useState([])
  const [cartItems, setCart] = useState(JSON.parse(cart))

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
        <Route path="/cart" element={<Cart cartItems={cartItems} setCart={setCart}/>} />
        <Route path="/customerinfo" element={<CustomerInfo/>} />
        <Route path="/checkout" element={<PaymentForm/>} />
        <Route path="/products/:id" element={<ProductDetail api={api} setCart={setCart} cartItems={cartItems}/>} />
        <Route path="/artisans/:id" element={<ArtisanPage api={api}/>} />
        <Route path='/favourites' element={<Favourites />} />
        <Route path='/register' element={<Register api={api}/>} />
        <Route path='/login' element={<Login api={api}/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
