import React, { useEffect, useRef } from 'react'
import { useState } from 'react'
import './css/paymentPage.css'
import { useNavigate } from 'react-router-dom'

export default function PaymentForm({total, subtotal, tax, shipping, cartItems, api}){
    const nav = useNavigate()
    let userDetails = JSON.parse(sessionStorage.getItem("user_details"))
    const name = userDetails.firstName + ' ' + userDetails.secondName
    const phone = userDetails.phonePrefix + userDetails.userPhone
    const address = userDetails.addressOne + ','+ userDetails.addressTwo
    const email = userDetails.email
    const city = userDetails.city
    const country = userDetails.country

    const customer = {
        name: name,
        phone: phone,
        address: address,
        email: email,
        city: city,
        country: country
    }

    console.log(name)

    function newOrder(e){
        e.preventDefault()
        const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const numbers = '0123456789';
        const path = api+'/order'
        
        let order_number = '';
        for (let i = 0; i < 2; i++) {
            order_number += letters.charAt(Math.floor(Math.random() * letters.length));
        }
        for (let i = 0; i < 4; i++) {
            order_number += numbers.charAt(Math.floor(Math.random() * numbers.length));
        }

        const sum = (a, b)=>a+b['total']

        let new_order = {
            order_number: order_number,
            customer: customer,
            items: cartItems,
            status: 'pending',
            payment_status: false,
            shipping_fee: shipping,
            amount: total
        }
        console.log(new_order)
        
        fetch(path, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(new_order)
        })
        .then(res=>{
            if(!res.ok){
                alert('Order not sent. Please try again lalter')
            }
            else{
                nav('/customer')
            }
        })
    }

    return(
        <div className="container payment-page" style={{position: "relative", top: "10px"}}>
            <div className="row justify-content-center mt-5">
                <div className="col-12 col-lg-6">
                    <div className="card contacts">
                        <div className="card-header pb-0 pt-2 d-flex justify-content-between align-items-center bg-white">
                            <p className="lead fw-normal">
                                Contact Information
                            </p>
                            <a href="/customerinfo" className="text-dark">Edit</a>
                        </div>
                        <div className="card-body">
                            <p className=" mb-3" style={{textTransform: "capitalize"}}>{userDetails.email}</p>
                            <p className="">{`${userDetails.phonePrefix}${userDetails.userPhone}`}</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row justify-content-center mt-3">
                <div className="col-12 col-lg-6">
                    <div className="card contacts">
                        <div className="card-header pb-0 pt-2 d-flex justify-content-between align-items-center bg-white">
                            <p className="lead fw-normal">
                                Shipping Information
                            </p>
                            <a href="/customerinfo" className="text-dark">Edit</a>
                        </div>
                        <div className="card-body">
                            <p className=" mb-3" style={{textTransform: "capitalize"}}>{userDetails.addressOne}, {userDetails.addressTwo}, {userDetails.city}</p>
                            <h6 className="">{userDetails.country}</h6>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row justify-content-center mt-5 mb-0">
                <div className="col-12 col-lg-6">
                    <div className="card contacts">
                        <div className="card-header pb-0 pt-2 d-flex justify-content-between align-items-center bg-white">
                            <p className="lead fw-normal">
                                Cost Summary
                            </p>
                        </div>
                        <div className="card-body">
                            <p className=" mb-3" style={{textTransform: ""}}>Subtotal cost: Ksh. {subtotal}</p>
                            <p className=" mb-3" style={{textTransform: ""}}>Shipping cost: Ksh. {shipping}</p>
                            <p className=" mb-3" style={{textTransform: ""}}>Tax: Ksh. {tax}</p>
                            <p className="fw-bold">TOTAL: Ksh. {total}</p>
                        </div>
                    </div>
                    <hr className="mt-5"/>
                </div>
            </div>
            <p className='m-0 text-center fw-light'>Payment via mpesa and card is not ready...</p>
            <div className='d-flex justify-content-center'>
                <button className="btn purchase mb-4" onClick={e=>newOrder(e)}>Send order</button>
            </div>
        </div>
    )
}