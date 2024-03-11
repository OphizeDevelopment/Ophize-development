/* eslint-disable react/no-unescaped-entities */
// Importing assets and necessary components
import img from "../assets/underconstruction.png";
import logo from "../assets/logo-ophize.png";
import i1 from "../assets/facebook_icon.png";
import i2 from "../assets/instagram_icon.png";
import i3 from "../assets/likedin-icon.png";
import i4 from "../assets/twitter_icon.png";
import { Link } from "react-router-dom";

const underconstruction = () => {
  return (
    <div className="w-screen h-screen">
      {/* Inner container with padding and styles for background image */}
      <div
        className="px-4 sm:px-8 md:px-20 text-[#305197] gap-4 flex flex-col justify-center h-full"
        style={{
          backgroundImage: `url(${img})`, // Background image
          backgroundSize: "cover", // Background size style
          backgroundPosition: "center", // Background position style
          backgroundRepeat: "no-repeat", // Background repeat style
        }}
      >
        {/* Innermost container with flexible layout and spacing */}
        <div className="w-full flex flex-col gap-4 md:gap-16 lg:gap-28 justify-center h-full">
          {/* Container for the logo */}
          <div className="flex justify-center md:justify-end items-center">
            <img src={logo} alt="logo" />
          </div>

          {/* Main content area with flexible layout */}
          <div className="flex justify-center md:justify-end">
            <div className="flex flex-col justify-center items-center gap-4 md:gap-5 lg:gap-10 text-[#BDBDBD] max-w-full md:max-w-2xl lg:max-w-4xl xl:max-w-6xl">
              {/* Heading indicating the page is under construction */}
              <h1 className="text-center text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold capitalize">
                This page is under construction <br />
                <span className="text-[#00FFFF] text-2xl sm:text-3xl md:text-5xl lg:text-6xl uppercase">
                  Coming Soon
                </span>
              </h1>
              {/* Informative text about the ongoing construction */}
              <p className="text-center text-xs sm:text-sm md:text-base lg:text-xl">
                Our website is currently undergoing some exciting upgrades to
                bring you a more vibrant and user-friendly experience. We're
                putting the final touches on new features that we think you'll
                love. In the meantime, we value your support and appreciate your
                patience - we’re looking forward to welcoming you back to our
                new and improved site very soon!
              </p>
              {/* Link button to explore services */}
              <div className="flex justify-center items-center w-full">
                <Link to="/">
                  <button className="px-4 sm:px-6 md:px-10 py-2 bg-[#272E3E] rounded text-xs sm:text-sm md:text-base">
                    Explore our services
                  </button>
                </Link>
              </div>
            </div>
          </div>

          {/* Social media icons */}
          <div className="flex justify-center md:justify-end items-center gap-2 sm:gap-3 md:gap-5">
            <img className="h-6 sm:h-8 md:h-10" src={i1} alt="Facebook" />
            <img className="h-6 sm:h-8 md:h-10" src={i2} alt="Instagram" />
            <img className="h-6 sm:h-8 md:h-10" src={i3} alt="LinkedIn" />
            <img className="h-6 sm:h-8 md:h-10" src={i4} alt="Twitter" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default underconstruction;
