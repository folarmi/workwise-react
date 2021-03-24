import { Aside } from "../molecules";
import blog from "../assets/blog.png";
import blogTwo from "../assets/blogTwo.png";
import { Link } from "react-router-dom";

const BlogIntro = () => {
  return (
    <section className="mt-8 lg:flex lg:justify-between">
      <div>
        <Aside title="From Our Blog" className="lg:w-48" />
      </div>

      <section className="mb-12">
        <div className="relative">
          <div className="absolute top-4 left-4 p-4 ml-4 mt-4 bg-white rounded-md h-52 w-44">
            <p className="text-black font-extrabold mb-12">
              Workwise raises $100m Series A funding from Salesforce.
            </p>
            <Link
              to="/blogarticle"
              className="text-primary underline text-base font-semibold"
            >
              Read full article
            </Link>
          </div>
          <img
            src={blog}
            alt="blog"
            className="rounded-sm my-4 mb-12 lg:w-full"
          />
        </div>

        <div className="relative">
          <div className="absolute top-4 left-4 p-4 ml-4 mt-4 bg-white rounded-md h-52 w-44">
            <p className="text-black font-extrabold mb-12">
              Hermann Powe joins Workwise as new Head of Design
            </p>
            <Link
              to="/blog"
              className="text-primary underline text-base font-semibold"
            >
              Read full article
            </Link>
          </div>
          <img src={blogTwo} alt="blogTwo" className="rounded-sm lg:w-full" />
        </div>
      </section>
    </section>
  );
};

export default BlogIntro;
