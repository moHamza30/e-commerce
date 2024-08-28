import React, { useContext } from "react";
import Productslist from "../components/Productslist";
import { productsContext } from "../contexts/Productscontext";

const CollectionsPage = () => {
  const { category, setCategory } = useContext(productsContext);
  return (
    <div >
      {/* sidebar */}
      <div className="sidebar">  
        <div className="mt-5 p-3 flex justify-center text-center ">
        <div>
        <h1 className=" text-xl font-semibold ">filter</h1>
          <div className="flex  gap-3 mt-3" >
            <h2 onClick={() => setCategory("")} className="bg-blue-700 cursor-pointer text-white w-[100px]  rounded-md p-2">
              all
            </h2>
            <h2 onClick={() => setCategory("men's clothing")} className="bg-blue-700 cursor-pointer text-white w-[100px]
              rounded-md p-2">
              men
            </h2>
            <h2 onClick={() => setCategory("women's clothing")} className="bg-blue-700 cursor-pointer text-white w-[100px]
              rounded-md p-2">
              women
            </h2>
          </div>
        </div>
        </div>
      </div>
      {/* content */}
      <div className="container ml-2 w-full">
        <div className=" flex justify-start">
          <h2 className="py-3 border-b-2 border-black font-bold text-2xl">
            Collections
          </h2>
        </div>
        <Productslist category={category} />
      </div>
    </div>
  );
};

export default CollectionsPage;
