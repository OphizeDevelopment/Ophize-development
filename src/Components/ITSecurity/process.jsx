import img from "../../assets/itsecurity-side.png";

const process = () => {
  return (
    <>
      <div>
        <div className="flex md:flex-row flex-col justify-center md:py-10 py-5 mb-10 mb:mb-0 px-10 items-center">
          <div>
            <img src={img} alt="IT Security" />
          </div>
          <div className="flex flex-col md:items-start items-center gap-5 md:w-[40rem] justify-center md:text-start text-center">
            <h1 className="uppercase font-bold tracking-wide xl:text-4xl lg:text-3xl sm:text-2xl w-full">
              The Impact of IT Security Excellence
            </h1>
            <p className="text-[#717171] lg:text-base text-sm">
              Discover our comprehensive IT security and managed services, a
              blend of expertise and innovation that has been strengthening
              digital infrastructures seamlessly for over three years.
            </p>
            <button className="capitalize bg-[#305197] px-4 sm:px-5 md:px-10 py-2 md:py-3 rounded-lg text-white text-sm sm:text-base">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default process;
