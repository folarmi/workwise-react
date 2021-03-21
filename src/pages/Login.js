import { Link } from "react-router-dom";
import { SectionWrapper } from "../layout/SectionWrapper";
import logo from "../assets/Group.png";
import { LogInIntro } from "../molecules";
import Navbar from "../templates/Navbar";
import Input from "../templates/Input";

const Login = () => {
  return (
    <div className="font-sans">
      <SectionWrapper>
        <div>
          <Navbar image={logo} />
        </div>

        <div className="lg:flex">
          <section className="mt-12 lg:ml-16">
            <LogInIntro
              text="Enter your workwise company url and your company email to gain access."
              title="Welcome Back!"
              className="lg:max-w-xs lg:mr-56 placeholder-bodyGrey font-sans"
            />
          </section>

          <section className="slim-border rounded-md mt-12 p-12">
            <section className="flex items-center">
              <Input
                label="Your company url"
                placeholder="mentworkspace"
                type="text"
              />
              <p className="text-base font-semibold text-ash ml-2">
                .workwise.com
              </p>
            </section>

            <div className="mt-4">
              <Input
                label="Your company email"
                placeholder="osa@mudia.ment"
                type="email"
                className="w-full"
              />
            </div>

            <Link to="/securecode">
              <button class="bg-primary text-white text-sm mt-8 w-full font-bold py-4 px-8 rounded-md text-center">
                Get Secure Verification Code
              </button>
            </Link>
          </section>
        </div>
      </SectionWrapper>
      <link
        href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css"
        rel="stylesheet"
      />
    </div>
  );
};

export { Login };
