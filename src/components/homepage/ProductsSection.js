import ProductCard from "../cards/ProductCard"

export default function ProductsSection(){
    return (
        <div className="container section section-flex">
            <h4>Featured Products</h4>

            <div className="products list-flex">
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
            </div>
        </div>
    )
}