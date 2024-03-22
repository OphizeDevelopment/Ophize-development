/* eslint-disable react/no-unescaped-entities */
import businessSol from "../../assets/businessSol.png"; 

const BusinessSolution = () => {
  return (
    <>
      <div className="flex justify-center">
        
        <div className="  flex flex-wrap  justify-center  mb-5 pt-8">
         
          <div className="grid md:grid-cols-2 xs:grid-cols-1 items-center  ">
           
            <div className="h-full gap-6 flex flex-col justify-center items-center text-left p-8 bg-[#3B50BA] ">
              <div className="mx-12 p-24">
                <h1 className="capitalize text-white text-3xl font-bold">
                  Tailored Solutions for Every
                </h1>
                <h1 className="uppercase  md:text-4xl xs3:text-2xl text-xl font-bold text-red-400">
                  business need
                </h1>
                <p className=" xs3:text-base text-lg font-medium text-white mt-10">
                  we're committed to providing a suite of specialized services
                  that cater to the unique needs of your business. From
                  financial management to cutting-edge digital marketing, our
                  goal is to deliver excellence across all fronts. <br /> <br />{" "}
                  Explore the range of solutions we offer, each expertly
                  designed to propel your business forward. <br /> <br /> Let us
                  be the partners in your success story, providing the support
                  and expertise you need to thrive in today's competitive
                  market."
                </p>
              </div>
            </div>
           
            <div className="relative w-full h-full mt-7 mb-7 ">
              

              <img
                src={businessSol}
                alt="businessSol"
                className="object-cover w-full h-full "
              />
             
              <div className="absolute inset-0 flex flex-wrap justify-center items-center p-10 text-white bg-[#666C89E0] xs:p-5 md:p-4 ">
                <div className="mx-12 p-20">
                  <p className="text-base xs:text-base md:text-lg xl:text-xl font-medium text-center">
                    Our approach ensures that every line of code is crafted for
                    peak performance and efficiency. We focus on delivering
                    solutions that not only meet but exceed industry benchmarks
                    for speed and resource management. By optimizing our
                    development processes, we provide you with software that
                    operates at the highest level of efficiency, contributing to
                    a lean and agile business operation.
                  </p>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BusinessSolution;
