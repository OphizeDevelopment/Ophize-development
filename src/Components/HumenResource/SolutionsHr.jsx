import hrS1 from "../../assets/hrS1.png";
import hrS2 from "../../assets/hrS2.png";
import hrS3 from "../../assets/hrS3.png";
import hrS4 from "../../assets/hrS4.png";
import hrS5 from "../../assets/hrS5.png";
import hrS6 from "../../assets/hrS6.png";
import hrS7 from "../../assets/hrS7.png";
import hrS8 from "../../assets/hrS8.png";

import services from "../Finance/services";

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
  // gap-10 px-10 md:py-36 py-16

  return (
    <>
      {/* container div */}
      <div className="w-full xs3:px-20 px-10 py-10 ">
        {/* inner container */}
        <div className="flex flex-col gap-10 ">
          {/* title of the section */}
          <div className=" text-center flex flex-col gap-4">
            <h1 className="text-[#353535] md:text-4xl xs3:text-2xl text-xl tracking-wide font-bold">
              Enhancing Organizational Performance through <br /> Strategic HR
              Solutions
            </h1>
          </div>
          {/* container for displaying the solutions */}
          <div className="flex gap-10 flex-wrap md:flex-row justify-center items-center">
            {solutions.map((solution) => (
              <div
                key={solution.id}
                className="xs3:flex items-start w-[35rem] xs3:gap-8 gap-3  xs3:px-10 px-3 py-10"
              >
                <img src={solution.imgSrc} alt="" />
                <div>
                  <h1 className="text-violet-700 font-extrabold md:text-3xl border-b-2 border-black mb-5">
                    {solution.title}
                  </h1>
                  <p className="text-black font-medium text-lg">
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
