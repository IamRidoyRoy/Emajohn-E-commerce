import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Product.css'

const Product = (props) => {
    const { name, img, price,  ratings, seller } = props.product
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
                    <p className='btn-text'>Add to cart</p>
                    <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
                </button>
            </div>
        </div>
    );
};

export default Product;