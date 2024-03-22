import i1 from "../../assets/h1.png";
import i2 from "../../assets/h2.png";
import i3 from "../../assets/h3.png";
import i4 from "../../assets/h4.png";
import i5 from "../../assets/h5.png";
import img from "../../assets/highlight-img.png";

const highlight = () => {
  const items = [
    {
      id: 1,
      title: "Integrated BPO Excellence",
      description: "Comprehensive approach to Business Process Outsourcing",
      img: i1,
    },
    {
      id: 2,
      title: "Proven Track Record",
      description:
        "Demonstrated success through impactful case studies and satisfied client testimonials",
      img: i2,
    },
    {
      id: 3,
      title: "Innovation and Technology",
      description:
        "Commitment to staying at the forefront of innovation with cutting-edge technology solutions.",
      img: i3,
    },
    {
      id: 4,
      title: "Global Reach",
      description:
        "Offering services with a global perspective, connecting businesses on an international scale",
      img: i4,
    },
    {
      id: 5,
      title: "Holistic Solutions",
      description:
        "Providing end-to-end solutions that seamlessly integrate various business processes.",
      img: i5,
    },
  ];

  return (
    <>
      <div className="w-full flex justify-center items-center py-10 px-10">
        <div className="flex md:flex-row flex-col gap-10 w-[1250px]">
          <div className="flex flex-col gap-8">
            <h1 className="sm:text-3xl xs:text-xl text-sm tracking-wider font-bold text-[#3C3C3C] 2xl:mb-5 md:text-start text-center md:capitalize uppercase">
              Highlighting key services and expertise
            </h1>
            {items.map((item) => (
              <div key={item.id} className="flex items-center gap-5">
                <img src={item.img} alt={item.title} />
                <div>
                  <h1 className="2xl:text-base text-sm  uppercase font-semibold tracking-wider">
                    {item.title}
                  </h1>
                  <p className="2xl:text-base text-xs">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="flex items-center lg:items-end">
            <img src={img} alt="Service Highlights" />
          </div>
        </div>
      </div>
    </>
  );
};

export default highlight;
