// Importing the hero image asset for the accounts and finance section
import heroimg from "../../assets/financehero-img.png";

const herosection = () => {
  return (
    <>
      <div className="flex justify-center md:pt-28 pt-5 md:px-20 px-10 ">
        {/* Inner container with a fixed width and flex layout for content and image */}
        <div className="w-[1250px] flex flex-col justify-center items-end gap-16 md:gap-0">
          {/* Textual content container with flex layout and responsive alignment */}
          <div className="text-white flex flex-col xs2:items-start xs2:text-start text-center items-center md:gap-8 gap-6">
            {/* Title for the section */}
            <h1 className="md:text-6xl xs2:text-3xl text-xl font-bold tracking-wide">
              ACCOUNTS AND FINANCE
            </h1>
            {/* Description paragraph */}
            <p className="md:text-3xl xs2:text-base text-sm">
              Optimize Your Financial Health: Expert Accounting Services to
              Elevate Your Credit Score and Investment Strategy
            </p>
            {/* Contact button */}
            <button className="capitalize bg-[#305197] px-5 py-2 sm:px-10 sm:py-3 rounded-lg text-white sm:text-base text-sm">
              Contact us
            </button>
          </div>
          {/* Image container for the hero section */}
          <div>
            <img
              src={heroimg}
              alt="Finance and Accounts"
              className="w-96 md:w-auto"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default herosection;
