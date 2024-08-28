import React from "react";
import Header from "./Header";
import Whychooseus from "../assets/Whychooseus.png";
const Hero = () => {
  return (
    <div style={{ height: 'calc(100vh - 78px)' }} className=" flex bg-pink-200 ">
      <div className="hero container flex justify-between items-center self-end ">
        <div className="text">
          <p>__NEW TREND</p>
          <p className="text-[45px] ">AUTUMN SALE STYLISH</p>
          <p className="text-[50px] font-bold">MEN</p>
          {/* <link>DESCOVER MORE</link> */}
        </div>
        <div className="image flex self-end ">
          <img
            className="flex 
           self-end"
            src={Whychooseus}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
