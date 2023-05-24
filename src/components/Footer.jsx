import { useState } from "react";
import {
  FaTwitter,
  FaFacebook,
  FaYoutube,
  FaPinterest,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const regEx = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    if (regEx.test(email)) {
      setEmail("");
      setError("");
    } else if (!regEx.test(email)) {
      setError("Please insert a valid email");
    }
  };

  return (
    <footer className="bg-VeryDarkBlue">
      <div
        className="container flex flex-col-reverse justify-between 
      px-6 py-10 mx-auto space-y-8 md:flex-row md:space-y-0"
      >
        <div
          className="flex flex-col-reverse items-center justify-between 
        space-y-12 md:flex-col md:space-y-0 md:items-start"
        >
          <div className="mx-auto my-6 text-center text-DarkGrayishBlue md:hidden">
            Copyright &copy; 2023, All Rights Reserved.
          </div>
          <div>
            <img src="./images/logo.svg" alt="logo" />
          </div>
          <div className="flex justify-center space-x-4">
            <a href="https://www.facebook.com/" target="_blank">
              <FaFacebook className="fb" />
            </a>
            <a href="https://www.youtube.com/" target="_blank">
              {" "}
              <FaYoutube className="youtube" />
            </a>
            <a href="https://www.twitter.com/jlbspyder" target="_blank">
              <FaTwitter className="twitter" />
            </a>
            <a href="https://www.pinterest.com/" target="_blank">
              {" "}
              <FaPinterest className="pin" />
            </a>
            <a href="https://www.instagram.com/jlb_me/" target="_blank">
              <FaInstagram className="ig" />
            </a>
          </div>
        </div>
        <div className="flex justify-around space-x-32">
          <div className="flex flex-col space-y-3 text-DarkGrayishBlue">
            <a href="#" className="hover:text-BrightRed">
              Home
            </a>
            <a href="#" className="hover:text-BrightRed">
              Pricing
            </a>
            <a href="#" className="hover:text-BrightRed">
              Products
            </a>
            <a href="#" className="hover:text-BrightRed">
              About Us
            </a>
          </div>
          <div className="flex flex-col space-y-3 text-DarkGrayishBlue">
            <a href="#" className="hover:text-BrightRed">
              Careers
            </a>
            <a href="#" className="hover:text-BrightRed">
              Community
            </a>
            <a href="#" className="hover:text-BrightRed">
              Private Policy
            </a>
          </div>
        </div>
        <div className="flex flex-col justify-between">
          <form>
            <div className="flex space-x-3">
              <input
                type="email"
                className={
                  error
                    ? "bg-white rounded-full input p-3 px-6 pt-3 outline-none"
                    : "bg-white rounded-full p-3 px-6 pt-3 outline-none"
                }
                placeholder="Updates in your box..."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button
                className="py-3 px-6 text-white text-xs bg-BrightRed rounded-full 
                baseline hover:bg-BrightRedLight"
                onClick={handleSubmit}
              >
                Go
              </button>
            </div>
          </form>
          <span className="error">{error}</span>
          <div className="hidden text-DarkGrayishBlue md:block">
            Copyright &copy; 2023, All Rights Reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
