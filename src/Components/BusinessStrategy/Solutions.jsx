const Solutions = () => {
  const solution = [
    {
      id: 1,
      title: "Strategic planning",
      description:
        "Aligning long-term objectives with actionable strategies, we ensure sustainable growth, competitive advantage, and adaptation to evolving market conditions.",
    },
    {
      id: 2,
      title: "Market analysis",
      description:
        "Our thorough market analysis reveals trends and forecasts, empowering your business to capitalize on opportunities and outmaneuver competitors.",
    },
    {
      id: 3,
      title: "Organizational Design and Restructuring",
      description:
        "We restructure your organization to boost agility, streamline workflows, and foster a collaborative environment that responds dynamically to change.",
    },
    {
      id: 4,
      title: "Financial Advisory Services",
      description:
        "Our financial experts offer advice to maximize your profitability, ensure compliance, and manage risks in a complex economic landscape.",
    },
    {
      id: 5,
      title: "Supply chain optimization",
      description:
        "Optimizing your supply chain for resilience and efficiency, we enhance logistics, reduce costs, and ensure reliable delivery to meet customer demands.",
    },
    {
      id: 6,
      title: "Customer Experience Enhancement",
      description:
        "We transform your customer service to create memorable experiences, fostering loyalty and setting you apart in a crowded marketplace.",
    },
    {
      id: 7,
      title: "Strategic Talent Management",
      description:
        "Our approach to talent management strategically aligns with your corporate goals, ensuring you attract, develop, and retain top industry talent.",
    },
    {
      id: 8,
      title: "industry specific consulting",
      description:
        "Leveraging deep sector knowledge, we provide bespoke consultancy, addressing industry challenges and enhancing your firm's market position.",
    },
  ];

  return (
    <>
      {/* main container div */}

      <div className="w-full xs3:px-20 px-10 py-10 ">
        {/* inner container */}
        <div className="flex flex-col gap-10 items-center">
          {/* title section */}
          <div className="flex flex-col text-center gap-5 md:w-[750px] w-auto">
            <h1 className="text-[#353535] md:text-4xl xs3:text-2xl text-xl tracking-wide font-bold">
              Comprehensive Business Solutions
            </h1>
            <h1 className="text-[#353535] md:text-xl xs3:text-xl text-lg tracking-wide font-semibold">
              Optimizing Performance Across All Facts of Your Enterprise
            </h1>
          </div>
          {/* container for displaying solution */}
          <div className="flex flex-wrap gap-10 md:flex-row justify-center items-center 2xl:w-[1480px] w-full">
            {solution.map((sol) => (
              <div
                key={sol.id}
                className="xs3:flex items-start w-[35rem] xs3:gap-8 gap-3  xs3:px-10 px-3 py-10"
              >
                <div>
                  <h1 className="text-violet-700 md:text-2xl text-xl font-bold border-b-2 border-black mb-5">
                    {sol.title}
                  </h1>
                  <p className="text-black font-medium text-lg">
                    {sol.description}
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
export default Solutions;
