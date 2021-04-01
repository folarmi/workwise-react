import postcard from "../assets/postCard.svg";
import postcardTwo from "../assets/postCardTwo.svg";
import postcardThree from "../assets/postCardThree.svg";
import { HeaderOne, SmallText } from "../atoms";
import Navbar from "../templates/Navbar";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div>
      <Navbar />
      <div className="grid grid-cols-12 mt-20">
        <section className="col-start-2 col-end-8">
          <HeaderOne
            text={
              <p>
                Building a <br /> better workplace for everyone
              </p>
            }
            className="mb-4 lg:text-6xl"
          />

          <SmallText
            text="We empower productivity and the overall well-being of employees, while fostering an inclusive workplace community."
            className="my-4 pt-4 lg:max-w-sm"
          />
          <Link to="/tryforfree">
            <button class="bg-primary focus:outline-none text-white nav-links font-verybold font-medium py-4 px-8 rounded-md">
              Try for free
            </button>
          </Link>
          {/* <button class="bg-primary outline-none mt-4 text-white text-xs font-bold py-4 px-10 rounded-md">
            Try for free
          </button> */}
        </section>
        <section className="mt-12 hidden md:block col-start-8 col-end-12 lg:-ml-16 mb-4">
          <img src={postcardThree} alt="postcard" className="w-full" />
          <img
            src={postcardTwo}
            alt="postcard"
            className="ml-20 -mt-8 lg:w-full"
          />
          <img src={postcard} alt="postcard" className="-mt-8 ml-4 lg:w-full" />
        </section>
      </div>
    </div>
  );
};

export { Hero };
