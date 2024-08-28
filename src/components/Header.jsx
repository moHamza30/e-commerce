import React, { useContext } from "react";
import { FaHome } from "react-icons/fa";
import { TiShoppingCart } from "react-icons/ti";
import { SidebarContext } from "../contexts/SidebarContext";
import Sidebar from "./Sidebar";
import { cartContext } from "../contexts/CartContext";
import { Link } from "react-router-dom";

const Header = () => {
  const { isopen, setisopen, handleClose } = useContext(SidebarContext);
  const { productNums } = useContext(cartContext);
  return (
    <div className="shadow-md ">
      <div className="container py-6 flex items-center justify-between">
        <Link to="/">
          <FaHome className="text-3xl" />
        </Link>
        {/* ul && Icon */}
        <div className="flex items-center gap-5">
          <ul className="flex items-center gap-3">
            <Link to={"/"}>
            <li>Home</li>
            </Link>
            <Link to={"/collections"}>
            <li>Collections</li>
            </Link>
          </ul>
        <div className="shoppingIcon relative cursor-pointer" onClick={handleClose}>
          <TiShoppingCart className="text-3xl" />
          <span
            className="absolute -top-3 -right-3 w-2 h-2 p-3
         rounded-full bg-red-600 flex items-center justify-center"
          >
            {productNums}
          </span>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
