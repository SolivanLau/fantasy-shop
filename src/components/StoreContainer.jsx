import { useSelector } from 'react-redux';
import StoreItem from './storeItem';
// STORE CONTAINER: contains all shop items for user to select

// 4. accessing state
// 4a. useSelector accesses state by passing in a callback func
// 4b. state: parameter passed in to access state (general convention)
// 4c. .store: accessing the reducer by NAME (check back to store.jsx and storeSlice for name reference)
// optional: use object deconstruction to access multiple values (like useState hook)
// 4. DONE - go to StoreItem.jsx for dispatching actions

const StoreContainer = () => {
  const { storeItems } = useSelector((state) => state.store);

  return (
    <table className="storeTable">
      {/* heading */}
      <thead>
        <tr>
          <th>Item</th>
          <th>Stock</th>
          <th>Price</th>
        </tr>
      </thead>
      {/* data */}
      <tbody>
        {storeItems.map((item) => {
          return <StoreItem key={item.id} {...item} />;
        })}
      </tbody>
    </table>
  );
};
export default StoreContainer;
