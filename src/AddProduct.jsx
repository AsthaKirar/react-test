import React, { useState } from 'react';

function AddProduct({ addProduct }) {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const newProduct = { id: Date.now(), name, price };
        addProduct(newProduct);
        setName('');
        setPrice('');
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Product Name"
                required
                className="border border-gray-300 p-2 rounded w-[30%] mx-auto"
            />
            <input
                type="number"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                placeholder="Product Price"
                required
                className="border border-gray-300 p-2 rounded w-[30%] mx-auto"
            />
            <button type="submit" className="bg-blue-500 text-white p-2 rounded w-[10%] mx-auto">
                Add Product
            </button>
        </form>
    );
}

export default AddProduct;
