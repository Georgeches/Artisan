import React from 'react';
import { useState } from 'react';
import ProductCard from '../customer/cards/ProductCard';
import Values from '../partials/Values';

import './css/productDetail.css'
import Searchbar from '../partials/Searchbar';
import { useParams } from 'react-router-dom';

export default function ProductDetail({setCart, cartItems}){

    const [isExpanded, setIsExpanded] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [product, setProduct] = useState({
        _id: '1',
        price: 2500,
        name: 'Magnolia portrait'
    });
    const [productImages, setProductImages] = useState([
        "https://ih1.redbubble.net/image.5404692566.9768/st,small,507x507-pad,600x600,f8f8f8.u1.jpg",
        'https://ih1.redbubble.net/avatar.5104187.140x140.jpg',
        process.env.PUBLIC_URL+'/images/magnolia.webp'
    ]);
    const [displayImage, setDisplayImage] = useState(productImages[0]);
    const [inCart, setInCart] = useState(false);
    const {id} = useParams();

    const starRating = [1, 2, 3, 4];
    const text = 'Lorem ipsum Minim deserunt culpa voluptate ipsum enim ex aliqua labore aliquip dolore laborum amet velit. Esse et non quis enim. Aute aliqua mollit fugiat laboris dolore laboris est eiusmod dolor veniam voluptate laborum proident. Sunt deserunt dolore pariatur aute aute sunt et nulla irure laborum dolore.';

    function goBack(){
        window.history.back()
        console.log(window.history)
    };

    function handleImageLoad(){
        setIsLoading(false);
    };

    function toggleText(){
        setIsExpanded((prevState) => !prevState);
    };

    function addToCart(e){
        e.preventDefault();

        const cart = JSON.parse(sessionStorage.getItem('cart'))
        sessionStorage.setItem("cart", JSON.stringify([...cart, product]))
        setCart([...cartItems, product])
        setInCart(true)
    }

    function removeFromCart(e){
        e.preventDefault();

        const cart = JSON.parse(sessionStorage.getItem('cart'))
        console.log(cart)
        const remaining = cart.filter(item=>item._id!==product._id)
        sessionStorage.setItem("cart", JSON.stringify(remaining))
        setCart(remaining)
        setInCart(false)
    }

    return(
        <div className="product-detail mt-5 container-fluid px-md-5">
            <a href={window.history.back} onClick={goBack} className="btn btn-link text-decoration-none text-dark"><i className="bi bi-arrow-left"></i> Back</a>
            <div className="row gap-lg-1 product-detail-row justify-content-around align-items-start pt-5">
                <div className="product-images d-none d-lg-flex flex-column gap-2 col-md-1 border-0">
                    {productImages.map(img=>
                        displayImage===img?
                        <div className='product-image rounded' style={{border: '2px solid grey'}}>
                            <img
                                className='w-100'
                                src={img}
                                onClick={e=>setDisplayImage(img)}
                                style={{cursor: 'pointer'}}
                                alt='img'
                            />
                        </div>
                        :
                        <div className='product-image rounded'>
                            <img
                                className='w-100'
                                src={img}
                                onClick={e=>setDisplayImage(img)}
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
                        {productImages.map(img=>
                            displayImage===img?
                            <div className='mobile-product-image rounded' style={{border: '2px solid grey'}}>
                                <img
                                    className='w-100'
                                    src={img}
                                    onClick={e=>setDisplayImage(img)}
                                    style={{cursor: 'pointer'}}
                                    alt='img'
                                />
                            </div>
                            :
                            <div className='mobile-product-image rounded'>
                                <img
                                    className='w-100'
                                    src={img}
                                    onClick={e=>setDisplayImage(img)}
                                    style={{cursor: 'pointer'}}
                                    alt='img'
                                />
                            </div> 
                        )}
                    </div>
                </div>

                <div className="col-lg-5">
                    <p className='lead fw-normal mt-3 mt-md-0'>Bouclé tweed blazer</p>
                    <div className='product-artisan mt-2 d-flex align-items-center'>
                        <div className='artisan-image me-2'>
                            <img src='https://ih1.redbubble.net/avatar.5104187.140x140.jpg' alt='artisan'/>
                        </div>
                        <p className='fw-light small'>Designed and sold by <strong>George</strong></p>
                    </div>
                    <p className='fw-bold h5 mt-3 price'>Ksh 5000</p>
                    
                    {!inCart?
                        <button onClick={e=>addToCart(e)} className='btn text-center mt-3 add-cart rounded d-flex justify-content-center align-items-center'><i className="bi bi-cart-plus me-2" style={{fontSize: "20px"}}></i> Add to cart</button>
                        :
                        <button onClick={e=>removeFromCart(e)} className='btn text-center mt-3 add-cart rounded d-flex justify-content-center align-items-center'><i className="bi bi-trash me-2" style={{fontSize: "20px"}}></i> Remove from cart</button>
                    }

                    <div className='about-product'>
                        <div className='mt-5 d-flex justify-content-between flex-wrap'>
                            <p className='h5'>About product</p>
                            <div className='stars d-none d-lg-flex'>
                                {starRating.map(star=><i key={star} style={{color: 'rgb(255,189,88)', fontSize:"18px"}} className="me-1 bi bi-star-fill"></i>)}
                                <p className='ms-2 fw-bold' style={{marginTop: "1px"}}>4.6</p>
                            </div>
                        </div>

                        <div className='stars d-flex my-2 d-lg-none'>
                            {starRating.map(star=><i key={star} style={{color: 'rgb(255,189,88)', fontSize:"18px"}} className="me-1 bi bi-star-fill"></i>)}
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
                    <ProductCard page={'product-detail'}/>
                    <ProductCard page={'product-detail'}/>
                    <ProductCard page={'product-detail'}/>
                    <ProductCard page={'product-detail'}/>
                    <ProductCard page={'product-detail'}/>
                </div>
            </div>

            <div style={{position: 'relative', top: '70px'}}>
                <Searchbar />
                <Values />
            </div>
            
        </div>
    )
}