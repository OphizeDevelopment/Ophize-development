import rightarrow from "../../assets/right-arrow.png";
import serviceImage1 from "../../assets/service section photo.jpg";
import serviceImage2 from "../../assets/howitworks section photo.jpg";


const ServicesAbout = () => {
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8 m-7">
        {/* Section: Benefit of Service */}
        <div className="sm:p-6 pt-0 pb-0 m-7">
          {/* Left side with benefits information */}
          <div className="p-5 pt-0">
            {/* Title and introductory text */}
            <h1 className="text-2xl font-bold 2xl:text-4xl 4xl:text-5xl ">
              Benefits of Service
            </h1>
            <p className="text-inherit mt-3 text-slate-500 text-base 2xl:text-2xl 4xl:text-4xl sm:text-xl md:text-base xs:text-lg">
              Our BPO services are designed to enhance operational efficiency
              and deliver measurable business outcomes.
            </p>
            <p className="text-medium text-inherit text-slate-500 text-base 2xl:text-2xl 4xl:text-4xl sm:text-xl md:text-base xs:text-lg">
              Partner with us to enjoy:
            </p>
          </div>

          {/* List of benefits */}
          <div className="p-5 pb-0 pt-0">
            <ul className="grid grid-cols-1">
              <li className="font-medium items-start flex pb-2 2xl:text-2xl 4xl:text-4xl sm:text-xl md:text-base xs:text-lg">
                <img src={rightarrow} className="mr-2 w-auto" alt="Arrow"></img>
                Streamlined Operations
              </li>
              <li className="font-medium items-start flex pb-2 2xl:text-2xl 4xl:text-4xl sm:text-xl md:text-base xs:text-lg">
                <img src={rightarrow} className="mr-2 w-auto" alt="Arrow"></img>
                Expert Compliance Management
              </li>
              <li className="font-medium items-start flex pb-2 2xl:text-2xl 4xl:text-4xl sm:text-xl md:text-base xs:text-lg">
                <img src={rightarrow} className="mr-2 w-auto" alt="Arrow"></img>
                Technological Advancement
              </li>
              <li className="font-medium items-start flex pb-2 2xl:text-2xl 4xl:text-4xl sm:text-xl md:text-base xs:text-lg">
                <img src={rightarrow} className="mr-2 w-auto" alt="Arrow"></img>
                Cost Saving
              </li>
            </ul>
          </div>
        </div>

        {/* Right side with image */}
        <div className="p-8 pt-0 pb-0 text-center">
          <img src={serviceImage1} className="w-full" alt="Service Section" />
        </div>

        {/* Section: How It Works */}
        {/* Left side with image */}
        <div className="p-8 pb-0 pt-0 text-center">
          <img
            src={serviceImage2}
            className="w-full pt-7"
            alt="How It Works Section"
          />
        </div>

        {/* Right side with information about how it works */}
        <div className="p-8 pt-0">
          <div className="p-5 pl-0 pt-0 xl:pt-5">
            <h1 className="text-2xl font-bold pt-0 p-5 pl-0 pb-2 2xl:text-4xl 4xl:text-5xl">
              How It Works
            </h1>
            <p className="text-slate-500 text-medium 2xl:text-2xl 4xl:text-3xl sm:text-xl md:text-base xs:text-lg">
              We take a structured approach to manage your business processes:
            </p>
          </div>
          <ul className="list-decimal text-bold text-slate-500 text-medium pt-2 2xl:text-2xl 4xl:text-3xl 4xl:pt-2 sm:text-xl md:text-base xs:text-lg">
            <li>
              <span className="font-bold">Assessment</span>: We begin by
              evaluating your current processes to identify areas for
              improvement.
            </li>
            <li>
              <span className="font-bold">Customization</span>: Our team designs
              a service model tailored to your specific business needs.
            </li>
            <li>
              <span className="font-bold">Integration</span>: We seamlessly
              integrate our solutions with your existing systems for minimal
              disruption.
            </li>
            <li>
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
    </>
  );
};
export default ServicesAbout;
