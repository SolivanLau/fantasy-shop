import { createSlice } from '@reduxjs/toolkit';
// BAG FEATURE: user's selected items to be purchased
const initialState = {
  bagItems: [],
  itemAmount: 0,
  totalPrice: 0,
};

const bagSlice = createSlice({
  name: 'bag',
  initialState,
});
