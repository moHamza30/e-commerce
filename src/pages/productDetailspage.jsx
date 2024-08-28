import React, { useContext, useState } from "react";
import Productdetails from "../components/Productdetails";
import Productslist from "../components/Productslist";
import { productsContext } from "../contexts/Productscontext";

const ProductDetailsPage = () => {
  const { category } = useContext(productsContext);
  return (
    <div>
        <div className="container">
          <Productdetails  />
          <div className="flex justify-center">
            <h2 className=" text-2xl font-bold py-4  border-b border-black">
              similer products
            </h2>
          </div>
          <div className="container">
            <Productslist category={category} />
          </div>
        </div>
    </div>
  );
};

export default ProductDetailsPage;
