import { useState } from "react";              
import { IoArrowBack, IoArrowForward } from "react-icons/io5";
import Data from "../data";

const MobileReviews = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchPosition, setTouchPosition] = useState(null)
  const length = Data.length;

  const handlePrevious = () => {
    setCurrentIndex(currentIndex === 0 ? length - 1 : currentIndex - 1);
  };
  const handleNext = () => {
    setCurrentIndex(currentIndex === length - 1 ? 0 : currentIndex + 1);
  };
  const handleTouchStart = (e) => {
    const touchDown = e.touches[0].clientX
    setTouchPosition(touchDown)
}
  const handleTouchMove = (e) => {
  const touchDown = touchPosition
  if(touchDown === null) {
      return
  }

  const currentTouch = e.touches[0].clientX
  const diff = touchDown - currentTouch

  if (diff > 5) {
      handleNext()
  }

  if (diff < -5) {
      handlePrevious()
  }

  setTouchPosition(null)
}
  return (
    <section id="mobile-reviews">
      <div className="max-w-6xl px-5 mx-auto mt-20 text-center relative md:hidden">
        <h2 className="text-4xl font-bold text-center">What they’ve said</h2>
        <div className="flex flex-col mt-20 md:flex-row transition-transform md:space-x-5" onTouchStart={handleTouchStart} onTouchMove={handleTouchMove} >
          <IoArrowBack  className="previous" onClick={handlePrevious} />
          <IoArrowForward  className="next" onClick={handleNext} />
          {Data.map((item, index) => (
            <div
              key={index}
              className={
                index === currentIndex
                  ? "flex flex-col item-center my-5 p-6 space-y-6 rounded-lg bg-VeryLightGray md:w-1/3"
                  : ""
              }
            >
              {index === currentIndex && (
                <img src={item.img} className="w-16 mx-auto -mt-14" alt="dp" />
              )}
              {index === currentIndex && (
                <h5 className="text-lg font-bold">{item.name}</h5>
              )}
              {index === currentIndex && (
                <p className="text-sm text-center text-DarkGrayishBlue">
                  {item.description}
                </p>
              )}
            </div>
          ))}
        </div>
        <div id="pointer">
          <span
            className={`one ${currentIndex === 0 ? "active" : ""}`}
            onClick={() => setCurrentIndex(0)}
          ></span>
          <span
            className={`two ${currentIndex === 1 ? "active" : ""}`}
            onClick={() => setCurrentIndex(1)}
          ></span>
          <span
            className={`three ${currentIndex === 2 ? "active" : ""}`}
            onClick={() => setCurrentIndex(2)}
          ></span>
          <span
            className={`four ${currentIndex === 3 ? "active" : ""}`}
            onClick={() => setCurrentIndex(3)}
          ></span>
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

export default MobileReviews;
