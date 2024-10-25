

import React, { useState, useEffect } from 'react';
import AddProduct from './AddProduct';
import ProductList from './ProductList';

function App() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const storedProducts = JSON.parse(localStorage.getItem('products')) || [];
        setProducts(storedProducts);
    }, []);


    const addProduct = (product) => {
        const updatedProducts = [...products, product];
        setProducts(updatedProducts);
        localStorage.setItem('products', JSON.stringify(updatedProducts));
    };

    const updateProduct = (updatedProduct) => {
        const updatedProducts = products.map(product =>
            product.id === updatedProduct.id ? updatedProduct : product
        );
        setProducts(updatedProducts);
        localStorage.setItem('products', JSON.stringify(updatedProducts));
    };

    const deleteProduct = (id) => {
        const updatedProducts = products.filter(product => product.id !== id);
        setProducts(updatedProducts);
        localStorage.setItem('products', JSON.stringify(updatedProducts));
    };
 
    return (
        <div>
            <h1 className='m-6 text-yellow-500 font-semibold text-2xl '>Inventory Management System</h1>
            <AddProduct addProduct={addProduct} />
            <ProductList products={products} updateProduct={updateProduct} deleteProduct={deleteProduct} />
        </div>
    );
}

export default App;

