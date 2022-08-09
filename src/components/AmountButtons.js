import React from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import { useCartContext } from "../contexts/cartcontext";
const AmountButtons = ({ increase, decrease, amount, disableButton }) => {
  const { isSideBarOpen } = useCartContext();
  return (
    <div className="amount-buttons">
      <button
        type="button"
        className="amount-btn"
        disabled={disableButton && isSideBarOpen}
        onClick={decrease}
      >
        <FaMinus />
      </button>
      <h2 className="amount">{amount}</h2>
      <button
        type="button"
        className="amount-btn"
        disabled={disableButton && isSideBarOpen}
        onClick={increase}
      >
        <FaPlus />
      </button>
    </div>
  );
};

export default AmountButtons;
