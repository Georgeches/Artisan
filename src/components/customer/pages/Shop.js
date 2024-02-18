import React, { useState } from "react";
import ProductCard from "../cards/ProductCard";
import './css/shop.css'

export default function Shop({artisans, products, search, setSearch}){
    const categories = ['All', 'bags', 'wall hanging baskets',
                        'baskets', 'necklaces', 'wristbands', 'wood carvings'
                        ]
    
    const [filter, setFilter] = useState('All')
    const filteredProducts = filter!=='All'?products.filter(product=>product?.category===filter):[...products]
    return(
        <div className="container-fluid px-lg-4" style={{marginTop: "60px"}}>
            <div className="row">
                <div className="col-md-3 pe-5 d-none d-md-block">
                    <p className="h4">Filters</p>
                    <hr />
                    <ul className="offcanvas-list p-0 w-100">
                        {categories.map(i=>
                            i!==filter?
                            <li key={i} style={{cursor: 'pointer'}} onClick={e=>setFilter(i)}>{i}</li>
                            :
                            <li key={i} style={{cursor: 'pointer'}} className="fw-bold" onClick={e=>setFilter(i)}>{i}</li>
                        )}
                    </ul>
                </div>

                <div className="col-md-9">
                    <form className="d-none d-md-block" style={{position: "relative", width: "80%"}}>
                        <input className="form-control" type="text" value={search} placeholder="Search..." onChange={e=>setSearch(e.target.value)}/>
                        <button className='btn btn-link search-icon' style={{top: '0px', right: '1vh', fontSize: '17px'}}>
                            <i class="bi bi-search"></i>
                        </button>
                    </form>

                    <div className=" mt-3">
                        <p className="h5">Shop</p>

                        <div className="d-flex justify-content-start gap-2 flex-wrap">
                            {filteredProducts.map(product=>
                                <div className="result">
                                    <ProductCard artisans={artisans} product={product} page={'shop'}/>
                                </div>
                            )}
                        {filteredProducts.length===0&&
                            <p>No products found...</p>
                        }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}