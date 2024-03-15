import hrHero1 from "../../assets/hrHero1.png";

const HeroSectionHR = () => {
  return (
    <>
      {/* container div for the hero section */}
      <div className="flex justify-center px-10 pt-8 md:px-20 ">
        {/* inner container for image and text */}
        <div className="w-[1250px] flex flex-col justify-center items-end gap-16 md:gap-0 ">
          {/* text container */}
          <div className="text-white flex flex-col xs2:items-start xs2:text-start text-center items-center md:gap-8 gap-6 ">
            {/* heading of the section */}
            <h1 className="md:text-6xl xs2:text-2xl font-bold tracking-wide uppercase xs:text-base">
              human resource management
            </h1>
            {/* description paragraph of the heading */}
            <p className="md:text-3xl xs2:text-base text-sm">
              Optimizing workforce Dynamics with Custom Human Resource Services
              to Foster a Thriving corporate Enviornment
            </p>
            {/* request button */}
            <button className="capitalize bg-[#305197] px-5 py-2 sm:px-10 sm:py-3 rounded-lg text-white sm:text-base text-sm">
              request a qoute
            </button>
          </div>
          {/* image of the hero section */}
          <div className="justify-center">
            <img
              src={hrHero1}
              alt="human resource hero"
              className=""
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSectionHR;
