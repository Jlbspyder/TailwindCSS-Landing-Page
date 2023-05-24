import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [close, setClose] = useState(false);

  const handleOpen = () => {
    setOpen(true);
    setClose(true);
  };

  const handleClose = () => {
    setOpen(false);
    setClose(false);
  };

  return (
    <nav className="relative container mx-auto p-6">
      <div className="flex items-center justify-between">
        <div className="pt-2">
          <img src="./images/logo.svg" alt="logo" />
        </div>
        <div className="hidden space-x-6 md:flex ">
          <a href="#" className="hover:text-DarkGrayishBlue">
            Pricing
          </a>
          <a href="#" className="hover:text-DarkGrayishBlue">
            Product
          </a>
          <a href="#" className="hover:text-DarkGrayishBlue">
            About Us
          </a>
          <a href="#" className="hover:text-DarkGrayishBlue">
            Careers
          </a>
          <a href="#" className="hover:text-DarkGrayishBlue">
            Community
          </a>
        </div>
        <a
          href="#"
          className="hidden  p-3 px-6 pt-3 text-white text-xs bg-BrightRed rounded-full 
       baseline hover:bg-BrightRedLight md:block"
        >
          Get Started
        </a>
        {!open && (
          <button
            id="menu-btn"
            className="block hamburger md:hidden focus:outline-none"
          >
            <img
              src="./images/icon-hamburger.svg"
              alt=""
              onClick={handleOpen}
            />
          </button>
        )}
        {close && (
          <button id="close-btn" className="close md:hidden focus:outline-none">
            <img src="./images/icon-close.svg" alt="" onClick={handleClose} />
          </button>
        )}
      </div>
      <div className="md:hidden">
        {open && (
          <div
            className="absolute flex flex-col items-center self-end py-10 mt-6 space-y-7 font-bold
       bg-white sm:self-center left-6 right-6 drop-shadow-md"
            id="menu"
          >
            <a href="#" className="hover:text-BrightRed">
              Pricing
            </a>
            <a href="#" className="hover:text-BrightRed">
              Product
            </a>
            <a href="#" className="hover:text-BrightRed">
              About Us
            </a>
            <a href="#" className="hover:text-BrightRed">
              Careers
            </a>
            <a href="#" className="hover:text-BrightRed">
              Community
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
