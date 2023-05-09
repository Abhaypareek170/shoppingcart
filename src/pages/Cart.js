import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { remove } from '../store/cartSlice';
import Navbar from '../Components/Basic/Navbar';
import { Button } from 'react-bootstrap';

const Cart = () => {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.cart);
    const handleRemove = (productId) => {
        dispatch(remove(productId));
    };

    return (
        <div>
            <Navbar/>
            <h3>Cart</h3>
            <div className="cartWrapper">
                {products.map((product) => (
                    <div key={product.id} className="cartCard">
                        <img src={product.image} alt="" />
                        <h5>{product.title}</h5>
                        <h5>{product.price}</h5>
                        <Button
                            className="btn"
                            onClick={() => handleRemove(product.id)}
                        >
                            Remove
                        </Button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Cart;
