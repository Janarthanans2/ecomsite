import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart } from '../redux/cardSlice';

export default function Cart() {
  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();

  return (
    <div style={{ padding: 20 }}>
      <h2>Cart Items</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cart.map(item => (
          <div key={item.id} style={{ border: '1px solid #ccc', margin: 10, padding: 10 }}>
            <img src={item.image} alt={item.name} width="100" />
            <h4>{item.name}</h4>
            <p>Price: ${item.price}</p>
            <button onClick={() => dispatch({ type: 'cart/removeFromCart', payload: item.id })}>
            Remove</button>
          </div>
        ))
      )}
    </div>
  );
}
