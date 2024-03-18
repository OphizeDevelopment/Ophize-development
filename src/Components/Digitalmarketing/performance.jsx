// Importing the graph image asset
import graph from "../../assets/graph.png";

const Performance = () => {
  return (
    <div className="flex justify-center items-center px-4 md:py-10 md:px-10">
      {/* Inner container with flexible layout for content and image, responsive for different screen sizes */}
      <div className="flex flex-col md:flex-row gap-8 md:gap-28 items-center w-full 2xl:max-w-[1440px] mx-auto">
        {/* Image container */}
        <img src={graph} alt="Graph" className="md:w-[40%]" />
        {/* Text content container */}
        <div className="p-6">
          {/* Button with title */}
          <button className="bg-[#F1F5F9] text-[#9CA3AF] px-8 py-1 rounded-xl">
            Elevating Your Digital Impact
          </button>
          {/* Description container with title and paragraph */}
          <div className="flex flex-col gap-4 mt-6">
            {/* Main title for the section */}
            <h1 className="text-[#111827] text-2xl md:text-3xl lg:text-4xl tracking-wider font-bold leading-snug">
              Improve Performance and Growth
            </h1>
            {/* Description paragraph */}
            <p className="text-[#9CA3AF] text-sm md:text-base">
              Navigating the fast-paced online world requires a strategy that
              places your brand at the forefront. We lay the groundwork for
              robust online visibility, engaging your audience with innovative
              marketing practices. Our approach is data-driven and
              results-focused, leveraging cutting-edge trends to surpass your
              business goals and foster enduring success.
            </p>
          </div>
          {/* Additional call-to-action or information */}
          <h2 className="text-[#305197] text-lg md:text-xl mt-6">
            Explore Our Strategies
          </h2>
        </div>
      </div>
    </div>
  );
};

// Exporting the Performance component for showcasing digital marketing performance strategies
export default Performance;
