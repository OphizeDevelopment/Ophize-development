import rightarrow from "../../assets/right-arrow.png";
import serviceImage1 from "../../assets/service section photo.jpg";
import serviceImage2 from "../../assets/howitworks section photo.jpg";

const ServicesAbout = () => {
  return (
    <>
      <div className="flex justify-center">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8  2xl:w-[1440px] w-auto my-14 mx-12">
          
          <div className="">
           
            <div>
              

              <h1 className="md:text-2xl xs3:text-2xl text-xl font-bold">
                Benefits of Service
              </h1>
              <p className="text-inherit mt-3 text-slate-500 md:text-lg xs3:text-base text-base">
                Our BPO services are designed to enhance operational efficiency
                and deliver measurable business outcomes.
              </p>
              <p className="text-inherit mt-3 text-slate-500 md:text-lg xs3:text-base text-base">
                Partner with us to enjoy:
              </p>
            </div>


            <div className="mt-5">
              <ul className="grid grid-cols-1">
                <li className="font-medium items-start flex pb-2 2xl:text-2xl 4xl:text-4xl sm:text-xl md:text-base xs:text-">
                  <img
                    src={rightarrow}
                    className="mr-2 w-auto"
                    alt="Arrow"
                  ></img>
                  Streamlined Operations
                </li>
                <li className="font-medium items-start flex pb-2 2xl:text-2xl 4xl:text-4xl sm:text-xl md:text-base xs:text-lg">
                  <img
                    src={rightarrow}
                    className="mr-2 w-auto"
                    alt="Arrow"
                  ></img>
                  Expert Compliance Management
                </li>
                <li className="font-medium items-start flex pb-2 2xl:text-2xl 4xl:text-4xl sm:text-xl md:text-base xs:text-lg">
                  <img
                    src={rightarrow}
                    className="mr-2 w-auto"
                    alt="Arrow"
                  ></img>
                  Technological Advancement
                </li>
                <li className="font-medium items-start flex pb-2 2xl:text-2xl 4xl:text-4xl sm:text-xl md:text-base xs:text-lg">
                  <img
                    src={rightarrow}
                    className="mr-2 w-auto"
                    alt="Arrow"
                  ></img>
                  Cost Saving
                </li>
              </ul>
            </div>
          </div>

         
          <div className="mx-8 text-center ">
            <img src={serviceImage1} className="w-full" alt="Service Section" />
          </div>

          
          <div className="mx-8 flex justify-center items-center text-center 2xl:pr-8">

            <img
              src={serviceImage2}
              className="w-full pt-7"
              alt="How It Works Section"
            />
          </div>


          <div className="">
            <div className="mt-14">
              <h1 className="md:text-2xl xs3:text-2xl text-xl font-bold">
                How It Works
              </h1>
              <p className="text-slate-500 md:text-lg xs3:text-base text-lg mt-4">
                We take a structured approach to manage your business processes:
              </p>
            </div>
            <ul className="list-decimal text-bold text-slate-500 text-medium pt-2 2xl:text-2xl 4xl:text-3xl 4xl:pt-2 sm:text-xl md:text-base xs:text-lg">
              <li className="mb-5">
                <span className="font-bold">Assessment</span>: We begin by
                evaluating your current processes to identify areas for
                improvement.
              </li>
              <li className="mb-5">
                <span className="font-bold">Customization</span>: Our team
                designs a service model tailored to your specific business
                needs.
              </li>
              <li className="mb-5">
                <span className="font-bold">Integration</span>: We seamlessly
                integrate our solutions with your existing systems for minimal
                disruption.
              </li>
              <li className="mb-5">
                <span className="font-bold">Execution</span>: Our skilled
                professionals take over the processes, ensuring high-quality
                output and performance.
              </li>
              <li>
                <span className="font-bold">Continuous Improvement</span>: We
                regularly review and refine our strategies to ensure ongoing
                efficiency and effectiveness.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
export default ServicesAbout;
