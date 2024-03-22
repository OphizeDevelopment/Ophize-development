import businessHero from "../../assets/businessHero.png";

const herosection = () => {
  return (
    <>
      {/* container div for the hero section */}
      <div className="w-full 2xl:w-[1440px] mx-auto flex justify-center ">
        {/* inner container with flex layout,padding and width adjustment */}
        <div className=" flex flex-col text-white  md:flex-row  justify-center items-center gap-5 xs:text-center md:text-start m-6">
          {/* textual content container */}
          <div className="flex flex-col  justify-center md:items-start items-center  gap-5 lg:w-1/2">
            {/* main heading for the hero section */}
            <h1 className="text-xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold tracking-wide uppercase ">
              business compliances
            </h1>
            {/* Subheading */}
            <p className="md:text-3xl xs2:text-base text-sm">
              Streamline regulatory compilance with our tailored solutions that
              protect your business intergrity and continuity
            </p>
            {/* request button */}
            <button
              className="capitalize bg-[#305197] px-5 py-2
           sm:px-10 sm:py-3 rounded-lg text-white text-sm md:mt-8 mt-4 mb-5"
            >
              Request a Quote
            </button>
          </div>
          {/* image container */}
          <div>
            <img
              src={businessHero}
              alt="Software Development"
              className="md:w-auto w-60"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default herosection;
