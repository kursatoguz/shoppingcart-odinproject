import React from "react";
import { useCartContext } from "../contexts/cartcontext";
import { Link } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import AmountButtons from "./AmountButtons";
const Cart = () => {
  const {
    total_items,
    isSideBarOpen,
    closeSideBar,
    cart,
    total_amount,
    toggleAmount,
    removeCart,
  } = useCartContext();
  const increase = (id) => {
    toggleAmount(id, "inc");
  };
  const decrease = (id) => {
    toggleAmount(id, "dec");
  };
  return (
    <div className={`${isSideBarOpen ? "sidebar show-sidebar" : "sidebar"}`}>
      <div className="sidebar-header">
        <h2>
          Cart <span> ({total_items} items)</span>
        </h2>
        <button className="close-btn" onClick={closeSideBar}>
          <FaTimes />
        </button>
      </div>
      <div className="items">
        {cart.length == 0 ? (
          <div className="empty-cart">
            <p>Your Cart is Empty</p>
            <Link to="/" className="btn center-btn">
              Start Shopping
            </Link>
          </div>
        ) : (
          cart.map((item) => {
            return (
              <div key={item.id} className="single-item">
                <img src={item.image} alt={item.title} className="cart-img" />
                <AmountButtons
                  increase={() => increase(item.id)}
                  decrease={() => decrease(item.id)}
                  amount={item.amount}
                  disableButton={false}
                />
                <div>
                  <h3>${(item.price * item.amount).toFixed(2)}</h3>
                </div>
                <div>
                  <FaTimes
                    className="remove-item"
                    onClick={() => removeCart(item.id)}
                  />
                </div>
              </div>
            );
          })
        )}
        {cart.length != 0 && (
          <div className="subtotal">
            <div>
              <h3>Subtotal:</h3>
            </div>
            <div>
              <h2>${total_amount.toFixed(2)}</h2>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
