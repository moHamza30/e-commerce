import React, { createContext, useState } from "react";

export const cartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const productNums = cart.length;
  // add to cart
  const addtoCart = (id, product) => {
    const newitem = { ...product, amount: 1 };
    // check if exest
    const cartitem = cart.find((item) => {
      return item.id === id;
    });
    // if the item is exest
    if (!cartitem) {
      setCart([...cart, newitem]);
    } else {
      const newCart = cart.map((item) => {
        if (item.id === id) {
          return { ...item, amount: cartitem.amount + 1 };
        } else {
          return item;
        }
      });
      setCart(newCart);
    }
  };
  const minesItem = (id) => {
    const newCart = cart.map((item) => {
      if (item.id === id && item.amount > 1) {
        return { ...item, amount: item.amount - 1 };
      } else {
        return item;
      }
    });
    setCart(newCart);
  };

  // removeitem
  const removeitem = (id) => {
    const newCart = cart.filter((item) => {
      return item.id !== id;
    });
    setCart(newCart);
  };
  // remove all cart
  const clearCart = () => {
    setCart([]);
  };

  return (
    <div>
      <cartContext.Provider
        value={{
          cart,
          setCart,
          addtoCart,
          minesItem,
          removeitem,
          productNums,
          clearCart,
        }}
      >
        {children}
      </cartContext.Provider>
    </div>
  );
};

export default CartProvider;
