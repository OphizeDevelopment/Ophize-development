import businessHero from "../../assets/businessHero.png";


const herosection = () => {
  return (
    <>
      {/* container div for the hero section */}
      <div className="w-full flex justify-center  md:px-20 px-10 md:h-screen p-9">
        {/* inner container with flex layout,padding and width adjustment */}
        <div className=" flex flex-col text-white  md:flex-row  justify-center items-center gap-5 p-10">
          {/* textual content container */}
          <div className="flex flex-col  justify-center md:items-start items-center  gap-5">
            {/* main heading for the hero section */}
            <h1 className="md:text-6xl xs2:text-3xl text-6xl font-bold tracking-wide uppercase ">
              business compliances
            </h1>
            {/* Subheading */}
            <p className="md:text-3xl xs2:text-base text-sm">
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
