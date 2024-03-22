/* eslint-disable react/no-unescaped-entities */
import patternimage from "../../assets/Pattern.png";
import collapseiconright from "../../assets/collapseiconright.png";
import collapseicondown from "../../assets/collapseicondown.png";
import letstalkpattern from "../../assets/letstalkpattern.png";
import callicon from "../../assets/callicon.png";
import { useState } from "react";

const Faq = () => {
  
  const [isCollapsed, setIsCollapsed] = useState([false, false, false, false]);


  const handleCollapse = (index) => {
    const newCollapsedState = [...isCollapsed];
    newCollapsedState[index] = !newCollapsedState[index];
    setIsCollapsed(newCollapsedState);
  };

  return (
    <>
      <div className="flex justify-center mt-10 mb-6 bg-[#EBEFFF]">
        <div className="grid grid-cols-1 md:grid-cols-2 justify-center p-3 mt-4 bg-[#EBEFFF] m-7 2xl:w-[1440px] w-auto">
          <div className="mx-9">

            <div>
              <p className="text-lg flex items-center 2xl:text-2xl 4xl:text-2xl">
                <img src={patternimage} className="mr-2 " />
                FAQ
              </p>
              <h1 className="text-2xl pt-2  font-bold 2xl:text-4xl 4xl:text-5xl">
                Frequently Asked Questions
              </h1>

              <div className="mt-5">
                <div className="flex justify-between items-center">
                  <button
                    className="text-lg text-start 2xl:text-2xl 4xl:text-4xl sm:text-xl xs:text-lg md:text-lg p-2"
                    onClick={() => handleCollapse(0)}
                  >
                    How can outsourcing benefit my business?{" "}
                  </button>
                  {isCollapsed[0] ? (
                    <img src={collapseicondown} className="w-4 2xl:w-6" />
                  ) : (
                    <img src={collapseiconright} className="w-2 2xl:w-4" />
                  )}
                </div>
                {isCollapsed[0] && (
                  <div>
                    <p className="text-slate-500 text-sm mt-2 2xl:text-2xl 4xl:text-2xl sm:text-xl md:text-base xs:text-lg">
                      Outsourcing to our BPO center can reduce costs, improve
                      service quality, and allow you to focus on core business
                      activities while we handle the rest.
                    </p>
                  </div>
                )}
              </div>

              <div className="mt-8">
                <div className="flex justify-between items-center">
                  <button
                    className="text-lg text-start 2xl:text-2xl 4xl:text-4xl sm:text-xl xs:text-lg md:text-lg p-2"
                    onClick={() => handleCollapse(1)}
                  >
                    How do you ensure the quality of your BPO services?{" "}
                  </button>
                  {isCollapsed[1] ? (
                    <img src={collapseicondown} className="w-4 2xl:w-6" />
                  ) : (
                    <img src={collapseiconright} className="w-2 2xl:w-4" />
                  )}
                </div>
                {isCollapsed[1] && (
                  <div>
                    <p className="text-slate-500 text-sm mt-2 2xl:text-2xl 4xl:text-2xl sm:text-xl md:text-base xs:text-lg">
                      Outsourcing to our BPO center can reduce costs, improve
                      service quality, and allow you to focus on core business
                      activities while we handle the rest.
                    </p>
                  </div>
                )}
              </div>

              <div className="mt-8">
                <div className="flex justify-between items-center">
                  <button
                    className="text-lg text-start 2xl:text-2xl 4xl:text-4xl sm:text-xl xs:text-lg md:text-lg p-2"
                    onClick={() => handleCollapse(2)}
                  >
                    Can I customize the BPO services based on my company's
                    needs?{" "}
                  </button>
                  {isCollapsed[2] ? (
                    <img src={collapseicondown} className="w-4 2xl:w-6" />
                  ) : (
                    <img src={collapseiconright} className="w-2 2xl:w-4" />
                  )}
                </div>
                {isCollapsed[2] && (
                  <div>
                    <p className="text-slate-500 text-sm mt-2 2xl:text-2xl 4xl:text-2xl sm:text-xl md:text-base xs:text-lg ">
                      Outsourcing to our BPO center can reduce costs, improve
                      service quality, and allow you to focus on core business
                      activities while we handle the rest.
                    </p>
                  </div>
                )}
              </div>

              <div className="mt-8" onClick={() => handleCollapse(3)}>
                <div className="flex justify-between items-center">
                  <button className="text-lg text-start 2xl:text-2xl 4xl:text-4xl sm:text-xl xs:text-lg md:text-lg p-2">
                    How is customer data protected in your BPO services?{" "}
                  </button>
                  {isCollapsed[3] ? (
                    <img src={collapseicondown} className="w-4 2xl:w-6" />
                  ) : (
                    <img src={collapseiconright} className="w-2 2xl:w-4" />
                  )}
                </div>
                {isCollapsed[3] && (
                  <div>
                    <p className="text-slate-500 text-sm mt-2 2xl:text-2xl 4xl:text-2xl sm:text-xl md:text-base xs:text-lg">
                      Outsourcing to our BPO center can reduce costs, improve
                      service quality, and allow you to focus on core business
                      activities while we handle the rest.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className=" pl-1 text-start font-medium 2xl:text-xl 4xl:text-4xl mx-auto mt-10 flex items-center justify-center">
            <div className="">
              <div className="bg-[#305197]  xs:w-auto xs:h-auto md:w-80 md:p-10 ">
                <p className="flex items-center text-sm bg-[#111C55] text-white w-20 mt-3 mb-5">
                  <img src={letstalkpattern} className="mr-2" />
                  Let's Talk
                </p>
                <h3 className="font-bold text-white mt-5 mb-5 text-[20px]">
                  You Need Any Help? Get Free Consultation
                </h3>
                <div className="flex items-center">
                  <div>
                    <img src={callicon} className="w-12" />
                  </div>
                  <div className="ml-3 text-white text-sm">
                    {" "}
                    <p>Have Any Questions</p>
                    <p>(+91) 844-633-7646</p>
                  </div>
                </div>
                <button
                  type="button"
                  className="mt-5 rounded bg-gradient-to-r from-[#3B50BA]  via-[#305197] to-[#182553] p-2"
                >
                  contact us
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Faq;
