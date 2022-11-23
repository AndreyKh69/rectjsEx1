import { useMemo } from "react";
import "./ProductItem.css";
import FetchedDummyData from "./FetchedDummyData";
import { useParams } from "react-router-dom";

function ProductItem() {
  let { productId } = useParams();
  
  const chosenProduct = useMemo(() => JSON.parse(FetchedDummyData).products.find((product) => product.id.toString() === productId), [productId])

  return (
    <div className="productItems">
      <div className="itemInfo">
      <h4>{chosenProduct?.title}</h4>
        <h4>{chosenProduct?.brand}</h4>
        <h4>$ {chosenProduct?.description}</h4>
      </div>
      <div className="itemImg">
        <img src={chosenProduct?.images?.[1]} alt={chosenProduct?.name} height="150" />
      </div>
    </div>
  );
}

export default ProductItem;