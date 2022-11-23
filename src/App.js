import ProductGrid from "./components/ProductGrid";
import "./App.css";
import FetchedDummyData from "./components/FetchedDummyData";

function App() {
  // ** this product fetch from -> https://dummyjson.com/products
  
  const products = JSON.parse(FetchedDummyData).products;

  // ** get only the products

  return (
    <div className="indexPage">
      <h1>Welcome to reactjs shop !</h1>

      <div>
        <ProductGrid data={products} />
      </div>

      <h4>Made with Love By Andrey & Tal</h4>
    </div>
  );
}

export default App;
