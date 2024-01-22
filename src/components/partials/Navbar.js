import './css/navbar.css'
import OffcanvasNav from './OffcanvasNav';

export default function Navbar(){
    const logo = process.env.PUBLIC_URL + '/artisans-logo/transparent.png';
    return (
        <nav className='container-fluid p-0 p-md-3 w-100'>
            <section className='w-100 navbar-large d-none d-md-block'>
                <div className='nav1 w-100'>
                    <div className='logo'>
                        <img src={logo} alt='logo' width='100%' height='auto'/>
                    </div>
                    <input className='search_bar' placeholder='SEARCH'></input>
                    <div className='buttons d-flex justify-content-evenly align-items-center'>
                        <button className='btn px-3 h-75 sign_up'>Sell</button>
                        <button className='btn px-3 h-75 sign_up'>log in</button>
                        <button className='btn px-3 h-75 sign_up'>sign up</button>
                        <button className='btn px-3 h-75 sign_up' id='cart'><i className="bi bi-suit-heart"></i></button>
                        <button className='btn px-3 h-75 sign_up' id='cart'><i className="bi bi-cart"></i></button>
                    </div>
                </div>
                <div className='nav2'>
                    <p>Something</p>
                    <p>Another</p>
                    <p>Category</p>
                    <p>Within</p>
                    <p>Artisan</p>
                    <p>Website</p>
                    <p>Kenya</p>
                    <p>For you</p>
                </div>
            </section>

            <section className='navbar-small container-fluid d-md-none'>
                <div className='w-100 d-flex justify-content-between'>
                    <div className='d-flex align-items-center'>
                        <div className='toggle-nav'>
                            <button
                                type="button"
                                className='btn btn-link'
                                data-bs-toggle="offcanvas"
                                data-bs-target="#offcanvasNav"
                                aria-controls="offcanvasNav"
                            >
                                <i className="las la-bars" style={{fontSize: '25px', color: 'black'}}></i>
                            </button>

                            {/* offcanvas */}
                            <OffcanvasNav logo={logo}/>
                        </div>

                        <div className='logo'>
                            <img src={logo} alt='logo' width='100%' height='auto'/>
                        </div>
                    </div>

                    <div className='buttons d-flex justify-content-evenly align-items-center pb-2'>
                        <button className='btn px-3 h-75 sign_up' id='cart'><i className="bi bi-suit-heart"></i></button>
                        <button className='btn px-3 h-75 sign_up' id='cart'><i className="bi bi-cart"></i></button>
                    </div>
                </div>

                <div className=''>
                    <input className='mobile-search-bar w-100' placeholder='SEARCH'></input>
                </div>
            </section>
        </nav>
    )
}