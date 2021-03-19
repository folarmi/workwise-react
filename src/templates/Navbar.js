import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";

const Navbar = ({
  image,
  navLinkColor,
  buttonOneColor,
  buttonOneBg,
  buttonTwoColor,
  buttonTwoBg,
}) => {
  return (
    <div className="object-cover flex items-center justify-between ">
      <div className="lg:flex lg:items-center">
        <Link to="/">
          <img src={image} alt="logo" className="w-1/2 lg:w-2/5" />
        </Link>
        <section className="hidden lg:block lg:-ml-32">
          <ul className="flex items-center" style={{ color: navLinkColor }}>
            <Link to="products">
              <li className="text-sm font-bold mr-8">Products</li>
            </Link>
            <Link to="hardware">
              <li className="text-sm font-bold mr-8">Hardware</li>
            </Link>
            <Link to="learn">
              <li className="text-sm font-bold mr-8">Learn</li>
            </Link>
            <Link to="pricing">
              <li className="text-sm font-bold mr-8">Pricing</li>
            </Link>
            <Link to="contactus">
              <li className="text-sm font-bold mr-20">Contact Us</li>
            </Link>
            <Link to="/login">
              <button
                class="bg-white outline-none text-primary border border-primary font-bold text-sm py-4 px-12 mr-4 rounded-md"
                style={{ color: buttonOneColor, backgroundColor: buttonOneBg }}
              >
                Log in
              </button>
            </Link>
            <Link to="/tryforfree">
              <button
                class="bg-primary outline-none text-white text-sm font-bold py-4 px-12 rounded-md"
                style={{ color: buttonTwoColor, backgroundColor: buttonTwoBg }}
              >
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
