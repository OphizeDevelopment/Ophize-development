import businessHero from "../../assets/businessHero.png";

const herosection = () => {
  return (
    <>
      <div className="w-full 2xl:w-[1440px] mx-auto flex justify-center ">
        <div className=" flex flex-col text-white  md:flex-row  justify-center items-center gap-9 xs:text-center md:text-start m-6">
          <div className="flex flex-col  justify-center md:items-start items-center  gap-5 lg:w-1/2">
            <h1 className="text-xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold tracking-wide uppercase ">
              business compliances
            </h1>
            <p className="md:text-3xl xs2:text-base text-sm">
              Streamline regulatory compilance with our tailored solutions that
              protect your business intergrity and continuity
            </p>
            <button
              className="capitalize bg-[#305197] px-5 py-2
           sm:px-10 sm:py-3 rounded-lg text-white text-sm md:mt-8 mt-4 mb-5"
            >
              Request a Quote
            </button>
          </div>
          <div className="flex items-center justify-center">
            <img
              src={businessHero}
              alt="Software Development"
              className="md:w-auto md:h-[30rem] h-auto"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default herosection;
