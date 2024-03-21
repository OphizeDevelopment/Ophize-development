import sol from "../../assets/hrsolution.png";

const ServicesHr = () => {
  return (
    <>
      {/* main container */}
      <div className="flex justify-center items-center px-10 lg:px-16 md:py-10 pb-20 md:h-screen m-8 ">
        {/* inner container for text and image */}
        <div className="flex md:flex-row flex-col justify-center items-center gap-5 2xl:w-[1440px] w-auto ">
          {/* text content container */}
          <div className=" flex flex-col gap-4 ">
            {/* title for the content */}
            <h1 className="xl:text-5xl md:text-4xl xs:text-xl xs3:text-3xl xs2:text-xl font-bold tracking-wide  text-start gap-5 xs:mt-5">
              Compreshnive Human Resources Services
            </h1>
            {/* Description paragraph */}
            <p className="text-start md:text-2xl xs3:text-base  xs3:text-center md:text-start  font-medium tracking-wide mt-5 xs:text-base ">
              Delve into the depth of our Human Resources expertise with a suite
              of services designed to elevate your company's HR fucntions. our
              offerings encompass the entire empolyee lifecyle,ensuring a
              seamless and stratgic approach to talent management.
            </p>
          </div>
          <div className="lg:h-full w-full  justify-center">
            <img src={sol} alt="Customized Financial Solutions" className="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicesHr;
