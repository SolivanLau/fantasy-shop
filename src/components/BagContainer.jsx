import { useSelector } from 'react-redux';
import BagItem from './BagItem';

const BagContainer = () => {
  const { bagItems } = useSelector((state) => state.bag);

  return (
    <ul>
      {bagItems.map((item) => {
        return (
          <li key={item.id}>
            <BagItem {...item} />
          </li>
        );
      })}
    </ul>
  );
};
export default BagContainer;
