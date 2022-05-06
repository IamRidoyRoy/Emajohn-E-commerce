import React, { useEffect, useState } from 'react';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import UseProducts from '../Hooks/UseProducts';
import './Shop.css'
import { Link } from 'react-router-dom';
const Shop = () => {
    // const [products] = UseProducts()
    const [cart, setCart] = useState([]);
    const [productPages, setproductPages] = useState(0);
    const [page, setPage] = useState(0);
    const [size, setSize] = useState(10);

    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/product?page${page}&size${size}`)
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    // For paginations 
    useEffect(() => {
        fetch('http://localhost:5000/productcount')
            .then(res => res.json())
            .then(data => {
                const count = data.count;
                const pages = Math.ceil(count / 10);
                setproductPages(pages);
            })
    }, [])

    useEffect(() => {
        const storedCart = getStoredCart();
        // console.log(storedCart);
        const savedCart = [];
        for (const id in storedCart) {
            const addedProduct = products.find(product => product._id === id)
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
        const exists = cart.find(product => product._id === selectProduct._id);
        if (!exists) {
            selectProduct.quantity = 1;
            newCart = [...cart, selectProduct];

        }
        else {
            const rest = cart.filter(product => product._id !== selectProduct._id);
            exists.quantity = exists.quantity + 1;
            newCart = [...rest, exists];
        }
        setCart(newCart);
        addToDb(selectProduct._id)
    }
    return (
        <div className='shop-container'>
            <div className="product-container">
                {
                    products.map(product =>
                        <Product

                            product={product}
                            key={product._id}
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
            <div className='pagination'>
                {
                    [...Array(productPages).keys()].map(number =>

                        <button className={page === number ? 'selected' : ''}
                            onClick={() => setPage(number)}
                        >{number + 1}</button>)
                }
                <select onChange={event => setSize(event.target.value)}>
                    <option value='5'>5</option>
                    <option value='10' selected>10</option>
                    <option value='15'>15</option>
                    <option value='20'>20</option>
                </select>
            </div>
        </div>
    );
};

export default Shop;