const HeaderOne = ({ text, className }) => {
  return (
    <div className={`text-primary font-medium text-4xl ${className}`}>
      <p className="leading-none">{text}</p>
    </div>
  );
};

export { HeaderOne };
