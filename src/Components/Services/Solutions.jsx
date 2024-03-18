import Sr1 from "../../assets/serSol.png";
import Sr2 from "../../assets/serSol2.png";
import Sr3 from "../../assets/serSol3.png";
import Sr4 from "../../assets/serSol4.png";
import Sr5 from "../../assets/serSol5.png";
import Sr6 from "../../assets/serSol6.png";
import Sr7 from "../../assets/serSol7.png";
import Sr8 from "../../assets/serSol8.png";
import Sr9 from "../../assets/serSol9.png";

const SolutionsService = () => {
  const solutions = [
    {
      id: 1,
      imgSrc: Sr1,
      title: "Finance and Accounts",
      url:"/financeandaccounts",
      description:
        "Precision in finance for business excellence. Tailored accounting solutions that align with your goals.",
    },
    {
      id: 2,
      imgSrc: Sr2,
      title: "Logistics Documentation",
      url:"/logisticsdocumentation",
      description:
        "Simplify your supply chain with comprehensive logistics documentation services for seamless operations.",
    },
    {
      id: 3,
      imgSrc: Sr3,
      title: "IT Security and Services",
      url:"/itandsecurity",
      description:
        "Fortify your digital assets with robust IT security solutions.Stay protected in a connected world.",
    },
    {
      id: 4,
      imgSrc: Sr4,
      title: "Business Compliances",
      url:"/businesscompliance",
      description:
        "Ensure your business integrity with our comprehensive compliance services. Stay ahead of regulations.",
    },
    {
      id: 5,
      imgSrc: Sr5,
      title: "Digital Media Marketing",
      url:"/digitalmarketing",
      description:
        "Boost your online presence with strategic digital marketing campaigns designed to increase engagement and conversions.",
    },
    {
      id: 6,
      imgSrc: Sr6,
      title: "Software Development",
      url:"/softwaredevelopment",
      description:
        "Custom software solutions that drive innovation. Transform your operations with our development expertise.",
    },
    {
      id: 7,
      imgSrc: Sr7,
      title: "Human Resources",
      url:"/humanresource",
      description:
        "Empower your workforce with our HR services. From talent acquisition to performance management, we cover it all",
    },
    {
      id: 8,
      imgSrc: Sr8,
      title: "Administration Services",
      url:"/administration",
      description:
        "Efficient back-office support to streamline your administrative tasks. Focus on growth while we handle the details.",
    },
    {
      id: 9,
      imgSrc: Sr9,
      title: "Business Strategic",
      description:
        "Strategic planning for a future-proof business. Navigate market complexities with our expert insights.",
    },
  ];
  return (
    <>
      {/* main div for the container */}
      <div className="flex flex-wrap p-10 items-center justify-center 2xl:w-[1440px] w-full">
        {/* container for displaying the solutions */}
        <div className="grid lg:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 gap-9 items-center justify-center w-full ">
          {/* mapping the solutions */}
          {solutions.map((solution, index) => (
            <div
              key={index}
              className=" w-full xl:w-[25rem] flex flex-col items-start justify-center md:gap-5 p-10 md:h-96  sm:h-70  shadow-md border border-blue-300 gap-6"
            >
              <img src={solution.imgSrc} alt="img" className="h-28" />
              <h1 className="text-2xl sm:text-lg font-semibold capitalize">
                {solution.title}
              </h1>
              <p className="text-lg sm:text-base capitalize text-zinc-600">
                {solution.description}
              </p>
              <a href={solution.url} className="text-lg sm:text-sm justify-end text-blue-700 capitalize ">
                explore more
              </a>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default SolutionsService;
