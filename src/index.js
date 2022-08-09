import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ProductsProvider } from "./contexts/productscontext";
import { CartProvider } from "./contexts/cartcontext";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ProductsProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </ProductsProvider>
  </React.StrictMode>
);
