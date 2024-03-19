import adminisupport from "../../assets/adminsupport.png";
import calander from "../../assets/calander.png";
import cooperate from "../../assets/coperate.png";
import finance from "../../assets/finance.png";
import legalsupport from "../../assets/legalsupport.png";
import medical from "../../assets/medical.png";
import passport from "../../assets/passport.png";

const OptimizingCard = ({ title, description, icon }) => {
  return (
    <div className="flex flex-col md:flex-row md:text-left md:items-start mx-auto  w-auto ">
      {/* Inner container for the card's content */}
      <div className="flex flex-col gap-3 mb-5 lg:w-full ">
        <img src={icon} alt={title} className="w-10 h-10" />
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
      {/* main div */}
      <div className="p-9">
        {/* main optimizing page head */}
        <div className="p-8 md:pl-40">
          <h1 className="capitalize font-bold tracking-wide xl:text-4xl lg:text-3xl sm:text-2xl  w-full xs:text-xl ">
            Optimizing Efficiency :
          </h1>
          <p className=" text-black lg:text-xl text-base font-medium">
            Unparalleled Administrative Support for Every Aspect of Your
            Business
          </p>
        </div>
        <div className="grid md:grid-cols-2 md:grid-rows-4 lg:grid-cols-2 2xl:grid-cols-4 2xl:grid-rows-2  p-8 gap-4 items-center">
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
    </>
  );
};
export default Efficiency;
