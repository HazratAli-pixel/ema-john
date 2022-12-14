import { faArrowRight, faList } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import React from 'react';
import './Cart.css';
const Cart = ({cart, removeLocalStorage}) => {
    let total = 0;
    let shipping = 0;
    let tax = 0;
    let quantity = 0;
    for (const product of cart) {
        quantity = quantity + product.quantity;
        total = total+ (product.price)*quantity;
        shipping = shipping + product.shipping;
    }
        

    tax = parseFloat((total*.1).toFixed(2))
    let grandtotal = total+shipping+tax;

    return (
        <div className='order-div'>
            <h3>Order Summary</h3>
            <p>Length : {quantity}</p>
            <p>Total Price : ${total}</p>
            <p>shipping : ${shipping}</p>
            <p>Vat : ${tax.toFixed(2)}</p>
            <h2 className='form-control fw-bolder'>Grand Total : {grandtotal.toFixed(2)}</h2>
            <div className='p-1'><button className="btn btn-primary w-100" onClick={removeLocalStorage}>Clear <FontAwesomeIcon className='ps-2' icon={faArrowRight} /> </button></div>
            <div className='p-1'><button className="btn btn-primary w-100" data-bs-toggle="modal" data-bs-target="#staticBackdrop">View List <FontAwesomeIcon className='ps-2' icon={faList} /> </button></div>
        </div>
    );
};

export default Cart;