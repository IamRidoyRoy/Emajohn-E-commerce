import React from 'react';
import './Product.css'

const Product = (props) => {
    const { name, img, price, stock, ratings, seller } = props.product
    return (
        <div className='product'>
            <div >
                <div className="product-info">
                    <img src={img} alt="" />
                    <p className='product-name'>{name} </p>
                    <p>Price: ${price} </p>
                    <p>Seller: {seller} </p>
                    <p>Rating - {ratings}.0</p>
                </div>
                <button onClick={() => props.handleAddToCart(props.product)} className='btn-cart'>
                    <p>Add to cart</p>
                </button>
            </div>
        </div>
    );
};

export default Product;