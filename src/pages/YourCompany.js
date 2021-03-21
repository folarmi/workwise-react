import { Link } from "react-router-dom";
import logo from "../assets/Group.png";
import { SectionWrapper } from "../layout/SectionWrapper";
import { LogInIntro } from "../molecules";
import Input from "../templates/Input";
import Navbar from "../templates/Navbar";
import Select from "../templates/Select";

const YourCompany = () => {
  return (
    <div>
      <SectionWrapper>
        <Navbar image={logo} />

        <div className="lg:mt-12 lg:flex">
          <section className="lg:ml-16 lg:mr-52">
            <LogInIntro
              title={
                <p>
                  Step 02/02: <br className="mt-8" />
                  Tell us a bit about your company
                </p>
              }
              bgColor="#0A459F"
            />
          </section>

          <section className="slim-border rounded-md m-auto w-5/12 py-4 px-8">
            <Input
              label="Your company name"
              placeholder="osa@mudia.ment"
              type="email"
              className="w-full"
            />
            <Input
              label="Company address"
              placeholder="Osamudiamen"
              type="text"
            />
            <Select label="Company size" />

            <Input label="Company URL" placeholder="companyname.workwise.ng" />

            <div className="flex">
              <Link to="/tryforfree">
                <button class="bg-white text-primary border border-primary text-sm my-2 font-bold py-4 px-16 mr-4 rounded-md">
                  Go back
                </button>
              </Link>
              <Link to="/">
                <button class="bg-primary text-white  text-sm my-2 font-bold py-4 px-12 rounded-md">
                  Create account
                </button>
              </Link>
            </div>
          </section>
        </div>
      </SectionWrapper>
    </div>
  );
};

export { YourCompany };
