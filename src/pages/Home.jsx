import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Productslist from "../components/Productslist";

const Home = () => {
  return (
    <>
      <Hero />
      <div className="flex justify-center">
        <h2 className="text-2xl font-bold py-4 border-b border-black ">
          LATEST COLLECTIONS
        </h2>
      </div>
      <div className="container">
      <Productslist  />
      </div>
    </>
  );
};

export default Home;
