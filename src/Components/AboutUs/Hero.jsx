import heroaboutimage from "../../assets/heroaboutimage.png";

const HeroAbout = () => {
  return (
    <>
      <div className="flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 justify-center my-14 2xl:w-[1440px] w-auto mx-10">
          <div className=" ">
            <div className=" flex flex-wrap gap-5">
              <p className="  sm:text-lg md:text-base xs:text-lg text-gray-300">
                ABOUT US
              </p>
              <h1 className="md:text-6xl xs2:text-3xl text-xl font-bold tracking-wide uppercase text-white text-center">
                Empowering Your Business with Seamless Outsourcing Solutions
              </h1>
              <p className="text-white mb-5 md:text-3xl xs2:text-base text-sm text-center">
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
          <div className=" pl-1  ">
            <div className=" mt-5 ">
              <img src={heroaboutimage} className="items-baseline" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default HeroAbout;
