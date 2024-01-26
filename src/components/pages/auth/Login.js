import React, { useState } from 'react';
import '../css/customerInfo.css';
import { useNavigate } from 'react-router-dom';

export default function Login({api}) {
    const nav = useNavigate();
    let path = api+'/login'

    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState([]);

    function loginArtisan(e){
        e.preventDefault();

        let artisan = {
            phone: phone,
            password: password
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
            <div className="contact-info p-5 bg-light">
                <form onSubmit={e => loginArtisan(e)} className=''>
                    <div className="row">
                        <div className="col-12">
                            <label htmlFor="phone" className="form-label">
                                Phone number
                            </label>
                            <input
                                autoComplete="off"
                                type="text"
                                id="phone"
                                placeholder="Enter phone number"
                                className="form-control"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                spellCheck="false"
                                required
                            />
                        </div>
                        <div className="col-12">
                            <label htmlFor="password" className="form-label">
                                Password
                            </label>
                            <input
                                autoComplete="off"
                                type="text"
                                id="password"
                                placeholder="Enter password"
                                className="form-control"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                    </div>
                    <button className="btn btn-dark mt-4 next-btn">Log in</button>
                </form>
            </div>
        </div>
    );
}