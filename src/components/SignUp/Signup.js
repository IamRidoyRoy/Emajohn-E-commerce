import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init'

const Signup = () => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [confirmPass, setConfirmPass] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const [createUserWithEmailAndPassword, user] = useCreateUserWithEmailAndPassword(auth)
    const handleEmailBlur = event => {
        setEmail(event.target.value);
        console.log(email)
    }

    const handlePass = event => {
        setPass(event.target.value)
    }
    const handleConfirmPass = event => {
        setConfirmPass(event.target.value)
    }
    const handleCreateUser = event => {
        event.preventDefault();
        if (pass !== confirmPass) {
            setError("Your password did not match!");
            return;
        }
        if (pass.length < 6) {
            setError('Password must be 6 character or Longer')
            return;
        }
        createUserWithEmailAndPassword(email, pass)
    }
    // If new user is created it will go to shop
    if (user) {
        navigate('/shop');
    }
    return (
        <div className='form-container'>

            <div >
                <h1 className='form-header'>SignUp</h1>
                <form onSubmit={handleCreateUser}>
                    <div className="input-group">
                        <label htmlFor='email'>Email</label>
                        <input onBlur={handleEmailBlur} type="email" name="" id="" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor='password'>Password</label>
                        <input onBlur={handlePass} type="password" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor='password'>Confirm-Password</label>
                        <input onBlur={handleConfirmPass} type="password" required />
                    </div>
                    <p style={{ color: 'red' }}>{error}</p>
                    <button className='login-btn' type='submit'>SignUp</button>
                </form>
                <p className='new-to-emajohn'>Already have an account? <Link to='/login'>Login</Link></p>
                <div className="hr-container">
                    <div><hr /> </div>
                    <div className='btn-container'>
                        <p>Or</p>
                        <button><span >Continue with Google</span>
                        </button>
                        {/* <FontAwesomeIcon icon="fa-brands fa-google" /> */}
                    </div>
                    <div><hr /></div>

                </div>

            </div >
        </div >
    );
};

export default Signup;