import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css'
const Login = () => {
    return (
        <div className='form-container'>

            <div >
                <h1 className='form-header'>Login</h1>
                <form>
                    <div className="input-group">
                        <label htmlFor='email'>Email</label>
                        <input type="email" name="" id="" />
                    </div>
                    <div className="input-group">
                        <label htmlFor='password'>Password</label>
                        <input type="password" />
                    </div>
                    <button className='login-btn' type='submit'>Login</button>
                </form>
                <p className='new-to-emajohn'>New to Ema-john? <Link to='/signup'>Create an account</Link></p>
            </div>
        </div>
    );
};

export default Login;