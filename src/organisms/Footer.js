import logo from "../assets/Group.png";
import playStore from "../assets/googlePlay.png";
import ios from "../assets/iosStore.png";
import { SmallText } from "../atoms";
import { SectionWrapper } from "../layout/SectionWrapper";
import { Link } from "react-router-dom";
import facebook from "../assets/facebook.png";
import twitter from "../assets/twitter.png";
import instagram from "../assets/instagram.png";
import linkedin from "../assets/linkedin.png";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <SectionWrapper>
      <div className="mt-20 border-t border-lightBlack">
        <div className="lg:flex lg:mb-16 lg:justify-between">
          <section className="lg:max-w-lg">
            <img
              src={logo}
              alt="logo"
              className="w-1/2 lg:w-1/5 mt-8 lg:mb-8"
            />
            <SmallText
              text="© 2020 Workwise NG. All rights reserved."
              className="my-4 text-xs"
            />
            <SmallText
              text="“Workwise” are trademarks of Workwise NG, 12 Omorinsola Drive, Lekki Phase 1, Lagos, Nigeria"
              className="my-4 leading-loose"
            />
            <SmallText
              text="All text, graphics, audio files, code, downloadable material, and other works on this website are the copyrighted works of Workwise NG. All Rights Reserved."
              className="my-4 leading-relaxed"
            />
            <SmallText
              text="Any unauthorized redistribution or reproduction of any copyrighted materials on this website is strictly prohibited. Other product and company names are trademarks of their respective owners. This website contains simulated images; actual appearance may vary."
              className="my-6 leading-relaxed"
            />
          </section>

          <div className="lg:mt-12">
            <div className="lg:flex">
              <section className="mt-8 mr-12">
                <p className="text-xs uppercase mb-4 font-verybold font-bold footer-text">
                  Products
                </p>
                <ul>
                  <li onClick={scrollToTop}>
                    <SmallText
                      text="Visitor Management"
                      className="font-bold my-2"
                    />
                  </li>
                  <li onClick={scrollToTop}>
                    <SmallText
                      text="Meeting Rooms"
                      className="font-bold mb-4"
                    />
                  </li>
                  <img
                    src={playStore}
                    alt="playStore"
                    className="w-1/4 lg:w-32 mb-2 -ml-2 object-cover lg:mt-8"
                  />
                  <img
                    src={ios}
                    alt="ios store"
                    className="w-1/4 lg:w-28 object-cover"
                  />
                </ul>
              </section>
              <section className="mt-8 mr-16">
                <p className="text-xs uppercase mb-4 font-verybold font-bold footer-text">
                  Resources
                </p>
                <ul>
                  <Link to="/requestdemo">
                    <li onClick={scrollToTop}>
                      <SmallText
                        text="Request Demo"
                        className="font-bold mb-4"
                      />
                    </li>
                  </Link>
                  <li onClick={scrollToTop}>
                    <SmallText text="Pricing" className="font-bold mb-4" />
                  </li>
                  <li onClick={scrollToTop}>
                    <SmallText text="Support" className="font-bold mb-4" />
                  </li>
                  <Link to="/hardware">
                    <li onClick={scrollToTop}>
                      <SmallText text="Hardware" className="font-bold mb-4" />
                    </li>
                  </Link>
                  <li onClick={scrollToTop}>
                    <SmallText text="Learn" className="font-bold mb-4" />
                  </li>
                  <li onClick={scrollToTop}>
                    <SmallText text="Support" className="font-bold mb-4" />
                  </li>
                </ul>
              </section>

              <section className="mt-8 mr-20">
                <p className="uppercase mb-4 font-verybold font-bold footer-text">
                  Company
                </p>
                <ul>
                  <Link to="aboutus">
                    <li onClick={scrollToTop}>
                      <SmallText text="About Us" className="font-bold mb-4" />
                    </li>
                  </Link>
                  <Link to="/contact">
                    <li onClick={scrollToTop}>
                      <SmallText text="Contact Us" className="font-bold mb-4" />
                    </li>
                  </Link>
                  <li onClick={scrollToTop}>
                    <SmallText text="Support" className="font-bold mb-4" />
                  </li>
                  <Link to="/careers">
                    <li onClick={scrollToTop}>
                      <SmallText text="Careers" className="font-bold mb-4" />
                    </li>
                  </Link>
                  <Link to="/blog">
                    <li onClick={scrollToTop}>
                      <SmallText text="Blog" className="font-bold mb-4" />
                    </li>
                  </Link>
                  <Link to="datasecurity">
                    <li onClick={scrollToTop}>
                      <SmallText
                        text="Data Security"
                        className="font-bold mb-4"
                      />
                    </li>
                  </Link>
                </ul>
              </section>
            </div>

            <section className="lg:flex lg:items-center mt-4">
              <Link
                to="/privacy-policy"
                className="font-verybold font-black text-sm text-lightBlack leading-relaxed mr-4"
                onClick={scrollToTop}
              >
                Privacy Policy
              </Link>
              <p className="font-verybold font-black text-4xl lg:-mt-6 text-lightBlack leading-relaxed mr-4">
                .
              </p>
              <Link to="/termsofservice" onClick={scrollToTop}>
                <p className="font-verybold font-black text-sm text-lightBlack leading-relaxed mr-24">
                  Terms of Service
                </p>
              </Link>
              <div className="flex">
                <img src={facebook} alt="facebook" className="mr-2" />
                <img src={twitter} alt="twitter" className="mr-2" />
                <img src={linkedin} alt="linkedin" className="mr-2" />
                <img src={instagram} alt="instagram" />
              </div>
            </section>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export { Footer };
