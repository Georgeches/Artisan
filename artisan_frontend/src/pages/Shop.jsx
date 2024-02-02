/* eslint-disable react/prop-types */
import ProductCard from '../components/productPage/ProductCard'

export default function Shop({artisans, products}){
    return(
        <div className="container-fluid px-lg-4 mt-[80px]">
            <div className="row">
                <div className="col-md-3">
                    <p className="h4">Filters</p>
                </div>

                <div className="col-md-9">
                    <form className="relative w-[80%]">
                        <input 
                            className="form-control" 
                            type="text" 
                            placeholder="Search..."
                        />

                        <button className='btn btn-link search-icon top-0 right-[1vh] text-[17px]'>
                            <i className="bi bi-search"></i>
                        </button>
                    </form>

                    <div className=" mt-3">
                        <p className="h5">Shop</p>

                        <div className="d-flex justify-content-start gap-2 flex-wrap">
                            {products.map((product, index)=>
                                <div 
                                    className="result"
                                    key={index}
                                >
                                    <ProductCard 
                                        artisans={artisans} 
                                        product={product} 
                                        page={'shop'}
                                    />
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}