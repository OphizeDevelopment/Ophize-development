/* eslint-disable react/prop-types */
import digi1 from "../../assets/digi1.png";
import digi2 from "../../assets/digi2.png";
import digi3 from "../../assets/digi3.png";
import digi4 from "../../assets/digi4.png";

const ServiceCard = ({ title, description, icon }) => {
  return (
    <div className="flex flex-col md:flex-row md:text-left md:items-start">
      <div className="flex flex-col gap-3 mb-5">
        <img src={icon} alt={title} className="w-10 h-10" />
        <h2 className="md:text-xl font-semibold capitalize">{title}</h2>
        <p className="text-gray-600 xl:w-[20rem] leading-relaxed md:text-base text-sm">
          {description}
        </p>
      </div>
    </div>
  );
};

const Services = () => {
  return (
    <>
      <div className="w-full flex justify-center items-center px-10 py-10 md:mt-20 mt-8">
        <div className="2xl:w-[1440px] w-auto flex md:flex-row flex-col md:gap-44 gap-10 justify-center ">
          <div className="xl:w-[30%] flex flex-col gap-4">
            <h1 className="text-[#305197] xl:text-4xl text-2xl font-semibold tracking-wide">
              Your Partners in Digital Marketing Excellence
            </h1>
            <p className="text-[#78847D] leading-loose">
              Our team has engineered a comprehensive digital marketing
              ecosystem, fine-tuning each step to perfection, ensuring that not
              a single pixel is out of place.
            </p>
            <h1 className="text-[#305197] text-sm cursor-pointer">See More</h1>
          </div>
          <div className="grid grid-cols-2 gap-10">
            <ServiceCard
              title="content marketing"
              description="Crafting bespoke content to captivate and educate your audience"
              icon={digi1}
            />
            <ServiceCard
              title="Google Ads"
              description="Leveraging targeted keywords to place your brand in the spotlight"
              icon={digi2}
            />
            <ServiceCard
              title="social media marketing"
              description="Building vibrant community engagement across diverse social platforms"
              icon={digi3}
            />
            <ServiceCard
              title="social media posters"
              description="Designing eye-catching posters to spark conversation and shares"
              icon={digi4}
            />
            <ServiceCard
              title="search engine optimisation"
              description="Optimizing your online presence for top search engine visibility"
              icon={digi1}
            />
            <ServiceCard
              title="video production"
              description="Creating compelling narratives through video to tell your brand's story"
              icon={digi2}
            />
            <ServiceCard
              title="reels and motion posters"
              description="Producing dynamic short-form content for impactful social storytelling"
              icon={digi3}
            />
            <ServiceCard
              title="graphics desiging"
              description="Delivering innovative designs that embody your brand's aesthetic and values"
              icon={digi4}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
