import icon1 from "../../assets/soft-icon1.png";
import icon2 from "../../assets/soft-icon2.png";
import icon3 from "../../assets/soft-icon3.png";
import icon4 from "../../assets/soft-icon4.png";
import icon5 from "../../assets/soft-icon5.png";
import icon6 from "../../assets/soft-icon6.png";

const services = () => {
  const services = [
    {
      id: 1,
      icon: icon1,
      title: "Software Development",
      description:
        "We craft bespoke software that not only meets industry standards but sets them, ensuring your business is ahead of the digital curve.",
    },
    {
      id: 2,
      icon: icon2,
      title: "Web Development",
      description:
        "Our web development services are all about creating responsive, high-performance websites that deliver a flawless user experience on any device.",
    },
    {
      id: 3,
      icon: icon3,
      title: "Mobile App Development",
      description:
        "Engage your users with sleek, intuitive mobile applications that blend top-notch design with seamless functionality.",
    },
    {
      id: 4,
      icon: icon4,
      title: "UI/UX Design",
      description:
        "Our designs aren't just about looks; they're about creating intuitive, engaging user experiences that translate into real-world success.",
    },
    {
      id: 5,
      icon: icon5,
      title: "Ecommerce Solutions",
      description:
        "We create robust online shopping platforms that provide secure, scalable, and engaging shopping experiences.",
    },
    {
      id: 6,
      icon: icon6,
      title: "Software Consultation",
      description:
        "Stay ahead of the tech game with our expert IT consulting, providing you with the tools and strategies to compete — and win.",
    },
  ];

  return (
    <>
      <div>
        <div className="flex flex-col justify-center items-center py-16 px-10 gap-12">
          <div className="flex flex-col gap-3 items-center text-center">
            <h1 className="md:text-4xl text-2xl tracking-wide font-bold">
              Expertise to Innovate
            </h1>
            <p className="text-sm text-center md:text-lg">
              Our dedicated team of elite developers is poised to turn your
              vision into reality with cutting-edge solutions.
            </p>
          </div>
          <div className="flex flex-wrap gap-10 justify-center items-center w-full 2xl:w-[1440px]">
            {services.map((service) => (
              <div
                key={service.id}
                className="flex flex-col items-start gap-3 border px-5 py-5 xs3:px-10 xs3:py-10 border-black rounded-xl xs3:w-[27rem] xs3:h-[17rem]"
              >
                <img src={service.icon} alt={service.title} />
                <h1 className="xs3:text-xl text-base tracking-wide font-bold ">
                  {service.title}
                </h1>
                <p className="text-[#4A5568] xs3:text-base sm:text-sm text-xs">
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
