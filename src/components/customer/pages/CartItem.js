import React from "react";
import { useState } from "react";

export default function CartItem({item, setCart}){

    const [quantity, setQuantity] = useState(1)
    const image = process.env.PUBLIC_URL + '/images/magnolia.webp'

    function removeFromCart(e, cartItem){
        e.preventDefault();
    
        const cart = JSON.parse(sessionStorage.getItem('cart'))
        const remaining = cart.filter(item=>item._id!==cartItem?._id)
        sessionStorage.setItem("cart", JSON.stringify(remaining))
        setCart(remaining)
    }

    return (
        <>
            <div className="row" key={item._id}>
                <div className="col-lg-3 col-md-12 mb-4 mb-lg-0">
                    <div className="bg-image hover-overlay hover-zoom ripple rounded" data-mdb-ripple-color="light">
                        <img src={image} className="w-100" alt="Blue Jeans Jacket" />
                    </div>
                </div>
                <div className="col-lg-5 col-md-6 mb-4 mb-lg-0">
                    <p><strong>{item.name}</strong></p>
                    <p className='mt-2 mb-2'>Unit price: Ksh {item.price}</p>
                    <button type="button" onClick={e=>removeFromCart(e, item)} className="btn btn-danger btn-sm me-2 mb-2" data-mdb-toggle="tooltip" title="Remove item">
                    <i className="bi bi-trash-fill"></i> Remove
                    </button>
                </div>
                <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
                    <div className="d-flex mb-4" style={{ maxWidth: "300px" }}>
                        <button className="btn cart-btn px-2 me-2" onClick={e => quantity > 1 && setQuantity(quantity-1)}>
                        <i class="bi bi-dash"></i>
                        </button>
                        <div className="form-outline">
                        <input id="form1" name="quantity" value={quantity} type="number" className="form-control" />                      </div>
                        <button className="btn cart-btn px-2 ms-2" onClick={e => setQuantity(quantity+1)}>
                        <i class="bi bi-plus"></i>
                        </button>
                    </div>
                    <p className="text-start text-md-center"><strong>Ksh {item.price * quantity}</strong></p>
                </div>
            </div>
            <hr className="my-4" />
        </>
    )
}