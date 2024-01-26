import React, { useState } from 'react';
import '../css/customerInfo.css';
import { useNavigate } from 'react-router-dom';

export default function Register({api}) {
    const nav = useNavigate();
    let path = api+'/artisans'

    const [firstName, setFirstName] = useState('');
    const [secondName, setSecondName] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [userPhone, setUserPhone] = useState('');
    const [addressOne, setAddressOne] = useState('');
    const [addressTwo, setAddressTwo] = useState('');
    const [city, setCity] = useState('');
    const [country, setCountry] = useState('');
    const [errors, setErrors] = useState([]);

    function registerArtisan(e){
        e.preventDefault();

        let artisan = {
            name: firstName + ' ' + secondName,
            address: addressOne + ', ' + addressTwo,
            city: city,
            country: country,
            email: userEmail,
            phone: userPhone,
        }

        fetch(path, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(artisan)
        })
        .then(res=>{
            if(!res.ok){
                setErrors(res.json())
            }
            else{
                nav('/')
            }
        })
    }

    return (
        <div className="container-fluid checkout-page">
            <div className="row contact-info">
                <form onSubmit={e => registerArtisan(e)}>
                    <div className="row">
                        <div className="col">
                            <label htmlFor="first-name" className="form-label">
                                First name
                            </label>
                            <input
                                autoComplete="off"
                                type="text"
                                id="first-name"
                                placeholder="First name"
                                className="form-control"
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                                spellCheck="false"
                                required
                            />
                        </div>
                        <div className="col">
                            <label htmlFor="second-name" className="form-label">
                                Second name
                            </label>
                            <input
                                autoComplete="off"
                                type="text"
                                id="second-name"
                                placeholder="Second name"
                                className="form-control"
                                value={secondName}
                                onChange={(e) => setSecondName(e.target.value)}
                                spellCheck="false"
                                required
                            />
                        </div>
                    </div>
                    <label htmlFor="email" className="form-label">
                        Email address
                    </label>
                    <input
                        type="text"
                        id="email"
                        placeholder="example@gmail.com"
                        className="form-control"
                        value={userEmail}
                        onChange={(e) => setUserEmail(e.target.value)}
                        spellCheck="false"
                        required
                    />
                    <label htmlFor="phone" className="form-label">
                        Phone number
                    </label>
                    <input
                        autoComplete="off"
                        type="number"
                        id="phone"
                        placeholder="712345678"
                        className="form-control"
                        value={userPhone}
                        onChange={(e) => setUserPhone(e.target.value)}
                        spellCheck="false"
                        required
                    />
                    <label htmlFor="address-one" className="form-label">
                        Address Line 1
                    </label>
                    <input
                        type="text"
                        autoComplete="off"
                        placeholder="Address 1 e.g street"
                        className="form-control"
                        value={addressOne}
                        onChange={(e) => setAddressOne(e.target.value)}
                        spellCheck="false"
                        required
                    />
                    <label htmlFor="address-two" className="form-label">
                        Address Line 2
                    </label>
                    <input
                        type="text"
                        autoComplete="off"
                        placeholder="Address 2 e.g Apartment"
                        className="form-control"
                        value={addressTwo}
                        onChange={(e) => setAddressTwo(e.target.value)}
                        spellCheck="false"
                        required
                    />
                    <label htmlFor="city" className="form-label">
                        City
                    </label>
                    <input
                        type="text"
                        autoComplete="off"
                        placeholder="Nairobi"
                        className="form-control"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        spellCheck="false"
                        required
                    />
                    <label htmlFor="country" className="form-label">
                        Country
                    </label>
                    <input
                        type="text"
                        autoComplete="off"
                        id="country"
                        placeholder="Kenya"
                        className="form-control"
                        value={country}
                        onChange={(e) => setCountry(e.target.value)}
                        spellCheck="false"
                        required
                    />
                    <button className="btn btn-dark mt-4 next-btn">Register</button>
                </form>
            </div>
        </div>
    );
}