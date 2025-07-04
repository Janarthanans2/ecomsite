import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const cart = useSelector(state => state.cart);

  return (
    <nav style={{ padding: '10px', background: '#eee' }}>
      <Link to="/">Home</Link> | <Link to="/cart">Cart ({cart.length})</Link>
    </nav>
  );
}
