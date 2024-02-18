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
import Dashboard from './components/admin/pages/Dashboard';
import Orders from './components/admin/pages/Orders';
import AdminHeader from './components/admin/partials/Header';
import Sidebar from './components/admin/partials/Sidebar';
import Customers from './components/admin/pages/Customers';
import Products from './components/admin/pages/Products';
import NewProduct from './components/admin/pages/Forms/NewProduct';
import EditProduct from './components/admin/pages/Forms/EditProduct';
import Customer from './components/customer/pages/Customer';

function App() {

  const userDetails = sessionStorage.getItem("user_details");
  const cart =  localStorage.getItem("cart");
  const activeUser = localStorage.getItem("user");
  const userAim = localStorage.getItem("aim");
  if(userDetails == null){
    sessionStorage.setItem('user_details', JSON.stringify([]));
  }
  if(cart == null){
    localStorage.setItem('cart', JSON.stringify([]));
  }
  if(activeUser == null){
    localStorage.setItem("user", JSON.stringify([]))
  }
  if(userAim == null){
    localStorage.setItem("aim", "buy")
  }

  //state
  const [artisans, setArtisans] = useState([])
  const [products, setProducts] = useState([])
  const [orders, setOrders] = useState([])
  const [customers, setCustomers] = useState([])
  const [search, setSearch] = useState('')
  
  //localstorage
  const [cartItems, setCart] = useState(JSON.parse(cart))
  const [aim, setAim] = useState(userAim)
  const [user, setUser] = useState(JSON.parse(activeUser))

  const api = `${process.env.REACT_APP_API}`
  const subtotal = cartItems?.reduce((a, b)=>a+parseInt(b?.total), 0)
  const tax = Math.floor(0.16*subtotal)
  const shipping = 500
  const total = Math.floor(subtotal+tax+shipping)

  const productResults = products.filter(product=>product?.name.toLowerCase().includes(search.toLowerCase()))

  useEffect(() => {
    Promise.all([
      fetch(`${api}/products`).then((res) => res.json()),
      fetch(`${api}/artisans`).then((res) => res.json()),
      fetch(`${api}/customers`).then((res) => res.json())
    ])
      .then(([productsData, artisansData, customersData]) => {
        setProducts(productsData);
        setArtisans(artisansData);
        setCustomers(customersData);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <BrowserRouter>
      {aim==="buy"?
        <>
        <Navbar search={search} setSearch={setSearch}/>
        <Routes>
          <Route path='/' element={
            <div className='App container-fluid p-0'>
              <Hero />
              <ProductsSection products={products} artisans={artisans}/>
              <ArtisansSection artisans={artisans}/>
              <Values />
              {/* <Footer/> */}
            </div>
          } />
          <Route path='/shop' element={<Shop artisans={artisans} products={productResults} search={search} setSearch={setSearch}/>} />
          <Route path="/cart" element={<Cart cart={cart} cartItems={cartItems} setCart={setCart} total={total} subtotal={subtotal} tax={tax} shipping={shipping}/>} />
          <Route path="/customerinfo" element={<CustomerInfo/>} />
          <Route path="/checkout" element={<PaymentForm total={total} subtotal={subtotal} tax={tax} shipping={shipping} cartItems={cartItems} api={api}/>} />
          <Route path="/products/:id" element={<ProductDetail api={api} search={search} setSearch={setSearch} setCart={setCart} cartItems={cartItems} artisans={artisans} products={products}/>} />
          <Route path="/artisans/:id" element={<ArtisanPage api={api} products={products} artisans={artisans} search={search} setSearch={setSearch}/>} />
          <Route path='/favourites' element={<Favourites />} />
          <Route path='/customer' element={<Customer orders={orders}/>} />
          <Route path='/register' element={<Register api={api}/>} />
          <Route path='/login/:role' element={<Login api={api} artisans={artisans} customers={customers} setUser={setUser} setAim={setAim}/>} />
        </Routes>
        </>
        :
        <>
          <AdminHeader user={user} setUser={setUser} setAim={setAim}/>
          <Sidebar setAim={setAim} setUser={setUser}/>
          <Routes>
            <Route path='/admin' element={<Dashboard orders={orders} customers={customers}/>} />
            <Route path='/admin/orders' element={<Orders orders={orders} customers={customers}/>} />
            <Route path='/admin/customers' element={<Customers customers={customers}/>} />
            <Route path='/admin/products' element={<Products products={products}/>} />
            <Route path='/admin/products/new' element={<NewProduct products={products}/>} />
            <Route path='/admin/products/edit/:id' element={<EditProduct products={products}/>} />
          </Routes>
        </>
      }
    </BrowserRouter>
  );
}

export default App;
