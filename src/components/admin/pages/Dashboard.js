/*global Chart*/
import React from "react";
import './css/dashboard.css'
import { useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = ({orders, customers}) => {
  const nav = useNavigate()

  return (
    <div className="container-fluid bg-light home">
      <div className="container pt-4">
        <h3>Dashboard</h3>

        <div className="admin-summary row mt-4">
          <div className="col-lg-3 col-md-6 col-11 mt-3">
          <div className="card card-first" style={{height: "154px"}}>
            <div className="card-body mt-3">
              <div className="mb-4">
              <h4 className="fw-bold text-success">Total Sales</h4>
              </div>
              <h4 className="fw-normal text-muted">Ksh 2000000</h4>
            </div>
          </div>
          </div>

          <div className="col-md-6 col-lg-3 col-11 mt-3">
          <div className="card card-second" style={{height: "154px"}}>
            <div className="card-body mt-3">
              <div className="mb-4">
                <h4 className="fw-bold text-primary">Total Products</h4>
              </div>
              <h4 className="fw-normal text-muted">30</h4>
            </div>
          </div>
          </div>

          <div className="col-md-6 col-lg-3 col-11 mt-3">
          <div className="card card-third" style={{height: "154px"}}>
            <div className="card-body mt-3">
              <div className="mb-4">
                <h4 className="fw-bold" style={{color: "rgb(0, 72, 187)"}}>Total Customers</h4>
              </div>
              <h4 className="fw-normal text-muted">50</h4>
            </div>
          </div>
          </div>

          <div className="col-md-6 col-lg-3 col-11 mt-3">
            <div className="card card-fourth" style={{height: "154px"}}>
              <div className="card-body mt-3">
                <div className="mb-4">
                  <h4 className="fw-bold" style={{color: "rgb(255, 55, 55)"}}>Pending Orders</h4>
                </div>
                <h4 className="fw-normal text-muted">Ksh 3000000</h4>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-3 col-11 mt-3">
            <div className="card card-third" style={{height: "154px"}}>
              <div className="card-body mt-3">
                <div className="mb-4">
                  <h4 className="fw-bold" style={{color: "rgb(255, 55, 55)"}}>Total Orders</h4>
                </div>
                <h4 className="fw-normal text-muted">300</h4>
              </div>
            </div>
          </div>
        </div>

        <div style={{}} className="recent-orders mt-5 bg-white border">
          <div className="customers-header pt-4 mb-4 ps-4 d-flex justify-content-between">
            <h4>Recent Orders</h4>
            <a href="/admin/orders" className="text-muted me-4">View all</a>
          </div>
          <hr/>
          <div style={{overflowX: "scroll"}}>
          <div className="orders-table" style={{overflowX: "scroll"}}>
          <table style={{overflowX: "scroll"}} className="ms-md-3 table table-striped">
            <thead>
              <tr>
                <th scope="col">Date</th>
                <th scope="col">Status</th>
                <th scope="col">Products ordered</th>
                <th scope="col">Location</th>
                <th scope="col">Customer name</th>
              </tr>
            </thead>
            <tbody>
              {orders.map(order=>
                <tr key={order.id}>
                  <th scope="row">{order?.date}</th>
                  <td>{order?.status}</td>
                  <td>{order?.products_ordered}</td>
                  <td>{order?.location}</td>
                  <td>{customers.find(customer=>customer?.id===order?.customer_id)?.name}</td>
                </tr>
              )}

              {orders.length===0&&(
                <div className='container d-flex align-center mt-3' style={{position: "fixed"}}>
                    <p className='text-muted'>No recent orders.</p>
                </div>
              )}
            </tbody>
          </table>
          </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Dashboard;