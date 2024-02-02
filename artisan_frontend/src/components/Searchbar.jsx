import recommendations from "../../database/recommendations"
import { NavLink } from "react-router-dom"

export default function Searchbar(){
    const {recommendations: recommendationList} = recommendations
    return(
        <div className="container p-0 mt-5">
            <p className="h5 mb-3">Looking for something different?</p>
            <p className="h7 mb-2">Search below.</p>

            <form className="relative">
                <input 
                    className='search_bar w-full h-[55px]' 
                    placeholder='SEARCH'
                />

                <button className='btn btn-link search-icon top-[6px] right-[15px]'>
                    <i className="bi bi-search"></i>
                </button>
            </form>

            <div className="recommendations mt-3">
                {
                    recommendationList.map(
                        (recommendation, index) => (
                            <div
                                key={index}
                                className='recommendation py-2 px-3 me-3 rounded d-flex justify-content-center align-items-center bg-[recommendation.color]'
                            >
                                <i className="bi bi-search"></i>
                                
                                <NavLink 
                                    to="/" 
                                    className='text-dark small ms-2 font-[500]'
                                >{recommendation.name}</NavLink>
                            </div>
                        )
                )}
            </div>
        </div>
    )
}