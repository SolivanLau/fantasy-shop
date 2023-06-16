import { configureStore } from '@reduxjs/toolkit';
import storeReducer from '../state/features/store/storeSlice';
import bagReducer from '../state/features/bag/bagSlice';
// 1. CREATE STORE

// 1. init store (contains obj with reducer obj... syntax craze)
// export const store = configureStore({
//   reducer: {},
// });

// 1b. head over to index/main rendering component and wrap your app with following element.
{
  /* <Provider store={store}> </Provider> */
}

//  1 DONE. next step: features/store/storeSlice.jsx
// export const store = configureStore({
//   reducer: {},
// });
//

// 3. import feature reducers using name as property and default export
// 3.  DONE head over to StoreContainer.jsx
export const store = configureStore({
  // reducing ALL SLICES/ FEATURES
  reducer: {
    store: storeReducer,
    bag: bagReducer,
  },
});
