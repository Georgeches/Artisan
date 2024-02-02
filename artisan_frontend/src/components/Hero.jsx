export default function Hero(){
    return (
        <div className="container-fluid hero min-h-[48vh] mt-1 p-0 d-flex flex-wrap justify-content-start">
            <div className='hero-image m-0 col-12'>
                <img 
                    src="https://bornparkadventures.com/wp-content/uploads/2020/06/Maasai-Crafts-2048x1378.jpg" 
                    alt=""
                />
            </div>

            <div className="hero-texts h-100 m-0 col-12 col-lg-6 text-center">
                <div className='' style={{height: "fit-content"}}>
                    <p className='display-4 fw-bold text-white'>By Kenyan Artisans,</p>
                    <p className='display-4 fw-bold mb-5 text-white'>For you to love</p>
                    <p className="mb-5 long-text text-white small">
                        Thousands of new designs daily, printed on just about anything. Sold by independent artists.
                    </p>
                    <button className='btn hero-button'>
                        EXPLORE NOW
                    </button>
                </div>
            </div>
        </div>
    )
}