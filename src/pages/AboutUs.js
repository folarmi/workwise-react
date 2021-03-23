import { Footer } from "../organisms";
import NavbarTwo from "../templates/NavbarTwo";
import ctoTwo from "../assets/ctoTwo.png";
import founderTwo from "../assets/founderTwo.png";
import { AboutAside } from "../molecules";
import { SmallText } from "../atoms";
import BlogIntro from "../templates/BlogIntro";

const AboutUs = () => {
  return (
    <section>
      <NavbarTwo text=" About Us" />
      <section className="m-auto w-8/12 mt-40">
        <p className="text-primary text-2xl font-normal leading-relaxed mb-8">
          The Workwise brand was designed and developed in 2019. The vision of
          our Company through the Workwise brand is to make every employee in
          the workplace productive and efficient.
        </p>
        <p className="text-sm leading-relaxed text-black my-4">
          The Workwise platform integrates with your workplace giving you and
          everyone in your organization a simple and seamless way to operate the
          workplace and its resources, and it helps improve company wide
          communication so that you can keep everyone informed and focused on
          what's important—your tasks/goals.
        </p>
        <p className="text-sm leading-relaxed text-black my-4">
          We build smart tools to create a workplace experience that powers
          productivity, enables efficiency and is enjoyable for every employee.
          Our mission is to increase workplace productivity by freeing up
          valuable employee time, which is otherwise spent on routine workplace
          tasks.
        </p>
        <p className="text-sm leading-relaxed text-black my-4">
          Our products create a workplace experience that powers productivity,
          enables efficiency, and is enjoyable for every employee.
        </p>
      </section>

      <div className="bg-gray">
        <div className="m-auto w-10/12">
          <section className="mt-32">
            <div className="grid grid-cols-12 pt-24">
              <div className="col-start-2 col-end-7">
                <img
                  src={founderTwo}
                  alt="founderTwo"
                  className="w-full rounded-lg"
                />
              </div>
              <div className="col-start-8 col-end-13">
                <AboutAside
                  text="Founder/CEO"
                  title="Niyi Adisa,"
                  className="pt-12 lg:pt-0"
                />
                <SmallText
                  text="A trained business analyst with over 15 years’ experience in analysing, documenting and proposing solutions to large and complex business areas. He has been involved in numerous client projects in the healthcare, advertising, public service and financial sectors. He is adept in the process of gathering and documenting functional and user requirements."
                  className="py-4"
                />

                <SmallText
                  text="He was involved in the successful deployment of the JADE application and smart card project worth thousands of pounds across over 40
            sites for the Central and Northwest NHS Trust, United Kingdom."
                />
              </div>
            </div>
          </section>

          <section>
            <div className="grid grid-cols-12 pb-24 mt-16">
              <div className="col-start-2 col-end-7">
                <img
                  src={ctoTwo}
                  alt="ctoTwo"
                  className=" w-1/2 lg:w-full lg:mt-0"
                />
              </div>
              <div className="col-start-8 col-end-13">
                <AboutAside
                  text="Chief Technology Officer"
                  title="Ilyas Farawe,"
                  className="pt-12"
                />
                <SmallText
                  text="Ilyas is a BSc Computer Science graduate from Babcock University. He has experience in developing software products for private and government agencies. He was
                involved in developing a budget allocation tracker at NNPC, a self-assessment platform for Covid-19 used by Oyo State Ministry of Health, Vehicle Licensing Application and Plate
                number verification portal used in Oyo State. "
                  className="py-4"
                />
                <SmallText
                  text=" He was also involved in the development of a complaints management system for ICECONNECTER. He is a tech enthusiast and engineering
                lead at Techbarn."
                />
              </div>
            </div>
          </section>
        </div>
      </div>

      <div className="m-auto w-9/12">
        <BlogIntro />
      </div>
      <Footer />
    </section>
  );
};

export { AboutUs };
