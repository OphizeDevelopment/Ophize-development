import patternimage from "../../assets/Pattern.png";
import deiveryimage from "../../assets/deliveryontime.png";
import serviceexcellenceimage from "../../assets/service.png";
import whyusimage from "../../assets/whyussection.png";

const BpoSection = () => {
  return (
    <>
    <div className="flex justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2 justify-center 2xl:w-[1440px] w-auto my-14">
        <div className="mx-9">
          
          <div className="p-5 pt-2">
            <p className="text-lg flex items-center 2xl:text-2xl 4xl:text-2xl">
              <img src={patternimage} className="mr-2 " />
              Why Us
            </p>
            <h1 className="text-2xl pt-2  font-bold 2xl:text-4xl 4xl:text-5xl">
              Why Ophize is Your Ideal BPO Partner
            </h1>
            <p className="text-slate-500 pt-3 2xl:text-2xl 4xl:text-3xl sm:text-xl md:text-base xs:text-lg">
              At Ophize,we redefine business process outsourcing by providing
              exceptional customer service, technical support, and back-office
              solutions. Our global reach and expertise empower your business to
              excel in a competitive marketplace.
            </p>
            <p className="text-slate-500 pt-3 2xl:text-2xl 4xl:text-3xl sm:text-xl md:text-base xs:text-lg mt-6">
              With our innovative approaches and commitment to quality, we help
              you transform challenges into opportunities.
            </p>
            <p className="flex items-center text-xl 2xl:text-2xl 4xl:text-4xl mb-4 mt-4">
              <img src={deiveryimage} className="mr-3" />
              Delivery on Time
            </p>
            <p className="flex items-center text-xl 2xl:text-2xl 4xl:text-4xl">
              <img src={serviceexcellenceimage} className="mr-3" />
              Service Excellence
            </p>
          </div>
        </div>
       
          <div className="mx-9 flex justify-center items-center">
            
            <img src={whyusimage} className="w-full" />
          </div>
       
      </div>
      </div>
    </>
  );
};

export default BpoSection;
