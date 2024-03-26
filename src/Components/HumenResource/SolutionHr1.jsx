import hrSol from "../../assets/hrSolBg.png";

const BgsolutionHr = () => {
  return (
    <>
      <div className="relative min-h-[500px] 2xl:w-[1440px] w-auto mx-auto my-14">
        <div
          className="hidden md:block bg-cover bg-center bg-no-repeat absolute inset-0"
          style={{ backgroundImage: `url(${hrSol})` }}
        ></div>
        <div className="md:hidden absolute inset-0 bg-black opacity-85"></div>
        <div className="absolute top-0.5 right-0 p-4 w-[35rem] h-auto mt-5 mx-3 xs:flex xs:flex-wrap ">
          <h1 className="text-white text-xl font-bold xs3:text-2xl xs:mx-6">
            HR Solutions That Empower Your Business: Comprehensive Services
            Tailored to Your Needs
          </h1>
          <p className="text-white text-lg mt-7">
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
    </>
  );
};

export default BgsolutionHr;
