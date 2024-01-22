import React from "react";

export default function OffcanvasNav({logo}){
    return (
        <div className="offcanvas offcanvas-start w-75 ps-4 pt-3" tabindex="-1" id="offcanvasNav" aria-labelledby="offcanvasExampleLabel">
            <div className="offcanvas-header row align-items-start pt-2 bg-light" style={{width: '100%'}}>
                <div className="col-10 p-0">
                    <p className="h6 mb-3">Hi there!</p>
                    <div className="d-flex">
                        <a href="/" className="text-black fw-bold me-2">Log In</a>
                        <p className="me-2">or</p>
                        <a href="/" className="text-black fw-bold">Sign Up</a>
                    </div>
                </div>
                <button type="button" className="btn-close col-2" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
                <ul className="">

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