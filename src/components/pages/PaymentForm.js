import React from 'react'
import { useState } from 'react'
import './css/paymentPage.css'

export default function PaymentForm({total, subtotal, tax, shipping}){

    let userDetails = JSON.parse(sessionStorage.getItem("user_details"))
    const [userMpesa, setMpesa] = useState(0)
    const [cardNumber, setCardNumber] = useState("")
    const [cardExpiration, setCardExpiration] = useState("")
    const [cardCvv, setCvv] = useState("")
    const [showForm, setShowForm] = useState("mpesa")

    function handleCardNumberChange(e){
        const inputNumber = e.target.value.replace(/\s+/g, ''); // Remove existing spaces

        if (/^[0-9 ]*$/.test(inputNumber)) {
            if (inputNumber.length <= 16) {
                let formattedNumber = '';
                for (let i = 0; i < inputNumber.length; i += 4) {
                    formattedNumber += inputNumber.substr(i, 4) + ' ';
                }
                setCardNumber(formattedNumber.trim());
            }
        }
    };

    function handleExpirationChange(e){
        const inputExpiration = e.target.value;

        if (inputExpiration.length <= 5) {
            setCardExpiration(inputExpiration);
        }
    };

    function handleChangeCvv(e){
        const inputCvv = e.target.value;

        if (inputCvv.length <= 3) {
            setCvv(inputCvv);
        }
        console.log(cardCvv)
    };

    return(
        <div className="container payment-page">
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
                            <p className=" mb-3" style={{textTransform: ""}}>{userDetails.email}</p>
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

            <div className="row justify-content-center mt-5">
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

            <div className="payment-section row justify-content-center">
                <div className="payment-options col-12 col-lg-6 d-flex align-items-center justify-content-around">
                    <button className="btn btn-success me-2 me-md-0" onClick={e=>setShowForm("mpesa")}>M-pesa</button>
                    <button className="btn btn-primary me-2 me-md-0"><i className="bi bi-paypal"></i> Paypal</button>
                    <button className="btn btn-primary d-flex justify-content-center align-items-center" onClick={e=>setShowForm("card")}><i className="bi bi-credit-card"></i> Card</button>
                </div>
            </div>

            {showForm==="mpesa"?
            <div className='mpesa-form row justify-content-center mt-5'>
                <div className='col-12 col-lg-6'>
                    <form>
                        <label htmlFor="first-name" className="fw-bold form-label">
                                Mobile number
                        </label>
                        <div className="row">
                        <div className="col-3 col-lg-2 me-0">
                            <input
                                type="text"
                                className="form-control"
                                value={userDetails.phonePrefix}
                                readOnly
                            />
                        </div>
                        <div className="col-9 col-lg-10">
                            <input
                                autoComplete="off"
                                type="number"
                                id="phone"
                                maxLength="9"
                                placeholder="712345678"
                                className="form-control"
                                onChange={(e) => setMpesa(e.target.value)} required
                            />
                        </div>
                    </div>
                    <button className="btn purchase mb-4">Continue to purchase</button>
                    </form>
                </div>
            </div>
            :
            <div className='card-form row justify-content-center mt-5'>
                <div className='col-12 col-lg-6'>
                    <form>
                        <label htmlFor="card-number" className="fw-bold form-label">
                                Card number
                        </label>
                        <input id='card-number' maxLength='19' value={cardNumber} onChange={handleCardNumberChange} type='text' placeholder='0000 0000 0000 0000' className='form-control mb-4' required/>
                        <div className="row mt-4">
                            <div className="col">
                                <label htmlFor="expiration" className="fw-bold form-label">
                                    Expiration
                                </label>
                                <input
                                    type="text"
                                    id='expiration'
                                    maxLength="5"
                                    placeholder="01/23"
                                    className="form-control"
                                    value={cardExpiration}
                                    onChange={handleExpirationChange}
                                    required
                                />
                            </div>
                            <div className="col">
                                <label htmlFor="cvv" className="fw-bold form-label">
                                    CVV
                                </label>
                                <input
                                    autoComplete="off"
                                    type="number"
                                    id="cvv"
                                    maxLength="3"
                                    placeholder="000"
                                    className="form-control"
                                    value={cardCvv}
                                    onChange={handleChangeCvv} required
                                />
                            </div>
                        </div>
                        <button className="btn purchase mt-4 mb-4">Continue to purchase</button>
                    </form>
                </div>
            </div>
        }
        </div>
    )
}