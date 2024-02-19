import React from "react";

export default function OffcanvasNav({logo}){
    return (
        <div className="offcanvas offcanvas-start w-75 ps-2 pt-3" tabIndex="-1" id="offcanvasNav" aria-labelledby="offcanvasExampleLabel">
            <div className="offcanvas-header row align-items-start pt-2 bg-light" style={{width: '100%'}}>
                <div className="col-10 p-0">
                    <p className="h6 mb-3">Hi there!</p>
                    <div className="d-flex">
                        <li className="nav-item dropdown">
                            <a className="btn h-75 sign_up dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Log in
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="/login/customer">Customer</a></li>
                                <li><hr className="dropdown-divider"/></li>
                                <li><a className="dropdown-item" href="/login/artisan">Artisan</a></li>
                            </ul>
                        </li>
                        <p className="me-2 mt-2">or</p>
                        <a href="/register" className="mt-2 text-black fw-bold">Sign Up</a>
                    </div>
                </div>
                <button type="button" className="btn-close col-2" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body ps-0 w-100">
                <ul className="offcanvas-list w-100">
                    <li>
                        <a href="/shop" className="fw-bold text-dark">Shop</a>
                    </li>
                    <li>Bags</li>
                    <li>Wall hanging baskets</li>
                    <li>Baskets</li>
                    <li>Necklaces</li>
                    <li>Wristbands</li>
                    <li>Bows & arrows</li>
                    <li>Wood carvings</li>
                </ul>
                <ul className="extras">
                    <li className="mb-3">Delivery</li>
                    <li className="mb-3">Returns</li>
                    <li className="mb-3">Help center</li>
                    <li className="mb-3">Sell</li>
                </ul>
            </div>
        </div>
    )
}