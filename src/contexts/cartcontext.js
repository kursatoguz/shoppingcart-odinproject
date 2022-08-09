import React, { useEffect, useState, useContext, useReducer } from "react";
import reducer from "../reducers/cartreducer";

const initialState = {
  cart: [],
  total_items: 0,
  total_amount: 0,
  isSideBarOpen: false,
};

const CartContext = React.createContext();
export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [amount, setAmount] = useState(1);

  const increase = () => {
    setAmount((oldAmount) => {
      let tempAmount = oldAmount + 1;
      return tempAmount;
    });
  };
  const decrease = () => {
    setAmount((oldAmount) => {
      let tempAmount = oldAmount - 1;
      if (tempAmount < 1) {
        tempAmount = 1;
      }
      return tempAmount;
    });
  };

  const addToCart = (product, amount) => {
    const { id, title, price, image } = product;
    dispatch({
      type: "ADD_TO_CART",
      payload: { id, title, price, image, amount },
    });
    //console.log(state.cart);
    openSideBar();
  };
  const toggleAmount = (id, value) => {
    dispatch({
      type: "TOGGLE_CART_ITEM_AMOUNT",
      payload: {
        id,
        value,
      },
    });
  };
  const closeSideBar = () => {
    dispatch({ type: "CLOSE_SIDE_BAR" });
  };
  const openSideBar = () => {
    dispatch({ type: "OPEN_SIDE_BAR" });
  };
  const removeCart = (id) => {
    dispatch({ type: "REMOVE_CART_ITEM", payload: id });
  };
  useEffect(() => {
    dispatch({ type: "COUNT_CART_TOTALS" });
    console.log(state.cart);
  }, [state.cart]);
  return (
    <CartContext.Provider
      value={{
        ...state,
        addToCart,
        amount,
        increase,
        decrease,
        closeSideBar,
        openSideBar,
        toggleAmount,
        removeCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
// make sure use
export const useCartContext = () => {
  return useContext(CartContext);
};
