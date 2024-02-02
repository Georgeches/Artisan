import {NavLink} from "react-router-dom"

export default function OffcanvasNav(){
    return (
        <div 
            className="offcanvas offcanvas-start w-75 ps-2 pt-3" 
            tabIndex="-1" 
            id="offcanvasNav" 
            aria-labelledby="offcanvasExampleLabel"
        >
            <div className="offcanvas-header row align-items-start pt-2 bg-light w-full">
                <div className="col-10 p-0">
                    <p className="h6 mb-3">Hi there!</p>

                    <div className="d-flex">
                        <NavLink 
                            to={'/auth/login'} 
                            className="text-black fw-bold me-2"
                        >Log In</NavLink>

                        <p className="me-2">or</p>

                        <NavLink 
                            to="/auth/register" 
                            className="text-black fw-bold"
                        >Sign Up</NavLink>
                    </div>
                </div>

                <button 
                    type="button" 
                    className="btn-close col-2" 
                    data-bs-dismiss="offcanvas" 
                    aria-label="Close"
                ></button>
            </div>

            <div className="offcanvas-body ps-0 w-100">
                <ul className="offcanvas-list w-100">
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