
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { produc } from '../constants';


const ProductPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [product, setProduct] = useState(null); 

    useEffect(() => {
        if (id) {
            const foundProduct = produc.find((p) => p.id === parseInt(id, 10));
            if (foundProduct) {
                setProduct(foundProduct); 
            } else {
                console.error(`Product with ID ${id} not found.`);
                setProduct(null); 
            }
        }
    }, [id]);

    if (!product) {
        return <h1>Loading...</h1>;
    }

    return (
        <div className='ml-20 p-5 w-full md:w-[70%] lg:w-[60%]'>
            <button
                onClick={() => navigate(-1)}
                className='mb-5 px-4 py-2 bg-blue-700 text-white rounded'
            >
                Back
            </button>
            <div className='flex flex-col md:flex-row'>
                <img 
                    src={product.image} 
                    alt={product.name} 
                    className='w-full md:w-[50%] h-auto mb-5 md:mb-0'
                />
                <div className='md:ml-10'>
                    <h1 className='text-2xl text-blue-500 mb-4 font-bold'>{product.name}</h1>
                    <p className='mb-4 text-white'>{product.description}</p>
                    <div className='flex flex-col md:flex-row'>
                        <p className='mb-2 md:mb-0'>Category: {product.category}</p>
                        <p className='md:ml-10'>Priority: {product.priority}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductPage;
