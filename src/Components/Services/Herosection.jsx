import serH from "../../assets/serHeroImg.png";

const HerosectionService = () => {
  return (
    <>
      <div className="flex justify-center my-14 ">
        
        <div className="flex flex-col justify-center items-center  w-full mx-auto">
          
          <div className="w-fit flex flex-col items-center justify-center mx-10  gap-5 md:my-16 my-7">
           

            <h1 className="md:text-5xl xs2:text-3xl text-xl font-bold tracking-wide text-gray-300 uppercase">
              discover our expert services
            </h1>
            <p className="md:text-xl xs2:text-base text-sm font-mono xs:p-0 text-gray-400">
              OPHIZE offers a spectrum of services to elevate your business.
              Explore our <br /> offerings below and find tailored support for
              every aspect of your enterprise.
            </p>
          </div>

          <div
            className=" flex bg-cover bg-center w-full h-full justify-center content-center p-11 items-start  "
            style={{
              backgroundImage: `url(${serH})`,
            }}
          >
            
            <div className="flex flex-col justify-center items-start text-white mx-auto  gap-5 xs:max-w-none md:w-[745px] w-auto">

              <button className="capitalize bg-[#305197]   px-4 py-2 rounded-3xl text-white sm:text-base text-sm">
                Best
              </button>
              <h1 className="capitalize  items-start md:text-5xl xs2:text-3xl text-xl font-bold tracking-wide">
                discover our services
              </h1>
              <p className="md:text-xl xs2:text-base text-sm">
                Explore a diverse range of services designed to enhance your
                business. Delve into our service selection below and find custom
                solutions for every facet of your corporation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default HerosectionService;
