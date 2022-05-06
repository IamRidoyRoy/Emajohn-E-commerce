import React from 'react';
import useCart from '../Hooks/useCart';
import UseProducts from '../Hooks/UseProducts';
import Cart from '../Cart/Cart'
import ReviewItem from '../ReviewItem/ReviewItem';
import { Link, useNavigate } from 'react-router-dom';
import './Orders.css'

const Orders = () => {
    const [products, setProducts] = UseProducts()
    const [cart, setCart] = useCart(products)
    const navigate = useNavigate();
    const handleRemoveProduct = (product) => {
        const rest = cart.filter(pd => pd._id !== product._id)
        setCart(rest)
    }
    return (
        <div>
            <h1>Ordered Product : {products.length}</h1>
            <h2>We have carted product: {cart.length}</h2>

            <div className='shop-container'>
                <div className='ordered-item-Container'>
                    {
                        cart.map(product => <ReviewItem
                            key={product._id}
                            product={product}
                            handleRemoveProduct={handleRemoveProduct}
                        ></ReviewItem>)
                    }
                </div>
                <div className='cart-container'>
                    <Cart cart={cart}>
                        {/* <Link to='/inventory'>
                            <button>Proceed Product</button>
                        </Link> */}
                        <button onClick={() => navigate('/shipping')}>Proceed Product</button>
                    </Cart>
                </div>
            </div>
        </div>

    );
};

export default Orders;