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
      <div className="flex flex-col items-center  w-full bg-[rgba(48,81,151,.2)]">
        <div className="container mx-auto py-10 px-10">
          <div className="flex flex-wrap justify-end text-[#4B4B4B] sm:gap-8 gap-2 mb-8">
            <div className="flex gap-3 items-center">
              <img src={email} alt="Email" />
              <p>info@ophize.com</p>
            </div>
            <div className="flex gap-3 items-center">
              <img src={phone} alt="Phone" />
              <p>(+91) 79943 33222</p>
            </div>
            <div className="flex gap-3 items-center">
              <img src={clock} alt="Clock" />
              <p>10.00am - 5.30pm</p>
            </div>
          </div>
          <div className="flex md:flex-nowrap flex-wrap gap-14 justify-between w-full">
            <div className="text-[#4B4B4B]">
              <h1 className="font-bold mb-5">OUR SERVICES</h1>
              <div className="flex flex-wrap gap-10">
                <div className="flex flex-col gap-3 list-none capitalize">
                  <li>Finance and Accounts</li>
                  <li>Logistics Documentation</li>
                  <li>IT Security and Services</li>
                  <li>business compliances </li>
                  <li>Digital Marketing and Services </li>
                </div>
                <div className="flex flex-col gap-3 list-none capitalize">
                  <li>Software Development</li>
                  <li>Human resource services</li>
                  <li>administration services</li>
                  <li>business strategic consultancy </li>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-5 items-end justify-end">
              <img src={logo} alt="Logo" />
              <input
                type="email"
                placeholder="Enter your email to subscribe"
                className="w-full lg:w-80 px-3 py-2 rounded-xl text-[#5E5E5E] bg-[rgba(75,75,75,.25)]"
              />
              <div className="flex gap-5">
                <a
                  href="https://www.facebook.com/ophize"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={facebook} alt="Facebook" />
                </a>
                <a
                  href="https://www.linkedin.com/company/ophize/ "
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={linkedin} alt="LinkedIn" />
                </a>
                <a href="">
                  <img src={medium} alt="Medium" />
                </a>

                <a
                  href="https://twitter.com/ophize70167"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={twitter} alt="Twitter" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap md:gap-10 items-center gap-5 text-center bg-white w-full justify-around px-5 py-3 text-sm">
          <h1>Copyright by OPHIZE.COM - All rights reserved</h1>
          <h1>Privacy Policy || Cookie Policy</h1>
        </div>
      </div>
    </>
  );
};

export default footer;
