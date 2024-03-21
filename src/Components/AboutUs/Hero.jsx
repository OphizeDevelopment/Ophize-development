import heroaboutimage from "../../assets/heroaboutimage.png";

const HeroAbout = () => {
  return (
    <>
      <div className="flex justify-center">
        {/* hero section */}
        <div className="grid grid-cols-1 md:grid-cols-2 justify-center m-8 mt-4 2xl:w-[1440px] w-auto mx-24">
          <div className=" mt-3">
            {/* Title and introductory text */}
            <div className=" flex flex-wrap gap-5">
              <p className="  sm:text-lg md:text-base xs:text-lg text-gray-300">
                ABOUT US
              </p>
              <h1 className="text-xl sm:text-4xl w-full md:text-4xl lg:text-4xl xl:text-5xl  font-bold tracking-wide uppercase text-white">
                Empowering Your Business with Seamless Outsourcing Solutions
              </h1>
              <p className="text-white mb-5 md:text-2xl xs2:text-base text-sm">
                At Ophize, we specialize in providing comprehensive BPO services
                that streamline your operations and enhance efficiency. Our
                multiple departments are dedicated to offering tailored
                solutions that align with your business goals
              </p>
              <button className="text-white p-3 px-5 py-2 sm:px-10 sm:py-3 bg-[#3B50BA] sm:text-base rounded-md">
                Explore our services
              </button>
            </div>
          </div>
          <div className=" pl-1  font-medium 2xl:text-2xl 4xl:text-3xl text-[18px] sm:text-xl md:text-base xs:text-lg  ">
            <div className="items-baseline  mt-5 ">
              <img src={heroaboutimage} className="items-baseline" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default HeroAbout;
