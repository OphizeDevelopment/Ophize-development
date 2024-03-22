import bg from "../../assets/businessStrgy.png";

const HerosectionStrgy = () => {
  return (
    <>
      {/* main container with width for the hero section */}
      <div className="flex justify-center md:p-10  xs:p-2 static min-h-screen  ">
        {/* inner container for the image and text */}
        <div className="w-[1250px] flex flex-col md:flex-row justify-center gap-6 md:mx-10 mx-6 relative ">
          {/* container for the hero image and text  */}
          <div className="justify-center flex flex-col  xs:items-center  ">
            {/* text container */}
            <div className="flex flex-col text-white xs2:items-start xs2:text-start text-center items-center gap-5 z-0 ">
              {/* heading of the section */}
              <h1 className="md:text-6xl xs2:text-3xl text-xl font-extrabold tracking-wide uppercase">
                business <br /> strategic consultancy
              </h1>
              {/* description for the hero section */}
              <p className="md:text-3xl xs2:text-base text-sm w-1/2">
                Driving business success with strategic planning and
                personalized consulting for robust growth.
              </p>
              {/* request button */}
              <button className="capitalize bg-[#305197] px-5 py-2 sm:px-10 sm:py-3 rounded-lg text-white sm:text-base text-sm">
                request a qoute
              </button>
            </div>
            {/* image container */}
            <div className="md:absolute right-0 top-0 md:top-auto md:right-36 md:w-80 w-auto h-auto z-10 ">
              <img src={bg} alt="hero section image " className="w-full h-auto" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HerosectionStrgy;
