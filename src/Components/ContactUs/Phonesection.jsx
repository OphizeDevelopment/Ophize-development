import telephoneicon from "../../assets/contactPhone.png";
import messageicon from "../../assets/contactEmail.png";
import ContactForm from "../ContactForm";

const Phonesection = () => {
  return (
    <>
      <div className="flex p-6 gap-4 justify-center flex-wrap 2xl:w-[1440px] w-auto mx-auto">
        <div className="flex items-center gap-3 w-auto">
          <div>
            <img src={telephoneicon} />
          </div>
          <div>
            <h4 className="font-bold">PHONE</h4>
            <h4 className="text-[#305197] font-bold">+91 8956 35648</h4>
          </div>
        </div>
        <div className="flex items-center gap-3 ">
          <div>
            <img src={messageicon} />
          </div>
          <div>
            <h4 className="font-bold">EMAIL</h4>
            <h4 className="text-[#305197] font-bold">info@ophize.com</h4>
          </div>
        </div>
      </div>
      <div className="px-6 my-10 flex justify-center items-center">
        <ContactForm />
      </div>
    </>
  );
};

export default Phonesection;
