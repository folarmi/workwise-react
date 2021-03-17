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
          <img src={image} alt="logo" className="object-cover mr-24" />
        </Link>
        <section className="hidden lg:block">
          <ul className="flex items-center" style={{ color: navLinkColor }}>
            <Link to="products">
              <li className="text-sm font-bold mr-12">Products</li>
            </Link>
            <Link to="hardware">
              <li className="text-sm font-bold mr-12">Hardware</li>
            </Link>
            <Link to="learn">
              <li className="text-sm font-bold mr-12">Learn</li>
            </Link>
            <Link to="pricing">
              <li className="text-sm font-bold mr-12">Pricing</li>
            </Link>
            <Link to="contactus">
              <li className="text-sm font-bold mr-20">Contact Us</li>
            </Link>
            <Link to="/login">
              <button
                class="bg-white outline-none text-primary border border-primary text-xs py-2 px-12 mr-4 rounded"
                style={{ color: buttonOneColor, backgroundColor: buttonOneBg }}
              >
                Log in
              </button>
            </Link>
            <Link to="/signup">
              <button
                class="bg-primary outline-none text-white text-xs py-2 px-8 rounded"
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
