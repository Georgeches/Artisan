import React, { useState } from 'react';
import '../css/customerInfo.css';
import { useNavigate } from 'react-router-dom';

export default function Login({api, artisans, setUser}) {
    const nav = useNavigate();
    let path = api+'/auth/artisan/login'

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState([]);

    function loginArtisan(e){
        e.preventDefault();

        let artisan = {
            email: email,
            password: password
        }

        fetch(path, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(artisan)
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.message === undefined){
                for(let i=0; i<=artisans.length; i++){
                    if(artisans[i]?._id === data?.userId){
                        localStorage.setItem('user', JSON.stringify(artisans[i]))
                        localStorage.setItem('token', data.token)
                        setUser(artisans[i])
                        nav('/')
                        break
                    }
                }
            }
            else{
                let resError = data.message.includes('password')?
                    {
                        password: data?.message
                    }
                    :
                    {
                        email: data?.message
                    }
                setError(resError)
            }
        })
    }

    return (
        <div className="container-fluid checkout-page">
            <div className="contact-info p-5 bg-light">
                <form onSubmit={e => loginArtisan(e)} className=''>
                    <div className="row">
                        <div className="col-12 mb-2">
                            <label htmlFor="email" className="form-label">
                                Email
                            </label>
                            <input
                                autoComplete="off"
                                type="text"
                                id="email"
                                placeholder="Enter email address"
                                className="form-control mb-2"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                spellCheck="false"
                                required
                            />
                            {error?.email&&(<p className='text-danger mt-0'>{error?.email}</p>)}
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
                                className="form-control mb-2"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                            {error?.password&&(<p className='text-danger mt-0'>{error?.password}</p>)}
                        </div>
                    </div>
                    <button className="btn btn-dark mt-4 next-btn">Log in</button>
                    <p className='mt-5'>Don't have an account? <a href='/register' className='ms-1 text-info'>Register</a></p>
                </form>
            </div>
        </div>
    );
}