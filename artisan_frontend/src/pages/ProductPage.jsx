/* eslint-disable react/prop-types */
import React from 'react';
import ProductCard from '../components/productPage/ProductCard';
import Values from '../components/Values';
import Searchbar from '../components/Searchbar';
import { useParams } from 'react-router-dom';

export default function ProductPage({setCart, cartItems, artisans, products}){
    const [isExpanded, setIsExpanded] = React.useState(false);
    const [isLoading, setIsLoading] = React.useState(true)
    const [displayImage, setDisplayImage] = React.useState(productImages[0]);
    const [inCart, setInCart] = React.useState(false);
    
    const [productImages] = React.useState([
        "https://ih1.redbubble.net/image.5404692566.9768/st,small,507x507-pad,600x600,f8f8f8.u1.jpg",
        'https://ih1.redbubble.net/avatar.5104187.140x140.jpg',
        import.meta.env.PUBLIC_URL+'/images/magnolia.webp'
    ]);
    
    const {id} = useParams();
    const artisan = artisans.find(artisan=>artisan?._id===product?.artisanId)
    const product = products.find(product=>product?._id===id)
    const starRating = [1, 2, 3, 4];
    const text = product?.description ? product?.description : ''

    React.useEffectuseEffect(()=>{
        setInCart(cartItems.find(item=>item?._id===product?._id) !== undefined)
    }, [product, cartItems])

    console.log(cartItems.find(item=>item?._id===product?._id) !== undefined)
    
    function goBack(){
        window.history.back()
        console.log(window.history)
    }

    function handleImageLoad(){
        setIsLoading(false);
    }

    function toggleText(){
        setIsExpanded((prevState) => !prevState);
    }

    function addToCart(e){
        e.preventDefault();

        const cart = JSON.parse(localStorage.getItem('cart'))
        const cartItem = {
            _id: product?._id,
            name: product?.name,
            price: product?.price,
            quantity: 1,
            total: product?.price
        }
        localStorage.setItem("cart", JSON.stringify([...cart, cartItem]))
        setCart([...cartItems, product])
        setInCart(true)
    }

    function removeFromCart(e){
        e.preventDefault();

        const cart = JSON.parse(localStorage.getItem('cart'))
        console.log(cart)
        const remaining = cart.filter(item=>item._id!==product._id)
        localStorage.setItem("cart", JSON.stringify(remaining))
        setCart(remaining)
        setInCart(false)
    }

    return(
        <div className="product-detail mt-5 container-fluid px-md-5">
            <a href={window.history.back} onClick={goBack} className="btn btn-link text-decoration-none text-dark"><i className="bi bi-arrow-left"></i> Back</a>
            <div className="row gap-lg-1 product-detail-row justify-content-around align-items-start pt-5">
                <div className="product-images d-none d-lg-flex flex-column gap-2 col-md-1 border-0">
                    {
                        productImages.map((img, index) =>
                            displayImage === img
                                ?
                            <div 
                                className='product-image rounded border-gray-500 border-[2px]' 
                                key={index}
                            >
                                <img
                                    className='w-100'
                                    src={img}
                                    onClick={()=>setDisplayImage(img)}
                                    style={{cursor: 'pointer'}}
                                    alt='img'
                                />
                            </div>
                                :
                            <div 
                                className='product-image rounded'
                                key={index}
                            >
                                <img
                                    className='w-100'
                                    src={img}
                                    onClick={()=>setDisplayImage(img)}
                                    style={{cursor: 'pointer'}}
                                    alt='img'
                                />
                            </div> 
                    )}
                </div>

                <div className="col-md-8 col-lg-5 product-detail-img bg-light">
                    <img
                        style={{display: isLoading && ("none")}}
                        className="img-fluid" onLoad={handleImageLoad}
                        src={displayImage}
                        alt="displayImage"
                    />
                    {isLoading && (
                        <div className='loading'>
                            <i className="bi bi-arrow-clockwise load"></i>
                        </div>
                    )}
                </div>

                <div className='w-100 d-flex d-lg-none justify-content-center mb-2'>
                    <div className="product-images mt-3 d-flex d-lg-none gap-2 border-0">
                        {
                            productImages.map((img, index)=>
                                displayImage === img
                                    ?
                                <div 
                                    className='mobile-product-image rounded border-[2px] border-gray-500'
                                    key={index}
                                >
                                    <img
                                        className='w-100'
                                        src={img}
                                        onClick={()=>setDisplayImage(img)}
                                        style={{cursor: 'pointer'}}
                                        alt='img'
                                    />
                                </div>
                                    :
                                <div 
                                    className='mobile-product-image rounded'
                                    key={index}
                                >
                                    <img
                                        className='w-100'
                                        src={img}
                                        onClick={()=>setDisplayImage(img)}
                                        style={{cursor: 'pointer'}}
                                        alt='img'
                                    />
                                </div> 
                        )}
                    </div>
                </div>

                <div className="col-lg-5">
                    <p className='lead fw-normal mt-3 mt-md-0'>{product?.name}</p>
                    
                    <div className='product-artisan mt-2 d-flex align-items-center'>
                        <div className='artisan-image me-2'>
                            <img src='https://ih1.redbubble.net/avatar.5104187.140x140.jpg' alt='artisan'/>
                        </div>
                        
                        <p className='fw-light small'>
                            Designed and sold by <strong>{artisan?.name ? artisan?.name : 'George'}</strong>
                        </p>
                    </div>
                    
                    <p className='fw-bold h5 mt-3 price'>${product?.price}</p>
                    
                    {!inCart?
                        <button onClick={()=>addToCart()} className='btn text-center mt-3 add-cart rounded d-flex justify-content-center align-items-center'><i className="bi bi-cart-plus me-2" style={{fontSize: "20px"}}></i> Add to cart</button>
                        :
                        <button onClick={()=>removeFromCart()} className='btn text-center mt-3 add-cart rounded d-flex justify-content-center align-items-center'><i className="bi bi-trash me-2" style={{fontSize: "20px"}}></i> Remove from cart</button>
                    }

                    <div className='about-product'>
                        <div className='mt-5 d-flex justify-content-between flex-wrap'>
                            <p className='h5'>About product</p>
                            <div className='stars d-none d-lg-flex'>
                                {
                                    starRating.map(star => <i 
                                        key={star} 
                                        className="me-1 bi bi-star-fill font-[18px] text-star-color"
                                    ></i>)
                                }
                                <p className='ms-2 fw-bold' style={{marginTop: "1px"}}>4.6</p>
                            </div>
                        </div>

                        <div className='stars d-flex my-2 d-lg-none'>
                            {
                                starRating.map(star => <i 
                                    key={star} 
                                    className="me-1 bi bi-star-fill font-[18px] text-star-color"
                                ></i>)
                            }
                            <p className='ms-2 fw-bold' style={{marginTop: "1px"}}>4.6</p>
                        </div>
                        
                        <div className='d-flex'>
                            <p className='fw-light' style={{fontSize: "small"}}>
                                {isExpanded ? text : `${text.slice(0, 100)}...`}
                                <p style={{fontSize: "small"}} className='fw-normal text-success read-more-less' onClick={toggleText}>
                                {isExpanded ? 'Read Less' : 'Read More'}
                            </p>
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='more' style={{position: 'relative', top: '70px'}}>
                <p className='h5'>More by artist</p>

                <div className="products list-flex">
                    {
                        products.map((product, index)=> <ProductCard 
                            product={product} 
                            artisans={artisans} 
                            page={'product-detail'}
                            key={index}
                        />
                    )}
                </div>
            </div>

            <div style={{position: 'relative', top: '70px'}}>
                <Searchbar />
                <Values />
            </div>
        </div>
    )
}