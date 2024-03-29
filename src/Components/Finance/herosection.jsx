import heroimg from "../../assets/financehero-img.png";

const herosection = () => {
  return (
    <>
      <div className="flex justify-center xl:pt-28 md:pt-16 pt-5 md:px-20 px-10 ">
        <div className="w-[1250px] flex flex-col justify-center items-end gap-8 xs3:gap-16 md:gap-0">
          <div className="text-white flex  items-start flex-col xs2:items-start xs2:text-start md:gap-8 gap-6">
            <h1 className="md:text-4xl lg:text-5xl xl:text-6xl xs2:text-3xl text-xl font-bold tracking-wide">
              ACCOUNTS AND FINANCE
            </h1>
            <p className="lg:text-3xl md:text-2xl xs2:text-base tracking-wide text-sm xs3:w-3/4">
              Optimize Your Financial Health: Expert Accounting Services to
              Elevate Your Credit Score and Investment Strategy
            </p>
            <a href="/contactus">
              <button className="capitalize bg-[#305197] px-5 py-2 sm:px-10 sm:py-3 rounded-lg text-white sm:text-base text-sm">
                Contact us
              </button>
            </a>
          </div>
          <div>
            <img
              src={heroimg}
              alt="Finance and Accounts"
              className="w-96 md:w-[32rem] lg:w-auto"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default herosection;
