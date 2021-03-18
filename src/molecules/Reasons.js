import { SmallText } from "../atoms";

const Reasons = ({ title, text }) => {
  return (
    <div className="border border-primary mt-4 p-12 bg-white rounded-sm">
      <SmallText
        text={title}
        className="font-semibold my-4
      "
      />
      <SmallText text={text} className="leading-relaxed mb-8" />
    </div>
  );
};

export { Reasons };
