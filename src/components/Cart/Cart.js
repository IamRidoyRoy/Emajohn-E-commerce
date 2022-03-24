import React from 'react';
import './Cart.css'
const Cart = ({ cart }) => {


    return (
        <div className='cart'>
            <h4>Order summary</h4>
            <p>Selected item : {cart.length}</p>
            <p>Total Price: $1140</p>
            <p>Total Shipping Charge: $5</p>
            <p>Tax: $114</p>
            <h4>Grand Total: $1559</h4>
        </div>
    );
};

export default Cart;