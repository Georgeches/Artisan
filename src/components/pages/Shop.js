import React from "react";
import ProductCard from "../customer/cards/ProductCard";
import './css/shop.css'

export default function Shop({artisans}){

    return(
        <div className="container-fluid px-lg-4" style={{marginTop: "80px"}}>
            <div className="row">
                <div className="col-md-3">
                    <p className="h4">Filters</p>
                </div>

                <div className="col-md-9">
                    <form className="" style={{position: "relative", width: "80%"}}>
                        <input className="form-control" type="text" placeholder="Search..."/>
                        <button className='btn btn-link search-icon' style={{top: '0px', right: '1vh', fontSize: '17px'}}>
                            <i class="bi bi-search"></i>
                        </button>
                    </form>

                    <div className=" mt-3">
                        <p className="h5">Shop</p>

                        <div className="d-flex justify-content-start gap-2 flex-wrap">
                            <div className="result">
                                <ProductCard page={'shop'}/>
                            </div>

                            <div className="result">
                                <ProductCard page={'shop'}/>
                            </div>

                            <div className="result">
                                <ProductCard page={'shop'}/>
                            </div>

                            <div className="result">
                                <ProductCard page={'shop'}/>
                            </div>

                            <div className="result">
                                <ProductCard page={'shop'}/>
                            </div>

                            <div className="result">
                                <ProductCard page={'shop'}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}