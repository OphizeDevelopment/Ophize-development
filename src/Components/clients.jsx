import Marquee from "react-fast-marquee";

import l1 from "../assets/VAM.png";
import l2 from "../assets/AMST.png";
import l3 from "../assets/SAMKIDS.png";
import l4 from "../assets/TOPMOST.png";
import l5 from "../assets/BESPOKE.png";
import l6 from "../assets/ROUND SQUARE.png";

const Clients = () => {
  return (
    <div className="w-full py-10">
      <div className="flex justify-center ">
        <h1 className="text-[#2E2E2E] text-3xl font-semibold tracking-wider mb-5">
          Our Clients
        </h1>
      </div>
      <div
        className="flex justify-center items-center "
        style={{ background: "rgba(169, 169, 169, 0.20)" }}
      >
        <Marquee
          pauseOnHover={true} 
          speed={50} 
          gradient={false} 
          className="py-5" 
          style={{ maxWidth: "1250px" }} 
        >
          <a
            href="https://vamlogistics.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={l1} alt="Client Logo" className="w-32 mx-10" />
          </a>
          <a
            href="https://amstergi.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={l2} alt="Client Logo" className="w-32 mx-10" />
          </a>
          <a
            href="https://hellosamkids.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={l3} alt="Client Logo" className="w-32 mx-10" />
          </a>
          <a
            href=" https://topmostdental.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={l4} alt="Client Logo" className="w-32 mx-10" />
          </a>
          <a
            href="https://www.roundsquaregroup.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={l5} alt="Client Logo" className="w-32 mx-10" />
          </a>
          <img src={l6} alt="Client Logo" className="w-32 mx-10" />
        </Marquee>
      </div>
    </div>
  );
};

export default Clients;
