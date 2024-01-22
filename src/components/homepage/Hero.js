import './css/sections.css'

export default function Hero(){
    return (
        <div className="container-fluid hero section mt-1 p-0 p-lg-5 pt-lg-0 d-flex flex-wrap justify-content-center">
            <div className='hero-image m-0 col-12'>
                <img src="https://images.pexels.com/photos/1323712/pexels-photo-1323712.jpeg?auto=compress&cs=tinysrgb&w=600" alt=""/>
            </div>
            <div className="hero-texts m-0 col-12 col-lg-6 text-center">
                <p className='display-4 fw-bold'>By Kenyan Artisans,</p>
                <p className='display-4 fw-bold mb-5'>For you to love</p>
                <p className='h6 mb-5 long-text'>
                    Thousands of new designs daily, printed on just about anything. Sold by independent artists.
                </p>
                <button className='btn hero-button'>
                    EXPLORE NOW
                </button>
            </div>
        </div>
    )
}