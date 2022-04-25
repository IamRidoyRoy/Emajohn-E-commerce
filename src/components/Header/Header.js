import React from 'react';
import logo from '../../images/Logo.svg'
import '../Header/Header.css'
import { Link } from "react-router-dom";
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';

const Header = () => {
    const [user] = useAuthState(auth);
    const handleSignOut = () => {
        signOut(auth);
    }
    return (
        <div>
            <nav className='menu'>
                <img src={logo} alt="" />

                <div>
                    <Link to="/shop">Shop</Link>
                    <Link to="/orders">Orders</Link>
                    <Link to="/inventory">Inventory</Link>
                    <Link to="/about">About</Link>
                    {
                        user ?
                            <button onClick={handleSignOut}>Signout</button>
                            :
                            <Link to='/login'>Login</Link>
                    }
                </div>
            </nav>
        </div>
    );
};

export default Header;