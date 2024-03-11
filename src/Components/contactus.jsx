const contactus = () => {
  return (
    <>
      {/* Main container div with flex layout, centered content, and vertical padding */}
      <div className="flex flex-col justify-center items-center gap-10 py-10 ">
        {/* Title of the contact section */}
        <h1 className="text-[#305197] font-bold lg:text-3xl text-xl">
          GET IN TOUCH WITH US
        </h1>
        {/* Container div for map and contact information with responsive layout */}
        <div className="flex md:flex-row flex-col gap-10 justify-center items-center px-10">
          {/* Div for embedding Google Maps, maintaining aspect ratio */}
          <div className="w-full aspect-w-16 aspect-h-9">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3928.6611428828433!2d76.31522707407824!3d10.044795572264254!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6e86215d24d2c3a9%3A0x2bdd30aeca127b9!2sOphize%2C%20complexity%20simplified!5e0!3m2!1sen!2sin!4v1705647904524!5m2!1sen!2sin" 
              style={{ border: 0 }} // Inline style to remove border
              allowfullscreen="" // Attribute to enable full screen
              loading="lazy" // Lazy loading for better performance
              className="w-full h-full lg:w-[550px] lg:h-[300px]" // Responsive width and height
            ></iframe>
          </div>

          {/*  Div for displaying address and email information */}
          <div className="flex flex-col gap-10 justify-center">
            {/* Address section */}
            <div>
              <h1 className="text-[#305197] font-bold">ADDRESS</h1>
              <p className="text-[#434343] xl:w-[30rem]">
                24/447F1, Opposite Metro Pillar No.316, Near Municipal Town
                Hall, South Kalamassery, Kalamassery, Ernakulam, Kerala, 682033
              </p>
            </div>
            {/* Email section */}
            <div>
              <h1 className="text-[#305197] font-bold">EMAIL</h1>
              <p className="text-[#434343]">info@ophize.com</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default contactus;
