import CategoryCard from "../cards/CategoryCard"

export default function CategoriesSection(){
    return (
        <div className="container section category-section">
            <h4>Shop By Categories</h4>

            <div className="categories flex-wrap">
                <CategoryCard />
            </div>
        </div>
    )
}