import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Shipping = () => {
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');
    const navigate = useNavigate();

    const handleNameBlur = event => {
        setEmail(event.target.value);
        console.log(email)
    }

    const handleEmailBlur = event => {
        setEmail(event.target.value)
    }
    const handlePhoneBlur = event => {
        setPhone(event.target.value)
    }
    const handleCreateUser = event => {
        event.preventDefault();

    }
    const handleAddressBlur = (event) => {
        setAddress(event.target.value);
    }
    return (
        <div className='form-container'>

            <div >
                <h1 className='form-header'>Shipping Product</h1>
                <form onSubmit={handleCreateUser}>
                    <div className="input-group">
                        <label htmlFor='email'>Name</label>
                        <input onBlur={handleNameBlur} type="text" name="" id="" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor='password'>Your email</label>
                        <input onBlur={handleEmailBlur} type="email" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor='password'>Addresss</label>
                        <input onBlur={handleAddressBlur} type="text" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor='password'>Phone</label>
                        <input onBlur={handlePhoneBlur} type="number" required />
                    </div>
                    <p style={{ color: 'red' }}>{error}</p>
                    <button className='login-btn' type='submit'>Shipping</button>
                </form>


            </div>

        </div >
    );
};

export default Shipping;