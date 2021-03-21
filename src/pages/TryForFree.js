import { Link } from "react-router-dom";
import logo from "../assets/Group.png";
import { SectionWrapper } from "../layout/SectionWrapper";
import { LogInIntro } from "../molecules";
import Input from "../templates/Input";
import Navbar from "../templates/Navbar";

const TryForFree = () => {
  return (
    <div>
      <SectionWrapper>
        <Navbar image={logo} />

        <div className="lg:mt-12 lg:flex mb-24">
          <section className="lg:ml-24 lg:mr-64">
            <LogInIntro
              title={
                <p>
                  Step 01/02: <br className="mt-8" />
                  Create Your Free Account
                </p>
              }
              text={
                <p>
                  Password must be at least 8 characters and contain at least
                  one capital letter, one lower case letter and one number.
                  <br className="mt-8" /> By clicking
                  <Link className="text-primary">
                    “Next” you agree to our Terms of Service, Privacy Policy
                  </Link>
                  .
                </p>
              }
              className="max-w-xs"
            />
          </section>

          <section className="slim-border rounded-md m-auto w-5/12  px-8 py-4">
            <Input
              label="Your company email"
              placeholder="osa@mudia.ment"
              type="email"
            />
            <Input label="First name" placeholder="Osamudiamen" type="text" />
            <Input label="Last name" placeholder="Imaseun" type="text" />
            <Input
              label="Your preferred password"
              placeholder="osa@mudia.ment"
              type="password"
            />

            <div className="float-right">
              <Link to="/yourcompany" className="text-right">
                <button class="bg-primary text-white text-sm font-bold py-4 px-16 rounded-md">
                  Next
                </button>
              </Link>
            </div>
          </section>
        </div>
      </SectionWrapper>
    </div>
  );
};

export { TryForFree };
