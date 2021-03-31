import { SectionWrapper } from "../layout/SectionWrapper";
import Navbar from "../templates/Navbar";
import googlePlay from "../assets/googlePlay.png";
import iosStore from "../assets/iosStore.png";
import visitor from "../assets/visitor.png";
import visitorOne from "../assets/visitorTwo.png";

const VisitorManagement = () => {
  return (
    <div>
      <SectionWrapper>
        <Navbar />
      </SectionWrapper>

      <div className="grid grid-cols-12 mt-12">
        <div className="col-start-2 col-end-7">
          <p className="uppercase text-primary text-xs font-bold mb-4">
            Visitor Management
          </p>
          <p className="text-primary font-bold leading-tight text-6xl">
            Improve how you welcome your guests.
          </p>
          <p className="text-sm text-lightBlack my-4">
            Welcome guests with an easy-to-use visitor management <br />
            solution that keeps your workplace safe and saves your <br />
            receptionist time and energy.
          </p>
          <div className="flex">
            <img src={googlePlay} alt="googlePlay" className="-ml-4" />
            <img src={iosStore} alt="iosStore" className="" />
          </div>
        </div>

        <div className="col-start-7 col-end-13">
          <img src={visitor} alt="visitor" />
          <img src={visitorOne} alt="visitorOne" />
        </div>
      </div>
    </div>
  );
};

export { VisitorManagement };
