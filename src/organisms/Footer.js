import logo from "../assets/Group.png";
import playStore from "../assets/googlePlay.png";
import ios from "../assets/iosStore.png";
import { SmallText } from "../atoms";
import { SectionWrapper } from "../layout/SectionWrapper";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <SectionWrapper>
      <div className="mt-20">
        <hr />

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
              className="my-4 leading-relaxed"
            />
            <SmallText
              text="All text, graphics, audio files, code, downloadable material, and other works on this website are the copyrighted works of Workwise NG. All Rights Reserved."
              className="my-4 leading-relaxed"
            />
            <SmallText
              text="Any unauthorized redistribution or reproduction of any copyrighted materials on this website is strictly prohibited. Other product and company names are trademarks of their respective owners. This website contains simulated images; actual appearance may vary."
              className="my-4 leading-relaxed"
            />
          </section>

          <div className="lg:mt-12">
            <div className="lg:flex">
              <section className="mt-8">
                <p className="text-xs uppercase mb-4 font-verybold font-bold footer-text">
                  Products
                </p>
                <ul>
                  <li>
                    <SmallText
                      text="Visitor Management"
                      className="font-bold my-2"
                    />
                  </li>
                  <li>
                    <SmallText
                      text="Meeting Rooms"
                      className="font-bold mb-4"
                    />
                  </li>
                  <img
                    src={playStore}
                    alt="playStore"
                    className="w-1/4 lg:w-10/12 mb-2 -ml-2 object-cover lg:mt-12"
                  />
                  <img
                    src={ios}
                    alt="ios store"
                    className="w-1/4 lg:w-3/4 object-cover"
                  />
                </ul>
              </section>
              <section className="mt-8 mr-16">
                <p className="text-xs uppercase mb-4 font-verybold font-bold footer-text">
                  Resources
                </p>
                <ul>
                  <Link to="/requestdemo">
                    <li>
                      <SmallText
                        text="Request Demo"
                        className="font-bold mb-4"
                      />
                    </li>
                  </Link>
                  <li>
                    <SmallText text="Pricing" className="font-bold mb-4" />
                  </li>
                  <li>
                    <SmallText text="Support" className="font-bold mb-4" />
                  </li>
                  <li>
                    <SmallText text="Hardware" className="font-bold mb-4" />
                  </li>
                  <li>
                    <SmallText text="Learn" className="font-bold mb-4" />
                  </li>
                  <li>
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
                    <li>
                      <SmallText text="About Us" className="font-bold mb-4" />
                    </li>
                  </Link>
                  <li>
                    <SmallText text="Contact US" className="font-bold mb-4" />
                  </li>
                  <li>
                    <SmallText text="Support" className="font-bold mb-4" />
                  </li>
                  <li>
                    <SmallText text="Careers" className="font-bold mb-4" />
                  </li>
                  <li>
                    <SmallText text="Blog" className="font-bold mb-4" />
                  </li>
                  <li>
                    <SmallText
                      text="Data Security"
                      className="font-bold mb-4"
                    />
                  </li>
                </ul>
              </section>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export { Footer };
