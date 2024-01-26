export default function ProductCard({page}){

    const link = '/products/x';

    const productClass = page==='shop'? 
        "card shop-product-card border-0 w-100 mt-4"
        :
        "card product-card border-0 w-100 mt-4 me-2"

    return(
        <div className={productClass}>
            <div className="card-image">
                <a href={link}><img src="https://imgs.search.brave.com/RVeccZOntqIKVuL8DkBNopO4NhY1YzFFPyB0ocnaDXg/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMzLm5vdmljYS5u/ZXQvMjAxNS9hc3Nl/dHMvaW1hZ2VzL2Nh/dGVnb3J5cGxhdGUv/cGFpbnRpbmdzL2lt/cHJlc3Npb25pc3Rf/MjAyMU1BUjMxLmpw/Zw" alt="category"/></a>
            </div>
            <div className='card-details pt-3 pb-3 w-100'>
                <p className='product-name fw-bold mb-1'>Magnolia Dreams Sculpture</p>
                <p className='product-artisan mb-1 text-dark small'>By Nathan</p>
                <p className='product-price fw-bold'>Ksh 250</p>
            </div>
        </div>
    )
}