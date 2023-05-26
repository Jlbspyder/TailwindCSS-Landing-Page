import React from "react";
import Data from "../data";

const DesktopReview = () => {
  return (
    <section id="desktop-reviews">
      <div className="hidden max-w-6xl px-5 mx-auto mt-20 text-center relative md:block">
        <h2 className="text-4xl font-bold text-center">What they’ve said</h2>
        <div className="flex flex-col mt-20 md:flex-row md:space-x-5">
          {Data.map((item, index) => (
            <div  key={index} className="flex flex-col item-center my-5 p-6 space-y-6 rounded-lg bg-VeryLightGray md:w-1/3">
              <img src={item.img} className="w-16 mx-auto -mt-14" alt="dp" />
              <h5 className="text-lg font-bold">{item.name}</h5>
              <p className="text-sm text-center text-DarkGrayishBlue">
                {item.description}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-10">
          <a
            href="#"
            className="p-3 px-6 pt-3 text-white text-xs bg-BrightRed rounded-full 
            baseline hover:bg-BrightRedLight"
          >
            Get Started
          </a>
        </div>
      </div>
    </section>
  );
};

export default DesktopReview;
