import { Link } from "react-router-dom";
// Importing assets for the page
import img from "../assets/404.png";
import bgimg from "../assets/404bg.png";

// pagenotfound component definition
const pagenotfound = () => {
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      {/* Inner div with flex layout, central alignment, and custom styles for background image */}
      <div
        className="flex flex-col justify-center items-center text-[#305197] gap-4"
        style={{
          backgroundImage: `url(${bgimg})`, // Background image from imported asset
          backgroundSize: "cover", // Background size style
          backgroundPosition: "center", // Background position style
          backgroundRepeat: "no-repeat", // Background repeat style
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {/* Heading indicating the user is lost */}
        <h1 className="capitalize text-xl">Looks like you got lost</h1>
        {/* Main message for the 404 page */}
        <h1 className="uppercase text-4xl tracking-wider font-bold">
          page not found
        </h1>
        {/* Image for the 404 page */}
        <img src={img} alt="Page Not Found" />
        {/* Link to navigate back to the home page */}
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
