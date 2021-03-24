import ipad from "../assets/ipad.png";
import tablet from "../assets/tablet.png";
import macOne from "../assets/macOne.png";
import macTwo from "../assets/macTwo.png";
import macThree from "../assets/macThree.png";
import android from "../assets/android.png";
import windfall from "../assets/windfall.png";
import printer from "../assets/printer.png";
import { HeaderTwo } from "../atoms";
import { Footer } from "../organisms";
import { HardwareImage } from "../molecules";
import NavbarThree from "../templates/NavbarThree";

const Hardware = () => {
  return (
    <div>
      <NavbarThree
        text="Everything you need to get started with Workwise."
        buttonText="Try for free"
        path="/tryforfree"
      />
      <section className="m-auto w-8/12 mt-40">
        <section>
          <img src={macThree} alt="macThree" />
        </section>
        <section className="grid grid-cols-12">
          <div className="col-start-2 col-end-5">
            <img src={macOne} alt="macOne" className="" />
          </div>
          <img src={macTwo} alt="macTwo" className="col-start-8 col-end-12" />
          <img src={android} alt="android" />
        </section>

        <div className="lg:flex lg:ml-16 lg:mt-20 lg:mb-24">
          <section className="mt-12">
            <HardwareImage image={ipad} title="Ipad" className="mb-12" />
            <HardwareImage image={windfall} title="Windfall Stand" />
          </section>

          <section className="mt-12">
            <HardwareImage
              image={tablet}
              title="Android Tablet"
              className="mb-12"
            />
            <HardwareImage
              image={printer}
              title="Brother QL-820NWB Badge Printer"
            />
          </section>
        </div>

        <section className="mt-8 bg-gray border border-primary rounded-lg p-2 text-center">
          <HeaderTwo
            text="Increase employee engagement through the roof!"
            className="lg:max-w-3xl lg:ml-40 lg:text-5xl"
          />
          <button class="bg-primary text-white font-bold text-xs py-2 px-4 mb-8 rounded mt-8">
            Find out how
          </button>
        </section>
      </section>
      <Footer />
    </div>
  );
};

export { Hardware };
