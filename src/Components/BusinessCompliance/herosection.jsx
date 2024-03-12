import businessHero from "../../assets/businessHero.png";

const herosection = () => {
  return (
    <>
      {/* container div for the hero section */}
      <div className="w-full flex flex-wrap justify-center items-center md:px-20 px-10">
        {/* inner container with flex layout,padding and width adjustment */}
        <div className="text-white flex  md:flex-row flex-col  justify-center items-center ">
          {/* textual content container */}
          <div className="flex flex-col justify-end md:items-start items-center  gap-5">
            {/* main heading for the hero section */}
            <h1 className="md:text-6xl xs2:text-3xl text-xl font-bold tracking-wide uppercase">
              business compliances
            </h1>
            {/* Subheading */}
            <p className="md:text-3xl xs2:text-base text-sm   ">
              Streamline regulatory compilance with <br /> our tailored
              solutions that protect your <br /> business intergrity and
              continuity
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
            <img src={businessHero} alt="Software Development" />
          </div>
        </div>
      </div>
    </>
  );
};

export default herosection;
