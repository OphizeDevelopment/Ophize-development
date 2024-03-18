import businessSol from "../../assets/businessSol.png";
import businessSolBg from "../../assets/businessSolBg.png";

const BusinessSolution = () => {
  return (
    <>
      {/* main container for the section */}
      <div className="w-full  flex flex-wrap  justify-center">
        {/* inner container for the content */}
        <div className="grid md:grid-cols-2 xs:grid-cols-1 items-center">
          {/* left side text container */}
          <div className="h-full gap-6 flex flex-col justify-center text-left p-8 bg-[#3B50BA]">
            <h1 className="capitalize text-white text-3xl font-bold">
              Tailored Solutions for Every
            </h1>
            <h1 className="uppercase  text-5xl font-bold text-red-400">
              business need
            </h1>
            <p className=" text-xl font-medium text-white">
              we're committed to providing a suite of specialized services that
              cater to the unique needs of your business. From financial
              management to cutting-edge digital marketing, our goal is to
              deliver excellence across all fronts. <br /> <br /> Explore the
              range of solutions we offer, each expertly designed to propel your
              business forward. <br /> <br /> Let us be the partners in your
              success story, providing the support and expertise you need to
              thrive in today's competitive market."
            </p>
          </div>
          {/* right side text container */}
          <div className="relative w-full h-full  ">
            {/* image for the background */}
            <img
              src={businessSol}
              alt="businessSol"
              className="object-cover w-full h-full "
            />
            {/* container for the text */}
            <div className="absolute inset-0 flex justify-center items-center p-10 text-white bg-[#666C89E0] xs:p-5 md:p-4">
              <p className="text-2xl font-medium xs:text-base sm:text-3xl ">
                Our approach ensures that every line of code is crafted for peak
                performance and efficiency. We focus on delivering solutions
                that not only meet but exceed industry benchmarks for speed and
                resource management. By optimizing our development processes, we
                provide you with software that operates at the highest level of
                efficiency, contributing to a lean and agile business operation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BusinessSolution;