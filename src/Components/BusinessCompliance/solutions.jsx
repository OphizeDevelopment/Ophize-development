import busSol from "../../assets/busSol.png";

const solutions = () => {
  return (
    <>
      <div className="flex md:flex-row flex-col justify-center gap-10 items-center my-14 mx-10">
        <div className="w-auto h-auto flex justify-center items-center">
          <img src={busSol} alt="Business Solutions" />
        </div>
        <div className="flex flex-col md:items-start items-center  md:w-[40rem] justify-center md:text-start text-center ">
          <h1 className="uppercase font-bold tracking-wide xl:text-4xl lg:text-3xl sm:text-2xl  w-full xs:text-xl mt-5">
            Optimal IT security solutions
          </h1>
          <p className="text-black lg:text-xl text-base font-medium mt-7 text-justify tracking-wide">
            We are Committed to delivering superior IT security in a dynamic
            digital landscape. Our team of certified,dedicated, and
            forward-thinking professionals ensures your data is protected and
            your business operation are secure and resilient against cyber
            threats.
          </p>
          <h1 className="text-black text-2xl xs:text-xl font-semibold mt-8">
            Our Mission
          </h1>
          <p className="text-black lg:text-xl text-base font-medium mt-7 tracking-wide">
            Empower business with advanced security startegies and
            infrastructure,fostering a secure and confident digital enviornnment
          </p>
        </div>
      </div>
    </>
  );
};
export default solutions;
