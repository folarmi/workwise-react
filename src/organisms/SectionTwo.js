import { HeaderTwo } from "../atoms";
import dashboard from "../assets/dashboard.png";
import dashboard2 from "../assets/dashboard2.png";
import dashboardThree from "../assets/dashboardThree.png";
import { Aside } from "../molecules";
import { SectionWrapper } from "../layout/SectionWrapper";

const SectionTwo = () => {
  return (
    <SectionWrapper>
      <div className="mt-20">
        <HeaderTwo
          text="Secure tools to help you run the workplace."
          className="text-center lg:text-7xl lg:max-w-4xl lg:my-32 font-verybold font-bold lg:ml-44"
        />
      </div>

      <div className="lg:ml-28">
        <section className="mt-8">
          <div className="lg:flex justify-between">
            <Aside
              title="Easily manage your guests and visitors"
              text="Welcome your visitors and create a lasting impression with our secure visitor management feature. With a visitor management platform that supports your workplace security, you can easily identify unauthorized guests, know who is in the building in case of an emergency and much more."
              className="mb-12 lg:max-w-xs"
            />
            <div className="">
              <img src={dashboard} alt="dashboard" className="mb-8 lg:w-full" />
            </div>
          </div>
          <div className="lg:-mt-48">
            <button class="bg-primary text-white text-sm font-bold py-4 px-8 rounded-md">
              Sign up for free
            </button>
          </div>
        </section>

        {/* <div className="lg:flex justify-between">
          <section className="mt-8">
            <Aside
              title="Easily manage your guests and visitors"
              text="Welcome your visitors and create a lasting impression with our secure visitor management feature. With a visitor management platform that supports your workplace security, you can easily identify unauthorized guests, know who is in the building in case of an emergency and much more."
              className="mb-12 m-auto w-3/12 max-w-6xl"
            />
            <div className="lg:-mt-48">
              <button class="bg-primary text-white text-sm font-bold py-4 px-8 rounded-md">
                Sign up for free
              </button>
            </div>
          </section>
        </div> */}

        <section className="mt-64">
          <div className="lg:flex justify-between">
            <Aside
              title="Smarter room booking for everyone in your office"
              text="With the Workwise app, employees can easily find, and book meeting rooms based on amenities, locations and more."
              className="mb-12 lg:max-w-xs"
            />
            <div className="">
              <img
                src={dashboard2}
                alt="dashboard"
                className="mb-8 lg:w-full"
              />
            </div>
          </div>
          <div className="lg:-mt-72">
            <button class="bg-primary text-white text-sm font-bold py-4 px-8 rounded-md">
              Sign up for free
            </button>
          </div>
        </section>

        <section className="lg:mt-80">
          <div className="lg:flex justify-between">
            <Aside
              title="Effectively manage your company mails and package deliveries"
              text="When items are delivered to your office, with the app, your receptionist area can notify the recipient to let them know that their package has arrived."
              className="mb-12 lg:max-w-xs"
            />
            <div className="">
              <img src={dashboardThree} alt="dashboard" className="mb-8" />
            </div>
          </div>
          <div className="lg:-mt-64">
            <button class="bg-primary text-white text-sm font-bold py-4 px-8 rounded-md">
              Sign up for free
            </button>
          </div>
        </section>

        <section className="mt-8 bg-gray border border-primary rounded-lg p-4 lg:mb-32 text-center lg:mt-72 lg:-ml-24">
          <HeaderTwo
            text="Increase employee engagement through the roof!"
            className=" lg:mt-12 lg:text-6xl font-verybold font-extrabold"
          />
          <button class="bg-primary text-white text-sm font-bold py-4 px-8 rounded-md my-8 text-center">
            Find out how
          </button>
        </section>
      </div>
    </SectionWrapper>
  );
};

export { SectionTwo };
