import { SectionWrapper } from "../layout/SectionWrapper";
import { Footer } from "../organisms";
import NavbarTwo from "../templates/NavbarTwo";
import ctoTwo from "../assets/ctoTwo.png";
import founderTwo from "../assets/founderTwo.png";
import { Aside } from "../molecules";
import { SmallText } from "../atoms";

const AboutUs = () => {
  return (
    <section>
      <NavbarTwo text=" About Us" />
      <SectionWrapper>
        <p className="text-primary text-base mb-4">
          The Workwise brand was designed and developed in 2019. The vision of
          our Company through the Workwise brand is to make every employee in
          the workplace productive and efficient.
        </p>
        <p className="text-sm text-black my-4">
          The Workwise platform integrates with your workplace giving you and
          everyone in your organization a simple and seamless way to operate the
          workplace and its resources, and it helps improve company wide
          communication so that you can keep everyone informed and focused on
          what's important—your tasks/goals.
        </p>
        <p className="text-sm text-black my-4">
          We build smart tools to create a workplace experience that powers
          productivity, enables efficiency and is enjoyable for every employee.
          Our mission is to increase workplace productivity by freeing up
          valuable employee time, which is otherwise spent on routine workplace
          tasks.
        </p>
        <p className="text-sm text-black my-4">
          Our products create a workplace experience that powers productivity,
          enables efficiency, and is enjoyable for every employee.
        </p>

        <section className="mt-32">
          <div>
            <img src={founderTwo} alt="founderTwo" className="w-1/2" />
            <Aside text="Founder/CEO" title="Niyi Adisa" className="pt-12" />
            <SmallText
              text="A trained business analyst with over 15 years’ experience in analysing, documenting and proposing solutions to large and
complex business areas. He has been involved in numerous client projects in the healthcare, advertising, public service and financial sectors. He is adept in the process of gathering and documenting functional and user requirements."
              className="py-4"
            />

            <SmallText
              text="He was involved in the successful deployment of the JADE application and smart card project worth thousands of pounds across over 40
            sites for the Central and Northwest NHS Trust, United Kingdom."
            />
          </div>
        </section>

        <section>
          <div>
            <img src={ctoTwo} alt="ctoTwo" className="mt-8 w-1/2" />
            <Aside
              text="Chief Technology Officer"
              title="Ilyas Farawe"
              className="pt-12"
            />
            <SmallText
              text="A trained business analyst with over 15 years’ experience in analysing, documenting and proposing solutions to large and
complex business areas. He has been involved in numerous client projects in the healthcare, advertising, public service and financial sectors. He is adept in the process of gathering and documenting functional and user requirements."
              className="py-4"
            />

            <SmallText
              text="He was involved in the successful deployment of the JADE application and smart card project worth thousands of pounds across over 40
            sites for the Central and Northwest NHS Trust, United Kingdom."
            />
          </div>
        </section>
      </SectionWrapper>
      <Footer />
    </section>
  );
};

export { AboutUs };
