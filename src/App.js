//assets
import './App.css';

//libraries
import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

//components
import Navbar from './components/partials/Navbar';
import Hero from './components/homepage/Hero';
import CategoriesSection from './components/homepage/CategoriesSection';
import ProductsSection from './components/homepage/ProductsSection';
import ValuesSection from './components/homepage/ValuesSection';
import ArtisansSection from './components/homepage/ArtisansSection';
import Footer from './components/partials/Footer';
import ProductDetail from './components/ProductDetail';
import ArtisanPage from './components/ArtisanPage';

function App() {

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
          <>
            <Hero />
            <CategoriesSection/>
            <ProductsSection/>
            <ArtisansSection/>
            <ValuesSection/>
            <Footer/>
          </>
        } />
        <Route path="/products/:id" element={<ProductDetail api={api}/>} />
        <Route path="/artisans/:id" element={<ArtisanPage api={api}/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
