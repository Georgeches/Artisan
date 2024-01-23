import React from 'react';

export default function Cart(){
  return (
    <section className="h-100 gradient-custom">
      <div className="container py-md-5">
        <div className="row d-flex justify-content-center my-4">
          <div className="col-md-8">
            <div className="card border mb-4">
              <div className="card-header py-3">
                <p className="h5">Cart - 2 items</p>
              </div>
              <div className="card-body">

                <div className="row">
                  <div className="col-lg-3 col-md-12 mb-4 mb-lg-0">
                    <div className="bg-image hover-overlay hover-zoom ripple rounded" data-mdb-ripple-color="light">
                      <img src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Vertical/12a.webp" className="w-100" alt="Blue Jeans Jacket" />
                    </div>
                  </div>
                  <div className="col-lg-5 col-md-6 mb-4 mb-lg-0">
                    <p><strong>Blue denim shirt</strong></p>
                    <p className='mt-2 mb-2'>Price: 5000</p>
                    <button type="button" className="btn btn-danger btn-sm me-2 mb-2" data-mdb-toggle="tooltip" title="Remove item">
                    <i className="bi bi-trash-fill"></i>
                    </button>
                    <button type="button" className="btn btn-outline-primary btn-sm mb-2" data-mdb-toggle="tooltip" title="Move to the wish list">
                    <i className="bi bi-heart-fill"></i>
                    </button>
                  </div>
                  <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
                    <div className="d-flex mb-4" style={{ maxWidth: "300px" }}>
                      <button className="btn cart-btn px-2 me-2" onClick={() => {}}>
                        <i class="bi bi-dash"></i>
                      </button>
                      <div className="form-outline">
                        <input id="form1" min="1" name="quantity" value="1" type="number" className="form-control" />                      </div>
                      <button className="btn cart-btn px-2 ms-2" onClick={() => {}}>
                        <i class="bi bi-plus"></i>
                      </button>
                    </div>
                    <p className="text-start text-md-center"><strong>$17.99</strong></p>
                  </div>
                </div>
                <hr className="my-4" />

                <div className="row">
                  <div className="col-lg-3 col-md-12 mb-4 mb-lg-0">
                    <div className="bg-image hover-overlay hover-zoom ripple rounded" data-mdb-ripple-color="light">
                      <img src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Vertical/12a.webp" className="w-100" alt="Blue Jeans Jacket" />
                    </div>
                  </div>
                  <div className="col-lg-5 col-md-6 mb-4 mb-lg-0">
                    <p><strong>Blue denim shirt</strong></p>
                    <p className='mt-2 mb-2'>Price: 5000</p>
                    <button type="button" className="btn btn-danger btn-sm me-2 mb-2" data-mdb-toggle="tooltip" title="Remove item">
                    <i className="bi bi-trash-fill"></i>
                    </button>
                    <button type="button" className="btn btn-outline-primary btn-sm mb-2" data-mdb-toggle="tooltip" title="Move to the wish list">
                    <i className="bi bi-heart-fill"></i>
                    </button>
                  </div>
                  <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
                    <div className="d-flex mb-4" style={{ maxWidth: "300px" }}>
                      <button className="btn cart-btn px-2 me-2" onClick={() => {}}>
                        <i class="bi bi-dash"></i>
                      </button>
                      <div className="form-outline">
                        <input id="form1" min="1" name="quantity" value="1" type="number" className="form-control" />                      </div>
                      <button className="btn cart-btn px-2 ms-2" onClick={() => {}}>
                        <i class="bi bi-plus"></i>
                      </button>
                    </div>
                    <p className="text-start text-md-center"><strong>$17.99</strong></p>
                  </div>
                </div>
                <hr className="my-4" />

              </div>
            </div>
            <div className="card mb-4">
              <div className="card-body">
                <p><strong>Expected shipping delivery</strong></p>
                <p className="mb-0">12.10.2020 - 14.10.2020</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card mb-4">
              <div className="card-header py-3">
                <p className="h5 mb-0">Summary</p>
              </div>
              <div className="card-body">
                <ul className="list-group list-group-flush">
                  <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                    Subtotal
                    <span>$53.98</span>
                  </li>

                  <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                    Shipping
                    <span>$5.00</span>
                  </li>

                  <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                    Tax
                    <span>${0.16*53.98}</span>
                  </li>

                  <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                    Total
                    <span>$60.00</span>
                  </li>
                </ul>
                <a role="button" href='/customerinfo' className="btn btn-block mt-3 cart-btn">
                  Go to checkout <i class="bi bi-box-arrow-in-right ms-2"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
