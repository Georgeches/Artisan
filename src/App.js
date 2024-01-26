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
import Shop from './components/pages/Shop';

function App() {

  const userDetails = sessionStorage.getItem("user_details");
  if(userDetails == null){
    sessionStorage.setItem('user_details', JSON.stringify([]));
  }
  console.log(userDetails)
  const api = `${process.env.REACT_APP_API}`
  const [artisans, setArtisans] = useState([])

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
        <Route path="/cart" element={<Cart/>} />
        <Route path="/customerinfo" element={<CustomerInfo/>} />
        <Route path="/checkout" element={<PaymentForm/>} />
        <Route path="/products/:id" element={<ProductDetail api={api}/>} />
        <Route path="/artisans/:id" element={<ArtisanPage api={api}/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
