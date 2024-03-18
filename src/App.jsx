import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Digitalmarketing from "./Pages/Digitalmarketing";
import Softwaredevelopment from "./Pages/Softwaredevelopment";
import Financeherosection from "./Pages/Financeandaccounts";
import Homepage from "./Pages/Homepage";
import Logistics from "./Pages/Logistics";
import Itsecurity from "./Pages/Itsecurity";
import BusinessCompilance from "./Pages/Businesscompliance";

import Pagenotfound from "./Components/pagenotfound";
import Underconstruction from "./Components/underconstruction";

import Clients from "./Components/clients";
import Contactus from "./Components/contactus";
import Footer from "./Components/footer";
import { useEffect } from "react";
import SolutionsHr from "./Components/HumenResource/SolutionsHr";
import Humanresource from "./Pages/HumanResources";
import Services from "./Pages/services";
import AboutUs from "./Pages/AboutUs";
import Administration from "./Pages/Administration";

const CommonComponents = () => {
  const location = useLocation();
  const definedPaths = [
    "/digitalmarketing",
    "/softwaredevelopment",
    "/financeandaccounts",
    "/logisticsdocumentation",
    "/itandsecurity",
    "/businesscompliance",
    "/humanresource",
    "/services",
    "/aboutus",
    "/administration"
  ];

  if (!definedPaths.includes(location.pathname)) {
    return null;
  }

  return (
    <>
      <Clients />
      <Contactus />
      <Footer />
    </>
  );
};

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App = () => {
  return (
    <>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/digitalmarketing" element={<Digitalmarketing />} />
          <Route
            path="/softwaredevelopment"
            element={<Softwaredevelopment />}
          />
          <Route path="/financeandaccounts" element={<Financeherosection />} />
          <Route path="/logisticsdocumentation" element={<Logistics />} />
          <Route path="/itandsecurity" element={<Itsecurity />} />
          <Route path="/underconstruction" element={<Underconstruction />} />
          <Route path="/businesscompliance" element={<BusinessCompilance />} />
          <Route path="/humanresource" element={<Humanresource />} />
          <Route path="/services" element={<Services />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/administration" element={<Administration />} />

          <Route path="*" element={<Pagenotfound />} />
        </Routes>
        <CommonComponents />
        <ScrollToTop />
      </Router>
    </>
  );
};

export default App;
