// import { Link } from "react-router-dom";
import whiteLogo from "../assets/whiteLogo.png";
import { SectionWrapper } from "../layout/SectionWrapper";
import Navbar from "../templates/Navbar";

const NavbarTwo = ({ text, buttonText }) => {
  return (
    <section className="bg-primary mx-auto lg:pl-8 pl-4 pt-4 pb-12 pr-4">
      <SectionWrapper>
        <Navbar
          image={whiteLogo}
          navLinkColor="#ffffff"
          buttonTwoColor="#0A459F"
          buttonTwoBg="#ffffff"
        />
        <p className="text-center text-4xl text-white font-light pb-8 lg:max-w-xl lg:ml-72">
          {text}
        </p>
        {/* <Link to="/signup">
        <button class="bg-white text-primary outline-none ml-28 lg:mb-8 text-xs py-2 px-8 rounded button">
          {buttonText}
        </button>
      </Link> */}
      </SectionWrapper>
    </section>
  );
};

export default NavbarTwo;
