import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// store funcs
import { stockDec, stockInc } from '../state/features/store/storeSlice';
// bag funcs
import {
  addToBag,
  incItemAmount,
  decItemAmount,
  removeFromBag,
} from '../state/features/bag/bagSlice';
// Assets
import { Add, Bag, CoinStack, Remove } from '../assets/icons';

const StoreDisplay = () => {
  const dispatch = useDispatch();
  // store state
  const { selectedItem, storeItems } = useSelector((state) => state.store);

  //   bag state
  const { bagItems } = useSelector((state) => state.bag);

  useEffect(() => {
    console.log(bagItems);
  }, [bagItems]);

  // VALIDATES  if store item has enough stock BEFORE user interaction
  const isInStock = (itemId) => {
    const storeItemStock =
      storeItems.find((item) => item.id === itemId).stock || -1;

    return storeItemStock > 0 ? true : false;
  };

  // PURCHASE
  const handleAddToBag = (id) => {
    if (isInStock(id)) {
      // ADD ITEM LOGIC

      // check if item is already in bag
      const itemInBag = bagItems.find((item) => item.id === id);

      if (itemInBag) {
        // ADJUST ITEM
        // decrease stock in-store
        dispatch(stockDec(id));
        // increase current amount
        dispatch(incItemAmount(id));
      } else {
        // ADD NEW ITEM TO STORE

        // decrease stock in-store
        dispatch(stockDec(id));
        // adding to bag
        dispatch(addToBag(selectedItem));

        dispatch(incItemAmount(id));
      }
    } else {
      // pop up modal logic
      console.log('no more in stock!');
    }
  };

  // SELL BACK
  const handleRemoveFromBag = (id) => {
    const itemInBag = bagItems.find((item) => item.id === id);

    // check if the item is in bag
    if (itemInBag) {
      // YES?  check if item amount is above 0
      if (itemInBag.amount > 0) {
        // dec amount
        dispatch(decItemAmount(id));
        // increase stock
        dispatch(stockInc(id));

        const updatedItem = bagItems.find((item) => item.id === id);
        if (updatedItem.amount === 0) {
          // remove item from bag
          console.log('need to remove');
          dispatch(removeFromBag(id));
        }
      } else {
        // remove item from bag
        dispatch(removeFromBag(id));
      }
      // NO? modal logic for none in bag
    } else {
      console.log(`looks like ${selectedItem.title} isn't in your bag!`);
    }
  };

  if (!selectedItem) {
    return <article className="storeDisplay"></article>;
  }

  const { title, description, price, amount, img, id } = selectedItem;
  return (
    <article className="storeDisplay">
      {/* IMG THUMBNAIL */}
      <div className="displayImgContainer"></div>
      {/* STATS */}
      <div className="statsContainer">
        <p>
          <CoinStack />
          {price} Price
        </p>
        <p>
          <Bag />
          {amount} In Bag
        </p>
        {/* BTN INTERACTION */}
        <div className="btnContainer">
          <button className="btn" onClick={() => handleAddToBag(id)}>
            <Add />
          </button>
          <button className="btn" onClick={() => handleRemoveFromBag(id)}>
            <Remove />
          </button>
        </div>
        {/* ITEM INFO */}
      </div>
      <div className="infoContainer">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </article>
  );
};
export default StoreDisplay;
