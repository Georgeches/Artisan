import React from "react";
import ProductCard from "../cards/ProductCard";
import './css/shop.css'

export default function Shop({artisans, products, search, setSearch}){
    return(
        <div className="container-fluid px-lg-4" style={{marginTop: "80px"}}>
            <div className="row">
                <div className="col-md-3">
                    <p className="h4">Filters</p>
                </div>

                <div className="col-md-9">
                    <form className="" style={{position: "relative", width: "80%"}}>
                        <input className="form-control" type="text" value={search} placeholder="Search..." onChange={e=>setSearch(e.target.value)}/>
                        <button className='btn btn-link search-icon' style={{top: '0px', right: '1vh', fontSize: '17px'}}>
                            <i class="bi bi-search"></i>
                        </button>
                    </form>

                    <div className=" mt-3">
                        <p className="h5">Shop</p>

                        <div className="d-flex justify-content-start gap-2 flex-wrap">
                            {products.map(product=>
                                <div className="result">
                                    <ProductCard artisans={artisans} product={product} page={'shop'}/>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}