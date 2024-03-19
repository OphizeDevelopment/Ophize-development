import streamlinedImage from "../../assets/streamlined.png";
import expertiseImage from "../../assets/expertise.png";
import globalreachImage from "../../assets/globalreach.png";

const Solutions = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 justify-center p-3 mt-4 pb-0">
        <div className="p-8 pt-0 pb-0">
          {/* Title and introductory text */}
          <div className="p-5 pt-2">
            <p className="text-[#3B50BA] font-semibold sm:text-xl md:text-base xs:text-lg">
              Benefits
            </p>
            <h1 className="md:text-[44px]  font-medium  2xl:text-4xl 4xl:text-5xl md:text-start mt-3 xs:text-[30px]">
              Tailored Solutions for Every Challenge
            </h1>
          </div>
        </div>
        <div className="p-8 pt-0 pb-0 pl-1 text-start font-medium 2xl:text-2xl 4xl:text-3xl text-[18px] sm:text-xl md:text-base xs:text-lg">
          <div className="p-11 pt-0">
            <p className="pt-3 mt-12 ">
              Our BPO services are not one-size-fits-all.We work with you
            </p>
            <p>to understand your unique challenges and create</p>
            <p> customized solutions that fit just right.</p>
          </div>
        </div>
      </div>

      {/* efficiency, expertise, global reach section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-8 justify-center">
        <div className="p-8 pt-0 pb-0">
          <div className="text-start">
            <img src={streamlinedImage} className="w-20" />
          </div>
          <h1 className="text-2xl font-bold 2xl:text-2xl 4xl:text-5xl ">
            Streamlined Efficiency
          </h1>
          <p className="text-[14px] pt-3 2xl:text-xl 4xl:text-2xl sm:text-xl md:text-base xs:text-lg">
            Our BPO services streamline your operations, allowing your in-house
            team to focus on strategic growth. With our support, you can enjoy
            improved process efficiency and productivity.
          </p>
        </div>
        <div className="p-8 pt-0 pb-0">
          <div>
            <img src={expertiseImage} className="w-20" />
          </div>
          <h1 className="text-2xl font-bold 2xl:text-2xl 4xl:text-5xl">
            Expertise at Your Fingertips
          </h1>
          <p className="text-[14px] pt-3 2xl:text-xl 4xl:text-2xl sm:text-xl md:text-base xs:text-lg">
            Tap into our vast pool of industry experts who bring specialized
            knowledge and experience to your business, ensuring that every task
            is managed with the utmost proficiency.
          </p>
        </div>
        <div className="p-8 pt-0">
          <div>
            <img src={globalreachImage} className="w-20" />
          </div>
          <h1 className="text-2xl font-bold 2xl:text-2xl 4xl:text-5xl">
            Global Reach, Local Expertise
          </h1>
          <p className="text-[14px] pt-3 2xl:text-xl 4xl:text-2xl sm:text-xl md:text-base xs:text-lg">
            Our global presence means you get the benefits of international
            expertise combined with local knowledge, ensuring service excellence
            no matter where you operate.
          </p>
        </div>
      </div>
    </>
  );
};

export default Solutions;
