import organization from "../assets/organizations.png";
import { SectionWrapper } from "../layout/SectionWrapper";
import BlogIntro from "../templates/BlogIntro";

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

        <BlogIntro />
      </div>
    </SectionWrapper>
  );
};

export { SectionFour };
