import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Productsprovider from "./contexts/Productscontext.jsx";
import CartProvider from "./contexts/CartContext.jsx";
import SidebarProvider from "./contexts/SidebarContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <SidebarProvider>
  <CartProvider>
    <Productsprovider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Productsprovider>
  </CartProvider>
  </SidebarProvider>
);
