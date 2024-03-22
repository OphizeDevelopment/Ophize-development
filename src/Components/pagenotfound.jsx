import { Link } from "react-router-dom";
import img from "../assets/404.png";
import bgimg from "../assets/404bg.png";

const pagenotfound = () => {
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <div
        className="flex flex-col justify-center items-center text-[#305197] gap-4"
        style={{
          backgroundImage: `url(${bgimg})`, 
          backgroundSize: "cover", 
          backgroundPosition: "center", 
          backgroundRepeat: "no-repeat", 
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1 className="capitalize text-xl">Looks like you got lost</h1>
        <h1 className="uppercase text-4xl tracking-wider font-bold">
          page not found
        </h1>
        <img src={img} alt="Page Not Found" />
        <Link to="/">
          <button
            className="capitalize bg-[#305197] px-5 py-2
            sm:px-10 sm:py-3 rounded-lg text-white sm:text-base text-sm"
          >
            Return back to home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default pagenotfound;
