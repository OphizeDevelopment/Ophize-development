// Importing image assets
import img from "../../assets/logiside.png";
import w1 from "../../assets/warehouse1.png";
import w2 from "../../assets/warehouse2.png";
import w3 from "../../assets/warehouse3.png";

const process = () => {
  // Array of services, each with an image source, title, and description
  const services = [
    {
      imgSrc: w1,
      title: "Warehouse Service",
      description:
        "Our warehouse solutions encompass precise inventory management, accurate record-keeping, and streamlined storage documentation to ensure product safety and traceability.",
    },
    {
      imgSrc: w2,
      title: "Care for Environment",
      description:
        "Environmental stewardship is integral to our operations. We document all eco-friendly practices and sustainability initiatives to minimize our carbon footprint in logistics",
    },
    {
      imgSrc: w3,
      title: "Safety & Quality",
      description:
        "We prioritize safety and quality in every step, maintaining meticulous documentation of compliance checks, handling procedures, and quality control measures",
    },
  ];

  return (
    <div className="bg-[#E2EDFA] flex justify-center items-center w-full mb-20">
      {/*  Inner container with flex layout and padding */}
      <div className="flex flex-col justify-center items-center gap-10 md:gap-20 px-10 py-20 w-full">
        {/* Title section */}
        <div className="text-black">
          <h1 className="md:text-4xl text-2xl text-center tracking-wide font-bold">
            Our Logistics Documentation Process
          </h1>
        </div>
        {/* Content section with flexible layout for image and service descriptions */}
        <div className="flex md:flex-row flex-col items-center gap-10 justify-center">
          {/* Image container */}
          <div className=" flex justify-center items-center">
            <img
              src={img}
              alt="Logistics Process"
              className="w-[30rem] xl:w-auto"
            />
          </div>

          {/* Services container */}
          <div className="md:w-1/3">
            <div className="flex flex-col gap-8 ">
              {/* Mapping each service to a layout */}
              {services.map((service, index) => (
                <div
                  key={index}
                  className="flex md:flex-row flex-col sm:gap-8 gap-5 items-start"
                >
                  <img src={service.imgSrc} alt={service.title} />
                  <div className="flex flex-col gap-4">
                    <h1 className="xl:text-2xl text-lg font-bold">
                      {service.title}
                    </h1>
                    <p className="xl:text-base text-sm">
                      {service.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default process;
