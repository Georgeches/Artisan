import React, { useState } from 'react';
import '../css/customerInfo.css';
import { useNavigate, useParams } from 'react-router-dom';

export default function Login({api, artisans, setUser, setAim, customers}) {
    const {role} = useParams()
    const nav = useNavigate();
    let path = role==='artisan'?api+'/auth/artisan/login':api+'/auth/customer/login'

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState([]);

    function login(e){
        e.preventDefault();

        let credentials = {
            email: email,
            password: password
        }

        fetch(path, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(credentials)
        })
        .then(res=>res.json())
        .then(data=>{
            if(data?.message === undefined){
                if(role==="artisan"){
                    for(let i=0; i<=artisans.length; i++){
                        if(artisans[i]?._id === data?.userId){
                            localStorage.setItem('user', JSON.stringify({...artisans[i], ...{role: "artisan"}}))
                            localStorage.setItem('token', data?.token)
                            setUser(artisans[i])
                            localStorage.setItem('aim', 'sell')
                            setAim("sell");
                            nav('/admin')
                            break
                        }
                    }
                }
                else{
                    for(let i=0; i<=customers.length; i++){
                        if(customers[i]?._id === data?.userId){
                            sessionStorage.setItem('user_details', JSON.stringify({...customers[i], ...{role:"customer"}}));
                            localStorage.setItem('user_token', data?.token)
                            setUser(customers[i])
                            localStorage.setItem('aim', 'buy')
                            setAim("buy");
                            nav('/')
                            break
                        }
                    }
                }
            }
            else{
                console.log(data)
                let resError = data?.message.includes('Password')?
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
                <form onSubmit={e => login(e)} className=''>
                    <div className="row">
                        <div className="col-12 mb-2">
                            <label htmlFor="email" className="form-label">
                                Email
                            </label>
                            <input
                                autoComplete="off"
                                type="email"
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
                                type="password"
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
                    <button type='submit' className="btn btn-dark mt-4 next-btn">Log in</button>
                    <p className='mt-5'>Don't have an account? <a href='/register' className='ms-1 text-info'>Register</a></p>
                </form>
            </div>
        </div>
    );
}