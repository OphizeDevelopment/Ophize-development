

const TechnologiesServices = () => {
  return (
    <>
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 justify-center p-3 mt-4 bg-[#EBEFFF] m-8 2xl:w-[1440px] w-auto mx-auto">
        <div className="p-8 pt-0 pb-0 mt-7">
          {/* Title and introductory text */}
          <div className="p-5 pt-2">
            <h1 className="text-2xl  font-bold 2xl:text-4xl 4xl:text-5xl md:text-start">
              Streamlining Go-to-Market Strategies with Advanced Technologies
            </h1>
          </div>
        </div>
        <div className="p-8 pt-0 pb-0 pl-1 text-start text-slate-500 font-medium 2xl:text-2xl 4xl:text-3xl sm:text-xl md:text-base xs:text-lg">
          <div className="p-11 pt-0 mt-7">
            <p className="pt-3 ">
              At Ophize, we simplify the complex. Our mission is to empower your
              go-to-market teams with cutting-edge tools that foster
              collaboration, drive innovation, and deliver deep analytical
              insights.
            </p>
            <p className="pt-3">
              We are dedicated to crafting comprehensive solutions that tackle
              your most challenging problems and yield tangible results.
            </p>
            <p className="pt-3">
              We're here to deliver exceptional services that resonate with your
              business objectives.
            </p>
          </div>
        </div>
      </div>

      {/* Statistics Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 p-8  bg-[#EBEFFF] sm:items-center m-7 2xl:w-[1440px] w-auto mx-auto">
        <div className="p-8 pt-0 pb-0">
          <h1 className="text-2xl font-medium 2xl:text-2xl 4xl:text-5xl">
            200+ Experts
          </h1>
          <p className="text-slate-500 pt-3 2xl:text-2xl 4xl:text-3xl sm:text-xl md:text-base xs:text-lg">
            Ophize has expanded from a specialized team to over 200 experts in
            services, committed to simplifying business.
          </p>
        </div>
        <div className="p-8 pt-0 pb-0">
          <h1 className="text-2xl font-medium 2xl:text-2xl 4xl:text-5xl">
            1000+ Businesses Served
          </h1>
          <p className="text-slate-500 pt-3 2xl:text-2xl 4xl:text-2xl sm:text-xl md:text-base xs:text-lg">
            More than 10,000 businesses have entrusted Ophize with their service
            needs, a testament to our effective strategies and client-focused
            services.
          </p>
        </div>
        <div className="p-8 pt-0">
          <h1 className="text-2xl font-medium 2xl:text-2xl 4xl:text-5xl">
            160,000+ Customers
          </h1>
          <p className="text-slate-500 pt-3 2xl:text-2xl 4xl:text-2xl sm:text-xl md:text-base xs:text-lg">
            More than 160,000 happy customers, who explore our wide variety of
            services, which helps to enhance their business strategies.
          </p>
        </div>
      </div>
      </div>
    </>
  );
};

export default TechnologiesServices;
