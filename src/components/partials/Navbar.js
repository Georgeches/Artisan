import './css/navbar.css'

export default function Navbar(){
    const logo = process.env.PUBLIC_URL + '/artisans-logo/transparent.png';
    return (
        <nav className=''>
            <section>
                <div className='nav1'> 
                    <img src={logo} alt='logo' width='150'/>
                    <input classProduct className='search_bar' placeholder='SEARCH'></input>
                    <div className='buttons d-flex justify-content-evenly align-items-center w-25'>
                        <button className='btn px-3 h-75 sign_up'>sell your art</button>
                        <button className='btn px-3 h-75 sign_up'>log in</button>
                        <button className='btn px-3 h-75 sign_up'>sign up</button>
                        <button className='btn px-3 h-75 sign_up' id='cart'><i className="bi bi-suit-heart"></i></button>
                        <button className='btn px-3 h-75 sign_up' id='cart'><i className="bi bi-cart"></i></button>
                    </div>
                </div>
                <div className='nav2'>
                    <p>product name</p>
                    <p>product name</p>
                    <p>product name</p>
                    <p>product name</p>
                    <p>product name</p>
                    <p>product name</p>
                    <p>product name</p>
                    <p>product name</p>
                </div>
            </section>
        </nav>
    )
}