import React, { useState, useEffect } from 'react';
import './css/customerInfo.css';
import { useNavigate } from 'react-router-dom';
import data from '../../data';

export default function CustomerInfo() {
    const nav = useNavigate();
    const countryOptions = data['countryOptions'];

    const [firstName, setFirstName] = useState('');
    const [secondName, setSecondName] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [phonePrefix, setCountryPrefix] = useState('');
    const [userPhone, setUserPhone] = useState('');
    const [addressOne, setAddressOne] = useState('');
    const [addressTwo, setAddressTwo] = useState('');
    const [city, setCity] = useState('');
    const [country, setCountry] = useState('');
    const [saveInfo, setSaveInfo] = useState(false);
    const [userDetails, setUserDetails] = useState({});
    const [selectFocus, setFocus] = useState(false)
    let savedDetails = JSON.parse(sessionStorage.getItem('user_details'))

    useEffect(() => {
        const savedUserDetails = JSON.parse(localStorage.getItem('user_details')) || JSON.parse(sessionStorage.getItem('user_details'));
        if (savedUserDetails) {
            setFirstName(savedUserDetails.firstName || '');
            setSecondName(savedUserDetails.secondName || '');
            setUserEmail(savedUserDetails.email || '');
            setCountryPrefix(savedUserDetails.phonePrefix || '');
            setUserPhone(savedUserDetails.userPhone || '');
            setAddressOne(savedUserDetails.addressOne || '');
            setAddressTwo(savedUserDetails.addressTwo || '');
            setCity(savedUserDetails.city || '');
            setCountry(savedUserDetails.country || '');
        }
    }, []);

    function saveUserDetails(e) {
        e.preventDefault();

        const updatedUserDetails = {
            firstName: firstName,
            secondName: secondName,
            email: userEmail,
            phonePrefix: phonePrefix,
            userPhone: parseInt(userPhone),
            addressOne: addressOne,
            addressTwo: addressTwo,
            city: city,
            country: country,
        };

        setUserDetails(updatedUserDetails);
        if (saveInfo) {
            localStorage.setItem('user_details', JSON.stringify(updatedUserDetails));
        } else {
            sessionStorage.setItem('user_details', JSON.stringify(updatedUserDetails));
        }
        console.log(userDetails)
        nav('/checkout');
    }

    return (
        <div className="container-fluid checkout-page">
            <div className="row contact-info">
                <form onSubmit={e => saveUserDetails(e)}>
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
                    <div className="row">
                        <div className="col-4 col-lg-3">
                            <select onChange={e=>setCountryPrefix(e.target.value)} onFocus={e=>setFocus(!selectFocus)} onBlur={e=>setFocus(!selectFocus)} style={{height: "50px"}} className='form-select'>
                                {sessionStorage.getItem('user_details')?
                                    <option value={savedDetails?.phonePrefix}>{savedDetails?.phonePrefix}</option>
                                    :
                                    <option value="">+254</option>
                                }
                                {countryOptions.map(option => (
                                    <option key={`${option.value} ${option.label}`} value={option.value}>
                                        {selectFocus? `${option.label}`: option.value}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className="col-8 col-lg-9">
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
                        </div>
                    </div>
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
                    <div className="form-check">
                        <input
                            className="form-check-input"
                            type="checkbox"
                            id="flexCheckDefaultOne"
                        />
                        <label className="form-check-label" htmlFor="flexCheckDefaultOne">
                            Agree to receive messages to your email about exciting offers...
                        </label>
                    </div>
                    <button className="btn btn-dark mt-4 next-btn">Next</button>
                </form>
            </div>
        </div>
    );
}