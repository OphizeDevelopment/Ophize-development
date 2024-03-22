// Importing images for service icons
import l1 from "../../assets/lo1.png";
import l2 from "../../assets/lo2.png";
import l3 from "../../assets/lo3.png";
import l4 from "../../assets/lo4.png";
import l5 from "../../assets/lo5.png";
import l6 from "../../assets/lo6.png";

const services = () => {
  // Array of service objects, each containing a title, description, and image
  const services = [
    {
      title: "Warehouse Spacing",
      description:
        "Get the most out of your storage space. Our team helps you organize your warehouse to save time and manage inventory better.",
      image: l1,
    },
    {
      title: "Import Documentation",
      description:
        "We handle the paperwork for your imported goods, ensuring they meet all legal requirements without any hassle",
      image: l2,
    },
    {
      title: "Export Documentation",
      description:
        "Our services make exporting straightforward by taking care of all the necessary documents for a smooth shipment.",
      image: l3,
    },
    {
      title: "Multimodal Transport",
      description:
        "We offer flexible shipping options across land, sea, and air to move your goods efficiently and cost-effectively",
      image: l4,
    },
    {
      title: "Custom decleration",
      description:
        "Avoid customs delays with our declaration services that make sure your shipments follow all regulations.",
      image: l5,
    },
    {
      title: "Law of land",
      description:
        "Stay compliant with our guidance on national transport laws, keeping your operations legal and efficient.",
      image: l6,
    },
  ];

  return (
    // React Fragment for grouping multiple elements
    <>
      <div>
        <div className="flex flex-col justify-center items-center gap-10 px-10 py-20">
          {/* Title and subtitle for the services section */}
          <div className="flex flex-col gap-4 justify-center items-center">
            <h1 className="bg-[#E8E8E8] w-[7rem] border border-l-8 border-[#315EBC] text-[#1C1F35] md:text-base text-xm">
              what we do
            </h1>
            <h1 className="md:text-4xl text-2xl font-bold text-center">
              Our Logistics Services
            </h1>
          </div>
          {/* Container for displaying each service item */}
          <div className="flex flex-wrap gap-10 items-center justify-center 2xl:w-[1440px] xs3:w-[75%] w-full">
            {/* Mapping each service to a card layout */}
            {services.map((service, index) => (
              <div
                key={index}
                className="w-full xl:w-[25rem] flex flex-col items-start justify-center md:gap-5 gap-2"
              >
                <img
                  src={service.image} // Service icon
                  alt={service.title} // Alt text for image
                  className="w-auto h-auto"
                />
                {/* Service title */}
                <h1 className="md:text-2xl text-xl font-bold">
                  {service.title}
                </h1>
                {/* Service description */}
                <p className="md:text-xl">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default services;
