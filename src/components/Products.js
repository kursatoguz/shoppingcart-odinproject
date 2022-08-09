import React from "react";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useProductsContext } from "../contexts/productscontext";
const Products = ({ product }) => {
  const { products_loading } = useProductsContext();
  if (products_loading) return <div className="loading">"Loading..."</div>;
  return (
    <div className="product-container">
      <div className="product-title">{product.title}</div>
      <img src={product.image} alt={product.title} className="product-image" />
      <div className="prices">
        <div className="line"></div>
        <div className="product-price">{product.price} $</div>
        <div className="line"></div>
      </div>
      <div class="overlay">
        <div>
          <Link to={`/products/${product.id}`} className="link">
            <FaSearch class="text" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Products;
