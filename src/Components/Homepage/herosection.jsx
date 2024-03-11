// Importing the background image for the hero section
import bgHero from "../../assets/bg-hero.png";

const HeroSection = () => {
  return (
    <div className="md:mt-10 justify-center items-center flex relative md:h-auto xs2:h-[20rem] h-[25rem]">
      {/* Background image */}
      <img src={bgHero} alt="BPO Background" className="mt-5 md:z-10 -z-10" />
      {/* Overlay content container with flex layout and absolute positioning */}
      <div className="absolute flex flex-col gap-8 md:items-start items-center top-4 md:mr-24 px-10 lg:px-0 text-center md:text-start">
        {/* Main heading */}
        <h1 className="text-[#AEAEE7] font-bold lg:text-4xl xs3:text-2xl text-xl lg:w-[55rem] md:w-[35rem] w-auto tracking-wider font-otomanopee">
          Empowering Your Business Operations: Your Gateway to Excellence
        </h1>
        {/* Description paragraph */}
        <p className="text-[#BEBDBD] lg:text-base xs3:text-sm text-xs lg:w-[35rem] md:w-[25rem] w-auto">
          Discover comprehensive Business Process Outsourcing (BPO) solutions
          tailored for your success <br /> Experience seamless integration of
          services, dedicated support, and strategic innovation designed to
          elevate your business to new heights.
        </p>
        {/* Call-to-action button */}
        <button className="text-white bg-[#292930] lg:px-5 lg:py-3 px-3 py-2 rounded-md tracking-wide">
          Our Services
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
