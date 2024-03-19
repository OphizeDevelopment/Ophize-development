import serH from "../../assets/serHeroImg.png";

const HerosectionService = () => {
  return (
    <>
      {/* main container with width and height*/}
      <div className="flex flex-col w-full  justify-center items-center">
        {/* text and heading container */}
        <div className="w-fit flex flex-col items-center justify-center  gap-5 md:w-fit p-32 xs:p-5 md:h-80">
          {/* heading for the herosection */}
          <h1 className="text-5xl font-bold uppercase text-gray-300">
            discover our expert services
          </h1>
          <p className="text-lg font-mono pl-48 pr-48 xs:p-0 text-gray-400">
            OPHIZE offers a spectrum of services to elevate your business.
            Explore our <br /> offerings below and find tailored support for
            every aspect of your enterprise.
          </p>
        </div>
        {/* Image container with content  */}
        <div
          className=" flex bg-cover bg-center w-full h-full justify-center content-center p-11  "
          style={{
            backgroundImage: `url(${serH})`,
          }}
        >
          {/* text container */}
          <div
            style={{ width: "745px" }}
            className="flex flex-col justify-center items-start text-white mx-auto pt-8 gap-8 xs:max-w-none"
          >
            <button className="capitalize bg-[#305197]   px-4 py-2 rounded-3xl text-white sm:text-base text-sm">
              Best
            </button>
            <h1 className="capitalize font-medium items-start text-left text-5xl">
              discover our services
            </h1>
            <p className="text-lg">
              Explore a diverse range of services designed to enhance your
              business. Delve into our service selection below and find custom
              solutions for every facet of your corporation.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default HerosectionService;
