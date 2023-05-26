const Cta = () => {
  return (
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
  )
}

export default Cta
