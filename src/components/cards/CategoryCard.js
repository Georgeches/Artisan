export default function CategoryCard({category}){
    return(
        <div className="card category-card border-0 me-0 me-md-2">
            <div className="card-image">
                <img src={category.image} alt="category"/>
            </div>
            <div className="card-button">
                <button className="">Shop {category.name}</button>
            </div>
        </div>
    )
}