import "./ProductItem.css";

function ProductItem(props) {
  const data = props.data || {};
  // console.log(data);

  return (
    <a className="productItems" href={`/product/${data.id}`}>
      <div className="itemInfo">
        <h4>{data.title}</h4>
        <h4>$ {data.price}</h4>
      </div>
      <div className="itemImg">
        <img src={data.images[0]} alt={data.name} height="150" />
      </div>
    </a>
  );
}

export default ProductItem;
