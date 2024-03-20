import ContactForm from "../Components/ContactForm";
import Bposervice from "../Components/ContactUs/Bposervice";
import Phonesection from "../Components/ContactUs/Phonesection";
import Clients from "../Components/clients";
import Footer from "../Components/footer";
import HeroSection from "../Components/herosectionbg";

const ContactUs = () => {
  return (
    <>
      <HeroSection />
      <Phonesection />
      <ContactForm />
      <Clients />
      <Bposervice />

      <Footer />
    </>
  );
};
export default ContactUs;
