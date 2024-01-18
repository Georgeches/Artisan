import './css/navbar.css'

export default function Navbar(){
    return (
        <nav>
            <section>
                <div className='nav1'> 
                    <img src='#'/>
                    <h1>ARTISANS</h1>
                    <input classProduct className='search_bar' placeholder='SEARCH'></input>
                    <button className='sign_up'>sell your art</button>
                    <button className='sign_up'>sign-up</button>
                    <button className='sign_up'>log_in</button>
                    <button className='sign_up' id='heart'>♡</button>
                    <button className='sign_up' id='cart'>🛒</button>
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