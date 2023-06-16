const BagItem = ({ title, price, amount }) => {
  return (
    <article>
      <h4>{title}</h4>
      <p>
        {price}/x{amount}
      </p>
      <button>remove</button>
    </article>
  );
};
export default BagItem;
