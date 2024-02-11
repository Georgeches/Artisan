import React, { useEffect, useState } from 'react';
import './css/orders.css'

function Customers({customers}) {

    const [searchedValue, setSearchValue] = useState("")
    const [searchBy, setSearchBy] = useState("")
    const [page, setPage] = useState(1)
    const pagesCount = customers.length/10-Math.floor(customers.length/10) > 0?
        Math.floor(customers.length/10) + 1
        :
        customers.length/10
    const totalCustomers = customers.length;

    const customersToShow = customers.slice((page-1)*10, page*10).filter(customer=>{
        if(searchBy==='name'){
            return customer?.name.toLowerCase().includes(searchedValue.toLowerCase())
        }
        else if(searchBy==='email'){
            return customer?.email.toLowerCase().includes(searchedValue.toLowerCase())
        }
        else if(searchBy==='country'){
            return customer?.country.toLowerCase().includes(searchedValue.toLowerCase())
        }
        return customer?.name.toLowerCase().includes(searchedValue.toLowerCase())
    })

    function formatDate(dateString) {
        const date = new Date(dateString);
        const options = { day: 'numeric', month: 'long', year: 'numeric' };
        return date.toLocaleDateString('en-GB', options);
    }

    return (
        <div className="container order-page px-2">
            <div className="mb-4 d-flex justify-content-between align-items-center">
                <div className="position-relative d-flex">
                    <span className="position-absolute search"><i className="fa fa-search"></i></span>
                    <input className="form-control w-100" placeholder="Type to Search..." onChange={e=>setSearchValue(e.target.value)}/>
                    <select className='ms-2' style={{cursor: "pointer"}} onChange={e=>setSearchBy(e.target.value)}>
                        <option value="name">Search by name</option>
                        <option value="email">Search by email</option>
                        <option value="country">Search by Country</option>
                    </select>
                </div>
            </div>
            <hr/>
            <div className="table-responsive">
                <table className="table table-responsive table-borderless">
                    <thead>
                        <tr className="bg-light">
                            <th scope="col" width="15%">Name</th>
                            <th scope="col" width="15%">Phone</th>
                            <th scope="col" width="15%">Email</th>
                            <th scope="col" width="15%">City</th>
                            <th scope="col" width="15%">Country</th>
                            <th scope="col" width="15%">Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {customersToShow.map(customer=>
                            <tr>
                                <td>{customer?.name}</td>
                                <td>{customer?.phone}</td>
                                <td>{customer?.email}</td>
                                <td>{customer?.city}</td>
                                <td>{customer?.country}</td>
                                <td>{formatDate(customer?.createdAt)}</td>
                            </tr>
                        )}
                        {totalCustomers===0&&(
                            <div className='container d-flex align-center mt-3' style={{position: "fixed"}}>
                                <p className='text-muted'>No customers yet</p>
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

export default Customers;