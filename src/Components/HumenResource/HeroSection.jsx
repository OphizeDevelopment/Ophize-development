import hrHero1 from "../../assets/hrHero1.png";

const HeroSectionHR = () => {
  return (
    <>
      <div className="flex justify-center px-10 pt-8 md:px-20 ">
        <div className="w-[1250px] flex flex-col justify-center items-end gap-16 md:gap-0 md:mt-6">
          <div className="text-white flex flex-col xs2:items-start xs2:text-start text-center items-center md:gap-8 gap-6 ">
            <h1 className="text-xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-wide uppercase xs:text-lg">
              human resource management
            </h1>
            <p className="md:text-3xl xs2:text-base text-sm">
              Optimizing workforce Dynamics with Custom Human Resource Services
              to Foster a Thriving corporate Enviornment
            </p>
            <a href="/contactus">
              <button className="capitalize bg-[#305197] px-5 py-2 sm:px-10 sm:py-3 rounded-lg text-white sm:text-base text-sm">
                Contact us
              </button>
            </a>
          </div>
          <div className="justify-center">
            <img src={hrHero1} alt="human resource hero" className="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSectionHR;
