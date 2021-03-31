import iPhone from "../assets/iPhone.png";
import { SectionWrapper } from "../layout/SectionWrapper";
import { Aside } from "../molecules";
import Reason from "./Reason";

const SectionOne = () => {
  return (
    <div>
      <section className="bg-gray ">
        <SectionWrapper>
          <section className="lg:flex">
            <img
              src={iPhone}
              alt="iphone"
              className="object-cover lg:w-8/12 lg:z-10 lg:-mt-12"
            />
            <div className="lg:mt-20">
              <Aside
                title={
                  <p>
                    Run your workplace <br /> with Workwise
                  </p>
                }
                text="The Workwise platform integrates with your workplace giving you and everyone in your organization a simple and seamless way to operate the workplace and its resources, and it
helps improve company wide communication so that you can keep everyone informed and focused on what's important—your tasks/goals."
                className="lg:max-w-sm"
              />
            </div>
          </section>
        </SectionWrapper>

        <Reason />
      </section>
    </div>
  );
};

export { SectionOne };
