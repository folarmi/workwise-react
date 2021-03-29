import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";
import logo from "../assets/Group.png";
import { Dropdown } from "../atoms";

const Navbar = () => {
  return (
    <div className="object-cover flex items-center justify-between ">
      <div className="lg:flex lg:items-center">
        <Link to="/">
          <img src={logo} alt="logo" className="w-1/2 lg:w-3/12" />
        </Link>
        <section className="hidden lg:block lg:-ml-32">
          <ul className="flex items-center text-lightBlack">
            <Dropdown />
            <Link to="hardware">
              <li className="nav-links font-verybold font-semibold mr-10">
                Hardware
              </li>
            </Link>
            <Link to="learn">
              <li className="nav-links font-verybold font-semibold mr-10">
                Learn
              </li>
            </Link>
            <Link to="pricing">
              <li className="nav-links  font-verybold font-semibold mr-10">
                Pricing
              </li>
            </Link>
            <Link to="contact">
              <li className="nav-links  font-verybold font-semibold mr-20">
                Contact Us
              </li>
            </Link>
            <Link to="/login">
              <button class="bg-white focus:outline-none text-primary border border-primary font-extrabold text-sm py-4 px-14 font-verybold mr-4 rounded-md">
                Log in
              </button>
            </Link>
            <Link to="/tryforfree">
              <button class="bg-primary focus:outline-none text-white nav-links font-verybold font-semibold py-4 px-8 rounded-md">
                Try for free
              </button>
            </Link>
          </ul>

          <div></div>
        </section>
      </div>
      <Sidebar />
    </div>
  );
};

export default Navbar;
