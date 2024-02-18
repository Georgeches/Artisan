import './css/navbar.css'
import { useNavigate } from 'react-router-dom';
import OffcanvasNav from './OffcanvasNav';

export default function Navbar({search, setSearch}){
    const nav = useNavigate()
    const logo = process.env.PUBLIC_URL + '/artisans-logo/transparent.png';

    function handleSearch(e){
        e.preventDefault();
        nav('/shop')
    }

    return (
        <nav className='container-fluid p-0 p-md-3 w-100'>
            <section className='w-100 navbar-large d-none d-md-block'>
                <div className='nav1 w-100'>
                    <div className='logo'>
                        <a href='/' className='web-logo'>
                            <span className='text-dark'>Inua</span><span className='text-danger'>Cra</span><span className='text-success'>fts</span>
                        </a>
                    </div>
                    <form onSubmit={e=>handleSearch(e)} className='border' style={{width: '50%', position: 'relative'}}>
                        <input className='search_bar w-100' value={search} placeholder='Search here' onChange={e=>setSearch(e.target.value)}></input>
                        <button type='submit' className='btn btn-link search-icon'>
                            <i class="bi bi-search"></i>
                        </button>
                    </form>
                    <div className='buttons d-flex justify-content-evenly align-items-center'>
                        <a href='/shop'><button className='btn px-3 h-75 sign_up'>Shop</button></a>
                        <li class="nav-item dropdown">
                            <a className="btn px-3 h-75 sign_up dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Log in
                            </a>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="/login/customer">Customer</a></li>
                                <li><hr class="dropdown-divider"/></li>
                                <li><a class="dropdown-item" href="/login/artisan">Artisan</a></li>
                            </ul>
                        </li>
                        <a href='/register' className='btn px-3 h-75 sign_up'>sign up</a>
                        <a href='/cart' className='btn px-3 h-75 sign_up' id='cart'><i className="bi bi-cart"></i></a>
                    </div>
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
                        <a href='/cart' className='btn px-2 h-75 sign_up' id='cart'><i className="bi bi-cart"></i></a>
                    </div>
                </div>

                <div className=''>
                    <form style={{position: 'relative'}} onSubmit={e=>handleSearch(e)}>
                        <input className='mobile-search-bar w-100' value={search} onChange={e=>setSearch(e.target.value)} placeholder='Search here'></input>
                        <button className='btn btn-link search-icon'>
                            <i className="bi bi-search"></i>
                        </button>
                    </form>
                </div>
            </section>
        </nav>
    )
}