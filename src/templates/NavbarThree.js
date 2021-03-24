import { Link } from "react-router-dom";
// import whiteLogo from "../assets/whiteLogo.png";
import logo from "../assets/Group.png";
// import logoWhite from "../assets/logoWhite.png";
import { SectionWrapper } from "../layout/SectionWrapper";

const NavbarThree = ({ buttonText, path, text }) => {
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
              <Link to="products">
                <li className="nav-links font-verybold font-semibold mr-8">
                  Products
                </li>
              </Link>
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
        <p className="text-center text-6xl text-white font-thin leading-snug pt-12 pb-4">
          {text}
        </p>
        <Link to={path}>
          <button class="bg-white focus:outline-none text-primary nav-links font-verybold font-semibold py-4 px-12 rounded-md button">
            {buttonText}
          </button>
        </Link>
      </SectionWrapper>
    </section>
  );
};

export default NavbarThree;
