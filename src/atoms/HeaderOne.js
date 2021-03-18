const HeaderOne = ({ text, className }) => {
  return (
    <div className={`text-primary font-bold text-4xl ${className}`}>
      <p>{text}</p>
    </div>
  );
};

export { HeaderOne };
