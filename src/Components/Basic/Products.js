import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { add } from '../../store/cartSlice';
import { fetchProducts } from '../../store/productSlice';
import { STATUSES } from '../../store/productSlice';
import Card from './Card';

const Products = () => {
    const dispatch = useDispatch();
    const { data: products, status } = useSelector((state) => state.product);
    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    const handleAdd = (product) => {
        dispatch(add(product));
    };

    if (status === STATUSES.LOADING) {
        return <h2>Loading....</h2>;
    }

    if (status === STATUSES.ERROR) {
        return <h2>Something went wrong!</h2>;
    }
    return (
        <div className="productsWrapper">
            {products.map((product) => (
               <Card product={product} handleAdd={handleAdd}/>
            ))}
        </div>
    );
};

export default Products;
