import React, { useContext, useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { ImBin } from "react-icons/im";
import { cartContext } from "../contexts/CartContext";
import { SidebarContext } from "../contexts/SidebarContext";
import Cartproducts from "./Cartproducts";

const Sidebar = () => {
  const { isopen, setisopen, handleClose } = useContext(SidebarContext);
  const { cart, clearCart, productNums } = useContext(cartContext);
  const [tottalPrice, settottalPrice] = useState(0);
  useEffect(() => {
    settottalPrice(
      cart.reduce((acc, current) => {
        return acc + current.amount * current.price;
      },0)
    );
  }, [cart]);
  return (
    <div
      className={`${
        isopen ? "right-0" : "-right-full"
      } fixed h-full w-full  bg-white top-0 shadow-2xl
     md:w-[35vw] xl:max-w-[30vw] transition-all duration-300 z-20 px-4 lg:px-[35px] overflow-y-auto`}
    >
      {/* head of sidebar */}
      <div className="flex justify-between items-center py-6 border-b">
        <h2 className="text-xl font-semibold">shopping bag {productNums}</h2>
        <FaArrowRight className="text-2xl" onClick={handleClose} />
      </div>
      {/* products */}
      <div>
        {cart.map((item) => (
          <Cartproducts item={item} key={item.id} />
        ))}
      </div>
      {/* footer of sidebar */}
      <div className="flex justify-between items-center p-2">
        <div className="font-semibold">tottal price is: {parseFloat(tottalPrice).toFixed(2)}</div>
        <ImBin onClick={clearCart} className="text-red-600" />
      </div>
    </div>
  );
};

export default Sidebar;
