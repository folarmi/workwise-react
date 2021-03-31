import postcard from "../assets/postCard.png";
import postcardTwo from "../assets/postCardTwo.png";
import postcardThree from "../assets/postCardThree.png";
import { HeaderOne, SmallText } from "../atoms";
import Navbar from "../templates/Navbar";

const Hero = () => {
  return (
    <div>
      <Navbar />
      <div className="grid grid-cols-12">
        <section className="col-start-2 col-end-8">
          <HeaderOne
            text={
              <p>
                Building a <br /> better workplace for everyone
              </p>
            }
            className="mb-4 lg:text-6xl test"
          />

          <SmallText
            text="We empower productivity and the overall well-being of employees, while fostering an inclusive workplace community."
            className="my-4 pt-4 lg:max-w-sm text-lightBlack"
          />

          <button class="bg-primary outline-none mt-4 text-white text-xs font-bold py-4 px-10 rounded-md">
            Try for free
          </button>
        </section>
        <section className="mt-12 hidden lg:block col-start-8 col-end-12 lg:-ml-4 mb-4">
          <img src={postcardThree} alt="postcard" className="w-1/2 lg:w-full" />
          <img
            src={postcardTwo}
            alt="postcard"
            className="w-1/2 ml-20 -mt-8 lg:w-full"
          />
          <img
            src={postcard}
            alt="postcard"
            className="w-1/2 -mt-8 ml-4 lg:w-full"
          />
        </section>
      </div>
    </div>
  );
};

export { Hero };
