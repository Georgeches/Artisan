import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {

  const api = `${process.env.REACT_APP_API}`
  const [artisans, setArtisans] = useState([])

  useEffect(()=>{
    fetch(`${api}/artisans`)
    .then(res=>res.json())
    .then(data=>setArtisans(data))
  },[])

  return (
    <div className="App">
      <header className="App-header">
        <h1>Artisans:</h1>
        {artisans.map(artisan=><p>{artisan?.name}</p>)}
      </header>
    </div>
  );
}

export default App;
