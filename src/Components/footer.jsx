// Importing images for various icons and logo
import email from "../assets/email-icon.png";
import phone from "../assets/phone-icon.png";
import clock from "../assets/clock-icon.png";
import logo from "../assets/logo-ophize.png";
import facebook from "../assets/facebook-icon.png";
import linkedin from "../assets/linkedin-icon.png";
import medium from "../assets/medium-icon.png";
import twitter from "../assets/Twitter-icon.png";

const footer = () => {
  return (
    <>
      <div className="flex flex-col items-center mt-16 w-full bg-[rgba(48,81,151,.2)]">
         {/* Container with auto margins, padding, and fixed width */}
        <div className="container mx-auto py-10 px-10">
           {/* Flex container for contact information with responsive layout */}
          <div className="flex flex-wrap justify-end text-[#4B4B4B] sm:gap-8 gap-2 mb-8">
        {/* Individual contact information item with email */}
            <div className="flex gap-3 items-center">
              <img src={email} alt="Email" />
              <p>info@ophize.com</p>
            </div>
           {/* Contact information item with phone number */}
            <div className="flex gap-3 items-center">
              <img src={phone} alt="Phone" />
              <p>(+91) 79943 33222</p>
            </div>
            {/* Contact information item with office hours */}
            <div className="flex gap-3 items-center">
              <img src={clock} alt="Clock" />
              <p>10.00am - 5.30pm</p>
            </div>
          </div>
       {/* Container for services and subscription section with responsive layout */}
          <div className="flex md:flex-nowrap flex-wrap gap-14 justify-between w-full">
           {/* Services listing section */}
            <div className="text-[#4B4B4B]">
              <h1 className="font-bold mb-5">OUR SERVICES</h1>
              <div className="flex flex-wrap gap-10">
                 {/* Column 1 for services list */}
                <div className="flex flex-col gap-3 list-none capitalize">
                  <li>Finance and Accounts</li>
                  <li>Logistics Documentation</li>
                  <li>IT Security and Services</li>
                  <li>business compliances </li>
                  <li>Digital Marketing and Services </li>
                </div>
                {/* Column 2 for services list */}
                <div className="flex flex-col gap-3 list-none capitalize">
                  <li>Software Development</li>
                  <li>Human resource services</li>
                  <li>administration services</li>
                  <li>business strategic consultancy </li>
                </div>
              </div>
            </div>

             {/* Subscription and social media section */}
            <div className="flex flex-col gap-5 items-end justify-end">
              <img src={logo} alt="Logo" />
               {/* Email subscription input */}
              <input
                type="email"
                placeholder="Enter your email to subscribe"
                className="w-full lg:w-80 px-3 py-2 rounded-xl text-[#5E5E5E] bg-[rgba(75,75,75,.25)]"
              />
             {/* Social media icons */}
              <div className="flex gap-5">
                <img src={facebook} alt="Facebook" />
                <img src={linkedin} alt="LinkedIn" />
                <img src={medium} alt="Medium" />
                <img src={twitter} alt="Twitter" />
              </div>
            </div>
          </div>
        </div>
        {/* Footer bottom bar with copyright and policies */}
        <div className="flex flex-wrap md:gap-10 items-center gap-5 text-center bg-white w-full justify-around px-5 py-3 text-sm">
          <h1>Copyright by OPHIZE.COM - All rights reserved</h1>
          <h1>Privacy Policy || Cookie Policy</h1>
        </div>
      </div>
    </>
  );
};

export default footer;
