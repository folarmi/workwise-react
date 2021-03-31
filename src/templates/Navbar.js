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
          <ul className="hidden lg:flex items-center overflow-hidden lg:justify-between text-lightBlack">
            <Dropdown />
            {NavbarData.map((item, index) => {
              return (
                <li
                  key={index}
                  className="nav-links mr-10 font-verybold font-semibold"
                >
                  <Link to={item.path}>{item.title}</Link>
                </li>
              );
            })}
            <Link to="/login">
              <button class="bg-white focus:outline-none text-primary border border-primary font-extrabold text-sm py-4 px-12 font-verybold mr-4 rounded-md">
                Log in
              </button>
            </Link>
            <Link to="/tryforfree">
              <button class="bg-primary focus:outline-none text-white nav-links font-verybold font-semibold py-4 px-8 rounded-md">
                Try for free
              </button>
            </Link>
          </ul>
        </nav>
      </header>
      <Sidebar />
    </div>
  );
};

export default Navbar;
