import React, { useEffect, useState } from 'react';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    const [Change, setChange] = useState(false)

    useEffect( () =>{
        fetch('products.json')
        .then(res=> res.json())
        .then(data => setProducts(data))
    }, []);

    useEffect(()=>{
       const storedCart = getStoredCart(); 
       let saveCart = [];
       for (const id in storedCart) {
        const addedProduct = products.find(product => product.id ===id)   
        if(addedProduct){
            addedProduct.quantity = storedCart[id];
            saveCart.push(addedProduct)
        }
       }
       setCart(saveCart);
    },[products, Change])
    
    const removeLocalStorage = () => {
        localStorage.removeItem('shopping-cart');
        setChange(!Change);
    }
    const handleAddToCart = (selectedProduct) =>{
        // do not do this: cart.push(product);
        let newCart = [];
        const exists = cart.find( product => product.id ===selectedProduct.id)
        if(!exists){
            selectedProduct.quantity = 1;
            newCart = [...cart, selectedProduct]
        }
        else {
            const rest = cart.filter(product => product.id !== selectedProduct.id)
            exists.quantity = exists.quantity + 1;
            newCart =[...rest, exists];
        }
        // const newCart = [...cart, selectedProduct];
        setCart(newCart);
        addToDb(selectedProduct.id);
    }

    return (
        <div className='shop-container container'>
            <div className='row d-flex p-2'>
                <div className="products-container col-9 d-flex flex-wrap">
                    {
                        products.map(product=><Product 
                            key={product.id}
                            product={product}
                            handleAddToCart={handleAddToCart}
                            ></Product>)
                    }
                </div>
                <div className="col-3 order rounded-2">
                    <Cart cart= {cart} removeLocalStorage = {removeLocalStorage}></Cart>
                </div>
            </div>
        </div>
    );
};

export default Shop;