import './css/navbar.css'
import OffcanvasNav from './OffcanvasNav';

export default function Navbar(){
    const logo = process.env.PUBLIC_URL + '/artisans-logo/transparent.png';
    return (
        <nav className='container-fluid p-0 p-md-3 w-100'>
            <section className='w-100 navbar-large d-none d-md-block'>
                <div className='nav1 w-100'>
                    <div className='logo'>
                        <a href='/' className='web-logo'>
                            {/* <img src={logo} alt='logo' width='100%' height='auto'/> */}
                            <span className='text-dark'>Inua</span><span className='text-danger'>Cra</span><span className='text-success'>fts</span>
                        </a>
                    </div>
                    <form className='border' style={{width: '50%', position: 'relative'}}>
                        <input className='search_bar w-100' placeholder='Search here'></input>
                        <button className='btn btn-link search-icon'>
                            <i class="bi bi-search"></i>
                        </button>
                    </form>
                    <div className='buttons d-flex justify-content-evenly align-items-center'>
                        <button className='btn px-3 h-75 sign_up'>Sell</button>
                        <a href='/login' className='btn px-3 h-75 sign_up'>log in</a>
                        <a href='/register' className='btn px-3 h-75 sign_up'>sign up</a>
                        <a href = '/favourites' className='btn px-3 h-75 sign_up' id='cart'><i className="bi bi-suit-heart"></i></a>
                        <a href='/cart' className='btn px-3 h-75 sign_up' id='cart'><i className="bi bi-cart"></i></a>
                    </div>
                </div>
                <div className='nav2'>
                    <p>Bags</p>
                    <p>Wall hanging baskets</p>
                    <p>Baskets</p>
                    <p>Necklaces</p>
                    <p>Wristbands</p>
                    <p>Bows & arrows</p>
                    <p>Wood carvings</p>
                </div>
            </section>

            <section className='navbar-small container-fluid d-md-none'>
                <div className='w-100 py-1 d-flex align-items-center justify-content-between'>
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
                        <a href='/' className='mobile-logo'>
                            {/* <img src={logo} alt='logo' width='100%' height='auto'/> */}
                            <span className='text-dark'>Inua</span><span className='text-danger'>Cra</span><span className='text-success'>fts</span>
                        </a>
                        </div>
                    </div>

                    <div className='d-flex justify-content-evenly align-items-center'>
                        <a href='/favourites' className='btn px-2 me-1 h-75 sign_up' id='cart'><i className="bi bi-suit-heart"></i></a>
                        <a href='/cart' className='btn px-2 h-75 sign_up' id='cart'><i className="bi bi-cart"></i></a>
                    </div>
                </div>

                <div className=''>
                    <form style={{position: 'relative'}}>
                        <input className='mobile-search-bar w-100' placeholder='Search here'></input>
                        <button className='btn btn-link search-icon'>
                            <i className="bi bi-search"></i>
                        </button>
                    </form>
                </div>
            </section>
        </nav>
    )
}