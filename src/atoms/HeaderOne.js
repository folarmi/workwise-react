const HeaderOne = ({ text, className }) => {
  return (
    <div className={`text-primary font-extrabold text-4xl ${className}`}>
      <p>{text}</p>
    </div>
  );
};

export { HeaderOne };
