import organization from "../assets/organizations.png";
import { Aside } from "../molecules";
import blog from "../assets/blog.png";
import blogTwo from "../assets/blogTwo.png";
import { SectionWrapper } from "../layout/SectionWrapper";

const SectionFour = () => {
  return (
    <SectionWrapper>
      <div className="mt-16 lg:ml-28">
        <div>
          <img
            src={organization}
            alt="organization"
            className="object-cover lg:my-36"
          />
        </div>
        <section className="mt-8 lg:flex lg:justify-between">
          <div>
            <Aside title="From Our Blog" className="lg:w-48" />
          </div>
          <div>
            <img
              src={blog}
              alt="blog"
              className="rounded-sm my-4 mb-12 lg:w-full"
            />
            <img src={blogTwo} alt="blogTwo" className="rounded-sm lg:w-full" />
          </div>
        </section>
      </div>
    </SectionWrapper>
  );
};

export { SectionFour };
