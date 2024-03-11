// Importing image assets
import img from "../../assets/excellence-img.png";
import tick from "../../assets/excellence-tick.png";

const excellence = () => {
  // Array of items representing different aspects of excellence
  const items = [
    { id: 1, text: "Leading with Vision in BPO Services" },
    { id: 2, text: "Diverse Services, Customized Solutions" },
    { id: 3, text: "Advocates for Cutting-Edge Technology" },
    { id: 4, text: "Forging Strong, Strategic Alliances" },
    { id: 5, text: "Commitment to Clarity and Integrity" },
    { id: 6, text: "Driven by Passion, Guided by Expertise" },
    { id: 7, text: "Sustainability and Responsibility" },
  ];

  return (
    <>
      <div className="w-full bg-[#305197] py-16 px-10 flex justify-center items-center">
        {/* Main container for the excellence section */}
        <div className=" flex flex-col justify-center items-center gap-14">
          {/* Title and subtitle container */}
          <div className="text-center">
            <h1 className="text-white md:text-3xl sm:text-2xl text-xl font-bold tracking-wider">
              Defining Excellence in Business Process Outsourcing
            </h1>
            <p className="text-white lg:text-xl sm:text-base text-sm mt-2">
              Boost your business performance with our specialized services and
              integrated approach
            </p>
          </div>
          {/* Container for the image and excellence items */}
          <div className="flex md:flex-row flex-col text-white gap-10">
            {/* Image container */}
            <div className="flex justify-center items-center">
              <img src={img} alt="Excellence Illustration" className="w-fit" />
            </div>
            {/* Container for excellence items */}
            <div className=" flex justify-center items-center">
              <div className="flex flex-col gap-5">
                {/* Mapping each item to a layout with a tick icon */}
                {items.map((item) => (
                  <div key={item.id} className="flex gap-2">
                    <div className="flex justify-center items-center">
                      <img src={tick} alt="Tick Icon" />
                    </div>
                    <p>{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default excellence;
