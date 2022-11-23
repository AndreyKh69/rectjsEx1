import "./ProductGrid.css";
import ProductItem from "./ProductItem";

function goToDescriptionPage() {

}

function ProductGrid(props) {
  const data = props.data || {};

  return (
    <div className="ProductGrid">
      {data.map((item) => {
        return <ProductItem data={item} onClick={() => goToDescriptionPage}/>;
      })}
    </div>
  );
}

export default ProductGrid;
