import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

// Importing assets for the Navbar component
import list from "../assets/list.png";
import close from "../assets/close.png";
import logo from "../assets/logo-ophize.png";
import line from "../assets/Line.png";

const Navbar = () => {
  // State to handle the opening and closing of the mobile menu
  const [isOpen, setIsOpen] = useState(false);

  // useLocation hook to get the current route's path
  const location = useLocation();
  const currentPath = location.pathname;

  // Function to check if the current path is active for menu items
  const isActive = (paths) => paths.includes(currentPath);

  return (
    <>
      {/* Top bar of the Navbar */}
      <div className="flex justify-center py-5">
        <div className="flex justify-between items-center lg:w-[1020px] w-full px-8 py-4">
          {/* Logo */}
          <div>
            <img src={logo} alt="Logo" className="md:w-auto w-32" />
          </div>

          {/* Hamburger Icon for mobile view */}
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

          {/* Desktop Menu Items */}
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
              ]) && <img src={line} alt="line" />}
            </div>
          </div>

          {/* Contact Us Button */}
          <div className={`${isOpen ? "flex" : "hidden"} md:flex hidden`}>
            <button className="uppercase bg-[#305197] px-6 py-3 rounded-lg text-white font-semibold text-sm">
              Contact us
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
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
