const HerosectionContact = () => {
  return (
    <>
      <div className="text-center p-5">
        {/* Main title for the hero section */}
        <h1 className="text-xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-wide text-center text-white">
          Connect with Our Experts Today
        </h1>
        {/* Description paragraph */}
        <p className="text-xs sm:text-base lg:text-lg md:w-1/2 lg:w-[50rem] text-center mx-auto mt-2 text-[#AFADB5]">
          OPHIZE provides a diverse array of solutions to enhance your business
          dynamics. Discover our range of services and secure personalized
          assistance for every facet of your organization
        </p>
        {/* Div for embedding Google Maps, maintaining aspect ratio */}
        <div className="p-10">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3928.6611428828433!2d76.31522707407824!3d10.044795572264254!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6e86215d24d2c3a9%3A0x2bdd30aeca127b9!2sOphize%2C%20complexity%20simplified!5e0!3m2!1sen!2sin!4v1705647904524!5m2!1sen!2sin"
            style={{ border: 0 }} // Inline style to remove border
            allowfullscreen="" // Attribute to enable full screen
            loading="lazy" // Lazy loading for better performance
            className="h-96 w-full" // Responsive width and height
          ></iframe>
        </div>
      </div>
    </>
  );
};
export default HerosectionContact;
