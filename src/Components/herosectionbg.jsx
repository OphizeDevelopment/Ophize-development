import { useLocation } from "react-router-dom";

import Navbar from "./navbar";
import Herosection from "./Homepage/herosection";
import Digiherosection from "./Digitalmarketing/herosection";
import Softherosection from "./Softwaredevelopment/herosection";
import Financeherosection from "./Finance/herosection";
import Logiherosection from "./Logistics/herosection";
import Herosection1 from "./BusinessCompliance/herosection";
import ITherosetion from "./ITSecurity/herosetion";
import HeroSectionHR from "./HumenResource/HeroSection";
import HerosectionService from "./Services/Herosection";

import bgimg from "../assets/service-bg.png";
import HeroAbout from "./AboutUs/Hero";
import Hero from "./Administration/Hero";
import HerosectionContact from "./ContactUs/Herosection";
import HerosectionStrgy from "./BusinessStrategy/Herosection";

const HeroSection = () => {
  const location = useLocation();

  const getComponentForRoute = (pathname) => {
    switch (pathname) {
      case "/":
        return <Herosection />;
      case "/digitalmarketing":
        return <Digiherosection />;
      case "/softwaredevelopment":
        return <Softherosection />;
      case "/financeandaccounts":
        return <Financeherosection />;
      case "/logisticsdocumentation":
        return <Logiherosection />;
      case "/businesscompliance":
        return <Herosection1 />;
      case "/itandsecurity":
        return <ITherosetion />;
      case "/services":
        return <HerosectionService />;
      case "/aboutus":
        return <HeroAbout />
      case "/administration":
        return <Hero />
      case "/contactus":
        return <HerosectionContact />
      case "/businessstrategic":
        return <HerosectionStrgy />
      case "/humanresource":
        return <HeroSectionHR />;
      default:
        return <Herosection />;
    }
  };

  return (
    <div
      style={{
        backgroundImage: `url(${bgimg})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        width: "100%",
      }}
    >
      <Navbar />
      {getComponentForRoute(location.pathname)}{" "}
    </div>
  );
};

export default HeroSection;
