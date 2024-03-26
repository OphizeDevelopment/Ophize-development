import hrS1 from "../../assets/hrS1.png";
import hrS2 from "../../assets/hrS2.png";
import hrS3 from "../../assets/hrS3.png";
import hrS4 from "../../assets/hrS4.png";
import hrS5 from "../../assets/hrS5.png";
import hrS6 from "../../assets/hrS6.png";
import hrS7 from "../../assets/hrS7.png";
import hrS8 from "../../assets/hrS8.png"; 

const SolutionsHr = () => {
  const solutions = [
    {
      id: 1,
      imgSrc: hrS1,
      title: "HR Consultation",
      description:
        "Effortlessly intergrate your schedule with our customer-centric verification process.We prioritize your time with adaptable appointment options to streamline your KYC requirements",
    },
    {
      id: 2,
      imgSrc: hrS2,
      title: "Requirement Process",
      description:
        "Effortlessly intergrate your schedule with our customer-centric verification process.We prioritize your time with adaptable appointment options to streamline your KYC requirements",
    },
    {
      id: 3,
      imgSrc: hrS3,
      title: "Payroll Management",
      description:
        "Effortlessly intergrate your schedule with our customer-centric verification process.We prioritize your time with adaptable appointment options to streamline your KYC requirements",
    },
    {
      id: 4,
      imgSrc: hrS4,
      title: "VISA Process Management",
      description:
        "Effortlessly intergrate your schedule with our customer-centric verification process.We prioritize your time with adaptable appointment options to streamline your KYC requirements",
    },
    {
      id: 5,
      imgSrc: hrS5,
      title: "KRA/KPI Management",
      description:
        "Effortlessly intergrate your schedule with our customer-centric verification process.We prioritize your time with adaptable appointment options to streamline your KYC requirements",
    },
    {
      id: 6,
      imgSrc: hrS6,
      title: "Employee management",
      description:
        "Effortlessly intergrate your schedule with our customer-centric verification process.We prioritize your time with adaptable appointment options to streamline your KYC requirements",
    },
    {
      id: 7,
      imgSrc: hrS7,
      title: "Employee Compliance support",
      description:
        "Effortlessly intergrate your schedule with our customer-centric verification process.We prioritize your time with adaptable appointment options to streamline your KYC requirements",
    },
    {
      id: 8,
      imgSrc: hrS8,
      title: "Employee Exist Processing",
      description:
        "Effortlessly intergrate your schedule with our customer-centric verification process.We prioritize your time with adaptable appointment options to streamline your KYC requirements",
    },
  ];

  return (
    <>
      <div className="w-full xs3:px-20  2xl:w-[1480px] mx-auto">
        <div className="flex flex-col gap-10 items-center mt-9 mb-10 mx-6">
          <div className=" text-center flex   mt-6">
            <h1 className="text-[#353535] md:text-4xl xs3:text-2xl text-xl tracking-wide font-bold">
              Enhancing Organizational Performance through <br /> Strategic HR
              Solutions
            </h1>
          </div>
          <div className="flex  flex-wrap justify-center items-center 2xl:w-[1480px] w-full">
            {solutions.map((solution) => (
              <div
                key={solution.id}
                className="xs3:flex items-start w-[35rem] xs3:gap-8 gap-3  xs3:px-10 px-3 py-10"
              >
                <img src={solution.imgSrc} alt="" />
                <div>
                  <h1 className="text-violet-700 md:text-2xl text-xl font-bold border-b-2 border-black mb-5">
                    {solution.title}
                  </h1>
                  <p className="text-black font-medium md:text-base text-base text-justify tracking-wider">
                    {solution.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
export default SolutionsHr;
