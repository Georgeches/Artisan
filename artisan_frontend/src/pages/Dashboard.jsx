/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const Dashboard = ({orders, customers}) => {
  return (
    <div className="container-fluid bg-light home">
        <div className="container pt-4">
            <h3>Dashboard</h3>

            <div className="admin-summary row mt-4">
                <div className="col-lg-3 col-md-6 col-11">

                <div className="card card-first h-[154px]">
                    <div className="card-body mt-3">
                        <div className="mb-4">
                            <h4 className="fw-bold text-success">Total Revenue</h4>
                        </div>

                        <h4 className="fw-normal text-muted">Ksh 2000000</h4>
                    </div>
                </div>
            </div>

            <div className="col-md-6 col-lg-3 col-11">
                <div className="card card-second h-[154px]">
                    <div className="card-body mt-3">
                        <div className="mb-4">
                            <h4 className="fw-bold text-primary">Total Sales</h4>
                        </div>

                        <h4 className="fw-normal text-muted">Ksh 5000000</h4>
                    </div>
                </div>
            </div>

            <div className="col-md-6 col-lg-3 col-11">
                <div className="card card-third h-[154px]">
                    <div className="card-body mt-3">
                        <div className="mb-4">
                            <h4 className="fw-bold text-dashboard__expenses-stats">Total Expenses</h4>
                        </div>
                        
                        <h4 className="fw-normal text-muted">Ksh 3000000</h4>
                    </div>
                </div>
            </div>

            <div className="col-md-6 col-lg-3 col-11">
                <div className="card card-fourth h-[154px]">
                    <div className="card-body mt-3">
                        <div className="mb-4">
                            <h4 className="fw-bold text-dashboard__profits-stats">Total Profits</h4>
                        </div>

                        <h4 className="fw-normal text-muted">Ksh 3000000</h4>
                    </div>
                    </div>
                </div>
            </div>

            <div className="row mt-5 associates">
                <div className="col-11 ms-md-0 ms-2 px-4 mx-md-3 my-3 my-md-0 bg-white border col-md-5 col-lg-5 h-[400px] overflow-hidden">
                    <div className="customers-header pt-4">
                        <h4>Customers</h4>
                    </div>

                    <hr/>
                    
                    <div className="customers-list">
                        <ul className="list-group h-[300px] overflow-y-scroll">
                            {orders.map(order=>
                                <li key={order.id} className="list-group-item d-flex align-items-center">{order?.customer_name}</li>
                            )}
                        </ul>
                    </div>
                </div>

                <div className="col-11 ms-md-0 ms-2 px-4 bg-white border col-md-6 col-lg-6 h-[400px] overflow-hidden">
                    <div className="customers-header pt-4 d-flex justify-content-between">
                        <h4>Merchants</h4>
                        <Link href="/merchants" className="text-muted">View all</Link>
                    </div>

                    <hr className="mt-[8px]"/>

                    <div className="customers-list">
                        <ul className="list-group h-[300px] overflow-y-scroll">
                            {customers.map(customer=>
                                <li key={customer?.id} className="list-group-item d-flex align-items-center">
                                <div>
                                    {/* <img src={customer?.profile_picture} alt="pic"/> */}
                                </div>
                                {customer?.name}
                                </li>
                            )}
                        </ul>
                    </div>
                </div>
            </div>

            <div className="recent-orders mt-5 mb-5 bg-white border">
                <div className="customers-header pt-4 mb-4 ps-4 d-flex justify-content-between">
                    <h4>Recent Orders</h4>
                    <Link href="/merchants" className="text-muted me-4">View all</Link>
                </div>

                <hr/>
                
                <div className="overview-x-scroll">
                    <div className="orders-table overview-x-scroll">
                        <table className="ms-md-3 table table-striped overview-x-scroll">
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