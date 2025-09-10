import React from "react";
import home_banner from "../assets/home_banner.png";

const Home = () => {
  return (
    <div className="mt-10 flex flex-col items-center shadow-lg p-10 h-screen w-[86%] justify-center mx-auto bg-gray-100 rounded">
        <div className="flex justify-center items-center w-full ">
          <img src={home_banner} alt="Home page" className="w-[90%] rounded  " />
        </div>
        <div className="text-left mt-4 w-full p-4 bg-white rounded shadow">
          <h1 className="  text-2xl font-bold uppercase">Trending clothes</h1>
          
        </div>
    </div>
  );
};

export default Home;
