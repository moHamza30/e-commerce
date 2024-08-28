import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CiSquarePlus } from "react-icons/ci";
import { FaEye } from "react-icons/fa";
import { cartContext } from "../contexts/CartContext";

const Product = ({ product }) => {
  const { addtoCart } = useContext(cartContext);
  return (
    <div>
      {/* whole image box */}
      <div
        className="border border-[#e4e4e4] h-[300px] mb-4
        relative overflow-hidden group transition flex justify-center items-center"
      >
        {/*image  */}
        <div className="w-[200px]  flex justify-center items-center">
          <img
            src={product.image}
            alt="product-img"
            className="max-h-[160px] group-hover:scale-110 transition duration-300 "
          />
        </div>
        {/* absolute buttons */}
        <div className="absolute -right-20 group-hover:right-3 top-6 ">
          <button
            onClick={() => addtoCart(product.id, product)}
            className="w-12 h-12 bg-red-500 flex items-center justify-center"
          >
            <CiSquarePlus className="text-3xl" />
          </button>

          <Link
            to={`/product/${product.id}`}
            className="w-12 h-12 bg-white drop-shadow-xl flex gap-y-2 justify-center items-center "
          >
            <FaEye className="text-black" />
          </Link>
        </div>
      </div>
      {/* text */}
      <div className="text-gray-500">{product.category}</div>
      <Link to={`/product/${product.id}`}>
        <h2>{product.title}</h2>
      </Link>
      <h2 className="font-semi-bold">$ {product.price}</h2>
    </div>
  );
};

export default Product;
