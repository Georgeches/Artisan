import React, { useState } from "react";
import { Icon } from "boxicons";
import { Link, useNavigate } from 'react-router-dom';
import "./css/Sidebar.css";

export default function Sidebar({setUser, setAim}){
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const [submenuActive, setSubmenuActive] = useState(false);
  const nav = useNavigate()

  const handleSidebarToggle = (e) => {
    e.preventDefault()
    setSubmenuActive(!submenuActive);
    setSidebarOpen((prevOpen) => !prevOpen);
  };

  function logout(e){
    e.preventDefault();
    localStorage.setItem("user", JSON.stringify({}))
    localStorage.setItem("aim", 'buy')
    setAim('buy')
    setUser({})
    nav('/');
  }

  return (
    <>
    
      <div className="sidebar" style={{width: submenuActive?"260px":"50px"}}>
      
        <div className="d-flex align-items-center justify-content-between">
        {submenuActive&&
            <a href="/" className="logo">
                inuaCrafts
            </a>
        }
          <i
            style={{ fontSize: "18px", color: "white", cursor: "pointer", position: "fixed", top: "25px", left:  submenuActive?"220px":"15px"}}
            className="fa-solid fa-bars"
            id="sidebar-close"
            onClick={e=>handleSidebarToggle(e)}
          ></i>
        </div>

        <div className="menu-content">
          <ul className="menu-items">
            <div className="sidebar-icons">
                <li className="item d-flex align-center">
                <a href="/admin"><box-icon type='solid' name='dashboard' style={{position: !submenuActive&&"fixed", left: !submenuActive&&"10px", top: !submenuActive&&"110px"}}></box-icon></a><a href="/admin">Dashboard</a>
                </li>

                <li className="item d-flex align-center">
                <a href="/admin/customers"><box-icon type='solid' name='group' style={{position: !submenuActive&&"fixed", left: !submenuActive&&"10px", top: !submenuActive&&"170px"}}></box-icon></a><a href="/admin/customers">Customers</a>
                </li>

                <li className="item d-flex align-center">
                <a href="/admin/orders"><box-icon type='solid' name='shopping-bag' style={{position: !submenuActive&&"fixed", left: !submenuActive&&"10px", top: !submenuActive&&"230px"}}></box-icon></a><a href="/admin/orders">Orders</a>
                </li>

             
                <li className="item d-flex align-center">
                <a href="/admin/products"><box-icon type='solid' name='objects-horizontal-left' style={{position: !submenuActive&&"fixed", left: !submenuActive&&"10px", top: !submenuActive&&"290px"}}></box-icon></a> <a href="/products">Products</a>
                </li>

                <li className="item d-flex align-center">
                <a href="/login" onClick={e=>logout(e)}><box-icon type='solid' name='exit' style={{position: !submenuActive&&"fixed", left: !submenuActive&&"10px", top: !submenuActive&&"350px"}}></box-icon></a> <a href="/login">Log out</a>
                </li>
         </div>
          </ul>
        </div>
      </div>
    </>
  );
};
