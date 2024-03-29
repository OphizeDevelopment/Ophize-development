/* eslint-disable react/no-unescaped-entities */
import excellenceImg from "../../assets/administrationExcellence.png";

const Excellence = () => {
  return (
    <>
      <div className="flex justify-center items-center">
        <div className="flex flex-col justify-center items-center   my-14 mx-12 2xl:w-[1140px] w-auto">
          <div className="flex flex-col md:flex-row justify-center items-center gap-9  w-full ">
            <img src={excellenceImg} alt="excellence image" />
            <div className="m-5">
              <h1 className="uppercase font-bold tracking-wide xl:text-4xl lg:text-3xl sm:text-2xl  w-full xs:text-xl md:text-start text-center ">
                Mastering Administrative <br /> Excellence
              </h1>
              <p className="text-black md:text-base text-base font-medium md:text-start pt-5">
                "Unlock the full potential of your administrative operations
                with our comprehensive suite of services designed for peak
                efficiency and streamlined workflows."
              </p>
            </div>
          </div>
          <div className="mx-4 mt-5">
            <p className="text-black md:text-base text-xs font-medium tracking-wide xs:line-clamp-6 md:line-clamp-none text-justify">
              Explore the breadth of our Administration Services designed to
              enhance operational efficiency across your enterprise. From the
              essentials of Administrative and Legal Support to the nuanced
              specifics of Medical and Financial Administrative Assistance, we
              cater to diverse organizational needs with precision and
              expertise. Our Travel and Calendar Management solutions bring
              order and ease to your scheduling demands, while our Facility
              Management ensures your physical spaces are as streamlined as your
              workflows. Elevate your corporate events with our meticulous Event
              Management, crafted to deliver memorable experiences. With a focus
              on seamless integration and strategic oversight, our services
              empower your business to operate at its zenith, unfettered by
              administrative complexity.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Excellence;
