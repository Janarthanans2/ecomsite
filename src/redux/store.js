import { configureStore } from '@reduxjs/toolkit';
import productReducer from './productSlice';
import cartReducer from './cardSlice';

export default configureStore({
  reducer: {
    products: productReducer,
    cart: cartReducer,
  },
});
