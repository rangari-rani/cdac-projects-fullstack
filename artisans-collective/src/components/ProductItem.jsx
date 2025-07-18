import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import { Link } from 'react-router-dom';

const ProductItem = ({ id, image, name, price }) => {
  const { currency } = useContext(ShopContext);

  return (
    <Link
      className="text-gray-700 cursor-pointer"
      to={`/product/${id}`}
    >
      {/* Image Container */}
      <div className="h-48 w-full flex justify-center items-center overflow-hidden bg-gray-100">
        <img
          className="h-full w-auto transition-transform duration-300 ease-in-out hover:scale-110"
          src={image[0]}
          alt={name}
        />
      </div>

      {/* Product Details */}
      <p className="pt-3 pb-1 text-sm">{name}</p>
      <p className="text-sm font-medium">
        {currency}
        {price}
      </p>
    </Link>
  );
};

export default ProductItem;
