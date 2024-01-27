import './cards.css'

export default function ArtisanCard({artisan}){
    const link = `/artisans/${artisan._id}`

    return(
        <div key={artisan.id} className="card artisan-card border-1 mt-4 me-3 mb-3">
            <div className="card-image">
                <a href={link}><img src="https://imgs.search.brave.com/RVeccZOntqIKVuL8DkBNopO4NhY1YzFFPyB0ocnaDXg/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMzLm5vdmljYS5u/ZXQvMjAxNS9hc3Nl/dHMvaW1hZ2VzL2Nh/dGVnb3J5cGxhdGUv/cGFpbnRpbmdzL2lt/cHJlc3Npb25pc3Rf/MjAyMU1BUjMxLmpw/Zw" alt="category"/></a>
            </div>
            <div className='card-details pt-4 pb-3 text-center'>
                <p className='mb-3'>{artisan.name}</p>
                <div className="card-button">
                    <button className="border">Visit Shop</button>
                </div>
            </div>
        </div>
    )
}