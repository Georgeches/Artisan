import CategoryCard from "../cards/CategoryCard"
import categories from "../../data"

export default function CategoriesSection(){
    
    return (
        <div className="container section category-section p-0">
            <h4 className="mb-4">Shop By Categories</h4>

            {/* <div className="categories d-flex flex-wrap justify-content-start">
                {categories.map(category=><CategoryCard category={category}/>)}
            </div> */}
        </div>
    )
}