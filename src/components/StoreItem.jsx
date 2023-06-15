const StoreItem = ({ id, title, stock, img, price }) => {
  return (
    <tr className="itemButton">
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
