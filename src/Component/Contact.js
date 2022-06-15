import { useContext } from "react";
import { IoLogoWhatsapp, IoMdCall, IoMdPersonAdd } from "react-icons/io";
import me from '../Images/me.png';
import { DetailContext } from './../App';


const Contact = () => {
  const details = useContext(DetailContext);
  return (
    <div>
      <div className="flex justify-end mt-2">
        <button className="btn btn-xs rounded-full bg-[#01A39D] hover:bg-[#017c78] border-0 ">
          <span>
            <IoLogoWhatsapp />
          </span>{" "}
          Share
        </button>
      </div>
      <div className="flex items-center space-x-4 my-4">
        <div className="avatar">
          <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <img src={me} alt="" />
          </div>
        </div>
        <div>
          <h1 className="text-2xl font-bold">{details.name}</h1>
          <p className="text-xl my-2">
            {details.loclevel3Name},{details.loclevel2Name}
          </p>
          <p>
            <i>Speaks English</i>
          </p>
          <div className="mt-3">
            <button className="btn btn-sm bg-[#01A39D] hover:bg-[#017c78] border-0 rounded-full mx-5">
              <span className="mr-2">
                <IoMdPersonAdd />
              </span>
              Connect
            </button>
            <button className="btn btn-sm btn-outline text-[#01A39D] hover:bg-[#017c78] rounded-full mx-5">
              <span className="mr-2">
                <IoMdCall />
              </span>
              Contact
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;