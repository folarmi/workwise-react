import { Link } from "react-router-dom";
// import whiteLogo from "../assets/whiteLogo.png";
import logo from "../assets/Group.png";
// import logoWhite from "../assets/logoWhite.png";
import { SectionWrapper } from "../layout/SectionWrapper";
import { useState } from "react";

const NavbarTwo = ({ text, element }) => {
  const [showDropDown, setShowDropDown] = useState(false);
  const toggleDropdown = () => {
    setShowDropDown(!showDropDown);
  };

  return (
    <section className="bg-primary mx-auto lg:pl-8 pl-4 pt-4 pb-12 pr-4">
      <SectionWrapper>
        <div className="lg:flex lg:items-center">
          <div>
            <Link to="/">
              <img src={logo} alt="logo" className="w-1/2 lg:w-3/12" />
            </Link>
          </div>
          <section className="hidden lg:block lg:-ml-32">
            <ul className="flex items-center text-white">
              <div
                to="products"
                className="cursor-pointer"
                onClick={toggleDropdown}
              >
                <li className="nav-links font-verybold font-semibold mr-8">
                  Products
                </li>
                {showDropDown ? (
                  <div className="mt-2 absolute w-44 bg-white shadow-lg rounded-lg p-4">
                    <ul className="">
                      <li className="nav-links text-lightBlack text-base font-verybold font-semibold mb-4">
                        Workwise
                      </li>
                      <Link to="visitor-management">
                        <li className="nav-links text-lightBlack font-verybold font-semibold mb-4">
                          Visitor management
                        </li>
                      </Link>
                      <li className="nav-links text-lightBlack font-verybold font-semibold mb-4">
                        Meeting Rooms
                      </li>
                      <li className="nav-links text-lightBlack font-verybold font-semibold">
                        Employee clock-in
                      </li>
                    </ul>
                  </div>
                ) : (
                  ""
                )}
              </div>
              <Link to="hardware">
                <li className="nav-links font-verybold font-semibold mr-8">
                  Hardware
                </li>
              </Link>
              <Link to="learn">
                <li className="nav-links font-verybold font-semibold mr-8">
                  Learn
                </li>
              </Link>
              <Link to="pricing">
                <li className="nav-links font-verybold font-semibold mr-8">
                  Pricing
                </li>
              </Link>
              <Link to="contact">
                <li className="nav-links font-verybold font-semibold mr-20">
                  Contact Us
                </li>
              </Link>
              <Link to="/login">
                <button class=" focus:outline-none text-white border border-white bg-primary font-extrabold text-sm py-4 px-14 font-verybold mr-4 rounded-md">
                  Log in
                </button>
              </Link>
              <Link to="/tryforfree">
                <button class="bg-white focus:outline-none text-primary nav-links font-verybold font-semibold py-4 px-8 rounded-md">
                  Try for free
                </button>
              </Link>
            </ul>

            <div></div>
          </section>
        </div>
        <p className="text-center text-5xl text-white font-thin py-24">
          {text}
        </p>
        <p className="text-white text-center text-sm -mt-14 pb-4">{element}</p>
      </SectionWrapper>
    </section>
  );
};

export default NavbarTwo;
