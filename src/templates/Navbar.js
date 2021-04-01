import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";
import { NavbarData } from "../data/NavData";
import logo from "../assets/Group.png";
import { Dropdown } from "../atoms";

const Navbar = () => {
  return (
    <div className="">
      <header className="lg:flex lg:items-center lg:justify-between mt-6">
        <Link to="/">
          <img src={logo} alt="logo" className="w-32 lg:w-28" />
        </Link>

        <nav>
          <ul className="hidden lg:flex items-center text-lightBlack">
            <Dropdown />
            {NavbarData.map((item, index) => {
              return (
                <li
                  key={index}
                  className="nav-links mr-10 font-verybold font-bold lightAsh"
                >
                  <Link to={item.path}>{item.title}</Link>
                </li>
              );
            })}
          </ul>
        </nav>
        <ul className="hidden lg:block">
          <Link to="/login">
            <button class="bg-white focus:outline-none text-primary border border-primary font-medium text-xs py-4 px-14 font-verybold mr-4 rounded-md">
              Log in
            </button>
          </Link>
          <Link to="/tryforfree">
            <button class="bg-primary outline-none mt-4 text-white text-xs font-medium py-4 px-10 rounded-md">
              Try for free
            </button>
          </Link>
          {/* <Link to="/tryforfree">
            <button class="bg-primary focus:outline-none text-white nav-links font-verybold font-medium py-4 px-8 rounded-md">
              Try for free
            </button>
          </Link> */}
        </ul>
      </header>
      <div className="-mt-14 flex justify-end">
        <Sidebar />
      </div>
    </div>
  );
};

export default Navbar;
