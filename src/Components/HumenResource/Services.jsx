import sol from "../../assets/hrsolution.png";

const ServicesHr = () => {
  return (
    <>
      {/* main container */}
      <div className="flex justify-center items-center px-10 md:py-10 pb-20">
        {/* inner container for text and image */}
        <div className="flex md:flex-row flex-col justify-center items-center  ">
          {/* text content container */}
          <div className="lg:w-[80rem] h-auto flex flex-col gap-4 p-5">
            {/* title for the content */}
            <h1 className="xl:text-4xl xs3:text-3xl xs2:text-xl font-bold tracking-wide  text-center gap-5 xs:mt-5">
              Compreshnive Human Resources Services
            </h1>
            {/* Description paragraph */}
            <p className="text-base md:text-2xl xs3:text-start text-center font-medium tracking-wide mt-5 xs:text-lg ">
              Delve into the depth of our Human Resources expertise with a suite
              of services designed to elevate your company's HR fucntions. our
              offerings encompass the entire empolyee lifecyle,ensuring a
              seamless and stratgic approach to talent management.
            </p>
          </div>
          <div>
            <img src={sol} alt="Customized Financial Solutions" />
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicesHr;
