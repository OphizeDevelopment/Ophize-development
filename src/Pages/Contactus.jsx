import Bposervice from "../Components/ContactUs/Bposervice";
import Phonesection from "../Components/ContactUs/Phonesection";
import ScrollToTop from "../Components/ScrollToTop";
import Clients from "../Components/clients";
import Footer from "../Components/footer";
import HeroSection from "../Components/herosectionbg";

const ContactUs = () => {
  return (
    <>
      <HeroSection />
      <Phonesection />
      <Clients />
      <Bposervice />
      <Footer />
      <ScrollToTop />
    </>
  );
};
export default ContactUs;
