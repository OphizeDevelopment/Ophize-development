import img from "../../assets/service-img.png";
import icon from "../../assets/service-icon.png";
import { Link } from "react-router-dom";

const services = () => {
  const itemsleft = [
    { id: 1, title: "Finance and Accounts", to: "/financeandaccounts" },
    { id: 2, title: "IT security and services", to: "/itandsecurity" },
    { id: 3, title: "digital marketing services", to: "/digitalmarketing" },
    { id: 4, title: "human resource services", to: "/humanresource" },
  ];
  const itemsright = [
    { id: 1, title: "Logistics Documentation", to: "/logisticsdocumentation" },
    { id: 2, title: "business compliances", to: "/businesscompliance" },
    { id: 3, title: "Software development", to: "/softwaredevelopment" },
    { id: 4, title: "administration services", to: "/administration" },
  ];

  return (
    <>
      <div className="w-full flex justify-center py-14 px-10">
        <div className="flex md:flex-row flex-col md:gap-32 gap-10">
          <div className="flex justify-center items-center">
            <img src={img} alt="Service Image" />
          </div>
          <div className="w-auto">
            <h1 className="text-black uppercase text-sm font-semibold">
              experts in domains
            </h1>
            <div className="xs2:flex-row flex flex-col xs2:gap-10 xs2:items-start">
              <div className="flex flex-col md:gap-8 gap-5 mt-8">
                {itemsleft.map((item) => (
                  <div key={item.id} className="flex gap-3 items-start">
                    <img src={icon} alt="Service Icon" />
                    <Link to={item.to}>
                      <p className="uppercase text-[#305197] font-bold xl:text-xl md:text-base text-sm md:w-64">
                        {item.title}
                      </p>
                    </Link>
                  </div>
                ))}
              </div>
              <div className="flex flex-col md:gap-8 gap-5 mt-8">
                {itemsright.map((item) => (
                  <div key={item.id} className="flex gap-3 items-start">
                    <img src={icon} alt="Service Icon" />
                    <Link to={item.to}>
                      <p className="uppercase text-[#305197] font-bold xl:text-xl md:text-base text-sm md:w-64">
                        {item.title}
                      </p>
                    </Link>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-8 mt-8 justify-start items-start">
              <div className="flex gap-3 items-center">
                <img src={icon} alt="Service Icon" />
                <Link to="/businessstrategic">
                  <p className="uppercase text-[#305197] font-bold xl:text-xl md:text-base text-sm">
                    business stratergic consultancy
                  </p>
                </Link>
              </div>
            </div>

            <div className="flex flex-col gap-3 mt-10">
              <div className="text-[#5E5E5E] xs2:text-base text-sm">
                Check out our range of services that can help drive your
                company's growth  and promote long-term sustainability
              </div>
              <Link to='/services'>
                <h1 className="text-[#2E2E2E] text-sm font-bold">
                  LEARN SERVICE DETAILS
                </h1>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default services;
