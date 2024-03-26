import hrSol from "../../assets/hrSolBg.png";

const BgsolutionHr = () => {
  return (
    <div className="relative min-h-[500px] w-full 2xl:w-[1440px] mx-auto my-14">
      <div
        className="hidden md:block bg-cover bg-center bg-no-repeat absolute inset-0"
        style={{ backgroundImage: `url(${hrSol})` }}
      ></div>
      <div className="md:hidden absolute inset-0 bg-black opacity-85 flex justify-center items-center">
        <div className="p-4 md:w-[35rem] w-full text-center">
          <h1 className="text-white text-xl font-bold xs:text-2xl xs:mx-6">
            HR Solutions That Empower Your Business: Comprehensive Services
            Tailored to Your Needs
          </h1>
          <p className="text-white text-lg mt-7 xs:ml-4">
            Navigate the complexities of talent management with ease. Our Human
            Resource services are designed to align with your business strategy,
            ensuring a seamless integration of recruitment, development, and
            retention strategies. With a focus on innovation and efficiency, we
            help you build a robust workforce that drives your business success.
            Partner with us for customized HR solutions that foster a dynamic
            and engaging work environment
          </p>
        </div>
      </div>
    </div>
  );
};

export default BgsolutionHr;
