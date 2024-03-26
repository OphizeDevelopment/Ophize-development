import BpoSection from "../Components/AboutUs/BpoSection";
import Faq from "../Components/AboutUs/Faq";
import ServicesAbout from "../Components/AboutUs/Services";
import Solutions from "../Components/AboutUs/Solutions";
import TechnologiesServices from "../Components/AboutUs/Technolgies";
import ScrollToTop from "../Components/ScrollToTop";
import HeroSection from "../Components/herosectionbg";

const AboutUs = () =>{
    return(
        <>
        <HeroSection />
        <ServicesAbout />
        <TechnologiesServices />
        <BpoSection />
        <Faq />
        <Solutions />
        <ScrollToTop />
        </>
    )
}
export default AboutUs;