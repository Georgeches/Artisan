import './cards.css'

export function ArtisanCard(){
    return(
        <div className="card artisan-card border-1 mt-4 me-3 mb-3">
            <div className="card-image">
                <img src="https://imgs.search.brave.com/RVeccZOntqIKVuL8DkBNopO4NhY1YzFFPyB0ocnaDXg/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMzLm5vdmljYS5u/ZXQvMjAxNS9hc3Nl/dHMvaW1hZ2VzL2Nh/dGVnb3J5cGxhdGUv/cGFpbnRpbmdzL2lt/cHJlc3Npb25pc3Rf/MjAyMU1BUjMxLmpw/Zw" alt="category"/>
            </div>
            <div className='card-details pt-4 pb-3 text-center'>
                <p className='mb-3'>Kwa Fundi</p>
                <div className="card-button">
                    <button className="border">Visit Shop</button>
                </div>
            </div>
        </div>
    )
}