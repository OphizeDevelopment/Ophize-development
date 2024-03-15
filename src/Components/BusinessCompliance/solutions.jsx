import busSol from "../../assets/busSol.png";

const solutions = () => {
  return (
    <>
      <div className="flex md:flex-row flex-col justify-center md:py-16 md:px-16 py-5  mb-10 md:mb-0 px-14 items-center gap-10 p-10">
        {/* img container */}
        <div>
          <img src={busSol} alt="Business Solutions" />
        </div>
        {/* text content container */}
        <div className="flex flex-col md:items-start items-center gap-5 md:w-[40rem] justify-center md:text-start text-center ">
          {/* title of the section */}
          <h1 className="uppercase font-bold tracking-wide xl:text-4xl lg:text-3xl sm:text-2xl w-full xs:text-4xl mt-5">
            Optimal IT security solutions
          </h1>
          {/* Description paragraph */}
          <p className="text-black lg:text-xl text-base font-medium">
            We are Committed to delivering superior IT security in a dynamic
            digital landscape. Our team of certified,dedicated, and
            forward-thinking professionals ensures your data is protected and
            your business operation are secure and resilient against cyber
            threats.
          </p>
          <h1 className="text-black text-2xl font-semibold">Our Mission</h1>
          <p className="text-black lg:text-xl text-base ">
            Empower business with advanced security startegies and
            infrastructure,fostering a secure and confident digital enviornnment
          </p>
        </div>
      </div>
    </>
  );
};
export default solutions;
