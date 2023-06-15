import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// store funcs
import { stockDec, stockInc } from '../state/features/store/storeSlice';
// bag funcs
import { addToBag, incAmount } from '../state/features/bag/bagSlice';
// Assets
import { Add, Bag, CoinStack, Remove } from '../assets/icons';

const StoreDisplay = () => {
  const dispatch = useDispatch();
  // store state
  const { selectedItem } = useSelector((state) => state.store);

  //   bag state
  const { bagItems } = useSelector((state) => state.bag);

  //   useEffect(() => {
  //     console.log(selectedItem);
  //   }, [selectedItem]);

  const handlePurchase = (id) => {
    // check if item is already in bag
    const itemInBag = bagItems.find((item) => item.id === id);

    if (itemInBag) {
      dispatch(incAmount(id));
    } else {
      console.log('not in bag');
      dispatch(stockDec(id));
      dispatch(addToBag(selectedItem));
    }
  };

  const handleSellBack = (id) => {
    dispatch(stockInc(id));
  };

  if (!selectedItem) {
    return <article className="storeDisplay">NO ITEM</article>;
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
          <button className="btn" onClick={() => handlePurchase(id)}>
            <Add />
          </button>
          <button className="btn" onClick={() => handleSellBack(id)}>
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
