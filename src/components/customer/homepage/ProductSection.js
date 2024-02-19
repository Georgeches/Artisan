import ProductCard from '../cards/ProductCard'

export default function ProductsSection({products, artisans}){
    return (
        <div className="container section section-flex mt-4 mt-md-5">
            <h4>Featured Products</h4>

            <div className="products list-flex">
                {products.map(product=>
                    <ProductCard key={product._id} artisans={artisans} product={product} page={'home'}/>
                )}
            </div>
        </div>
    )
}