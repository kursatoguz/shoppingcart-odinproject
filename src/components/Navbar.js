import React, { useState } from "react";
import { Link } from "react-router-dom";
import { GoThreeBars } from "react-icons/go";
import { BiShoppingBag } from "react-icons/bi";
import { useCartContext } from "../contexts/cartcontext";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { openSideBar } = useCartContext();
  const handleClick = (e) => {
    e.preventDefault();
    const links = document.querySelectorAll(".active-link");
    links.forEach((link) => {
      link.classList.remove("active-link");
    });
    e.currentTarget.firstChild.classList.add("active-link");
  };
  const handleCart = (e) => {
    handleClick(e);
    openSideBar();
  };
  return (
    <div
      className={isOpen ? "navbar-container responsive" : "navbar-container"}
    >
      <div className="brand">Brand</div>
      <ul>
        <li onClick={handleClick}>
          <Link className="text-link active-link" to="/">
            Home
          </Link>
        </li>
        <li onClick={handleClick}>
          <Link className="text-link" to="/about">
            About
          </Link>
        </li>

        <li onClick={handleCart}>
          <BiShoppingBag className="text-link cart-icon" />
        </li>
      </ul>
      <GoThreeBars className="icon" onClick={() => setIsOpen(!isOpen)} />
    </div>
  );
};

export default Navbar;
