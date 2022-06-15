import { NavLink, Outlet } from "react-router-dom";
import Contact from './Contact';
import Menu from './Menu';

const Home = () => {
  
    return (
      <div>
        <Menu />
        <div className="w-11/12 md:w-8/12 mx-auto">
          <Contact/>
          <div className="flex justify-evenly">
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "border-b-4 w-full text-center font-bold border-[#01A39D]"
                  : "w-full text-center font-bold"
              }
              to="/business"
            >
              BUSINESS
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "border-b-4 w-full text-center border-green-700 font-bold"
                  : "w-full text-center font-bold"
              }
              to="/review"
            >
              REVIEW
            </NavLink>
          </div>
          <div>
            <Outlet />
          </div>
          <div className="my-4 ">
            <p className="shadow-xl pl-4 w-[450px] mx-auto rounded-lg text-[#6702EE]">
              join the agricultural community
              <span className="btn btn-md rounded-full bg-gradient-to-t from-[#a16cf7] to-[rgba(98,2,238,.5)] border-0">
                Download gramodaya
              </span>
            </p>
          </div>
        </div>
      </div>
    );
};

export default Home;