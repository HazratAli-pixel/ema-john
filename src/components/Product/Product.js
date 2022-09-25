import React from 'react';
// import './Product.css';

const Product = ({product, handleAddToCart}) => {
    // const {product, handleAddToCart} = props;
    const { name, img, seller, price, ratings } = product;
    
    return (
        <div className='col-4 pb-2 ps-2 pe-2'>
            <div className="card h-100 position-relative">
                <div className='p-2'>
                    <img src={img} className="card-img-top rounded-3" alt=""></img>
                </div>
                <div className="p-2 mb-5">
                    <p className='m-0'>{name}</p>
                    <p className='m-0'>Price: ${price}</p>
                    <p className='m-0'><small>Seller: {seller}</small></p>
                    <p className='m-0'><small>Ratings: {ratings} stars</small></p>
                </div>
                <div className='position-absolute bottom-0 p-2 col-12'>
                    <button onClick={() => handleAddToCart(product)} className='btn btn-primary form-control'>
                        {/* <p className='btn-text'>Add to Cart</p> */} Add to Card
                        {/* <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon> */}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Product;