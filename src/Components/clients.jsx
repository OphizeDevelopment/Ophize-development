// Importing the Marquee component from react-fast-marquee package
import Marquee from "react-fast-marquee";

// Importing images for client logos
import l1 from "../assets/VAM.png";
import l2 from "../assets/AMST.png";
import l3 from "../assets/SAMKIDS.png";
import l4 from "../assets/TOPMOST.png";
import l5 from "../assets/BESPOKE.png";
import l6 from "../assets/ROUND SQUARE.png";

const Clients = () => {
  return (
    //  Main container div with full width and vertical padding
    <div className="w-full py-10">
      {/* Div to center the title */}
      <div className="flex justify-center ">
        {/* Title for the clients section */}
        <h1 className="text-[#2E2E2E] text-3xl font-semibold tracking-wider mb-5">
          Our Clients
        </h1>
      </div>
      {/* Div for the marquee section with centered content and a styled
      background */}
      <div
        className="flex justify-center items-center "
        style={{ background: "rgba(169, 169, 169, 0.20)" }}
      >
        {/* Marquee component to create a scrolling effect */}
        <Marquee
          pauseOnHover={true} // Pauses the scrolling on mouse hover
          speed={50} // Speed of the scrolling
          gradient={false} // Disables gradient effect at the edges
          className="py-5" // Padding for the marquee container
          style={{ maxWidth: "1250px" }} // Maximum width of the marquee
        >
          {/* Client logos displayed as scrolling images */}
          <img src={l1} alt="Client Logo" className="w-32 mx-10" />
          <img src={l2} alt="Client Logo" className="w-32 mx-10" />
          <img src={l3} alt="Client Logo" className="w-32 mx-10" />
          <img src={l4} alt="Client Logo" className="w-32 mx-10" />
          <img src={l5} alt="Client Logo" className="w-32 mx-10" />
          <img src={l6} alt="Client Logo" className="w-32 mx-10" />
        </Marquee>
      </div>
    </div>
  );
};

export default Clients;
