import heroaboutimage from "../../assets/heroaboutimage.png";

const HeroAbout = () => {
  return (
    <>
      <div className="flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 justify-center my-14 2xl:w-[1440px] w-auto mx-14">
          <div className=" ">
            <div className=" flex flex-wrap gap-5">
              <p className="  sm:text-lg md:text-base xs:text-lg text-gray-300">
                ABOUT US
              </p>
              <h1 className="md:text-4xl xs2:text-3xl text-xl font-bold tracking-wide uppercase text-white md:text-start  text-center">
                Empowering Your Business with Seamless Outsourcing Solutions
              </h1>
              <p className="text-white mb-5 md:text-lg xs2:text-base text-sm md:text-start text-justify">
                At Ophize, we specialize in providing comprehensive BPO services
                that streamline your operations and enhance efficiency. Our
                multiple departments are dedicated to offering tailored
                solutions that align with your business goals
              </p>
              <a href="/services">
                <button className="text-white p-3 px-5 py-2 sm:px-10 sm:py-3 bg-[#3B50BA] sm:text-base rounded-md mb-4">
                  Explore our services
                </button>
              </a>
            </div>
          </div>

          <div className="flex justify-center items-center ">
            <img src={heroaboutimage} className="items-baseline" />
          </div>
        </div>
      </div>
    </>
  );
};
export default HeroAbout;
