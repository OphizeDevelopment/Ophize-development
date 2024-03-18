// Importing the background image for the hero section
import logibg from "../../assets/logi-bg.png";

const HeroSection = () => {
  return (
    <div className="relative">
      {/* Div for the background image with full width and variable height */}
      <div className="w-full lg:h-[50rem] sm:h-[40rem] h-[30rem] ">
        <img
          src={logibg} // Source of the background image
          alt="Logistics Background" // Alt text for accessibility
          className="w-full h-full object-cover" // Full width, full height, and cover the object
          style={{ maxHeight: "50rem" }} // Maximum height style
        />
      </div>
      {/* Overlay content container with text */}
      <div
        className="text-white w-full flex flex-col items-center justify-center gap-5 absolute md:top-1/4 top-1 sm:right-1/4 md:right-1/3 lg:right-1/4 xl:right-1/3 px-10 py-10"
        style={{ left: "50%", transform: "translateX(-50%)" }} // Centering the div horizontally
      >
        {/* Main title for the hero section */}
        <h1 className="text-xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-wide text-center">
          LOGISTICS DOCUMENTATION
        </h1>
        {/* Description paragraph */}
        <p className="text-xs sm:text-base lg:text-lg md:w-1/2 lg:w-[50rem] text-center">
          Streamline your supply chain with our detailed freight handling
          guides, customs clearance protocols, and transportation compliance
          procedures. Ensure smooth, efficient, and secure transit of goods with
          our expert logistics support.
        </p>
        {/* Contact us button */}
        <button className="capitalize bg-[#305197] px-4 sm:px-5 md:px-10 py-2 md:py-3 rounded-lg text-white text-sm sm:text-base">
          Contact us
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
