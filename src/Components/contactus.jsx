import ContactForm from "./ContactForm";

const contactus = () => {
  return (
    <>
      {/* Main container div with flex layout, centered content, and vertical padding */}
      <div className="flex flex-col justify-center items-center gap-10 py-10 ">
       
        
        {/* Container div for map and contact information with responsive layout */}
        <div className="flex md:flex-row flex-col gap-10 justify-center items-center px-10">
          <ContactForm />
          
        </div>
      </div>
    </>
  );
};

export default contactus;
