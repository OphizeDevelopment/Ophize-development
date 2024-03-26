import sol from "../../assets/hrsolution.png";

const ServicesHr = () => {
  return (
    <>
      <div className="flex justify-center items-center p-14  2xl:w-[1440px] w-auto mx-auto ] mb-6">
        <div className="flex md:flex-row flex-col justify-center items-center gap-5  mt-7 ">
          <div className=" flex flex-col">
            <h1 className="xl:text-5xl md:text-4xl xs:text-xl xs3:text-3xl xs2:text-xl font-bold tracking-wide  text-start gap-5 ">
              Compreshnive Human Resources Services
            </h1>

            <p className=" md:text-2xl xs3:text-base  xs3:text-center md:text-start  font-medium tracking-wide mt-5 xs:text-base text-justify">
              Delve into the depth of our Human Resources expertise with a suite
              of services designed to elevate your company's HR fucntions. our
              offerings encompass the entire empolyee lifecyle,ensuring a
              seamless and stratgic approach to talent management.
            </p>
          </div>
          <div className="flex items-center justify-center md:w-[40rem]  w-auto h-full">
            <img
              src={sol}
              alt="Human resource Services"
              className="h-full w-full"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicesHr;
