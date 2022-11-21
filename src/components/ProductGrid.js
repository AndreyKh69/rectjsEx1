import "./ProductGrid.css";
import ProductItem from "./ProductItem";

function ProductGrid(props) {
  const data = props.data || {};

  return (
    <div className="ProductGrid">
      {data.map((item) => {
        return <ProductItem data={item} />;
      })}
    </div>
  );
}

export default ProductGrid;
