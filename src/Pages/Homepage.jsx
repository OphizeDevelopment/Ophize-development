import Herosection from "../Components/herosectionbg";
import Services from "../Components/Homepage/services";
import Excellence from "../Components/Homepage/excellence";
import Highlight from "../Components/Homepage/highlight";
import Clients from "../Components/clients";
import Global from "../Components/Homepage/global";
import Contactus from "../Components/contactus";
import Footer from "../Components/footer";
import ScrollToTop from "../Components/ScrollToTop";
const Homepage = () => {
  return (
    <>
      <Herosection />
      <Services />
      <Excellence />
      <Highlight />
      <Clients />
      <Global />
      <Contactus />
      <Footer />
      <ScrollToTop />
    </>
  );
};

export default Homepage;
