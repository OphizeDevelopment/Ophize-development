import busSol from "../../assets/busSol.png";

const solutions = () => {
  return (
    <>
      <div>
        <div className="flex md:flex-row flex-col justify-center md:py-10 py-5 mb-10 md:mb-0 px-10 items-center">
          {/* img container */}
          <div>
            <img src={busSol} alt="Business Solutions" />
          </div>
          {/* text content container */}
          <div className="flex flex-col md:items-start items-center gap-5 md:w-[40rem] justify-center md:text-start text-center ml-20">
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
              infrastructure,fostering a secure and confident digital
              enviornnment
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default solutions;
