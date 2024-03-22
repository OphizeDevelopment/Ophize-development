import telephoneicon from "../../assets/contactPhone.png"
import messageicon from "../../assets/contactEmail.png"

const Phonesection = () => {
  return (
    <>
      {/* main flex section for phone and message */}
      <div className="flex p-6 gap-4 justify-center flex-wrap 2xl:w-[1440px] w-auto mx-auto">
        {/* phone section flex */}
        <div className="flex items-center gap-3 ">
          <div>
            <img src={telephoneicon} />
          </div>
          <div>
            <h4 className="font-bold">PHONE</h4>
            <h4 className="text-[#305197] font-bold">+91 8956 35648</h4>
          </div>
        </div>
        {/* message section flex */}
        <div className="flex items-center gap-3">
          <div>
            <img src={messageicon} />
          </div>
          <div>
            <h4 className="font-bold">EMAIL</h4>
            <h4 className="text-[#305197] font-bold">info@ophize.com</h4>
          </div>
        </div>
      </div>
    </>
  );
};

export default Phonesection;
