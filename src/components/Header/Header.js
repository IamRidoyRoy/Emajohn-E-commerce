import React from 'react';
import logo from '../../images/Logo.svg'
import '../Header/Header.css'
import { Routes, Route, Link } from "react-router-dom";

const Header = () => {
    return (
        <div>
            <nav className='menu'>
                <img src={logo} alt="" />

                <div>
                    <Link to="/shop">Shop</Link>
                    <Link to="/orders">Orders</Link>
                    <Link to="/inventory">Inventory</Link>
                    <Link to="/about">About</Link>
                </div>
            </nav>
        </div>
    );
};

export default Header;