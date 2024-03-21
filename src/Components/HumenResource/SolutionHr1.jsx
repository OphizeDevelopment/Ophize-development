import { useState, useEffect } from "react";
import hrSol from "../../assets/hrSolBg.png";

const BgsolutionHr = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 766);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="relative  md:h-screen overflow-hidden 2xl:w-[1440px] w-auto mx-auto">
      {!isSmallScreen && (
        <div className="absolute inset-0 bg-black bg-cover bg-center">
          <img
            src={hrSol}
            alt="solution background"
            className="w-full h-full object-cover"
          />
        </div>
      )}

      <div className="relative flex justify-center items-center xs:bg-black md:bg-transparent">
        <div className="w-24 h-24 ml-38 p-36 flex flex-wrap">
          <h1 className=" text-lg font-semibold text-zinc-50">
            HR Solutions That Empower Your Business_ Comprehensive Services
            Tailored to Your Needs
          </h1>
          <p className="text-white">
            Navigate the complexities of talent management with ease. Our
          </p>
        </div>
      </div>
    </div>
  );
};

export default BgsolutionHr;
