import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import './Login.css'
const Login = () => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const navigate = useNavigate();
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);


    let location = useLocation();
    let from = location.state?.from?.pathname || "/shop";

    const handleLogin = event => {
        event.preventDefault();
    }

    const handleEmailFiled = event => {
        setEmail(event.target.value);
    }
    const handlePassField = event => {
        setPass(event.target.value);
    }

    const logInAuthentication = event => {
        signInWithEmailAndPassword(email, pass)
    }

    if (user) {
        navigate(from, { replace: true });
    }

    return (
        <div className='form-container'>

            <div >
                <h1 className='form-header'>Login</h1>
                <form onSubmit={handleLogin} >
                    <div className="input-group">
                        <label htmlFor='email'>Email</label>
                        <input onBlur={handleEmailFiled} type="email" name="" id="" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor='password'>Password</label>
                        <input onBlur={handlePassField} type="password" required />
                    </div>
                    <p style={{ color: 'red' }}>{error?.message}</p>
                    {
                        loading && <p>Loading...</p>

                    }
                    <button onClick={logInAuthentication} className='login-btn' type='submit'>Login</button>
                </form>
                <p className='new-to-emajohn'>New to Ema-john? <Link to='/signup'>Create an account</Link></p>
                <div className="hr-container">
                    <div><hr /> </div>
                    <div className='btn-container'>
                        <p>Or</p>
                        <button><span > <FontAwesomeIcon icon="fa-brands fa-google" />Continue with Google</span>
                        </button>
                    </div>
                    <div><hr /></div>

                </div>

            </div >
        </div >
    );
};

export default Login;