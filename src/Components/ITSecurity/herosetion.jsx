import itbg from "../../assets/it-img.png";

const HeroSection = () => {
  return (
    <>
      <div className="flex justify-center items-center px-10 md:px-20 py-10 md:py-30">
        <div className="flex flex-col md:flex-row-reverse justify-center items-center md:gap-28 gap-16">
          <div className="text-white flex flex-col xl:gap-10 gap-5 md:items-start items-center justify-center 2xl:w-[50rem] lg:w-1/2">
            <h1 className="text-xl sm:text-3xl lg:text-5xl xl:text-6xl font-bold tracking-wide leading-snug md:text-start text-center">
              IT SECURITY AND SERVICES
            </h1>
            <p className="lg:text-xl xl:text-3xl md:text-lg text-sm tracking-wide md:text-start text-center">
              Protect your digital assets with our state-of-the-art
              cybersecurity and full-scale IT support for maximum safety and
              efficiency
            </p>
            <a href="/contactus">
              <button className="capitalize bg-[#305197] px-5 py-2 sm:px-10 sm:py-3 rounded-lg text-white sm:text-base text-sm">
                Contact us
              </button>
            </a>
          </div>

          <div>
            <img src={itbg} alt="IT Services" className="md:w-auto w-60" />
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
