import BpoSection from "../Components/AboutUs/BpoSection";
import Faq from "../Components/AboutUs/Faq";
import ServicesAbout from "../Components/AboutUs/Services";
import Solutions from "../Components/AboutUs/Solutions";
import TechnologiesServices from "../Components/AboutUs/Technolgies";
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
        </>
    )
}
export default AboutUs;