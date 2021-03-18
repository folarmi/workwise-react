import { SectionWrapper } from "../layout/SectionWrapper";
import { Reasons } from "../molecules";

const Reason = () => {
  return (
    <div className="bg-white lg:-mt-16">
      <SectionWrapper>
        <div className="mt-12 lg:flex lg:-mt-28">
          <Reasons
            title="Enhance Employee Experience"
            text="Empower your employee to be more productive with user-friendly technology they can access from anywhere."
          />
          <Reasons
            title="Improve Your Workplace"
            text="
        Make smarter decisions about your workplace with real-time insights into how your employees interact with their environment."
          />
          <Reasons
            title="Enhance  Workplace Security"
            text="The first step to protecting your team and property? Knowing who’s on site. And with Workwise, you’ll always know who’s arriving, where they’re going and why."
          />
        </div>
      </SectionWrapper>
    </div>
  );
};

export default Reason;
