import React from 'react';
import Products from '../Components/Basic/Products'
import Navbar from '../Components/Basic/Navbar';

const Home = () => {
    return (
        <div>
            <Navbar/>
            <h2 className="heading">Welcome to store</h2>
            <section>
                <h3>Products</h3>
                <Products />
            </section>
        </div>
    );
};

export default Home;
