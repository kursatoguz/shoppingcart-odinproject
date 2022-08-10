import "./App.css";
import React, { StrictMode } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Cart from "./components/Cart";
import Error from "./pages/Error";
import Products from "./components/Products";
import SingleProduct from "./pages/SingleProduct";
import Navbar from "./components/Navbar";
function App() {
  return (
    <Router>
      <Navbar />
      <Cart />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="products/:id" element={<SingleProduct />} />
        <Route path="error" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
