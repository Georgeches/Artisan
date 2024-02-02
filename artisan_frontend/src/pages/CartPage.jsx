/* eslint-disable react/prop-types */
import CartItem from '../components/cartPage/CartItem';
import {NavLink } from 'react-router-dom';

export default function CartPage({cartItems, cart, setCart, total, subtotal, tax, shipping}){
  console.log(JSON.parse(cart))

  return (
    <section className="h-100 gradient-custom">
      <div className="container py-md-5">
        <div className="row d-flex justify-content-center my-4">
          <div className="col-md-8">
            <div className="card border mb-4">
              <div className="card-header py-3">
                <p className="h5">Cart - {cartItems.length} items</p>
              </div>

              <div className="card-body">
                {
                  cartItems.length === 0 && (
                    <div className='grid place-content-center'>
                        <p className='h6 mt-4'>Cart is empty</p>

                        <NavLink 
                          href='/shop' 
                          className="btn btn-block mt-3 text-white text-[16px] bg-cart-btn"
                        >
                          Start shopping 
                          <i className="bi bi-box-arrow-in-right ms-2"></i>
                        </NavLink>
                    </div>
                  )
                }

                {
                  cartItems.map((item, index)=> <CartItem
                    key={index}
                    item={item} 
                    cart={cart} 
                    setCart={setCart}
                  />
                )}
              </div>
            </div>

            <div className="card mb-4">
              <div className="card-body">
                <p><strong>Expected shipping delivery</strong></p>
                <p className="mb-0">12.10.2020 - 14.10.2020</p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card mb-4">
              <div className="card-header py-3">
                <p className="h5 mb-0">Summary</p>
              </div>

              <div className="card-body">
                <ul className="list-group list-group-flush">
                  <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                    Subtotal
                    <span>Ksh {subtotal}</span>
                  </li>

                  <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                    Shipping
                    <span>Ksh {shipping}</span>
                  </li>

                  <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                    Tax
                    <span>Ksh {tax}</span>
                  </li>

                  <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                    Total
                    <span>Ksh {total}</span>
                  </li>
                </ul>

                <NavLink 
                  to='/customerinfo' 
                  className="btn btn-block mt-3 text-white text-[16px] bg-cart-btn"
                >
                  Go to checkout 
                  <i className="bi bi-box-arrow-in-right ms-2"></i>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
