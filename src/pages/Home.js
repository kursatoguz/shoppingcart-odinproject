import React from "react";
import { useProductsContext } from "../contexts/productscontext";
import Products from "../components/Products";
const Home = () => {
  const { products } = useProductsContext();

  return (
    <div className="products">
      {products.map((product) => (
        <Products key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Home;
