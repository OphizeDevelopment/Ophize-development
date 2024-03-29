/* eslint-disable react/prop-types */
import adminisupport from "../../assets/adminsupport.png";
import calander from "../../assets/calander.png";
import cooperate from "../../assets/coperate.png";
import finance from "../../assets/finance.png";
import legalsupport from "../../assets/legalsupport.png";
import medical from "../../assets/medical.png";
import passport from "../../assets/passport.png";

const OptimizingCard = ({ title, description, icon }) => {
  return (
    <div className="flex flex-col md:flex-row md:text-left md:items-start 2xl:mx-auto  w-auto gap-20  ">
      <div className="flex flex-col gap-3 mb-5 lg:w-full  h-auto items-start  ">
        <img src={icon} alt={title} className="w-auto h-auto" />
        <h2 className="md:text-xl font-semibold capitalize">{title}</h2>
        <p className="text-gray-600 xl:w-[20rem] leading-relaxed md:text-base text-sm">
          {description}
        </p>
      </div>
    </div>
  );
};

const Efficiency = () => {
  return (
    <>
      <div className="flex justify-center">
        <div className="2xl:w-[1440px] w-auto mx-8 my-14">
          <div className="m-5 2xl:pl-44">
            <h1 className="capitalize font-bold tracking-wide xl:text-4xl lg:text-3xl sm:text-2xl  w-full xs:text-xl ">
              Optimizing Efficiency :
            </h1>
            <p className=" text-black lg:text-xl text-base font-medium mt-3">
              Unparalleled Administrative Support for Every Aspect of Your
              Business
            </p>
          </div>
          <div className="grid md:grid-cols-2 md:grid-rows-4 lg:grid-cols-2 2xl:grid-cols-2 2xl:grid-rows-2 p-5 gap-12 items-center">
            <OptimizingCard
              title="Administrative Support"
              description="Streamline your schedule with our premium administrative support tailored to meet your business needs."
              icon={adminisupport}
            />
            <OptimizingCard
              title="Legal Administrative Support"
              description="Enhance your legal operations with our reliable administrative support services designed for legal professionals."
              icon={legalsupport}
            />
            <OptimizingCard
              title="Travel Management"
              description="Navigate the complexities of corporate travel with ease with our comprehensive travel management services"
              icon={passport}
            />
            <OptimizingCard
              title="Calendar Management"
              description="Manage your time effectively with our personalized calendar management solutions."
              icon={calander}
            />
            <OptimizingCard
              title="Medical Administrative Support"
              description="Optimize your healthcare administration with our specialized support services for medical professionals."
              icon={medical}
            />
            <OptimizingCard
              title="Financial Administrative Support"
              description="Secure and streamline your financial administration with our expert support services."
              icon={finance}
            />
            <OptimizingCard
              title="Cooperate Event Management"
              description="Transform your corporate events with our expert planning and management services."
              icon={cooperate}
            />
            <OptimizingCard
              title="Facility Management"
              description="Maintain excellence in your facility operations with our comprehensive management services."
              icon={cooperate}
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default Efficiency;
