//assets
import './App.css';

//libraries
import { useEffect, useState } from 'react';

//components
import Navbar from './components/partials/Navbar';
import Hero from './components/homepage/Hero';
import CategoriesSection from './components/homepage/CategoriesSection';
import ProductsSection from './components/homepage/ProductsSection';
import ValuesSection from './components/homepage/ValuesSection';
import ArtisansSection from './components/homepage/ArtisansSection';
import Footer from './components/partials/Footer';

function App() {

  const api = `${process.env.REACT_APP_API}`
  const [artisans, setArtisans] = useState([])

  useEffect(()=>{
    fetch(`${api}/artisans`)
    .then(res=>res.json())
    .then(data=>setArtisans(data))
  },[])

  return (
    <div className='App'>
      <ArtisansSection />
    </div>
  );
}

export default App;
