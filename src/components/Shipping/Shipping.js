import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const Shipping = () => {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const [user] = useAuthState(auth);
    const handleNameBlur = event => {
        setName(event.target.value);
        console.log(email)
    }


    const handlePhoneBlur = event => {
        setPhone(event.target.value)
    }
    const handleFormSubmit = event => {
        event.preventDefault();
        const shipping = { name, email, address, phone };
        console.log(shipping);

    }
    const handleAddressBlur = (event) => {
        setAddress(event.target.value);
    }
    return (
        <div className='form-container'>

            <div >
                <h1 className='form-header'>Shipping Product</h1>
                <form onSubmit={handleFormSubmit}>
                    <div className="input-group">
                        <label htmlFor='email'>Name</label>
                        <input onBlur={handleNameBlur} type="text" name="" id="" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor='password'>Your email</label>
                        <input value={user?.email} readOnly type="email" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor='password'>Addresss</label>
                        <input onBlur={handleAddressBlur} type="text" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor='password'>Phone</label>
                        <input onBlur={handlePhoneBlur} type="phone" required />
                    </div>
                    <p style={{ color: 'red' }}>{error}</p>
                    <button className='login-btn' type='submit'>Shipping</button>
                </form>


            </div>

        </div >
    );
};

export default Shipping;