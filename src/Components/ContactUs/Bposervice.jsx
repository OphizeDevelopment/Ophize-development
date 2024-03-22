import whyusimage from "../../assets/whyussection.png";

const Bposervice = () => {
  return (
    <>
      <div className="flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 justify-center my-14 mx-11  2xl:w-[1440px] w-auto">
          <div>
           
            <div className="p-5 pt-2">
              <h1 className="text-2xl pt-2  font-bold 2xl:text-4xl 4xl:text-5xl">
                Enhance Your Business with OPHIZE BPO Services
              </h1>
              <p className="text-slate-500 pt-3 2xl:text-2xl 4xl:text-3xl sm:text-xl md:text-base xs:text-lg mt-3">
                Choosing OPHIZE as your BPO partner transforms the way your
                business operates. With a commitment to quality and a
                tailor-made approach, we streamline your processes, ensuring
                efficiency and excellence at every turn.
              </p>
              <p className="text-slate-500 pt-3 2xl:text-2xl 4xl:text-3xl sm:text-xl md:text-base xs:text-lg mt-3">
                Our expertise in handling complex business tasks allows you to
                focus on core growth activities with peace of mind
              </p>
              <p className="flex items-center text-xl pt-5 2xl:text-2xl 4xl:text-4xl mt-4 ">
                Punctuality paired with quality, delivering on promises to keep
                your business ahead
              </p>
              <p className="flex items-center text-xl pt-5 2xl:text-2xl 4xl:text-4xl mt-3">
                A relentless pursuit of perfection in every task we undertake
                for you.
              </p>
            </div>
          </div>
          <div className="  flex justify-center items-center ">
            
            <img src={whyusimage} className="w-auto" alt="whyusimage" />

          </div>
        </div>
      </div>
    </>
  );
};

export default Bposervice;
