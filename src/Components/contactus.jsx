import ContactForm from "./ContactForm";

const contactus = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center gap-10 py-10 ">
        <div className="flex md:flex-row flex-col gap-10 justify-center items-center px-10">
          <ContactForm />
        </div>
      </div>
    </>
  );
};

export default contactus;
