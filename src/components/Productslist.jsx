import React, { useContext, useEffect, useState } from "react";
import Product from "./Product";
import { productsContext } from "../contexts/Productscontext";

const Productslist = ({ category }) => {
  const { products } = useContext(productsContext);
  const [filteredProducts, setfilteredProducts] = useState([]);

  useEffect(() => {
    filterProducts();
  }, [category, products]);
  const filterProducts = () => {
    if (category) {
      setfilteredProducts(
        products.filter((item) => item.category === category)
      );
    } else
      setfilteredProducts(
        products.filter((item) => {
          return (
            item.category === "men's clothing" ||
            item.category === "women's clothing"
          );
        })
      );
  };
  return (
    <div >
      <div
        className=" py-4 grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4
     "
      >
        {filteredProducts.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Productslist;
