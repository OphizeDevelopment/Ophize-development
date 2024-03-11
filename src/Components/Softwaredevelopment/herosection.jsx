// Importing the image asset for the hero section
import softwareimg from "../../assets/web-development.png";

const herosection = () => {
  return (
    <>
      {/* Container div for the hero section */}
      <div className="w-full flex justify-center items-center">
        {/* Inner container with flex layout, padding, and width adjustments for responsiveness */}
        <div className="text-white flex md:flex-row flex-col justify-center items-center px-10 py-10 w-full xl:w-[1440px] md:gap-0 gap-5">
          {/* Textual content container with flex layout and text alignment */}
          <div className="flex flex-col justify-center md:items-start items-center md:text-start text-center">
            {/* Main heading for the hero section */}
            <h1 className="xl:text-6xl xs2:text-5xl text-2xl uppercase tracking-wider font-bold ">
              software development
            </h1>
            {/* Subheading or description paragraph */}
            <p className="xs2:font-semibold xl:text-3xl xs2:text-xl text-xs md:mt-8 xs2:mt-4 mt-2">
              Make your vision in future business development.
            </p>
            {/* Contact button */}
            <button
              className="capitalize bg-[#305197] px-5 py-2
           sm:px-10 sm:py-3 rounded-lg text-white text-sm md:mt-8 mt-4"
            >
              Contact us
            </button>
          </div>
          {/* Image container */}
          <div>
            <img src={softwareimg} alt="Software Development" />
          </div>
        </div>
      </div>
    </>
  );
};

export default herosection;
