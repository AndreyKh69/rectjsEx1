import "./ProductItem.css";

function ProductItem(props) {
  const data = props.data || {};
  // console.log(data);

  return (
    <div className="productItems">
      <div className="itemInfo">
        <h4>{data.title}</h4>
        <h4>$ {data.price}</h4>
      </div>
      <div className="itemImg">
        <img src={data.images[0]} alt={data.name} height="150" />
      </div>
    </div>
  );
}

export default ProductItem;
