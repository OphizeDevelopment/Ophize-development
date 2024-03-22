import bg from "../../assets/businessStrgy.png";

const HerosectionStrgy = () => {
  return (
    <>
      {/* main container with width for the hero section */}
      <div className="flex  justify-center ">
        {/* inner container for the image and text */}
        <div className=" lg:max-w-[1020px] xl:max-w-[1250px] text-white px-10 py-10 md:py-32 md:px-16 lg:px-20 xl:px-24 2xl:px-5">
          <div className="md:text-4xl lg:text-4xl  xl:text-5xl 2xl:text-6xl xs2:text-5xl  text-xl font-extrabold  xl:tracking-wide  uppercase">
            <h1 className="  pb-3 xs2:text-center md:text-justify">business</h1> <h1 className="leading-tight xs2:text-center md:text-justify">strategic consultancy</h1>
          </div>
          <div className="w-full flex flex-col md:flex-row justify-center">
            <div className="  xs2:text-center md:text-left">
              {/* description for the hero section */}
              <p className=" lg:text-xl xl:w-auto xl:text-2xl 2xl:text-3xl py-8 tracking-wide text-base xl:leading-7 2xl:leading-8 ">
                Driving business success with strategic planning and
                personalized consulting for robust growth.
              </p>
              {/* request button */}
              <button className="capitalize bg-[#305197] px-2 xl:px-3 lg:px-3 py-2 2xl:px-10  2xl:py-3 rounded-lg text-white sm:text-base text-sm">
                request a qoute
              </button>
            </div>
            <div>
              {" "}
              <div className="xs2:px-10 lg:-mt-24 xl:-mt-24 2xl:-mt-20 2xl:w-[27rem] md:w-96 w-auto h-auto lg:mr-16 xl:mr-20 ">
                <img
                  src={bg}
                  alt="hero section image "
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HerosectionStrgy;
