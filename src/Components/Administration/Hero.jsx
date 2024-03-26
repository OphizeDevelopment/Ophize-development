import adminHero from "../../assets/administrationHero1.png";

const Hero = () => {
  return (
    <>
      <div className="flex justify-center">
        <div className="flex md:flex-row flex-col md:px-24 my-16 p-10 xs:gap-5 2xl:w-[1440px] w-auto md:p-16">
          <div className="flex items-end md:mb-0 mb-8">
            <img src={adminHero} alt="administration" className="   " />
          </div>
          <div className="flex justify-center w-full md:w-2/3">
            <div className="text-white flex flex-col gap-8 md:items-start items-center w-auto flex-end  ">
              <h1 className="uppercase xl:text-5xl xs2:text-4xl text-2xl text-start font-semibold tracking-wider mt-3 ">
                administration services
              </h1>
              <p className="capitalize xl:text-3xl xs2:text-xl tracking-wide md:text-start text-center">
                Optimizing Workforce Dynamics with Custom Human Resource
                Services to Foster a Thriving Corporate Environment
              </p>
              <button className="capitalize bg-[#305197] px-5 py-2 sm:px-10 sm:py-3 rounded-lg text-white text-sm">
                request for quote
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
