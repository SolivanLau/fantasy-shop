import { useSelector } from 'react-redux';
import StoreItem from './storeItem';

const StoreContainer = () => {
  const storeItems = useSelector((state) => state.store.storeItems);

  return (
    <table>
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
