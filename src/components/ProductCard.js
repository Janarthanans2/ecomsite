import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cardSlice';
import { toast } from 'react-toastify';
import  './ProductCard.css';

export default function ProductCard({ product }) {
//   const dispatch = useDispatch();

//   const handleAdd = () => {
//     dispatch(addToCart(product));
//     toast.success(`${product.name} added to cart!`);
//   };

const dispatch = useDispatch();

const handleAdd = () => {
  dispatch({
    type: 'cart/addToCart',
    payload: product,
  });
  toast.success(`${product.name} added to cart!`);
};

  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} width="100%" />
      <h4>{product.name}</h4>
      <p>${product.price}</p>
      <button onClick={handleAdd}>Add to Cart</button>
    </div>
  );
}




