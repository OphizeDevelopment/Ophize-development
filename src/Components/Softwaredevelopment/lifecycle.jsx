import img from "../../assets/lifecycleimg.png";
import l1 from "../../assets/l1.png";
import l2 from "../../assets/l2.png";
import l3 from "../../assets/l3.png";
import l4 from "../../assets/l4.png";
import l5 from "../../assets/l5.png";
import l6 from "../../assets/l6.png";
import l7 from "../../assets/l7.png";
import line from "../../assets/life-line.png";

const lifecycle = () => {
  const steps = [
    { id: 1, imgSrc: l1, title: "Planning" },
    { id: 2, imgSrc: l2, title: "Designing" },
    { id: 3, imgSrc: l3, title: "Defining" },
    { id: 4, imgSrc: l4, title: "Building" },
    { id: 5, imgSrc: l5, title: "Testing" },
    { id: 6, imgSrc: l6, title: "Deployment" },
    { id: 7, imgSrc: l7, title: "Maintenance" },
  ];

  return (
    <>
      <div className="w-full px-10 md:py-20">
        <div className="flex flex-col md:gap-20 gap-10">
          <div className="flex flex-col gap-4 justify-center items-center">
            <h1 className="uppercase lg:text-4xl text-2xl font-bold text-center">
              software development lifecycle
            </h1>
            <p className="lg:text-lg text-xs sm:text-sm text-[#5B6474] lg:w-[1020px] text-center">
              We employ best practice processes and development methodologies as
              a foundation for rapid building of cutting-edge technology
              solutions in a structured and methodical way.
            </p>
          </div>
          <div className="flex md:flex-row flex-col md:gap-32 justify-center items-center">
            <div className="flex flex-col justify-between gap-3">
              {steps.map((step) => (
                <>
                  <div key={step.id} className="flex gap-10 items-center">
                    <img src={step.imgSrc} alt={step.title} />
                    <h1 className="sm:text-2xl xs:text-xl text-[#305197] font-bold">
                      {step.title}
                    </h1>
                  </div>
                  <img src={line} alt="Line Separator" />
                </>
              ))}
            </div>
            <div>
              <img src={img} alt="Lifecycle" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default lifecycle;
