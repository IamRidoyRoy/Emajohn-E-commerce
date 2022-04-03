import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './ReviewItem.css'
const ReviewItem = (props) => {
    const { product, handleRemoveProduct } = props
    const { img, name, price, shipping } = product
    return (
        <div className='allProduct'>
            <div className="img-container">
                <img src={img} alt="" />
            </div>
            <div className="details-container">
                <div className="review-item-details">
                    <h4 className='product-name' title={name} >
                        Name: {name.length > 20 ? name.slice(0, 20) + '... ' : name}</h4>
                    <p>Price: ${price}</p>
                    <p>Shipping charge: {shipping}</p>
                </div>
                <div className="delete-container">
                    <button onClick={() => handleRemoveProduct(product)}>
                        <FontAwesomeIcon className='delete-icon' icon={faTrashAlt}></FontAwesomeIcon>
                    </button>
                </div>
            </div>

        </div >
    );
};

export default ReviewItem;