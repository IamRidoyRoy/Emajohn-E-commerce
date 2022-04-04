import React, { useEffect, useState } from 'react';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import UseProducts from '../Hooks/UseProducts';
import './Shop.css'
import { Link } from 'react-router-dom';
const Shop = () => {
    const [products, setProducts] = UseProducts()
    const [cart, setCart] = useState([]);

    useEffect(() => {
        const storedCart = getStoredCart();
        // console.log(storedCart);
        const savedCart = [];
        for (const id in storedCart) {
            const addedProduct = products.find(product => product.id === id)
            if (addedProduct) {
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                savedCart.push(addedProduct);
            }
        }
        setCart(savedCart);
    }, [products])
    const handleAddToCart = (selectProduct) => {
        let newCart = [];
        const exists = cart.find(product => product.id === selectProduct.id);
        if (!exists) {
            selectProduct.quantity = 1;
            newCart = [...cart, selectProduct];

        }
        else {
            const rest = cart.filter(product => product.id !== selectProduct.id);
            exists.quantity = exists.quantity + 1;
            newCart = [...rest, exists];
        }
        setCart(newCart);
        addToDb(selectProduct.id)
    }
    return (
        <div className='shop-container'>
            <div className="product-container">
                {
                    products.map(product =>
                        <Product

                            product={product}
                            key={product.id}
                            handleAddToCart={handleAddToCart}
                        >

                        </Product>)

                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}>
                    <Link to='/orders'>
                        <button>Review Order</button>
                    </Link>
                </Cart>
            </div>
        </div>
    );
};

export default Shop;