// Importing images for service icons
import i1 from "../../assets/it1.png";
import i2 from "../../assets/it2.png";
import i3 from "../../assets/it3.png";
import i4 from "../../assets/it4.png";
import i5 from "../../assets/it5.png";
import i6 from "../../assets/it6.png";

// services component definition
const services = () => {
  const serviceData = [
    {
      id: 1,
      image: i1,
      title: "Managed IT Services",
      description:
        "This includes outsourcing day-to-day IT management and support responsibilities to a third-party provider. Services can cover network monitoring, infrastructure management, helpdesk support, and more.",
    },
    {
      id: 2,
      image: i2,
      title: "Cloud Computing Services",
      description:
        "Cloud services involve providing access to computing resources (like servers, storage, databases, networking, software, etc.) over the internet. This includes Infrastructure as a Service (IaaS), Platform as a Service (PaaS), and Software as a Service (SaaS).",
    },
    {
      id: 3,
      image: i3,
      title: "Cybersecurity Services",
      description:
        "IT security services focus on protecting systems, networks, and data from cyber threats. Offerings include risk assessments, security audits, firewall setup, intrusion detection, and incident response.",
    },
    {
      id: 4,
      image: i4,
      title: "Data Backup and Recovery",
      description:
        "Services related to backing up critical data, ensuring it's secure and recoverable in case of data loss due to various factors such as hardware failure, human error, or cyberattacks",
    },
    {
      id: 5,
      image: i5,
      title: "Network Infrastructure",
      description:
        "Designing, implementing, and maintaining network infrastructure including routers, switches, firewalls, and other networking components to ensure optimal connectivity and performance",
    },
    {
      id: 6,
      image: i6,
      title: "Consulting and Advisory",
      description:
        "IT consultants offer expertise and guidance on technology strategy, IT architecture, digital transformation, and more, helping businesses align their IT with their overall objectives.",
    },
  ];

  return (
    <>
      <div>
         {/* Main container for the services section with flex layout, padding, and spacing */}
        <div className="flex flex-col justify-center items-center gap-10 px-10 md:py-36 py-16">
           {/* Title for the services section */}
          <h1 className="md:text-4xl sm:text-3xl text-lg font-bold sm:w-[40rem] text-center">
            Manage your entire community in a single system
          </h1>

           {/* Container for displaying each service item */}
          <div className="flex gap-10 flex-wrap 3xl:w-[1800px] w-full justify-center items-center">
             {/* Mapping each service to a card layout */}
            {serviceData.map((service) => (
              <div
                key={service.id}
                className="md:w-[35rem] md:h-[18rem] flex flex-col justify-center items-start gap-5 border rounded-md  sm:px-10 px-5 sm:py-10 py-5"
              >
                <div className="flex md:flex-row flex-col justify-center md:items-center items-start md:gap-5 gap-2 ">
                  <img src={service.image} alt={service.title} className="w-auto h-auto" />
                  <h1 className="md:text-3xl sm:text-xl text-base font-bold">
                    {service.title}
                  </h1>
                </div>
                <p className="md:text-base text-sm">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default services;
