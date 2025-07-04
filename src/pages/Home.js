import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../redux/productSlice';
import ProductCard from '../components/ProductCard';

export default function Home() {
  const dispatch = useDispatch();
  const { items } = useSelector(state => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div style={{ display: 'flex', gap: 20, padding: 20 }}>
      {items.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
