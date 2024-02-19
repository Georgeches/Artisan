import React, { useEffect, useState } from 'react';
import './css/orders.css'

function Products({products, api, setProducts}) {

    const [searchedValue, setSearchValue] = useState("")
    const [page, setPage] = useState(1)
    const pagesCount = products.length/10-Math.floor(products.length/10) > 0?
        Math.floor(products.length/10) + 1
        :
        products.length/10         
    const productsToShow = products.slice((page-1)*10, page*10).filter(product=>
            product?.name.toLowerCase().includes(searchedValue.toLowerCase())
        );

    function deleteProduct(e, product){
        let confirmDelete = window.confirm('Are you sure you want to delete this product')
        let path = `${api}/products/${product._id}`
        if(confirmDelete){
            fetch(path, {
                method: 'DELETE',
            })
            .then(res=>{
                if(!res.ok){
                    alert('Could not delete product. Try again later')
                }
                else{
                    setProducts(products.filter(i=>i?._id!==product?._id))
                }
            })
        }
    }

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
                            <th scope="col" width="10%">Image</th>
                            <th scope="col" width="15%">Name</th>
                            <th scope="col" width="30%">Description</th>
                            <th scope="col" width="10%">Price</th>
                            <th scope="col" width="10%">Quantity</th>
                            <th scope="col" width="10%">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {productsToShow.map(product=>
                            <tr>
                                <td>
                                    <img
                                        src="https://ih1.redbubble.net/image.5404692566.9768/st,small,507x507-pad,600x600,f8f8f8.u1.jpg"
                                        alt=''
                                        width="80"
                                    />
                                </td>
                                <td>{product?.name}</td>
                                <td>{product?.description}</td>
                                <td>Ksh. {product?.price}</td>
                                <td>{product?.quantity}</td>
                                <td>
                                    <button className='btn btn-link text-danger p-0' onClick={e=>deleteProduct(e, product)}><i class="bi bi-trash-fill"></i></button>
                                    <a className='btn btn-link text-primary' href={`/admin/products/edit/${product?._id}`}><i class="bi bi-pencil-square"></i></a>
                                </td>

                            </tr>
                        )}
                    </tbody>
                </table>
                {products.length===0&&(
                            <div className='container d-flex flex-column align-center mt-3'>
                                <p className='text-muted'>You have not uploaded any product</p>
                                <a href='/admin/products/new' className='btn btn-primary mt-2' style={{width: 'fit-content'}}>Upload my first product</a>
                            </div>
                        )}
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

export default Products;