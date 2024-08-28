import React, { useContext } from "react";
import { IoClose } from "react-icons/io5";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import { cartContext } from "../contexts/CartContext";

const Cartproducts = ({ item }) => {
  const { image, title, id, price, amount } = item;
  const { addtoCart,minesItem,removeitem } = useContext(cartContext);
  const handleMines = ()=>{
    if (amount > 1)
      minesItem(id)
    else
    removeitem(id)

  }

  return (
    <div className="border-b py-4 ">
      <div className="flex items-center justify-between">
        {/* image && title && controlers */}
        <div className="flex items-center gap-x-4 ">
          {/* image */}
          <div>
            <img
              className="w-[125px] max-h-[160px]"
              src={image}
              alt="productimage"
            />
          </div>
          {/* title && price && controls */}
          <div className=" self-end">
            <div className="font-bold text-xl">$ {price}</div>
            <h1 className=" font-semibold">{title}</h1>
            {/* controlers && totallprice*/}
            <div className="flex items-center gap-4 mt-2 ">
              {/*  controlers */}
              <div className="w-[90px] flex flex-1 justify-between items-start border ">
                <FaPlus
                  onClick={()=>addtoCart(id, item)}
                  className="self-center text-sm flex-1"
                />
                <div className=" font-semibold text-xl">{amount}</div>
                <FaMinus
                  onClick={handleMines}
                  className="self-center text-sm  flex-1"
                />
              </div>
              {/* tottal price */}
              <div>$ {parseFloat(amount * price).toFixed(2)}</div>
            </div>
          </div>
          {/* close */}
        </div>
        <div className="self-start">
          <IoClose onClick={() => removeitem(id)} className="text-2xl" />
        </div>
      </div>
    </div>
  );
};

export default Cartproducts;
