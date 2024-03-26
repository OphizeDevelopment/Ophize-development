// Importing the background image for the hero section
import bgHero from "../../assets/bg-hero.png";

const HeroSection = () => {
  return (
    <div className="flex justify-center sm:px-14 px-8 xs2:py-10">
      <div className="items-center justify-start flex relative xs2:h-[20rem] xs:h-[28rem] h-[30rem] md:h-auto">
        <img src={bgHero} alt="BPO Background" className="mt-5 md:z-10 -z-10" />
        <div className="absolute flex flex-col gap-8 md:items-start items-center md:top-4 text-center md:text-start">
          <h1 className="text-[#AEAEE7] font-bold lg:text-4xl xs3:text-3xl text-xl lg:w-[55rem] md:w-[45rem] w-auto tracking-wider font-otomanopee">
            Empowering Your Business Operations: Your Gateway to Excellence
          </h1>
          <p className="text-[#BEBDBD] lg:text-base text-sm  lg:w-[35rem] md:w-[30rem] w-auto">
            Discover comprehensive Business Process Outsourcing (BPO) solutions
            tailored for your success <br /> Experience seamless integration of
            services, dedicated support, and strategic innovation designed to
            elevate your business to new heights.
          </p>
          <a href="/services">
            <button className="text-white bg-[#292930] lg:px-5 lg:py-3 px-3 py-2 rounded-md tracking-wide">
              Our Services
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
