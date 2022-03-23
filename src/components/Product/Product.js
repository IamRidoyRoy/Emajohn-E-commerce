import React from 'react';
import './Product.css'

const Product = (props) => {
    const { name, img, price, stock, ratings, ratingsCount } = props.product
    return (
        <div>
            <div className="product">
                <img src={img} alt="" />
                <p className='product-name'>{name} </p>
                <p>Price: {price} </p>
                <p>Rating - {ratings}.0</p>
            </div>
        </div>
    );
};

export default Product;