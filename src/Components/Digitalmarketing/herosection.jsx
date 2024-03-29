import bg from "../../assets/digi-img.png";

const herosection = () => {
  return (
    <>
      <div className="md:mt-10 gap-10 justify-center flex md:flex-row flex-col md:px-24 px-10">
        <div className="text-white flex flex-col gap-4 md:items-start items-center mt-10 lg:w-[1020px] w-auto flex-end">
          <h6 className="capitalize xs2:text-4xl text-xl tracking-wide">
            the best
          </h6>
          <h1 className="xl:text-6xl xs2:text-4xl text-2xl uppercase font-semibold tracking-wider font-sans text-center">
            digital marketing
          </h1>
          <p className="xl:text-3xl xs2:text-xl tracking-wide md:text-start text-center">
            Forging Future Connections: Tailored Tactics for Interactive
            Audience Growth
          </p>
          <a href="/contactus">
            <button className="capitalize bg-[#305197] px-5 py-2 sm:px-10 sm:py-3 rounded-lg text-white text-sm">
              Contact us
            </button>
          </a>
        </div>
        <div className="flex md:justify-normal justify-center md:mt-32 flex-start">
          <img
            src={bg}
            alt="Digital Marketing"
            className="mt-5 md:w-auto w-80"
          />
        </div>
      </div>
    </>
  );
};

export default herosection;
