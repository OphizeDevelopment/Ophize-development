import heroaboutimage from "../../assets/heroaboutimage.png";

const HeroAbout = () => {
  return (
    <>
    <div className="flex justify-center">
      {/* hero section */}
      <div className="grid grid-cols-1 md:grid-cols-2 justify-center m-8 mt-4 2xl:w-[1440px] w-auto mx-10">
        <div className="p-8 my-5  pb-0">
          {/* Title and introductory text */}
          <div className="p-5 pt-2 flex flex-wrap gap-7">
            <p className="  sm:text-lg md:text-base xs:text-lg text-gray-300">
              ABOUT US
            </p>
            <h1 className="text-xl sm:text-4xl w-full md:text-4xl lg:text-4xl xl:text-5xl  font-bold tracking-wide uppercase text-white">
              Empowering Your Business with Seamless Outsourcing Solutions
            </h1>
            <p className="text-white mb-5 md:text-2xl xs2:text-base text-sm">
              At Ophize, we specialize in providing comprehensive BPO services
              that streamline your operations and enhance efficiency. Our
              multiple departments are dedicated to offering tailored solutions
              that align with your business goals
            </p>
            <button className="text-white p-3 bg-[#3B50BA] mt-3">
              Explore our services
            </button>
          </div>
        </div>
        <div className="p-8 pt-0 pb-0 pl-1  font-medium 2xl:text-2xl 4xl:text-3xl text-[18px] sm:text-xl md:text-base xs:text-lg my-5 ">
          <div className="items-baseline p-5 mt-16 pb-0">
            <img src={heroaboutimage} className="items-baseline" />
          </div>
        </div>
      </div>
      </div>
    </>
  );
};
export default HeroAbout;
