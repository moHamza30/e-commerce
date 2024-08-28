import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { cartContext } from "../contexts/CartContext";
import { productsContext } from "../contexts/Productscontext";

const Productdetails = () => {
  const [product, setProduct] = useState({});
  const { id } = useParams();
  const { addtoCart } = useContext(cartContext);
  const { setCategory } = useContext(productsContext);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchProduct();
  }, [id]);
  const fetchProduct = () => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        setCategory(data.category);
        setIsLoading(false);
      });
  };
    return (
    <div className="container  mt-[100px]">
      {isLoading ? (
        <div className="h-screen flex justify-center items-center">
          loading...
        </div>
      ) : (
        <div className="flex flex-col sm:flex-row items-center sm:justify-around sm:items-center  ">
          {/* image */}
          <div>
            <img
              className="max-w-[300px] border-4 p-3"
              src={product?.image}
              alt=""
            />
          </div>
          {/* text */}
          <div className=" max-w-[400px] p-3">
            <h1 className="font-bold text-xl mb-3">{product?.title}</h1>
            <p className="text-gray-700">{product?.description}</p>
            <div className="text-lg font-semibold my-2">$ {product?.price}</div>
            <button
              onClick={() => addtoCart(product.id, product)}
              className="px-4 py-2 text-white bg-slate-600 rounded-md"
            >
              Add to cart
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Productdetails;
