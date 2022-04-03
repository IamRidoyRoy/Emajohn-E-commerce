import React from 'react';
import useCart from '../Hooks/useCart';
import UseProducts from '../Hooks/UseProducts';
import Cart from '../Cart/Cart'
import ReviewItem from '../ReviewItem/ReviewItem';

const Orders = () => {
    const [products, setProducts] = UseProducts()
    const [cart, setCart] = useCart(products)

    const handleRemoveProduct = (product) => {
        const rest = cart.filter(pd => pd.id !== product.id)
        setCart(rest)
    }
    return (
        <div>
            <h1>Ordered Product : {products.length}</h1>
            <h2>We have carted product: {cart.length}</h2>

            <div className='shop-container'>
                <div className=''>
                    {
                        cart.map(product => <ReviewItem
                            key={product.id}
                            product={product}
                            handleRemoveProduct={handleRemoveProduct}
                        ></ReviewItem>)
                    }
                </div>
                <div className='cart-container'>
                    <Cart cart={cart}></Cart>
                </div>
            </div>
        </div>

    );
};

export default Orders;