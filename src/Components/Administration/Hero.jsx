import adminHero from "../../assets/administrationHero.png";

const Hero = () => {
  return (
    <>
      {/* main container */}
      <div className="justify-center flex md:flex-row flex-col md:px-24 px-10 p-10 xs:gap-5 md:h-screen md:p-16">
        {/* image container  */}
        <div className="flex md:justify-normal justify-center md:mt-32 flex-start ">
          <img
            src={adminHero}
            alt="administration"
            className="mt-5 md:w-auto h-fit"
          />
        </div>
        {/* text content container with vertical spacing and alignment */}
        <div className="text-white flex flex-col gap-6 md:items-start items-center w-auto flex-end md:m-6">
          {/* heading of the hero section */}
          <h1 className="uppercase xl:text-5xl xs2:text-4xl text-2xl text-center font-semibold tracking-wider md:mt-10">
            administration services
          </h1>
          {/* paragraph  */}
          <p className="capitalize xl:text-3xl xs2:text-xl tracking-wide md:text-start text-center">
            Optimizing Workforce Dynamics with Custom Human Resource Services to
            Foster a Thriving Corporate Environment
          </p>
          {/* button for quote */}
          <button className="capitalize bg-[#305197] px-5 py-2 sm:px-10 sm:py-3 rounded-lg text-white text-sm">
            request for quote
          </button>
        </div>
        
      </div>
    </>
  );
};

export default Hero;