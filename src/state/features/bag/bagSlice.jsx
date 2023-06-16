import { createSlice } from '@reduxjs/toolkit';
// BAG FEATURE: user's selected items to be purchased
const initialState = {
  bagItems: [],
  itemAmount: 0,
  totalPrice: 0,
  gold: 1000,
};

const bagSlice = createSlice({
  name: 'bag',
  initialState,
  reducers: {
    addToBag: (state, action) => {
      const itemToBag = action.payload;
      state.bagItems = [...state.bagItems, itemToBag];
    },
    removeFromBag: (state, action) => {
      const itemToRemoveId = action.payload;

      state.bagItems = state.bagItems.filter(
        (item) => item.id !== itemToRemoveId
      );
    },
    incItemAmount: (state, action) => {
      const itemInBag = state.bagItems.find(
        (item) => item.id === action.payload
      );
      if (itemInBag) {
        itemInBag.amount = itemInBag.amount + 1;
      }
    },
    decItemAmount: (state, action) => {
      const itemInBag = state.bagItems.find(
        (item) => item.id === action.payload
      );
      if (itemInBag.amount > 0) {
        itemInBag.amount = itemInBag.amount - 1;
      }
    },
  },
});

// EXPORT ACTIONS
export const { addToBag, removeFromBag, incItemAmount, decItemAmount } =
  bagSlice.actions;
// EXPORT REDUCER TO STORE
export default bagSlice.reducer;
