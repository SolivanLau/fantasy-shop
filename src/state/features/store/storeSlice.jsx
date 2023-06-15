import { createSlice } from '@reduxjs/toolkit';
// dummy api data
import { storeItems } from '../../data';

// STORE FEATURE: contains all items to be purchased

// FUNCTIONS TO ADD:
// stock increase
// stock decrease
// remove item

// 2. CREATE SLICE: APP FEATURE

// 2a. folder structure convention: features/appFeature/appFeatureSlice.jsx
// 2b. init slice w createSlice() add name, initialState
// 2b. opt: create initial state obj for scalability

// 2c. create reducers obj that holds individual reducer functionality.

const initialState = {
  storeItems: storeItems,
  selectedItem: false,
};

const storeSlice = createSlice({
  name: 'store',
  initialState,
  reducers: {
    selectItem: (state, action) => {
      // console.log('state', state);
      // console.log('action', action);

      // find obj via id in storeItems state
      const userSelectedItemId = action.payload || null;

      const userSlectedItem = state.storeItems.find(
        (item) => item.id === userSelectedItemId
      );

      // set to selectedItem
      state.selectedItem = userSlectedItem;
    },
    stockInc: (state, action) => {
      const itemId = action.payload;
      const itemObj = state.storeItems.find((item) => item.id === itemId);

      itemObj.stock = itemObj.stock + 1;
    },
    stockDec: (state, action) => {
      const itemId = action.payload;
      const itemObj = state.storeItems.find((item) => item.id === itemId);

      itemObj.stock = itemObj.stock - 1;
    },
  },
});
// contains other properties
// console.log(storeSlice);

// 2d. export actions to be dispatched
export const { selectItem, stockInc, stockDec } = storeSlice.actions;
// 2e. export reducer to store to be accessed throughout app
export default storeSlice.reducer;

// 2 done. head back to store.jsx to import reducer to global state
