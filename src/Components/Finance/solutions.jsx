 
import sideimg from "../../assets/finance-sideimg.png";

const solutions = () => {
  return (
    <>
      <div className="flex justify-center items-center xs3:px-10 md:py-10 pb-5 md:pb-20"> 

        <div className="flex md:flex-row flex-col justify-center items-center gap-10 mx-11">
          <div>
            <img src={sideimg} alt="Customized Financial Solutions" />
          </div> 
          <div className="lg:w-[50rem]  flex flex-col gap-4">
            
            <h1 className="xl:text-4xl xs3:text-3xl xs2:text-xl font-bold tracking-wide xs3:text-start text-center">
              Tailored to Your Business: Customized Financial Solutions
            </h1>
            <p className="text-[#9CA3AF] xs3:text-base text-sm xs3:text-start text-center">
              At the core of our services lies a deep understanding that each
              business has its distinct financial management needs. Our suite of
              services is not a one-size-fits-all solution; instead, we
              specialize in crafting a bespoke approach that aligns perfectly
              with the unique operations and objectives of your business.
            </p>
            <p className="text-[#305197] xs3:text-base text-sm xs3:text-start text-center">
              Explore our stratergies
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default solutions;
