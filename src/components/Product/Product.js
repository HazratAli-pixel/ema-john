import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
// import './Product.css';

const Product = ({product, handleAddToCart}) => {
    // const {product, handleAddToCart} = props;
    const { name, img, seller, price, ratings } = product;
    
    return (
        <div className='col-4 pb-2 ps-2 pe-2' >
            <div className="card h-100 position-relative" data-aos="fade-up" data-aos-duration="3000">
                <div className='p-2'>
                    <img src={img} className="card-img-top rounded-3" onError={(e)=>{e.currentTarget.src='https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/856e874762eb48da8e22acda00efaeb4_9366/Tiro_Track_Pants_Black_GN5490_21_model.jpg'}} alt=""></img>
                </div>
                <div className="p-2 mb-5">
                    <p className='m-0'>{name}</p>
                    <p className='m-0'>Price: ${price}</p>
                    <p className='m-0'><small>Seller: {seller}</small></p>
                    <p className='m-0'><small>Ratings: {ratings} stars</small></p>
                </div>
                <div className='position-absolute bottom-0 p-2 col-12'>
                    <button onClick={() => handleAddToCart(product)} className='btn btn-primary form-control'> Add to Card
                        <FontAwesomeIcon className='ps-2' icon={faShoppingCart}></FontAwesomeIcon>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Product;