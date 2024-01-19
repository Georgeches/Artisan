import CategoryCard from "../cards/CategoryCard"

export default function CategoriesSection(){
    const categories = [
        {
            name: 'posters',
            image: 'https://images.ctfassets.net/5hig0ukq7ib0/29urOO3xJSauNr8BXIt3jF/0836a12570a436dd07ed4957fb80d65b/23Q418_GM_UnholidizetheSite_MktgTeam_Homepage_Desktop_Posters.png?fm=jpg&q=85&w=800&fl=progressive'
        },
        {
            name: 'Art',
            image: 'https://images.ctfassets.net/5hig0ukq7ib0/25KReSHXhHU4qlZNEU74sY/84872bbd9fa5d65f2f981b64683e9d2b/23Q418_GM_UnholidizetheSite_MktgTeam_Homepage_Desktop_Artists.png?fm=jpg&q=85&w=800&fl=progressive'
        },
        {
            name: 'Furniture',
            image: 'https://lifestylefurniturehomestore.com/cdn/shop/products/D736-25-01_4_695x591.jpg?v=1626047215'
        },
        {
            name: 'Paintings',
            image: 'https://i.etsystatic.com/32811653/c/1612/1612/236/32/il/af1a10/5445598292/il_600x600.5445598292_slco.jpg'
        }
    ]
    return (
        <div className="container section category-section p-0">
            <h4 className="mb-4">Shop By Categories</h4>

            <div className="categories d-flex flex-wrap justify-content-start">
                {categories.map(category=><CategoryCard category={category}/>)}
            </div>
        </div>
    )
}