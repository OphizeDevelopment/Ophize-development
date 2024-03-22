// Importing image assets for service icons
import f1 from "../../assets/f1.png";
import f2 from "../../assets/f2.png";
import f3 from "../../assets/f3.png";
import f4 from "../../assets/f4.png";
import f5 from "../../assets/f5.png";

const services = () => {
  //Array of service objects, each containing an id, image source, title, and description
  const services = [
    {
      id: 1,
      imgSrc: f1,
      title: "Accounts Receivable (AR) Services",
      description:
        "Accelerate your cash flow with our comprehensive invoice management, credit assessments, and collections strategies.",
    },
    {
      id: 2,
      imgSrc: f2,
      title: "Accounts Payable (AP) Services",
      description:
        "Optimize your payment cycles with our robust invoice processing, payment scheduling, and vendor mangement syastem.",
    },
  ];
  const services1 = [
    {
      id: 1,
      imgSrc: f3,
      title: "Banking",
      description:
        "Safe and effective banking options designed to handle your financial dealings with the highest accuracy.",
    },
    {
      id: 2,
      imgSrc: f4,
      title: "Multiple ERP",
      description:
        "Seamless integration with multiple ERP systems to streamline financial operations and data management.",
    },
    {
      id: 3,
      imgSrc: f5,
      title: "Report Mangement",
      description:
        "Detailed and accurate financial reporting to help you make informed decisions and maintain compliance.",
    },
  ];

  return (
    <>
      <div className="w-full xs3:px-20 px-10 py-10 md:py-20">
        {/* Inner container for the services section with vertical spacing */}
        <div className="flex flex-col gap-5 lg:gap-10">
          {/* Title and subtitle for the section */}
          <div className=" text-center flex flex-col gap-4">
            <h1 className="text-[#353535] md:text-4xl xs3:text-2xl text-xl tracking-wide font-bold">
              Better Strategy With <br />
              Finance Support
            </h1>
            <p className="md:text-lg xs3:text-base text-sm">
              Navigate Financial Complexity with Expertise in Accounts
              Management and Operational Efficiency
            </p>
          </div>

          {/* Container for displaying the first set of service items */}
          <div className="flex flex-wrap gap-10 justify-center md:mt-10">
            {services.map((service) => (
              <div
                key={service.id}
                className="xs3:flex items-start w-[35rem] xs3:gap-8 gap-3 border border-[#1C4EFF] xs3:px-10 px-3 py-10"
              >
                <img src={service.imgSrc} alt={service.title} />
                <div>
                  <h1 className="xs3:text-lg font-bold">{service.title}</h1>
                  <p className="md:text-base text-xs">{service.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Container for displaying the second set of service items */}
          <div className="flex flex-wrap gap-10 justify-center">
            {services1.map((service) => (
              <div
                key={service.id}
                className="xs3:flex items-start w-[35rem] xs3:gap-8 gap-3 border border-[#1C4EFF] xs3:px-10 px-3 py-10"
              >
                <img src={service.imgSrc} alt={service.title} />
                <div>
                  <h1 className="xs3:text-lg font-bold">{service.title}</h1>
                  <p className="md:text-base text-xs">{service.description}</p>
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
