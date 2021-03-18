import postcard from "../assets/postCard.png";
import postcardTwo from "../assets/postCardTwo.png";
import postcardThree from "../assets/postCardThree.png";
import logo from "../assets/Group.png";
import { HeaderOne, SmallText } from "../atoms";
import Navbar from "../templates/Navbar";

const Hero = () => {
  return (
    <div>
      <Navbar image={logo} />
      <div className="lg:flex pb-8 lg:pb-4">
        <section className="mt-16 lg:ml-28">
          <HeaderOne
            text="Building a better workplace for everyone."
            className="mb-4 lg:text-6xl lg:max-w-2xl"
          />

          <SmallText
            text="We empower productivity and the overall well-being of employees, while fostering an inclusive workplace community."
            className="my-4 pt-4 lg:max-w-sm"
          />

          <button class="bg-primary outline-none mt-4 text-white text-sm font-bold py-4 px-12 rounded-md">
            Try for free
          </button>
        </section>

        <section className="mt-12 hidden lg:block lg:mt-32 ml-8">
          <img
            src={postcardThree}
            alt="postcard"
            className="w-1/2 lg:w-10/12 object-cover"
          />
          <img
            src={postcardTwo}
            alt="postcard"
            className="w-1/2 ml-20 -mt-8 lg:w-10/12"
          />
          <img
            src={postcard}
            alt="postcard"
            className="w-1/2 -mt-8 ml-12 lg:w-10/12"
          />
        </section>
      </div>
    </div>
  );
};

export { Hero };
