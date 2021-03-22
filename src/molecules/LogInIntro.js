import { SmallText } from "../atoms";

const LogInIntro = ({ text, title, className, bgColor }) => {
  return (
    <div className={`${className}`}>
      <div className="flex w-28">
        <hr className="bg-primary w-36 height" />
        <hr
          className="bg-ashTwo w-36  height"
          style={{ backgroundColor: bgColor }}
        />
      </div>
      <p className="text-primary text-2xl text-medium my-8">{title}</p>
      <SmallText text={text} className="mt-4" />
    </div>
  );
};

export { LogInIntro };
