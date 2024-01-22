import React from 'react';
import Select from 'react-select';
import { useState } from 'react';
import ProductCard from '../cards/ProductCard';

import './css/productDetail.css'

export default function ProductDetail(){

    const [isExpanded, setIsExpanded] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    const starRating = [1, 2, 3, 4];
    const text = 'Lorem ipsum Minim deserunt culpa voluptate ipsum enim ex aliqua labore aliquip dolore laborum amet velit. Esse et non quis enim. Aute aliqua mollit fugiat laboris dolore laboris est eiusmod dolor veniam voluptate laborum proident. Sunt deserunt dolore pariatur aute aute sunt et nulla irure laborum dolore.';
    
    const options = [
        { value: '', label: 'Please select a size' },
        { value: 'Medium', label: 'Medium' },
        { value: 'Large', label: 'Large' },
        { value: 'X Large', label: 'X Large' },
        { value: 'XX Large', label: 'XX Large' },
    ];

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

    return(
        <div className="product-detail container-fluid px-5">
            <a href={window.history.back} onClick={goBack} className="btn btn-link text-decoration-none text-dark"><i className="bi bi-arrow-left"></i> Back</a>
            <div className="row gap-lg-1 product-detail-row justify-content-around align-items-start pt-5">
                <div className="product-images col-md-1 border-0">

                </div>

                <div className="col-md-5 product-detail-img bg-light">
                    <img style={{display: isLoading && ("none")}} className="img-fluid" onLoad={handleImageLoad} src="https://ih1.redbubble.net/image.5404692566.9768/st,small,507x507-pad,600x600,f8f8f8.u1.jpg" alt=""/>
                    {isLoading && (
                        <div className='loading'>
                            <i className="bi bi-arrow-clockwise load"></i>
                        </div>
                    )}
                </div>

                <div className="col-md-5">
                    <p className='lead fw-normal'>Bouclé tweed blazer</p>
                    <div className='product-artisan mt-2 d-flex align-items-center'>
                        <div className='artisan-image me-2'>
                            <img src='https://ih1.redbubble.net/avatar.5104187.140x140.jpg' alt='artisan'/>
                        </div>
                        <p className='fw-light small'>Designed and sold by <strong>George</strong></p>
                    </div>
                    <p className='fw-bold h5 mt-3' style={{color: 'rgb(255,88,110)'}}>Ksh 5000</p>
                    
                    <button className='btn text-center mt-3 add-cart rounded d-flex justify-content-center align-items-center'><i className="bi bi-cart-plus me-2" style={{fontSize: "20px"}}></i> Add to cart</button>

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

            <div className='more'>
                <p className='h5'>More by artist</p>

                <div className="products list-flex">
                    <ProductCard page={'product-detail'}/>
                    <ProductCard page={'product-detail'}/>
                    <ProductCard page={'product-detail'}/>
                    <ProductCard page={'product-detail'}/>
                    <ProductCard page={'product-detail'}/>
                </div>
            </div>
        </div>
    )
}