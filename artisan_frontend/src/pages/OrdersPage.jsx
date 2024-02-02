import {useState} from 'react';

export default function OrdersPage() {

    const [, setSearchValue] = useState("")
    const [, setFilterBy] = useState("customer")
    const [companyOrders] = useState([])

    function changeFilterBy(e){
        e.preventDefault();
        setFilterBy(e.target.value)
    }

    return (
        <div className="container order-page px-2">
            <div className="mb-4 d-flex justify-content-between align-items-center">
                <div className="position-relative d-flex">
                    <span className="position-absolute search">
                        <i className="fa fa-search"></i>
                    </span>

                    <input 
                        className="form-control w-100" 
                        placeholder="Type to Search..." 
                        onChange={e=>setSearchValue(e.target.value)}
                    />
                    
                    <select onChange={e=>changeFilterBy(e)} className='ms-3'>
                        <option value="customer">Search by customer name</option>
                        <option value="products">Search by products</option>
                        <option value="merchant">Search by merchandiser</option>
                    </select>
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
                        </tr>
                    </thead>

                    <tbody>
                        {companyOrders.map((order, index)=>
                            <tr key={index}>
                                <td>{order?.date}</td>
                                <td>{order?.customer_name}</td>
                                <td>{order?.products_ordered}</td>
                                <td>{order?.location}</td>
                                <td>Ksh. {order?.status}</td>
                            </tr>
                        )}
                        
                        {companyOrders.length===0&&(
                            <div className='container d-flex align-center mt-3' style={{position: "fixed"}}>
                                <p className='text-muted'>No orders found</p>
                            </div>
                        )}
                    </tbody>
                </table>
                <hr/>
            </div>
        </div>
    );
}