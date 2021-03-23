import { SectionWrapper } from "../layout/SectionWrapper";
import { SmallText } from "../atoms";

const Reason = () => {
  return (
    <div className="bg-white lg:-mt-16">
      <SectionWrapper>
        <div className="mt-8 lg:flex lg:-mt-28 lg:ml-16">
          <div className="slim-border rounded-r-none rounded-l-md mt-4 p-8 bg-white">
            <SmallText
              text="Enhance Employee Experience"
              className="font-verybold font-bold my-4
      "
            />
            <SmallText
              text="Empower your employee to be more productive with user-friendly technology they can access from anywhere."
              className="leading-relaxed mb-8 lg:max-w-md"
            />
          </div>
          <div className="slim-border lg:border-r-0 lg:border-l-0 mt-4 p-8 bg-white">
            <SmallText
              text="Improve Your Workplace"
              className="font-verybold font-bold my-4
      "
            />
            <SmallText
              text="Make smarter decisions about your workplace with real-time insights into how your employees interact with their environment."
              className="leading-relaxed mb-8 lg:max-w-md"
            />
          </div>

          <div className="slim-border rounded-l-none rounded-r-md mt-4 p-8 bg-white">
            <SmallText
              text="Enhance Workplace Security"
              className="font-verybold font-bold my-4
      "
            />
            <SmallText
              text="  The first step to protecting your team and property? Knowing who’s on
              site. And with Workwise, you’ll always know who’s arriving, where
              they’re going and why."
              className="leading-relaxed mb-8 lg:max-w-md"
            />
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
};

export default Reason;
