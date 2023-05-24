import { useState } from "react";

const Reviews = () => {
  const [show, setShow] = useState({
    one: true,
    two: false,
    three: false,
    four: false,
  });

  const handleFirst = () => {
    setShow({
      one: true,
      two: false,
      three: false,
      four: false,
    });
  };

  const handleSecond = () => {
    setShow({
      one: false,
      two: true,
      three: false,
      four: false,
    });
  };
  const handleThird = () => {
    setShow({
      one: false,
      two: false,
      three: true,
      four: false,
    });
  };
  const handleFourth = () => {
    setShow({
      one: false,
      two: false,
      three: false,
      four: true,
    });
  };

  return (
    <>
      <section id="desktop-reviews">
        <div className="hidden max-w-6xl px-5 mx-auto mt-20 text-center relative md:block">
          <h2 className="text-4xl font-bold text-center">What they’ve said</h2>
          <div className="flex flex-col mt-20 md:flex-row md:space-x-5">
            <div className="flex flex-col item-center my-5 p-6 space-y-6 rounded-lg bg-VeryLightGray md:w-1/3">
              <img
                src="./images/avatar-anisha.png"
                className="w-16 mx-auto -mt-14"
                alt="dp"
              />
              <h5 className="text-lg font-bold">Anisha Li</h5>
              <p className="text-sm text-center text-DarkGrayishBlue">
                “Manage has supercharged our team’s workflow. The ability to
                maintain visibility on larger milestones at all times keeps
                everyone motivated.”
              </p>
            </div>
            <div className="flex-col item-center my-5 p-6 space-y-6 rounded-lg bg-VeryLightGray md:w-1/3 md:flex">
              <img
                src="./images/avatar-ali.png"
                className="w-16 mx-auto -mt-14"
                alt="dp"
              />
              <h5 className="text-lg font-bold">Ali Bravo</h5>
              <p className="text-sm text-center text-DarkGrayishBlue">
                “We have been able to cancel so many other subscriptions since
                using Manage. There is no more cross-channel confusion and
                everyone is much more focused.”
              </p>
            </div>
            <div className="flex-col item-center my-5 p-6 space-y-6 rounded-lg bg-VeryLightGray md:w-1/3 md:flex">
              <img
                src="./images/avatar-richard.png"
                className="w-16 mx-auto -mt-14"
                alt="dp"
              />
              <h5 className="text-lg font-bold">Richard Watts</h5>
              <p className="text-sm text-center text-DarkGrayishBlue">
                “Manage allows us to provide structure and process. It keeps us
                organized and focused. I can’t stop recommending them to
                everyone I talk to!”
              </p>
            </div>
            <div className="flex-col item-center my-5 p-6 space-y-6 rounded-lg bg-VeryLightGray md:w-1/3 md:flex">
              <img
                src="./images/avatar-shanai.png"
                className="w-16 mx-auto -mt-14"
                alt="dp"
              />
              <h5 className="text-lg font-bold">Shanai Gough</h5>
              <p className="text-sm text-center text-DarkGrayishBlue">
                “Their software allows us to track, manage and collaborate on
                our projects from anywhere. It keeps the whole team in-sync
                without being intrusive.””
              </p>
            </div>
          </div>
          <div id="pointer">
            <span
              className={`one ${show.one ? "active" : ""}`}
              onClick={handleFirst}
            ></span>
            <span
              className={`two ${show.two ? "active" : ""}`}
              onClick={handleSecond}
            ></span>
            <span
              className={`three ${show.three ? "active" : ""}`}
              onClick={handleThird}
            ></span>
            <span
              className={`four ${show.four ? "active" : ""}`}
              onClick={handleFourth}
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

      <section id="mobile-reviews">
        <div className="max-w-6xl px-5 mx-auto mt-20 text-center relative md:hidden">
          <h2 className="text-4xl font-bold text-center">What they’ve said</h2>
          <div className="flex flex-col mt-20 md:flex-row md:space-x-5">
            {show.one && (
              <div className="flex flex-col item-center my-5 p-6 space-y-6 rounded-lg bg-VeryLightGray md:w-1/3">
                <img
                  src="./images/avatar-anisha.png"
                  className="w-16 mx-auto -mt-14"
                  alt="dp"
                />
                <h5 className="text-lg font-bold">Anisha Li</h5>
                <p className="text-sm text-center text-DarkGrayishBlue">
                  “Manage has supercharged our team’s workflow. The ability to
                  maintain visibility on larger milestones at all times keeps
                  everyone motivated.”
                </p>
              </div>
            )}
            {show.two && (
              <div className="flex-col item-center my-5 p-6 space-y-6 rounded-lg bg-VeryLightGray md:w-1/3 md:flex">
                <img
                  src="./images/avatar-ali.png"
                  className="w-16 mx-auto -mt-14"
                  alt="dp"
                />
                <h5 className="text-lg font-bold">Ali Bravo</h5>
                <p className="text-sm text-center text-DarkGrayishBlue">
                  “We have been able to cancel so many other subscriptions since
                  using Manage. There is no more cross-channel confusion and
                  everyone is much more focused.”
                </p>
              </div>
            )}
            {show.three && (
              <div className="flex-col item-center my-5 p-6 space-y-6 rounded-lg bg-VeryLightGray md:w-1/3 md:flex">
                <img
                  src="./images/avatar-richard.png"
                  className="w-16 mx-auto -mt-14"
                  alt="dp"
                />
                <h5 className="text-lg font-bold">Richard Watts</h5>
                <p className="text-sm text-center text-DarkGrayishBlue">
                  “Manage allows us to provide structure and process. It keeps
                  us organized and focused. I can’t stop recommending them to
                  everyone I talk to!”
                </p>
              </div>
            )}
            {show.four && (
              <div className="flex-col item-center my-5 p-6 space-y-6 rounded-lg bg-VeryLightGray md:w-1/3 md:flex">
                <img
                  src="./images/avatar-shanai.png"
                  className="w-16 mx-auto -mt-14"
                  alt="dp"
                />
                <h5 className="text-lg font-bold">Shanai Gough</h5>
                <p className="text-sm text-center text-DarkGrayishBlue">
                  “Their software allows us to track, manage and collaborate on
                  our projects from anywhere. It keeps the whole team in-sync
                  without being intrusive.””
                </p>
              </div>
            )}
          </div>
          <div id="pointer">
            <span
              className={`one ${show.one ? "active" : ""}`}
              onClick={handleFirst}
            ></span>
            <span
              className={`two ${show.two ? "active" : ""}`}
              onClick={handleSecond}
            ></span>
            <span
              className={`three ${show.three ? "active" : ""}`}
              onClick={handleThird}
            ></span>
            <span
              className={`four ${show.four ? "active" : ""}`}
              onClick={handleFourth}
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
      <section id="cta" className=" bg-BrightRed mt-20">
        <div
          className="container flex flex-col items-center justify-between px-6 py-24 mx-auto space-y-12 md:py-12
        md:flex-row md:space-y-0"
        >
          <h2 className="text-white text-5xl leading-tight text-center font-bold md:text-left -ml-5 md:max-w-xl">
            Simplify how your team works today.
          </h2>
          <div className="mt-12">
            <a
              href="#"
              className="p-3 px-6 pt-3 text-sm shadow-2xl -mr-5 font-bold text-BrightRed bg-white rounded-full 
            baseline hover:bg-gray-800"
            >
              Get Started
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Reviews;
