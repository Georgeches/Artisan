import React, { useState } from "react";

export default function Customer({orders}){
    const customer = JSON.parse(localStorage.getItem('user_details'))
    const customerOrders = orders.filter(order=>order?.customer_id===customer?._id)

    const [page, setPage] = useState(1)
    const pagesCount = customerOrders.length/10-Math.floor(customerOrders.length/10) > 0?
        Math.floor(customerOrders.length/10) + 1
        :
        customerOrders.length/10

    return(
        <div className="container" style={{marginTop: '100px'}}>
            <div className="table-responsive" style={{
                overflowX: 'scroll'
            }}>
                <table className="table table-responsive table-borderless">
                    <thead>
                        <tr className="bg-light">
                            <th scope="col" width="10%">Date</th>
                            <th scope="col" width="15%">Products ordered</th>
                            <th scope="col" width="15%">Amount</th>
                            <th scope="col" width="15%">Shipping fee</th>
                            <th scope="col" width="15%">Location</th>
                            <th scope="col" width="15%">Status</th>
                            <th scope="col" width="15%">Payment status</th>
                            <th scope="col" width="15%">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {customerOrders.map(order=>
                            <tr>
                                <td>{order?.date}</td>
                                <td>{order?.products_ordered}</td>
                                <td>{order?.amount}</td>
                                <td>{order?.shipping_fee}</td>
                                <td>{order?.location}</td>
                                <td>{order?.status}</td>
                                <td>{order?.payment_status}</td>
                                <td>
                                    <i class="bi bi-trash-fill"></i>
                                    <i class="bi bi-pencil-square"></i>
                                </td>
                            </tr>
                        )}
                        {customerOrders.length===0&&(
                            <div className='container d-flex align-center mt-3' style={{position: "fixed"}}>
                                <p className='text-muted'>No orders found</p>
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
    )
}