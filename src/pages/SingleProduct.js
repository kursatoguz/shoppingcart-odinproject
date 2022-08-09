import React, { useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { useProductsContext } from "../contexts/productscontext";
import { useCartContext } from "../contexts/cartcontext";
import Stars from "../components/Stars";
import AmountButtons from "../components/AmountButtons";
const url = "https://fakestoreapi.com/products";

const SingleProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const {
    single_product_loading: loading,
    single_product_error: error,
    single_product: product,
    fetchSingleProduct,
  } = useProductsContext();
  const {
    addToCart,
    amount,
    isSideBarOpen,
    increase,
    decrease,
  } = useCartContext();

  useEffect(() => {
    fetchSingleProduct(`${url}/${id}`);
  }, [id]);
  useEffect(() => {
    if (error) {
      setTimeout(() => {
        navigate("/");
      }, 3000);
    }
  }, [error]);
  if (loading) {
    return <div className="loading">"Loading..."</div>;
  }

  return (
    <div className="section ">
      <Link to="/" className="btn">
        back to products
      </Link>
      <div className="product-center">
        <img src={product.image} alt={product.title} />
        <section className="content">
          <h2>{product.title}</h2>
          <Stars stars={product.rating} />
          <h5 className="price">{product.price}</h5>
          <p className="desc">{product.description}</p>

          <p className="info">
            <span>Category :</span>
            {product.category}
          </p>

          <hr />
          <AmountButtons
            increase={increase}
            decrease={decrease}
            amount={amount}
            disableButton={true}
          />
          <button
            className="add-to-cart"
            disabled={isSideBarOpen}
            onClick={() => addToCart(product, amount)}
          >
            Add to Cart
          </button>
        </section>
      </div>
    </div>
  );
};

export default SingleProduct;
