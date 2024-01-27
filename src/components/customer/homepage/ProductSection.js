import ProductCard from '../cards/ProductCard'

export default function ProductsSection(){
    return (
        <div className="container section section-flex mt-4 mt-md-5">
            <h4>Featured Products</h4>

            <div className="products list-flex">
                <ProductCard page={'home'}/>
                <ProductCard page={'home'}/>
                <ProductCard page={'home'}/>
                <ProductCard page={'home'}/>
                <ProductCard page={'home'}/>
            </div>
        </div>
    )
}