import { useDispatch, useSelector } from 'react-redux';
import { selectItem } from '../state/features/store/storeSlice';
// STORE ITEM: quick look at ALL items - on click updates store state (selected item)

// 5. useDispatch
//5a. import useDispatch
// OPTIONAL: assign it to a variable for ease of use
//5b. import actions via feature slice component (storeSlice.jsx)

// 5c. dispatch acts as handler, action + reducer act as logic, arguments passed in will be action.payload

// 5. DONE - go to storeSlice.jsx and see reducers used

const StoreItem = ({ id, title, stock, img, price }) => {
  const dispatch = useDispatch();
  const { selectedItem } = useSelector((state) => state.store);

  return (
    <tr
      className={
        selectedItem.id === id ? 'storeItem selectedItem' : 'storeItem'
      }
      onClick={() => dispatch(selectItem(id))}
    >
      <td>
        {/* <img src="" alt="" /> */}
        <h4>{title}</h4>
      </td>
      <td>
        <p>{stock}</p>
      </td>
      <td>
        <p>{price}</p>
      </td>
    </tr>
  );
};
export default StoreItem;
