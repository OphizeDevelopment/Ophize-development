import { useLocation } from "react-router-dom";
// Importing various components for different sections
import Navbar from "./navbar";
import Herosection from "./Homepage/herosection";
import Digiherosection from "./Digitalmarketing/herosection";
import Softherosection from "./Softwaredevelopment/herosection";
import Financeherosection from "./Finance/herosection";
import Logiherosection from "./Logistics/herosection";
import Herosection1 from "./BusinessCompliance/herosection";
import ITherosetion from "./ITSecurity/herosetion";
import HeroSectionHR from "./HumenResource/HeroSection";

// Importing the background image for the hero section
import bgimg from "../assets/service-bg.png";

// HeroSection component definition
const HeroSection = () => {
  // Using the useLocation hook to access the current URL path
  const location = useLocation();

  // Function to determine which hero section to display based on the current path
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
      case "/humanresource":
        return <HeroSectionHR/>;
      default:
        return <Herosection />;
    }
  };

  // Render the HeroSection component
  return (
    // Div container with background image styling
    <div
      style={{
        backgroundImage: `url(${bgimg})`, // Background image from imported asset
        backgroundRepeat: "no-repeat", // Background repeat style
        backgroundPosition: "center", // Background position style
        backgroundSize: "cover", // Background size style to cover the entire area
        width: "100%",
        height: "100%",
      }}
    >
      {/* Navbar component */}
      <Navbar />
      {getComponentForRoute(location.pathname)}{" "}
      {/* Displaying the hero section based on the current route */}
    </div>
  );
};

export default HeroSection;
