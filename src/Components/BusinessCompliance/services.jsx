const services = () => {
  // array for business services
  const services = [
    {
      title: "KYC management",
      description:
        "Effortlessly integrate your schedule with our customer-centric verfication process.We priortize your time with adaptable appointement options to streamline your KYC requirements",
    },
    {
      title: "QA and Compliance Audits",
      description:
        "This section talks about intergrating the user's schedule with customer-centric verfication process.it emphasizes prioriting the user's time with adaptable appointment options to streamline KYC(Know Your Customer) requiremenmts",
    },
    {
      title: "Crisis Management",
      description:
        "Similar to the first point,this section also mention the integration of the user's schedule and priortizing time with adaptable appointment options.it's likely about managing crisis through a streamlined KYC process",
    },
    {
      title: "Risk Assessment",
      description:
        "This section talks about intergrating the user's schedule with customer-centric verfication process.it emphasizes prioriting the user's time with adaptable appointment options to streamline KYC(Know Your Customer) requiremenmts",
    },
    {
      title: "Law of land",
      description:
        "This section talks about intergrating the user's schedule with customer-centric verfication process.it emphasizes prioriting the user's time with adaptable appointment options to streamline KYC(Know Your Customer) requiremenmts",
    },
    {
      title: "AML policy Management",
      description:
        "This section talks about intergrating the user's schedule with customer-centric verfication process.it emphasizes prioriting the user's time with adaptable appointment options to streamline KYC(Know Your Customer) requiremenmts",
    },
    {
      title: "Regulatory Compliance Monitoring",
      description:
        "This section talks about intergrating the user's schedule with customer-centric verfication process.it emphasizes prioriting the user's time with adaptable appointment options to streamline KYC(Know Your Customer) requiremenmts",
    },
    {
      title: "EML Polices Management",
      description:
        "This section talks about intergrating the user's schedule with customer-centric verfication process.it emphasizes prioriting the user's time with adaptable appointment options to streamline KYC(Know Your Customer) requiremenmts",
    },
  ];
  return (
    <>
      <div className="w-full xs3:px-20 px-10 py-20">
        <div className="flex flex-col gap-10">
        {/* title and subtitle */}
        <div className="text-center flex flex-col gap-4">
          <h1 className="md:text-4xl text-4xl font-bold text-center text-gray-800 xs:mt-10 tracking-wide">
            Services we offer
          </h1>

          <h1 className="md:text-lg text-base  text-center text-gray-500 ">
            Who is Nextcent suitable for?
          </h1>
        </div>
        {/* container for displayingn each services items */}
        <div className="flex flex-wrap gap-10 justify-center md:mt-10">
          {/* mapping each service items */}
          {services.map((service, index) => (
            <div key={index} className="xs3:flex items-start w-[35rem] xs3:gap-8 gap-3 xs3:px-10 px-3 py-10">
              {/* service card */}
              <div className="flex  gap-5 border-l-4 border-blue-700 pl-5 min-h-40 items-center">
                {/* service title and description container */}
                <div className="flex flex-col ">
                  {/* service title */}
                  <h1 className="md:text-2xl text-xl font-bold mb-2">
                    {service.title}
                  </h1>
                  {/* services description */}
                  <p className="md:text-base text-sm font-medium  lg:text-lg">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        </div>
      </div>
      
    </>
  );
};

export default services;