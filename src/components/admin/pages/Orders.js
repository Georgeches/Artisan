import React, { useEffect, useState } from 'react';
import './css/orders.css'

function Orders({orders}) {

    const [searchedValue, setSearchValue] = useState("")
    const [companyOrders, setOrders] = useState([])
    const [page, setPage] = useState(1)
    const pagesCount = orders.length/10-Math.floor(orders.length/10) > 0?
        Math.floor(orders.length/10) + 1
        :
        orders.length/10

    const totalSales = companyOrders?.reduce((sum, order) => sum+order.sale, 0)

    return (
        <div className="container order-page px-2">
            <div className="mb-4 d-flex justify-content-between align-items-center">
                <div className="position-relative d-flex">
                    <span className="position-absolute search"><i className="fa fa-search"></i></span>
                    <input className="form-control w-100" placeholder="Type to Search..." onChange={e=>setSearchValue(e.target.value)}/>
                </div>
            </div>
            <hr/>
            <div className="table-responsive">
                <table className="table table-responsive table-borderless">
                    <thead>
                        <tr className="bg-light">
                            <th scope="col" width="10%">Date</th>
                            <th scope="col" width="15%">Customer</th>
                            <th scope="col" width="15%">Products ordered</th>
                            <th scope="col" width="15%">Location</th>
                            <th scope="col" width="15%">Status</th>
                            <th scope="col" width="15%">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {companyOrders.map(order=>
                            <tr>
                                <td>{order?.date}</td>
                                <td>{order?.customer_name}</td>
                                <td>{order?.products_ordered}</td>
                                <td>{order?.location}</td>
                                <td>Ksh. {order?.status}</td>
                                <td>
                                    <i class="bi bi-trash-fill"></i>
                                    <i class="bi bi-pencil-square"></i>
                                </td>
                            </tr>
                        )}
                        {companyOrders.length===0&&(
                            <div className='container d-flex align-center mt-3' style={{position: "fixed"}}>
                                <p className='text-muted'>You have no orders.</p>
                            </div>
                        )}
                    </tbody>
                </table>
                <div className='d-flex align-items-center justify-content-center w-100'>
                    <button className='btn btn-outline-dark btn-sm' onClick={e=> page>1 && setPage(page-1)}>previous</button>
                    <p className='text-center mx-4'>Page {page}/{pagesCount}</p>
                    <button className='btn btn-outline-dark btn-sm' onClick={e=> pagesCount>page && setPage(page+1)}>Next</button>
                </div>
                <hr/>
            </div>
        </div>
    );
}

export default Orders;