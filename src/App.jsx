import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import React, { lazy, Suspense } from "react";
import { useEffect } from "react";

import Loader from "./Components/Loader";

const Digitalmarketing = lazy(() => import("./Pages/Digitalmarketing"));
const Softwaredevelopment = lazy(() => import("./Pages/Softwaredevelopment"));
const Financeherosection = lazy(() => import("./Pages/Financeandaccounts"));
const Homepage = lazy(() => import("./Pages/Homepage"));
const Logistics = lazy(() => import("./Pages/Logistics"));
const Itsecurity = lazy(() => import("./Pages/Itsecurity"));
const BusinessCompilance = lazy(() => import("./Pages/Businesscompliance"));
const Pagenotfound = lazy(() => import("./Components/pagenotfound"));
const Underconstruction = lazy(() => import("./Components/underconstruction"));
const Clients = lazy(() => import("./Components/clients"));
const Contactus = lazy(() => import("./Components/contactus"));
const Footer = lazy(() => import("./Components/footer"));
const Humanresource = lazy(() => import("./Pages/HumanResources"));
const Services = lazy(() => import("./Pages/Services"));
const AboutUs = lazy(() => import("./Pages/AboutUs"));
const Administration = lazy(() => import("./Pages/Administration"));
const ContactUs = lazy(() => import("./Pages/Contactus"));
const BusinessStrategy = lazy(() => import("./Pages/BusinessStrategy"));

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
    "/administration",
    "/businessstrategic",
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
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/digitalmarketing" element={<Digitalmarketing />} />
            <Route
              path="/softwaredevelopment"
              element={<Softwaredevelopment />}
            />
            <Route
              path="/financeandaccounts"
              element={<Financeherosection />}
            />
            <Route path="/logisticsdocumentation" element={<Logistics />} />
            <Route path="/itandsecurity" element={<Itsecurity />} />
            <Route path="/underconstruction" element={<Underconstruction />} />
            <Route
              path="/businesscompliance"
              element={<BusinessCompilance />}
            />
            <Route path="/humanresource" element={<Humanresource />} />
            <Route path="/services" element={<Services />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/administration" element={<Administration />} />
            <Route path="/businessstrategic" element={<BusinessStrategy />} />
            <Route path="/contactus" element={<ContactUs />} />

            <Route path="*" element={<Pagenotfound />} />
          </Routes>
          <CommonComponents />
          <ScrollToTop />
        </Suspense>
      </Router>
    </>
  );
};

export default App;
