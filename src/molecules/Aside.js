import { SmallText } from "../atoms";

const Aside = ({ title, text, className }) => {
  return (
    <div className={` ${className}`}>
      <hr className="bg-primary w-28 mb-4 h-0.5" />
      <p className="text-primary text-xl font-bold my-2 lg:my-8 ">{title}</p>
      <SmallText text={text} />
    </div>
  );
};

export { Aside };
