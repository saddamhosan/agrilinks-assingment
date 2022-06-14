import { NavLink, Outlet } from "react-router-dom";
import Contact from './Contact';
import Menu from './Menu';

const Home = () => {
    return (
      <div>
        <Menu />
        <div className="w-11/12 md:w-8/12 mx-auto">
          <Contact />
          <div className="flex justify-evenly">
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "border-b-4 w-full text-center border-green-700"
                  : "w-full text-center"
              }
              to="/business"
            >
              BUSINESS
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "border-b-4 w-full text-center border-green-700"
                  : "w-full text-center"
              }
              to="/review"
            >
              REVIEW
            </NavLink>
          </div>
          <div>
            <Outlet />
          </div>
        </div>
      </div>
    );
};

export default Home;