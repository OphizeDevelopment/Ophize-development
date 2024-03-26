import ContactForm from "../Components/ContactForm";
import HeroSection from "../Components/herosectionbg";
import ServicesHr from "../Components/HumenResource/Services";
import BgsolutionHr from "../Components/HumenResource/SolutionHr1";
import SolutionsHr from "../Components/HumenResource/SolutionsHr";
import ScrollToTop from "../Components/ScrollToTop";

const humanresource = () => {
  return (
    <>
      <HeroSection />
      <SolutionsHr />
      <BgsolutionHr />
      <ServicesHr />
      <ScrollToTop />
    </>
  );
};
export default humanresource;
