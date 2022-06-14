import { IoLogoWhatsapp } from "react-icons/fa";
import me from '../Images/me.jpg';
const Contact = () => {
    return (
      <div>
        <div className='flex justify-end mt-2'>
            <button className='btn btn-xs rounded-full'><span><IoLogoWhatsapp/></span> Share</button>
        </div>
        <div className="flex items-center space-x-4 my-4">
          <div class="avatar">
            <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src={me} alt="" />
            </div>
          </div>
          <div>
            <h1 className="text-2xl font-bold">Saddam Hosan</h1>
            <p className="text-xl my-2">Cox's Bazar, Bangladesh</p>
            <p>
              <i>Speaks English</i>
            </p>
            <div className="mt-3">
              <button className="btn btn-sm bg-green-800 hover:bg-green-600 rounded-full mx-5">
                Connect
              </button>
              <button className="btn btn-sm btn-outline text-green-700 hover:bg-green-800 rounded-full mx-5">
                Contact
              </button>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Contact;