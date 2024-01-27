import './css/partials.css'

export default function Searchbar(){

    const recommendations = [
        {
            'name': 'Wall hanging baskets',
            'color': 'rgb(255,174,116)'
        },
        {
            'name': 'Bags',
            'color': 'rgb(254,233,160)'
        },
        {
            'name': 'Baskets',
            'color': 'rgb(240,167,245)'
        },
        {
            'name': 'Necklaces',
            'color': 'rgb(172,207,255)'
        },
        {
            'name': 'Beaded wrist bands',
            'color': 'rgb(241,246,254)'
        },
        
    ]

    return(
        <div className="container p-0 mt-5">
            <p className="h5 mb-3">Looking for something different?</p>
            <p className="h7 mb-2">Search below.</p>

            <form style={{position: 'relative'}}>
                <input className='search_bar' style={{width: "100%", height: "55px"}} placeholder='SEARCH'></input>
                <button className='btn btn-link search-icon' style={{top: '6px', right: '15px'}}>
                    <i class="bi bi-search"></i>
                </button>
            </form>

            <div className="recommendations mt-3">
                {recommendations.map(recommendation=>
                <div className='recommendation py-2 px-3 me-3 rounded d-flex justify-content-center align-items-center' style={{backgroundColor: recommendation.color}}>
                    <i class="bi bi-search"></i>
                    <a href="/" className='text-dark small ms-2' style={{fontWeight: '500'}}>
                        {recommendation.name}
                    </a>
                </div>
                )}
            </div>
        </div>
    )
}