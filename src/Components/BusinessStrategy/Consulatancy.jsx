import bg from "../../assets/businessCon.png";
import bg2 from "../../assets/businessCon2.png";

const Consultancy = () => {
  return (
    <>
      {/* main parent container for the content */}
      <div className="w-full justify-center flex flex-col items-center  gap-14  py-14">
        {/* first child container */}
        <div className="flex md:flex-row flex-col md:gap-14 xs:flex-col mx-10 xs:gap-5">
          {/* container for the text  */}
          <div className="flex flex-col gap-5 text-black md:w-[550px] w-auto">
            <h1 className="text-[#353535] md:text-3xl xs3:text-2xl text-xl tracking-wide font-bold">
              Strategic Business Consultancy Solutions
            </h1>
            <p className="md:text-lg xs3:text-base text-sm">
              Explore the breadth of our strategic business expertise with a
              portfolio of services tailored to enhance your organization's
              strategic planning and execution. Our consultancy spans all core
              business functions, ensuring integrated and visionary leadership
              for sustainable growth.
            </p>
            <p className="md:text-lg xs3:text-base text-sm">
              Keep in mind that to implement these changes into the actual
              image, you would need to use a graphic design tool or service. If
              you need assistance with this or any other text modifications,
              feel free to ask!
            </p>
          </div>
          <div className="w-auto mt-5">
            <img src={bg} alt="Business consulatancy solution" />
          </div>
        </div>
        {/* second child container */}
        <div className="flex md:flex-row-reverse flex-col md:gap-14 xs:flex-col mx-10 xs:gap-5">
          {/* container for the text of second child */}
          <div className="flex flex-col justify-center items-center  gap-5 md:w-[550px]">
            <h1 className="text-[#353535] md:text-3xl xs3:text-2xl text-xl tracking-wide font-bold">
              Innovative Strategic Business Advisory
            </h1>
            <p className="md:text-lg xs3:text-base text-sm">
              Embark on a transformative journey with our Strategic Business
              Advisory services. Our comprehensive solutions are crafted to
              fortify your organization's strategic planning and management
              processes. We focus on creating synergies across all business
              units, propelling visionary leadership and driving competitive
              advantage for robust, future-ready enterprise growth.
            </p>
          </div>
          <div className="mt-5">
            <img src={bg2} alt="Strategic business advisory" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Consultancy;
