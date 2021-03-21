import { Aside } from "../molecules";
import founder from "../assets/founder.png";
import coo from "../assets/coo.png";
// import founderTwo from "../assets/founderTwo.png";
import cto from "../assets/cto.png";
import { Link } from "react-router-dom";

const SectionThree = () => {
  return (
    <div className="bg-gray pt-12 pb-8 lg:mt-12 lg:flex lg:flex-row-reverse lg:justify-between">
      <div className="lg:mr-36 lg:mt-12">
        <Aside
          title="Meet Our Team"
          text="We’re a team of innovators with deep expertise in Human Resource, Product Design, Business Process and Tech, backed by some of the finest talents in the country."
          className="lg:mt-16 lg:max-w-md"
        />
        <Link to="/aboutus">
          <button class="bg-primary text-white text-sm font-bold py-4 px-8 rounded-md my-8 text-center">
            Learn More
          </button>
        </Link>
      </div>

      {/* <section className="lg:flex"> */}
      {/* <div class="flex flex-wrap justify-center">
        <div class="w-6/12 sm:w-4/12 px-4 ">
          <img
            src={founderTwo}
            alt="..."
            className="shadow rounded-full max-w-full h-auto align-middle w-8/12 border border-primary"
          />
        </div>
      </div> */}

      {/* <div>
          <p>Niyi Adisa</p>
          <p>coo</p>
        </div> */}
      {/* </section> */}

      <section className="mt-8 lg:mt-4 lg:ml-64 mb-16">
        <img src={founder} alt="founder" className="w-1/2 object-cover" />
        <img src={cto} alt="cto" className="w-1/2 object-cover mt-8 ml-20" />
        <img src={coo} alt="coo" className="w-1/2 object-cover mt-12" />
      </section>
    </div>
  );
};

export { SectionThree };
