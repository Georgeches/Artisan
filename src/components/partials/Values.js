export default function Values(){

    const image_path = process.env.PUBLIC_URL

    return(
        <div className="container mt-3 d-flex justify-content-center align-items-center py-5 px-3 p-md-5">
            <div className="row justify-content-center align-items-center ">
                <div className="col-lg-4 row col-12 mb-5 mb-lg-0">
                    <div className="col-3 p-0 value-icon">
                        <img src={image_path + '/images/shipping.jpg'} className="w-75" alt="icon"/>
                    </div>
                    <div className=" col-9 value-content">
                        <h6>Worldwide shipping</h6>
                        <p className="mb-2 small">Available as standard or express delivery</p>
                        <a href="/" className="text-warning">Learn more</a>
                    </div>
                </div>

                <div className="col-lg-4 col-12 row mb-5 me-lg-3 mb-lg-0">
                    <div className="col-3 p-0 value-icon">
                        <img src={image_path + '/images/security.webp'} className="w-75" alt="icon"/>
                    </div>
                    <div className=" col-9 value-content">
                        <h6>Secure payments</h6>
                        <p className="mb-2 small">100% Secure Payment with 256-bit SSL encryption</p>
                        <a href="/" className="text-warning">Learn more</a>
                    </div>
                </div>

                <div className="col-lg-4 col-12 row">
                    <div className="col-3 p-0 value-icon">
                        <img src={image_path + '/images/call.jpg'} className="w-75" alt="icon"/>
                    </div>
                    <div className=" col-9 value-content">
                        <h6>24/7 Customer support</h6>
                        <p className="mb-2 small">24/7 Dedicated support</p>
                        <a href="/" className="text-warning">Learn more</a>
                    </div>
                </div>
            </div>
        </div>
    )
}