import excellenceImg from "../../assets/administrationExcellence.png";

const Excellence = () => {
  return (
    <>
    <div className="flex justify-center items-center">
      {/* main container for the page */}
      <div className="flex flex-col justify-center items-center gap-10 p-14 m-12 2xl:w-[1140px]">
        {/* container for the text and image */}
        <div className="flex xs:flex-col md:flex-row justify-center items-center gap-5  w-full">
          <img src={excellenceImg} alt="excellence image" />
          <div>
            <h1 className="uppercase font-bold tracking-wide xl:text-4xl lg:text-3xl sm:text-2xl  w-full xs:text-xl text-center">
              Mastering Administrative Excellence
            </h1>
            <p className="text-black lg:text-xl text-base font-medium text-center">
              "Unlock the full potential of your administrative operations with
              our comprehensive suite of services designed for peak efficiency
              and streamlined workflows."
            </p>
          </div>
        </div>
        {/* container for the paragraph */}
        <div>
          <p className="text-black lg:text-xl text-base xs:text-xs font-medium text-center xs:line-clamp-4 md:line-clamp-none">
            Explore the breadth of our Administration Services designed to
            enhance operational efficiency across your enterprise. From the
            essentials of Administrative and Legal Support to the nuanced
            specifics of Medical and Financial Administrative Assistance, we
            cater to diverse organizational needs with precision and expertise.
            Our Travel and Calendar Management solutions bring order and ease to
            your scheduling demands, while our Facility Management ensures your
            physical spaces are as streamlined as your workflows. Elevate your
            corporate events with our meticulous Event Management, crafted to
            deliver memorable experiences. With a focus on seamless integration
            and strategic oversight, our services empower your business to
            operate at its zenith, unfettered by administrative complexity.
          </p>
        </div>
      </div>
</div>
    </>
  );
};

export default Excellence;
