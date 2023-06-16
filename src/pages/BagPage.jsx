import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import BagContainer from '../components/BagContainer';

const BagPage = () => {
  const { bagItems } = useSelector((state) => state.bag);
  return (
    <section className="bagPage">
      <div className="wrapper">
        {/* Header */}
        <header>
          <h2>Bag</h2>
        </header>
        <hr />
        {/* Body */}
        <div className="bagBody">
          {bagItems.length < 1 ? (
            <h3>
              Looks like there's nothing in your bag!
              <span className="bagLink">
                Head back to the <Link to="/">Store</Link> for more
              </span>
            </h3>
          ) : (
            <BagContainer />
          )}
        </div>
        <hr />

        <footer>
          <p className="totalPriceContainer">
            Total: <span className="totalPrice">TOTAL</span>
          </p>
          <button className="buyBtn">Buy</button>
        </footer>
      </div>
    </section>
  );
};
export default BagPage;
