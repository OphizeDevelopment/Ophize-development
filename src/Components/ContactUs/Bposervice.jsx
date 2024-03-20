import whyusimage from "../../assets/whyussection.png";

const Bposervice =()=>{
    return(<>
    <div className="grid grid-cols-1 md:grid-cols-2 justify-center p-3 mt-4 2xl:mx-36 ">
        <div className="p-8 pt-0 pb-0 m-7  ">
          {/* Title and introductory text */}
          <div className="p-5 pt-2">
            <h1 className="text-2xl pt-2  font-bold 2xl:text-4xl 4xl:text-5xl">
            Enhance Your Business with OPHIZE BPO Services
            </h1>
            <p className="text-slate-500 pt-3 2xl:text-2xl 4xl:text-3xl sm:text-xl md:text-base xs:text-lg">
            Choosing OPHIZE as your BPO partner transforms the way your business operates. With a commitment to quality and a tailor-made approach, we streamline your processes, ensuring efficiency and excellence at every turn. 
            </p>
            <p className="text-slate-500 pt-3 2xl:text-2xl 4xl:text-3xl sm:text-xl md:text-base xs:text-lg">
            Our expertise in handling complex business tasks allows you to focus on core growth activities with peace of mind
            </p>
            <p className="flex items-center text-xl pt-5 2xl:text-2xl 4xl:text-4xl ">
            Punctuality paired with quality, delivering on promises to keep your business ahead
            </p>
            <p className="flex items-center text-xl pt-5 2xl:text-2xl 4xl:text-4xl ">
            A relentless pursuit of perfection in every task we undertake for you.
            </p>
          </div>
        </div>
        <div className="p-8 pl-1 text-start font-medium 2xl:text-xl 4xl:text-4xl md:h-fit">
          <div className="p-9 pt-2 m-7 ">
            {/* image section */}
            <img src={whyusimage} className="w-full" alt="whyusimage"/>
          </div>
        </div>
      </div>
    </>)
}

export default Bposervice;