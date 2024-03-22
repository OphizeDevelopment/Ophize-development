import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

import list from "../assets/list.png";
import close from "../assets/close.png";
import logo from "../assets/logo-ophize.png";
import line from "../assets/Line.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const location = useLocation();
  const currentPath = location.pathname;

  const isActive = (paths) => paths.includes(currentPath);

  return (
    <>
      <div className="flex justify-center pt-5">
        <div className="flex justify-between items-center lg:w-[1020px] w-full px-8 py-4">
          <Link to="/">
          <div>
            <img src={logo} alt="Logo" className="md:w-auto w-32" />
          </div>
          </Link>

          <div onClick={() => setIsOpen(!isOpen)} className="md:hidden block">
            {isOpen ? (
              <div className="hamburger-icon text-white">
                <img src={close} alt="Menu Icon" className="w-8" />
              </div>
            ) : (
              <div className="hamburger-icon">
                <img src={list} alt="Menu Icon" className="w-8" />
              </div>
            )}
          </div>

          <div
            className={`md:flex hidden ${
              isOpen ? "flex" : "hidden"
            } list-none gap-20 font-semibold text-white`}
          >
            <div className="text-center flex flex-col">
              <Link to="/">
                <li>Home</li>
              </Link>
              {isActive(["/"]) && <img src={line} alt="line" />}
            </div>
            <div className="text-center flex flex-col">
              <Link to="/aboutus">
                <li>About</li>
              </Link>
              {isActive(["/aboutus"]) && <img src={line} alt="line" />}
            </div>
            <div className="text-center flex flex-col">
              <Link to="/services">
                <li>Services</li>
              </Link>
              {isActive([
                "/digitalmarketing",
                "/softwaredevelopment",
                "/financeandaccounts",
                "/logisticsdocumentation",
                "/itandsecurity",
                "/businesscompliance",
                "/humanresource",
                "/administration",
                "/services",
                "/businessstrategic",
              ]) && <img src={line} alt="line" />}
            </div>
          </div>

          <div className={`${isOpen ? "flex" : "hidden"} md:flex hidden`}>
            <Link to="/contactus">
              <button className="uppercase bg-[#305197] px-6 py-3 rounded-lg text-white font-semibold text-sm">
                Contact us
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div
        className={`md:hidden ${
          isOpen ? "flex" : "hidden"
        } flex-col items-start list-none gap-2 px-10 mb-5 text-white`}
      >
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/aboutus">
          <li>About</li>
        </Link>
        <li>Services</li>
        <button className="uppercase bg-[#305197] px-3 py-2 rounded-lg mt-2 text-white font-semibold text-sm">
          Contact us
        </button>
      </div>
    </>
  );
};

export default Navbar;
