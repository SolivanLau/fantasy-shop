import StoreContainer from '../components/StoreContainer';
import StoreDisplay from '../components/StoreDisplay';

const StorePage = () => {
  return (
    <section className="storePage">
      <div className="wrapper">
        <h2>store</h2>

        <div className="storeFlexContainer">
          {/* STORE ITEMS */}
          <StoreContainer />
          {/* CURRENT ITEMS */}
          <StoreDisplay />
        </div>
      </div>
    </section>
  );
};
export default StorePage;
