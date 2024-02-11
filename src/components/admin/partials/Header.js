import React, { useEffect, useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import './css/header.css'

export default function AdminHeader({ user, orders, setAim, setUser}) {

  const [showSearchCard, setShowCard] = useState(false)
  const [headerSearch, setHeaderSearch] = useState("0")
  const nav = useNavigate()

  function toggleCard(e){
    e.preventDefault()
    setTimeout(()=>setShowCard(!showSearchCard), 500)
  }

  function logout(e){
    e.preventDefault();
    localStorage.setItem("user", JSON.stringify({}));
    localStorage.setItem("aim", 'buy');
    setUser({});
    setAim('buy')
    nav('/');
  }
  
  useEffect(()=>{
    headerSearch===""&&setHeaderSearch("0")
  },[headerSearch])

  return (
    <div className="border">
      <header className="header header-custom header-fixed header-one">
        <div className="container-fluid">
          <nav className="navbar mt-2 container-fluid d-flex justify-content-between align-items-center">
            <div className="navbar-header">
            
              <a href="/" className="navbar-brand logo">
                {/* logo image */}
              </a>
              <a href="/admin" className="navbar-brand fw-bold">
              <span className='text-dark'>Inua</span><span className='text-danger'>Cra</span><span className='text-success'>fts</span>
              </a>
            </div>
            <div className="main-menu-wrapper h-100 d-flex align-items-center">
              <ul className="main-nav d-flex justify-content-center align-items-center p-0">
                <li className="search-bar me-4">
                  <form>
                    <input className="form-control" id="header-search" placeholder="Search..." autoComplete="off" onBlur={e=>toggleCard(e)} onFocus={e=>toggleCard(e)} onChange={e=>setHeaderSearch(e.target.value)}/>
                  </form>
                  <div className="card form-card" style={{display: showSearchCard?"block":"none", position: "fixed"}}>
                    <ul className="search-results">
                      {/* {orders.filter(this_order=>this_order.customer_name.toLowerCase().includes(headerSearch.toLowerCase())).map(order=><li key={order.id} className="order-result result">{order.customer_name}</li>)} */}
                    </ul>
                  </div>
                </li>

                <li className="dropdown dropstart">
                  <a class="dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <div className="mb-4 border" style={{width: "40px", height: "40px", overflow:"hidden", borderRadius: "100%"}}>
                      <img
                        className="w-100"
                        src="https://t4.ftcdn.net/jpg/02/15/84/43/360_F_215844325_ttX9YiIIyeaR7Ne6EaLLjMAmy4GvPC69.jpg"
                        alt=""
                      />
                    </div>
                  </a>
                  <ul class="dropdown-menu mt-5">
                    <li>
                      <p style={{cursor: "pointer"}} className="py-2 px-4">{user?.name}</p>
                    </li>
                    <li onClick={e=>logout(e)} style={{cursor: "pointer"}} className="py-2 px-4 d-flex align-items-center">
                      <box-icon type="solid" name='exit'></box-icon> 
                      Log Out
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>

    </div>
  );
}